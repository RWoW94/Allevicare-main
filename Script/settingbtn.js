document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".setting__button").addEventListener("click", function () {
      const container = document.querySelector(".grid--example");
      if (!container) return;

      const settingCard = `<div class="boxspan_1-5_row card card_flex">
      <div class="card_mg_inline card_mg_block" style="width: 90%;"> 
        <h2>Inställningar</h2>
        <div class="card_flex card_flex_col">
          
          <label for="username">Ändra användarnamn:</label>
          <input type="text" id="username" placeholder="Användarnamn" class="textfield">
    
          <label for="password">Ändra lösenord:</label>
          <input type="password" id="password" placeholder="••••••••" class="textfield">
    
          <label for="language">Språk:</label>
          <select id="language" class="textfield">
            <option value="sv">Svenska</option>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>

          <label for="theme">Färg tema:</label>
          <select id="theme" class="textfield">
            <option value="blue">Blå</option>
            <option value="red">Röd</option>
            <option value="green">Grön</option>
            <option value="yellow">Gul</option>
            <option value="purple">Lila</option>
           <option value="orange">Orange</option>
          </select>

          <label for="Contrast">Kontrast:</label>
          <select id="Contrast" class="textfield">
            <option value="low">låg</option>
            <option value="medium">Medium</option>
            <option value="high">Hög</option>
           </select>

           <label for="Size">Textstorlek:</label>
          <select id="Size" class="textfield">
            <option value="sizeSmall">Liten</option>
            <option value="sizeMedium">Medium</option>
            <option value="sizeBig">Stor</option>
           </select>
    
           <label for="notifications">Aviseringar:</label>
           <select id="notifications" class="textfield">
             <option value="day">Dagligen</option>
             <option value="week">veckovis</option>
             <option value="off">Av</option>
           </select>
    
          <button class="button1 btn_click card_mg_block" onclick="saveColor(); saveContrast(); saveSize();">Spara ändringar</button>
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
