document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".warning_button").addEventListener("click", function () {
        const container = document.querySelector(".grid--example");
        if (!container) return;

        const warningCard = `
        <div class="boxspan_1-5_row card">
            <div class="card_mg_inline card_mg_block">
                <h2>Identfierade Risker</h2>
                <div class="card_flex">
                    <h3>Total riskbedömning: Hög</h3><i class="bi bi-exclamation-triangle" style="color: red; align-content: center;"></i>
                </div>
                <h3 id="riskCount">Antal identifierade risker: 4</h3>
                <h3>Hög risk för fall - åtgärder rekommenderas!</h3>
                <div id="riskInfo"></div>
                <div class="card_flex">
                    <div class="card_content"><i class="bi bi-exclamation-triangle" style="color: red; margin-left: 0.3rem; margin-right: 1rem;"></i>Belysning</div>
                    <div class="question_button btn_click" data-info="Svag belysning kan påverka synen och öka risken för att snubbla. Rekommenderat: bättre ljuskällor."><i class="bi bi-question"></i></div>
                </div>
                <div class="card_flex">
                    <div class="card_content"><i class="bi bi-exclamation-triangle" style="color: red; margin-left: 0.3rem; margin-right: 1rem;"></i>Höga trösklar</div>
                    <div class="question_button btn_click" data-info="Höga trösklar kan orsaka snubbling. Rekommenderat: installera ramper eller ta bort trösklar."><i class="bi bi-question"></i></div>
                </div>
                <div class="card_flex">
                    <div class="card_content"><i class="bi bi-exclamation-triangle" style="color: orange; margin-left: 0.3rem; margin-right: 1rem;"></i>Hög mattkant</div>
                    <div class="question_button btn_click" data-info="Höga mattkanter kan orsaka snubbling. Rekommenderat: använd mattor med låga kanter eller tejpa ner kanterna."><i class="bi bi-question"></i></div>
                </div>
                <div class="card_flex">
                    <div class="card_content"><i class="bi bi-exclamation-triangle" style="margin-left: 0.3rem; margin-right: 1rem;"></i>Saknar handtag</div>
                    <div class="question_button btn_click" data-info="Att sakna handtag kan göra det svårt att hålla balansen. Rekommenderat: installera handtag där det behövs."><i class="bi bi-question"></i></div>
                </div>
            </div>
        </div>
        `;

        container.insertAdjacentHTML('beforeend', warningCard);
        const card = document.querySelector('.card');
        requestAnimationFrame(() => {
            card.classList.add('show');
        });

        // Update the risk count
        const warningButtons = document.querySelectorAll('.warning_btn');
        const riskCountElement = document.getElementById('riskCount');
        riskCountElement.textContent = `Antal identifierade risker: ${warningButtons.length}`;

        // Add event listeners to question buttons
        const questionButtons = document.querySelectorAll('.question_button');
        questionButtons.forEach(button => {
            button.addEventListener('click', function () {
                const parentCardFlex = this.closest('.card_flex');
                let riskInfoElement = parentCardFlex.nextElementSibling;

                if (riskInfoElement && riskInfoElement.classList.contains('riskinfo_card')) {
                    // If the info card already exists, remove it and change icon back to question mark
                    riskInfoElement.remove();
                    this.innerHTML = '<i class="bi bi-question"></i>';
                } else {
                    // If the info card doesn't exist, create and insert it and change icon to close
                    const info = this.getAttribute('data-info');
                    riskInfoElement = document.createElement('div');
                    riskInfoElement.classList.add('riskinfo_card');
                    riskInfoElement.innerHTML = `
                        <div>
                            <p>${info}</p>
                        </div>
                    `;
                    parentCardFlex.insertAdjacentElement('afterend', riskInfoElement);
                    this.innerHTML = '<i class="bi bi-x"></i>';
                }
            });
        });
    });
});
