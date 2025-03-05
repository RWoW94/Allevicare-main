
  


  /*---------------------------------Contrast--------------------------------------------- */

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

 /*----------------------------------Font size-------------------------------------------- */

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

  const defaultFontSize = parseFloat(getComputedStyle(root).getPropertyValue('--font_size'));

   // Sizes
   const sizeMultipliers = {
    "sizeBig": 1.1,   
    "sizeMedium": 1.05, 
    "sizeSmall": 1 
  };

   if (sizeMultipliers[Size] !== undefined) {
    let newFontSize = defaultFontSize * sizeMultipliers[Size];

    root.style.setProperty("--font_size", newFontSize + "rem");
} else {
    console.error("Error: Unknown size!", Size);
}
}

 /*------------------------------------Username And password------------------------------------------ */

//Function for changing username and password
function saveUsername() {
  const newUsername = document.getElementById("username").value.trim();
  const currentUsername = window.location.pathname.split('/').pop();

  if (!newUsername) {
    return;
  }

  console.log("Extracted current username:", currentUsername);

  fetch(`/users/${currentUsername}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username: newUsername })
  })
  .then(response => response.json())
  .then(data => {
    if (data.message) {
      console.error("Error:", data.message);
    } else {
      console.log("Username updated successfully:", data);
      window.location.pathname = window.location.pathname.replace(currentUsername, newUsername);
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

function savePassword() {
  const newPassword = document.getElementById("password").value.trim();
  const currentUsername = window.location.pathname.split('/').pop();

  if (!newPassword) {
    return;
  }

  console.log("Extracted current username:", currentUsername);

  fetch(`/users/${currentUsername}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ password: newPassword })
  })
  .then(response => response.json())
  .then(data => {
    if (data.message) {
      console.error("Error:", data.message);
    } else {
      console.log("Password updated successfully:", data);
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

/*------------------------------------Darkmode Function------------------------------------------ */
// Function to save and apply selected theme
function saveColor() {
  const selectedTheme = document.getElementById("theme").value;
  localStorage.setItem("selectedTheme", selectedTheme);  // Save in localStorage

  console.log("Settings saved! Them selected:", selectedTheme); // message in console
  applyColor(selectedTheme);  // Apply the selected theme
}

// Function to apply the chosen color theme
function applyColor(theme) {
  const root = document.documentElement;
  const themeColors = { "light": 1, "dark": 1.6 };

  if (theme === "auto") {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    root.style.setProperty("--lum", mediaQuery.matches ? themeColors["dark"] : themeColors["light"]);
  } else if (themeColors[theme]) {
    root.style.setProperty("--lum", themeColors[theme]);
  } else {
    console.error("Error: Unknown mode!", theme); // Error message in console 
  }
}

// Dark mode-funktionalitet
function saveSettings() {
  const selectedTheme = document.getElementById("theme").value;
  localStorage.setItem("theme", selectedTheme);

  if (selectedTheme === "dark") {
      document.body.classList.add("dark-mode");
  } else if (selectedTheme === "light") {
      document.body.classList.remove("dark-mode");
  } else if (selectedTheme === "auto") {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (mediaQuery.matches) {
          document.body.classList.add("dark-mode");
      } else {
          document.body.classList.remove("dark-mode");
      }
  }
} 




