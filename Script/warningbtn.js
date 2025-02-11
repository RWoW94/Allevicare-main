document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".warning_button").addEventListener("click", function () {
      const container = document.querySelector(".grid--example");
      if (!container) return;

      const warningCard = `
      
      <div class="boxspan_full card card_flex card_flex_col">
                <h2>Faror i ditt hem</h2>
                <div class="card_flex">
                    <div class="warning_btn"><i class="bi bi-exclamation-triangle" style="color: red; margin-left: 0.3rem; margin-right: 1rem;" ></i>Belysning</div>
                    <div class="question_button"><i class="bi bi-question"></i></div>
                </div>
                <div class="card_flex">
                    <div class="warning_btn"><i class="bi bi-exclamation-triangle" style="color: red; margin-left: 0.3rem; margin-right: 1rem;" ></i>Höga trösklar</div>
                    <div class="question_button"><i class="bi bi-question"></i></div>
                </div>
                <div class="card_flex">
                    <div class="warning_btn"><i class="bi bi-exclamation-triangle" style="color: red; margin-left: 0.3rem; margin-right: 1rem;" ></i>Hög mattkant</div>
                    <div class="question_button"><i class="bi bi-question"></i></div>
                </div>
                <div class="card_flex">
                    <div class="warning_btn"><i class="bi bi-exclamation-triangle" style="color: red; margin-left: 0.3rem; margin-right: 1rem;" ></i>Saknar handtag</div>
                    <div class="question_button"><i class="bi bi-question"></i></div>
                </div>
            </div>
      
      `;
      
      container.innerHTML = warningCard;
    });
  });
