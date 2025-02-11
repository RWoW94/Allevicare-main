document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".profile__button").addEventListener("click", function () {
      const container = document.querySelector(".grid--example");
      if (!container) return;
  
      const profileName = "Hasse Elfenben";
      const age = 75;
      const num = "070-123 45 67";
      const adr = "Storgatan 1, 123 45 Stockholm";

      const profileCard = `
        <div class="boxspan_full card card_flex">
          <div class="card_mg_inline card_mg_block"> 
            <div class="card_flex">
              <img class="circle border" src="/img/profile/old_man_1.jpg" alt="" width="35%" height="35%">
              <p>Namn: ${profileName} <br> Ålder: ${age} <br> Telefon: ${num} <br> Adress: ${adr}</p>
              <div class="card_button" onclick="editProfile()"><i class="bi bi-gear"></i></div>
            </div>
            <div class="card_flex card_flex_col">
              <h2>Hälsouppgifter</h2>
              <p>
               Hasse Elfenben har en hjärtinfarkt och har svårt att röra sig. Han har även diabetes och har svårt att se.
               Hasse har även en allergi mot nötter, därför är han allergisk mot sig själv. 
               Han kan inte äta gluten och har svårt att svälja.
               <br><br>
               Han lider även av analfissur och har svårt att gå på toaletten.
               Sjuksköterskan har rekommenderat att han ska äta mer fibrer och dricka mer vatten.
              </p>
            </div>            
            <h2>Närmaste anhöriga</h2>                          
            <div class="card_grid">
              <p>Namn: Anna Elfenben <br> Relation: Dotter <br> Telefon: 073-987 65 43</p>
              <p>Namn: Karl Elfenben <br> Relation: Son <br> Telefon: 073-876 54 32</p>
              <p>Namn: Lisa Elfenben <br> Relation: Fru <br> Telefon: 073-765 43 21</p>
              <p>Namn: Erik Elfenben <br> Relation: Bror <br> Telefon: 073-654 32 10</p>
              <p>Namn: Maria Elfenben <br> Relation: Syster <br> Telefon: 073-543 21 09</p>
              <p>Namn: Johan Hud <br> Relation: Vän <br> Telefon: 073-432 10 98</p>
            </div>            
          </div>
        </div>`;
      
      container.innerHTML = profileCard;
    });
  });