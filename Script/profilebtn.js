// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector(".profile__button").addEventListener("click", function () {
//     const container = document.querySelector(".grid--example");
//     if (!container) return;
  
//     const profileName = "Hasse Elfenben";
//     const age = 75;
//     const num = "070-123 45 67";
//     const adr = "Storgatan 1, 123 45 Stockholm";
//     const healthStatus = 4;
//     const maxHealthStatus = 5;
//     const healthPercentage = (healthStatus / maxHealthStatus) * 100;

//     const div = `
//       <div class="card_content_frame">
//       <h3>Balans</h3>
//       <p>Status: ${healthStatus}/${maxHealthStatus}</p>
//       <div class="health-bar">
//         <div class="health-bar__fill" style="width: ${healthPercentage}%;"></div>
//       </div>
//       </div>`;

//     const profileCard = `
//     <div class="boxspan_1-5_row card card_flex">
//       <div class="card_mg_inline card_mg_block"> 
//       <div class="card_flex">
//         <img class="circle border" src="/img/profile/old_man_1.jpg" alt="" width="30%" height="30%">
//         <p>Namn: ${profileName} <br> Ålder: ${age} <br> Telefon: ${num} <br> Adress: ${adr}</p>
        
//       </div>           
//       <h2>Hälso uppgifter</h2>                          
//       <div class="card_grid">        
//       ${div}
//       ${div}
//       ${div}
//       ${div}

//       </div>            
//       </div>
//     </div>`;
    
//     container.insertAdjacentHTML('beforeend', profileCard);

//     const card = document.querySelector('.card');
//     requestAnimationFrame(() => {
//       card.classList.add('show');
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".profile__button").addEventListener("click", function () {
    const container = document.querySelector(".grid--example");
    if (!container) return;

    const username = window.location.pathname.split("/")[1]// Hämtar användarnamnet från URL

    // Hämta användarens profilinformation från servern
    Promise.all([
      fetch(`http://localhost:3000/users/${username}`).then((response) => response.json()),
    ])
    .then(([userData]) => {
      const { name, age, number, address } = userData;

    
    

        // Skapa profilkortet med användarens information
        const profileCard = `
          <div class="boxspan_1-5_row card card_flex">
            <div class="card_mg_inline card_mg_block"> 
              <div class="card_flex">
                <img class="circle border" src="/img/profile/old_man_1.jpg" alt="" width="30%" height="30%">
                <p>Namn: ${name} <br> Ålder: ${age} <br> Telefon: ${number} <br> Adress: ${address}</p>
              </div>           
              <h2>Hälso uppgifter</h2>                           
              <div class="card_grid">        
                <div class="card_content_frame">
                  <h3></h3>
                  <p>Status:</p>
                  <div class="health-bar">
                    <div class="health-bar__fill" style="width: 80%;"></div>
                  </div>
                </div>
              </div>            
            </div>
          </div>`;

        // Lägg till kortet i container
        container.insertAdjacentHTML('beforeend', profileCard);

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
