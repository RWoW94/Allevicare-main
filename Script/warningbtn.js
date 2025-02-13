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
                   <h3>Antal identifierade risker: 4</h3>
                   <h3>Hög risk för fall - åtgärder rekommenderas!</h3>
                    <div class="card_flex">
                        <div class="warning_btn"><i class="bi bi-exclamation-triangle" style="color: red; margin-left: 0.3rem; margin-right: 1rem;" ></i>Belysning</div>
                        <div class="question_button btn_click"><i class="bi bi-question"></i></div>
                    </div>
                    <div class="card_flex">
                        <div class="warning_btn"><i class="bi bi-exclamation-triangle" style="color: red; margin-left: 0.3rem; margin-right: 1rem;" ></i>Höga trösklar</div>
                        <div class="question_button btn_click"><i class="bi bi-question"></i></div>
                    </div>
                    <div class="card_flex">
                        <div class="warning_btn"><i class="bi bi-exclamation-triangle" style="color: red; margin-left: 0.3rem; margin-right: 1rem;" ></i>Hög mattkant</div>
                        <div class="question_button btn_click"><i class="bi bi-question"></i></div>
                    </div>
                    <div class="card_flex">
                        <div class="warning_btn"><i class="bi bi-info" style=" margin-left: 0.3rem; margin-right: 1rem;"></i>Saknar handtag</div>
                        <div class="question_button btn_click"><i class="bi bi-question"></i></div>
                    </div>
                    </div>
                </div>
            
      
      `;
      
      container.insertAdjacentHTML('beforeend', warningCard);
      const card = document.querySelector('.card');
      requestAnimationFrame(() => {
        card.classList.add('show');
      });
    });
  });
