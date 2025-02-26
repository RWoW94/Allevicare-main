document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".create_acc").addEventListener("click", function () {
      const container = document.querySelector(".grid--example");
      if (!container) return;

    const settingCard = `<div class="boxspan_1-5_row card card_flex">
    <div class="card_mg_inline card_mg_block" style="width: 100%;"> 
      <h2>Registrera användare</h2>
      <div class="card_flex card_flex_col">
        
        <label for="username">Användarnamn:</label>
        <input type="text" id="username" placeholder="Användarnamn" class="textfield">

        <label for="name">Namn:</label>
        <input type="text" id="name" placeholder="Namn" class="textfield">

        <label for="address">Adress:</label>
        <input type="text" id="address" placeholder="Adress" class="textfield">

        <label for="password">Lösenord:</label>
        <input type="password" id="password" placeholder="••••••••" class="textfield">

        <label for="phone">Telefonnummer:</label>
        <input type="text" id="phone" placeholder="Telefonnummer" class="textfield">

        <label for="balance">Balans:</label>
        <select id="balance" class="textfield">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select>

        <label for="headache">Huvudvärk:</label>
        <select id="headache" class="textfield">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select>
    
        <button class="button1 btn_click card_mg_block" onclick="saveUserDetails();">Registrera</button>
      </div>
    </div>
    </div>`;
      
    container.insertAdjacentHTML('beforeend', settingCard);
    const card = document.querySelector('.card');
    requestAnimationFrame(() => {
      card.classList.add('show');
    });
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    // Hämta alla knappar med klassen 'button'
    const buttons = document.querySelectorAll(".exit");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Hämta behållaren med class 'grid--example'
            const container = document.querySelector(".grid--example");

            // Hämta alla div-element i behållaren
            const divs = container.querySelectorAll("div");

            // Kontrollera att det finns minst 6 element
            if (divs.length > 3) {
                container.removeChild(divs[4]); // Ta bort det sjätte elementet
            }
        });
    });
});