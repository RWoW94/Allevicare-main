/* document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Kontrollera lagrat tema
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark" || (savedTheme === "auto" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        body.classList.add("dark-mode");
    }

    // Om "auto" är valt, använd systemets tema
    if (savedTheme === "auto") {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addListener((e) => {
            if (e.matches) {
                body.classList.add("dark-mode");
            } else {
                body.classList.remove("dark-mode");
            }
        });
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        console.log("Dark mode aktiv:", body.classList.contains("dark-mode"));
    });
});
 */