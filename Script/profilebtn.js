document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".profile__button").addEventListener("click", function () {
    const container = document.querySelector(".grid--example");
    if (!container) return;
  
    const profileName = "Hasse Elfenben";
    const age = 75;
    const num = "070-123 45 67";
    const adr = "Storgatan 1, 123 45 Stockholm";

    const profileCard = `
    <div class="boxspan_1-5_row card card_flex">
      <div class="card_mg_inline card_mg_block"> 
      <div class="card_flex">
        <img class="circle border" src="/img/profile/old_man_1.jpg" alt="" width="30%" height="30%">
        <p>Namn: ${profileName} <br> Ålder: ${age} <br> Telefon: ${num} <br> Adress: ${adr}</p>
        
      </div>           
      <h2>Hälso uppgifter</h2>                          
      <div class="card_grid">        
          <div class="card_content_frame">
            <p>Blodtryck: 120/80</p>
            <p>Puls: 70</p>
            <p>Blodsocker: 5.5</p>
          </div>
          <div class="card_content_frame">
            <p>Vikt: 75 kg</p>
            <p>Längd: 175 cm</p>
            <p>Temperatur: 36.5</p>          
        </div>
        <div class="card_content_frame">
            <p>Blodtryck: 120/80</p>
            <p>Puls: 70</p>
            <p>Blodsocker: 5.5</p>
          </div>
          <div class="card_content_frame">
            <p>Vikt: 75 kg</p>
            <p>Längd: 175 cm</p>
            <p>Temperatur: 36.5</p>          
        </div>
        <div class="card_content_frame">
            <p>Blodtryck: 120/80</p>
            <p>Puls: 70</p>
            <p>Blodsocker: 5.5</p>
          </div>
          <div class="card_content_frame">
            <p>Vikt: 75 kg</p>
            <p>Längd: 175 cm</p>
            <p>Temperatur: 36.5</p>          
        </div>

      </div>            
      </div>
    </div>`;
    
    container.insertAdjacentHTML('beforeend', profileCard);

    const card = document.querySelector('.card');
    requestAnimationFrame(() => {
      card.classList.add('show');
    });
  });
});