document.addEventListener("DOMContentLoaded", () => {
    /* const themeSelect = document.getElementById("theme"); */ // Get the dropdown menu
    const body = document.body;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    let mediaQueryListener = null;

    // Check for saved theme
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    function applyTheme(theme) {
        // Remove previous listener if it exists
        if (mediaQueryListener) {
            mediaQuery.removeListener(mediaQueryListener);
            mediaQueryListener = null;
        }

        // Apply the selected theme
        if (theme === "dark") {
            setDarkMode();
        } else if (theme === "light") {
            setLightMode();
        } else if (theme === "auto") {
            updateAutoTheme();
            mediaQueryListener = (e) => {
                body.classList.toggle("dark-mode", e.matches);
                body.classList.toggle("light-mode", !e.matches);
            };
            mediaQuery.addListener(mediaQueryListener);
        }
    }

    // Update the theme based on the media query
    function updateAutoTheme() {
        if (mediaQuery.matches) {
            setDarkMode();
        } else {
            setLightMode();
        }
    }

    // Set the dark mode
    function setDarkMode() {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
    }

    // Set the light mode
    function setLightMode() {
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
    }
});