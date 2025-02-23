// Function for Color
function saveColor() {
    const selectedTheme = document.getElementById("theme").value;
    localStorage.setItem("selectedTheme", selectedTheme);  // Save in localStorage
    
    console.log("Settings saved! mode selected:", selectedTheme); // message in console
  
    // Update theme when pressed save button
    applyColor(selectedTheme);  // Call applyTheme to update theme
  }
  
  // function to get the wanted color
  function applyColor(theme) {
    const root = document.documentElement;
    const themeColors = {
      "light": 1,  
      "dark": 1.6
    };
  
    if (themeColors[theme]) {
      root.style.setProperty("--lum", themeColors[theme]);
    } else {
      console.error("Error: Unknown mode!", theme); // error message in console 
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
function applySize(Size) {
  const root = document.documentElement;

  // Uses the variable font_size, if error the font size will be 0.7
  // const defaultFontSize = parseFloat(getComputedStyle(root).getPropertyValue('--font_size')) || 0.7;

  const defaultFontSize = 0.6;

   // Sizes
   const sizeMultipliers = {
    "sizeBig": 1.45,   
    "sizeMedium": 1.35, 
    "sizeSmall": 1 
  };

   if (sizeMultipliers[Size] !== undefined) {
    let newFontSize = defaultFontSize * sizeMultipliers[Size];

    root.style.setProperty("--font_size", newFontSize + "rem");
} else {
    console.error("Error: Unknown size!", Size);
}
}

