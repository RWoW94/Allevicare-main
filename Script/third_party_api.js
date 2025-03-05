/* document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed. Calling getLocation...");
    getLocation();
});

function getLocation() {
    if ("geolocation" in navigator) {
        console.log("Geolocation is available. Requesting position...");
        navigator.geolocation.getCurrentPosition(success, error, { 
            enableHighAccuracy: true, 
            timeout: 10000, 
            maximumAge: 0 
        });
    } else {
        console.warn("Geolocation stöds inte i denna webbläsare.");
        document.getElementById("weather").innerHTML = "Platsdelning stöds ej.";
    }
}

function error(err) {
    let errorMessage = "";

    switch (err.code) {
        case err.PERMISSION_DENIED:
            errorMessage = "Platsåtkomst nekad. Tillåt platsdelning i webbläsarens inställningar.";
            break;
        case err.POSITION_UNAVAILABLE:
            errorMessage = "Platsdata är inte tillgänglig just nu.";
            break;
        case err.TIMEOUT:
            errorMessage = "Tidsgränsen för att hämta platsdata gick ut.";
            break;
        case err.UNKNOWN_ERROR:
        default:
            errorMessage = "Ett okänt fel inträffade vid hämtning av plats.";
            break;
    }

    console.error(`Geolocation error (${err.code}): ${errorMessage}`);
    document.getElementById("weather").innerHTML = errorMessage;
}

function success(position) {
    console.log("Position successfully retrieved:", position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log(`Din position: Lat=${lat}, Lon=${lon}`); // Debug

    // Om koordinaterna verkar orimliga, stoppa och visa felmeddelande
    if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
        console.error("Felaktiga koordinater:", lat, lon);
        document.getElementById("weather").innerHTML = "Fel vid hämtning av plats.";
        return;
    }

    // Skicka koordinaterna till API-anropet
    fetchWeather(lat, lon);
}

async function fetchWeather(lat, lon) {
    const smhiUrl = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`;
    
    console.log(`Fetching weather for: Lat=${lat}, Lon=${lon}`);
    console.log("Fetching URL:", smhiUrl);

    try {
        const response = await fetch(smhiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById("weather").innerHTML = "Error fetching weather data.";
        console.error("Weather API Error:", error.message);
    }
}

function displayWeather(data) {
    if (!data.timeSeries || data.timeSeries.length === 0) {
        document.getElementById("weather").innerHTML = "No weather data available.";
        return;
    }

    const temp = data.timeSeries[0].parameters.find(p => p.name === "t").values[0];

    document.getElementById("weather").innerHTML = `
        <h3>Dagens väder:</h3>
        <p>Temperature: ${temp}°C</p>
    `;
} */



    function getUserLocation() {
    if (!("geolocation" in navigator)) {
        document.getElementById("weather-info").innerText = "Din webbläsare stöder inte geolokalisering.";
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            let latitude = position.coords.latitude.toFixed(4);
            let longitude = position.coords.longitude.toFixed(4);
            console.log(`Lat: ${latitude}, Lon: ${longitude}`);

            getWeatherFromSMHI(latitude, longitude);
        },
        (error) => {
            console.error("Fel vid hämtning av plats:", error.message);
            document.getElementById("weather-info").innerText = "Kunde inte hämta plats: " + error.message;
        },
        {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0,
        }
    );
}

function getWeatherFromSMHI(lat, lon) {
    let smhiUrl = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`;

    console.log("Hämtar väderdata från:", smhiUrl);

    fetch(smhiUrl, { mode: 'cors', cache: 'no-store' })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP-fel! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("SMHI API Response Data:", data);

            if (!data || !data.timeSeries || data.timeSeries.length === 0) {
                throw new Error("Ingen väderdata hittades för denna plats.");
            }

            let forecast = data.timeSeries[0]; // Hämtar första prognosen (aktuell tid)

            // Hämta temperatur, nederbördssort och molnighet
            let temperature = getParameterValue(forecast, "t"); // Temperatur (°C)
            let precipitationTypeCode = getParameterValue(forecast, "pcat"); // Nederbördssort (kod)
            let precipitationType = mapPrecipitationType(precipitationTypeCode); // Konvertera kod till text
            let cloudinessCode = getParameterValue(forecast, "tcc_mean"); // Molnighet (0-8)
            let cloudinessDescription = mapCloudiness(cloudinessCode); // Konvertera molnighet till beskrivning

            // Uppdatera HTML-innehållet med Bootstrap-ikoner
            document.getElementById("weather-info").innerHTML = `
                <p><i class="bi bi-thermometer-half"></i> Temperatur: <strong>${temperature}°C</strong> 
                <br> <i class="bi ${getPrecipitationIcon(precipitationTypeCode)}"> </i> Nederbörd: <strong>${precipitationType}</strong> 
                <br> <i class="bi ${getCloudinessIcon(cloudinessCode)}"></i> Molnighet: <strong>${cloudinessDescription}</strong></p>
            `;
        })
        .catch(error => {
            console.error("Fel vid hämtning av väderdata:", error);
            document.getElementById("weather-info").innerText = "Kunde inte hämta väderinformation: " + error.message;
        });
}

// Hjälpfunktion för att hitta rätt parameter i SMHI:s data
function getParameterValue(forecast, parameterName) {
    let parameter = forecast.parameters.find(p => p.name === parameterName);
    return parameter ? parameter.values[0] : "N/A";
}

// Hjälpfunktion för att konvertera nederbördssort-kod till beskrivning
function mapPrecipitationType(code) {
    const types = {
        0: "Ingen nederbörd",
        1: "Snö",
        2: "Snöblandat regn",
        3: "Regn",
        4: "Duggregn",
        5: "Underkylt regn",
        6: "Underkylt duggregn"
    };
    return types[code] || "Okänd nederbörd";
}

// Hjälpfunktion för att konvertera molnighet (0-8) till beskrivning
function mapCloudiness(value) {
    if (value == 0) return "Klar himmel";
    if (value >= 1 && value <= 2) return "Lätt molnighet";
    if (value >= 3 && value <= 5) return "Halvklart";
    if (value >= 6 && value <= 7) return "Mulet";
    if (value == 8) return "Helt mulet";
    return "Okänd molnighet";
}

// Hjälpfunktion för att välja Bootstrap-ikon för nederbörd
function getPrecipitationIcon(code) {
    const icons = {
        0: "bi-brightness-high",  // Ingen nederbörd (solig)
        1: "bi-snow",             // Snö
        2: "bi-cloud-snow",       // Snöblandat regn
        3: "bi-cloud-rain-heavy", // Regn
        4: "bi-cloud-drizzle",    // Duggregn
        5: "bi-cloud-rain",       // Underkylt regn
        6: "bi-cloud-drizzle"     // Underkylt duggregn
    };
    return icons[code] || "bi-question-circle"; // Standardikon vid okänd nederbörd
}

// Hjälpfunktion för att välja Bootstrap-ikon för molnighet
function getCloudinessIcon(value) {
    if (value == 0) return "bi-brightness-high";   // Klar himmel
    if (value >= 1 && value <= 2) return "bi-cloud-sun";  // Lätt molnighet
    if (value >= 3 && value <= 5) return "bi-cloud";      // Halvklart
    if (value >= 6 && value <= 7) return "bi-cloudy";     // Mulet
    if (value == 8) return "bi-cloud-fill";              // Helt mulet
    return "bi-question-circle"; // Okänd ikon
}

// Kör funktionen när sidan laddas
getUserLocation();

    
    
    
    
    
    
    
    
    
    
    