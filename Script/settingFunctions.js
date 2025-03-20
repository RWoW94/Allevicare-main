  /*---------------------------------Contrast--------------------------------------------- */

// Save the selected contrast in localStorage  
function saveContrast() {
  const selectedContrast = document.getElementById("Contrast").value;
  localStorage.setItem("selectedContrast", selectedContrast);  // Save in localStorage
  
  console.log("Settings saved! Contrast selected:", selectedContrast); 

  applyContrast(selectedContrast);  // Uppdatera temat direkt
}

// Apply the selected contrast
function applyContrast(Contrast) {
  const root = document.documentElement;

  // Define the contrast values
  const themeContrast = {
      "high": 0.75,  
      "medium": 0.95, 
      "low": 1, 
  };

  if (themeContrast[Contrast] !== undefined) {
      root.style.setProperty("--lum", themeContrast[Contrast]);
  } else {
      console.error("Error: Unknown contrast!", Contrast); 
  }
}

 /*----------------------------------Font size-------------------------------------------- */

// Save the selected size in localStorage
function saveSize() {
  const selectedSize = document.getElementById("Size").value;
  localStorage.setItem("selectedSize", selectedSize);    
  console.log("Settings saved! Size selected:", selectedSize); 
  applySize(selectedSize);  
}

// Apply the selected size
function applySize(Size) {
  const root = document.documentElement;
   
  // Define the size multipliers
   const sizeMultipliers = {
    "sizeBig": 1.25,   
    "sizeMedium": 1.15, 
    "sizeSmall": 1 
  };

   if (sizeMultipliers[Size] !== undefined) {
    root.style.setProperty("--font_multiplier", sizeMultipliers[Size]);
} else {
    console.error("Error: Unknown size!", Size);
}
}

 /*------------------------------------Username And password------------------------------------------ */

// Save the username in the database
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

// Save the password in the database
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

/*------------------------------------Darkmode Functions------------------------------------------ */

// Save the selected theme in localStorage
function saveColor() {
  const selectedTheme = document.getElementById("theme").value;
  localStorage.setItem("selectedTheme", selectedTheme);  

  console.log("Settings saved! Them selected:", selectedTheme); 
  applyColor(selectedTheme);  
}

// Apply the selected theme
 function applyColor(theme) {
  const root = document.documentElement;
  const themeColors = { "light": 1, "dark": 1.6 };

  // Apply the selected theme
  if (theme === "auto") {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    root.style.setProperty("--lum", mediaQuery.matches ? themeColors["dark"] : themeColors["light"]);
  } else if (themeColors[theme]) {
    root.style.setProperty("--lum", themeColors[theme]);
  } else {
    console.error("Error: Unknown mode!", theme); 
  }
} 

// Save the selected theme in localStorage
function saveSettings() {
  const selectedTheme = document.getElementById("theme").value;
  localStorage.setItem("theme", selectedTheme);

  // Apply the selected theme
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




