// Description: This script fetches weather data from the SMHI API and displays it on the website.
// Purpose: Fetch weather data from the SMHI API and display it on the website.
function getUserLocation() {
if (!("geolocation" in navigator)) {
    document.getElementById("weather-info").innerText = "Din webbläsare stöder inte geolokalisering.";
    return;
}
// Get user's current location
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

// Get weather data from SMHI API
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

            let forecast = data.timeSeries[0]; 

           /// Get weather parameters
            let temperature = getParameterValue(forecast, "t"); 
            let precipitationTypeCode = getParameterValue(forecast, "pcat"); 
            let precipitationType = mapPrecipitationType(precipitationTypeCode); 
            let cloudinessCode = getParameterValue(forecast, "tcc_mean"); 
            let cloudinessDescription = mapCloudiness(cloudinessCode); 

           
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

// Get parameter value from forecast data
function getParameterValue(forecast, parameterName) {
    let parameter = forecast.parameters.find(p => p.name === parameterName);
    return parameter ? parameter.values[0] : "N/A";
}

// Map precipitation type code to description
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

// Map cloudiness code to description
function mapCloudiness(value) {
    if (value == 0) return "Klar himmel";
    if (value >= 1 && value <= 2) return "Lätt molnighet";
    if (value >= 3 && value <= 5) return "Halvklart";
    if (value >= 6 && value <= 7) return "Mulet";
    if (value == 8) return "Helt mulet";
    return "Okänd molnighet";
}

// Get precipitation icon based on type code
function getPrecipitationIcon(code) {
    const icons = {
        0: "bi-brightness-high",  
        1: "bi-snow",             
        2: "bi-cloud-snow",       
        3: "bi-cloud-rain-heavy", 
        4: "bi-cloud-drizzle",    
        5: "bi-cloud-rain",       
        6: "bi-cloud-drizzle"     
    };
    return icons[code] || "bi-question-circle"; 
}

// Get cloudiness icon based on value
function getCloudinessIcon(value) {
    if (value == 0) return "bi-brightness-high";   
    if (value >= 1 && value <= 2) return "bi-cloud-sun";  
    if (value >= 3 && value <= 5) return "bi-cloud";      
    if (value >= 6 && value <= 7) return "bi-cloudy";     
    if (value == 8) return "bi-cloud-fill";              
    return "bi-question-circle"; 
}


getUserLocation();

    
    
    
    
    
    
    
    
    
    
    