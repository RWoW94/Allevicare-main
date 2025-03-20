// Description: This script is used to remove the card from the grid when the button is clicked.
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const card = document.querySelector(".grid--example .card");
            if (card) {
                card.remove();
            }
        });
    });
});
