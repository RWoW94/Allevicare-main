// Function for theme
function saveSettings() {
    const selectedTheme = document.getElementById("theme").value;
    localStorage.setItem("selectedTheme", selectedTheme);  // Save in localStorage
    
    console.log("Settings saved! Theme selected:", selectedTheme); // message in console
  
    // Update theme when pressed save button
    applyTheme(selectedTheme);  // Call applyTheme to update theme
  }
  
  // function to get the wanted color
  function applyTheme(theme) {
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
      console.error("Error: Unknown theme!", theme); // error message in console 
    }
  }