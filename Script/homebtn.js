document.addEventListener("DOMContentLoaded", function () {
    // Hämta alla knappar med klassen 'button'
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Hämta behållaren med class 'grid--example'
            const container = document.querySelector(".grid--example");

            // Hämta alla div-element i behållaren
            const divs = container.querySelectorAll("div");

            // Kontrollera att det finns minst 6 element
            if (divs.length > 5) {
                container.removeChild(divs[6]); // Ta bort det sjätte elementet
            }
        });
    });
});