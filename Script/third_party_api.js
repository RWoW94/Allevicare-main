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
                let message = "";
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        message = "Användaren nekade platsåtkomst. Kontrollera webbläsarens inställningar.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        message = "Platsinformation är inte tillgänglig. Testa att stänga av VPN eller använda Wi-Fi.";
                        break;
                    case error.TIMEOUT:
                        message = "Tidsgräns för platsbegäran överskriden. Testa att ladda om sidan.";
                        break;
                    default:
                        message = "Ett okänt fel uppstod.";
                        break;
                }
                document.getElementById("weather-info").innerText = message;
            },
            {
                enableHighAccuracy: true, 
                timeout: 15000, // Increased timeout for slow responses
                maximumAge: 0, 
            }
        );
    }
    
    function getWeatherFromSMHI(lat, lon) {
        let smhiUrl = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`;
    
        console.log("Hämtar väderdata från:", smhiUrl);
    
        fetch(smhiUrl, { mode: 'cors', cache: 'no-store' }) // Fixes CORS & stale cache issues
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
    
                let forecast = data.timeSeries[0]; 
                let temperatureData = forecast.parameters.find(p => p.name === "t");
    
                if (!temperatureData) {
                    throw new Error("Kunde inte hitta temperaturdata.");
                }
    
                let temperature = temperatureData.values[0]; 
                document.getElementById("weather-info").innerText = `Aktuell temperatur: ${temperature}°C`;
            })
            .catch(error => {
                console.error("Fel vid hämtning av väderdata:", error);
                document.getElementById("weather-info").innerText = "Kunde inte hämta väderinformation: " + error.message;
            });
    }
    
    // Kör funktionen när sidan laddas
    getUserLocation();
    
    
    
    
    
    
    