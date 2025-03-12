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

    
    
    
    
    
    
    
    
    
    
    