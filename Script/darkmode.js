document.addEventListener("DOMContentLoaded", function () {
    const themeSelect = document.getElementById("theme"); // Hämta dropdown-menyn
    const body = document.body;
    let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    let mediaQueryListener = null;

    // Kontrollera lagrat tema
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    // Sätt rätt valt värde i dropdown-menyn
    themeSelect.value = savedTheme;

    // Lyssna på ändringar i dropdown-menyn
    themeSelect.addEventListener("change", function () {
        const selectedTheme = themeSelect.value;
        localStorage.setItem("theme", selectedTheme);
        applyTheme(selectedTheme);
    });

    function applyTheme(theme) {
        // Ta bort tidigare lyssnare om det finns en
        if (mediaQueryListener) {
            mediaQuery.removeListener(mediaQueryListener);
            mediaQueryListener = null;
        }

        if (theme === "dark") {
            body.classList.add("dark-mode");
            body.classList.remove("light-mode");
        } else if (theme === "light") {
            body.classList.add("light-mode");
            body.classList.remove("dark-mode");
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
            body.classList.add("dark-mode");
            body.classList.remove("light-mode");
        } else {
            body.classList.add("light-mode");
            body.classList.remove("dark-mode");
        }
    }
});
