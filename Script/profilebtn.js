// Description: This script is used to fetch the user profile data from the server and display it on the profile page.
// Purpose: Fetch user profile from server and display it on the profile page
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".profile__button").addEventListener("click", function () {
    const container = document.querySelector(".grid--example");
    if (!container) return;
    
    const username = window.location.pathname.split("/")[1]

    
    fetch(`http://localhost:3000/users/${username}`)
      .then((response) => response.json())
      .then((userData) => {
      const { firstname, lastname, age, socialnumber, address, zipcode, phone, healthForms, healthInfo } = userData;

      // Create the card content
      const content_frame = healthForms.map(form => {
        if (form.healthInfo === 'Ja' || form.healthInfo === 'Nej' || form.healthInfo === 'Osäker') {
            const color = form.healthInfo === 'Ja' ? 'darkgreen' : form.healthInfo === 'Nej' ? 'darkred' : 'darkorange';
            return  `
            <div class="card_content_frame">
            <h3 class="card_mg_inline">${form.healthTitle} <span style="color: ${color};">${form.healthInfo}</span></h3>
            <div class="card_mg_block card_mg_inline">
            </div>
            </div>
            `;
        } else{
          return `
        <div class="card_content_frame">
          <h3 class="card_mg_inline">${form.healthTitle} ${form.level}/5</h3>
          <h4 class="card_mg_inline">${form.healthInfo}</h4>
          
          <div class="card_mg_block card_mg_inline health-bar">
            <div class="health-bar__fill" style="width: ${form.level * 20}%;"></div>
          </div>
        </div>
          `;
        }
      }).join('');

     // Create the card content
      const content_frame_info = healthInfo.map(info => `
        <div class="card_content_frame">
        <h3 class="card_mg_inline">Beskrivning: ${info.description}</h3>
        <p class="card_mg_inline"> sjukdom: ${info.illness} <br> Medicin: ${info.medication} </p>
        </div>
        </div>
      `).join('');

       // Create the card
        const profileCard = `
          <div class="boxspan_1-5_row card card_flex">
            <div class="card_mg_inline card_mg_block"> 
              <div class="card_flex card_flex_col_sm">
                <img class="circle border" src="/img/profile/old_man_11.png" alt="" width="30%" height="30%">
                <p>Namn: ${firstname} ${lastname} <br>Personnummer: ${socialnumber}<br>Ålder: ${age} <br>Telefon: ${phone} <br>Adress: ${address} <br>Postnummer: ${zipcode}</p> 
              </div>           
              <h2>Hälsouppgifter</h2>                           
              <div class="card_grid card_pad_block">   
              ${content_frame}

              <h2>Övrig information</h2>  
              ${content_frame_info}
              </div>            
            </div>
          </div>`;

        
        container.insertAdjacentHTML('beforeend', profileCard);

        // Show the card
        const card = document.querySelector('.card');
        requestAnimationFrame(() => {
          card.classList.add('show');
        });
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  });
});
