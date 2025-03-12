document.addEventListener("DOMContentLoaded", () => {
    const themeSelect = document.getElementById("theme"); // Get the dropdown menu
    const body = document.body;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    let mediaQueryListener = null;

    // Check for saved theme
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    // Set the dropdown to the saved theme
    themeSelect.value = savedTheme;

    // Listen for changes in the dropdown
    themeSelect.addEventListener("change", () => {
        const selectedTheme = themeSelect.value;
        localStorage.setItem("theme", selectedTheme);
        applyTheme(selectedTheme);
    });

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

    function updateAutoTheme() {
        if (mediaQuery.matches) {
            setDarkMode();
        } else {
            setLightMode();
        }
    }

    function setDarkMode() {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
    }

    function setLightMode() {
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
    }
});