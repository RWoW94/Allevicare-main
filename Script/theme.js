// Function for Color
function saveColor() {
    const selectedTheme = document.getElementById("theme").value;
    localStorage.setItem("selectedTheme", selectedTheme);  // Save in localStorage
    
    console.log("Settings saved! Color selected:", selectedTheme); // message in console
  
    // Update theme when pressed save button
    applyColor(selectedTheme);  // Call applyTheme to update theme
  }
  
  // function to get the wanted color
  function applyColor(theme) {
    const root = document.documentElement;
    const themeColors = {
      "blue": "175",  
      "red": "6",     
      "green": "145",   
      "yellow": "45",   
      "purple": "270", 
      "orange": "30" 
    };
  
    if (themeColors[theme]) {
      root.style.setProperty("--color", themeColors[theme]);
    } else {
      console.error("Error: Unknown color!", theme); // error message in console 
    }
  }

  /*------------------------------------------------------------------------------ */

  // Function for Contrast
function saveContrast() {
  const selectedContrast = document.getElementById("Contrast").value;
  localStorage.setItem("selectedContrast", selectedContrast);  // Save in localStorage
  
  console.log("Settings saved! Contrast selected:", selectedContrast); 

  applyContrast(selectedContrast);  // Uppdatera temat direkt
}

// Funktion to get wanted contrast
function applyContrast(Contrast) {
  const root = document.documentElement;
  const themeContrast = {
      "high": 0.75,  
      "medium": 0.85, 
      "low": 1, 
  };

  if (themeContrast[Contrast] !== undefined) {
      root.style.setProperty("--lum", themeContrast[Contrast]);
  } else {
      console.error("Error: Unknown contrast!", Contrast); // error message in console 
  }
}


