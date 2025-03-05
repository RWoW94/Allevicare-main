document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".warning_button").addEventListener("click", function () {
        const container = document.querySelector(".grid--example");
        if (!container) return;

        function getRiskColor(level) {
            if (level >= 1 && level <= 2) return "green";  
            if (level === 3) return "yellow";              
            if (level >= 4) return "red";                  
            return "gray"; 
        }
        
    fetch(`http://localhost:3000/users/${username}`)
    .then((response) => response.json())
    .then((userData) => {
        const { firstname, reportedRisk } = userData;
        console.log("Full API-respons:", userData);
        console.log("Reported risks:", reportedRisk);
        
        const content_frame = reportedRisk.map(risk => {
        const riskColor = getRiskColor(risk.level);
                return `
        <div class="card_flex">
                    <div class="card_content"><p><i class="bi bi-exclamation-triangle" style="color: ${riskColor}; margin-left: 0.3rem; margin-right: 1rem;"></i>${risk.name}</p></div>
                    <div class="question_button btn_click" data-info="${risk.description}. <br> Risknivå: ${risk.level}">
                    <i class="bi bi-question"></i>
            </div>
        </div>
     `}).join('');

        const warningCard = `
        <div class="boxspan_1-5_row card">
            <div class="card_mg_inline card_mg_block">
                <h2>Hej ${firstname}! </h2>
                <div class="card_flex">
                </div>
                <h3 id="riskCount">Antal identifierade risker: 4</h3>
                <h3>Detta är riskerna identifierade hos dig:</h3>
                <div id="riskInfo"></div>
                ${content_frame}
            </div>
        </div>
        `;

        container.insertAdjacentHTML('beforeend', warningCard);
        const card = document.querySelector('.card');
        requestAnimationFrame(() => {
            card.classList.add('show');
        });

        // Update the risk count
        const riskCountElement = document.getElementById('riskCount');
        riskCountElement.textContent = `Antal identifierade risker: ${reportedRisk.length}`;

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
})});
