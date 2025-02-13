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

 /*------------------------------------------------------------------------------ */

   // Function for Size
function saveSize() {
  const selectedSize = document.getElementById("Size").value;
  localStorage.setItem("selectedSize", selectedSize);  // Save in localStorage
  
  console.log("Settings saved! Size selected:", selectedSize); 

  applySize(selectedSize);  
}

// Funktion to get wanted size
// Funktion för att justera textstorlek och bredd
function applySize(Size) {
  const root = document.documentElement;

  // Storlekstabell för både font-size och layout-bredd
  const themeSize = {
      "sizeBig": { fontSize: 1.1, viewWidth: "85vw" },  
      "sizeMedium": { fontSize: 0.9, viewWidth: "82vw" }, 
      "sizeSmall": { fontSize: 0.6, viewWidth: "80vw" }, 
  };

  if (themeSize[Size] !== undefined) {
      root.style.setProperty("--font_size", themeSize[Size].fontSize + "rem");
      root.style.setProperty("--view_width", themeSize[Size].viewWidth) + "vw";
  } else {
      console.error("Error: Unknown size!", Size);
  }
}

