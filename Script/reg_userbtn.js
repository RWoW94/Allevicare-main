document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".create_acc").addEventListener("click", function () {
      const container = document.querySelector(".grid--example");
      if (!container) return;

    const settingCard = `<div class="boxspan_1-5_row card card_flex">
    <div class="card_mg_inline card_mg_block" style="width: 100%;"> 
      <h2>Registrera användare</h2>
      <div class="card_flex card_flex_col">
        
      

      <input type="text" id="socialnumber" placeholder="Personnummer" class="textfield">

      <input type="text" id="firstname" placeholder="Namn" class="textfield">

      <input type="text" id="lastname" placeholder="Efternamn" class="textfield">

      <input type="text" id="age" placeholder="Ålder" class="textfield">

      <input type="text" id="phone" placeholder="Telefonnummer" class="textfield">
      
      <input type="text" id="address" placeholder="Adress" class="textfield">

      <input type="text" id="zipcode" placeholder="Postnummer" class="textfield">
       
      <input type="text" id="reg_username" placeholder="Användarnamn" class="textfield">

      <input type="password" id="reg_password" placeholder="Lösenord" class="textfield">

        <label for="balance" id="title1">Balans:</label>
        <select class="textfield" id="info1">
          <option value="5">Ingen balansproblematik</option>
          <option value="4">Lätt balanssvårighet (känner mig ibland ostadig)</option>
          <option value="3">Måttlig balanssvårighet (måste ibland hålla i mig för stöd)</option>
          <option value="2">Svår balanssvårighet (använder rullator eller stöd ofta)</option>
          <option value="1">Mycket svårt att hålla balansen (använder rullstol eller liknande)</option>
        </select>

        <label for="mobility">Gångförmåga:</label>
        <select id="title2" class="textfield">
          <option value="5">Går obehindrat</option>
          <option value="4">Går långsamt men utan hjälp</option>
          <option value="3">Behöver stöd (kryckor, käpp, möbler, etc.)</option>
          <option value="2">Använder rullator</option>
          <option value="1">Använder rullstol</option>
        </select>

        <label for="standUp">Kan resa sig från en stol utan stöd?</label>
        <select id="standUp" class="textfield">
          <option value="1">Ja</option>
          <option value="0">Nej</option>
        </select>

        <label for="dizzy">Känner du dig ofta yr när du reser dig upp?</label>
        <select id="dizzy" class="textfield">
          <option value="1">Ja</option>
          <option value="0">Nej</option>
        </select>

        <label for="vision">Synstatus:</label>
        <select id="vision" class="textfield">
          <option value="5">Normal syn (med eller utan glasögon)</option>
          <option value="4">Nedsatt syn (har svårt att se detaljer på långt håll)</option>
          <option value="3">Svår synnedsättning (ser dåligt även på nära håll)</option>
          <option value="2">Nästan blind</option>
          <option value="1">Helt blind</option>
        </select>

        <label for="glasses">Använder glasögon eller linser?</label>
        <select id="glasses" class="textfield">
          <option value="1">Ja</option>
          <option value="0">Nej</option>
        </select>

        <label for="lowLight">Har du problem att se i svagt ljus eller mörker?</label>
        <select id="lowLight" class="textfield">
          <option value="1">Ja</option>
          <option value="0">Nej</option>
        </select>

        <label for="doubleVision">Har du dubbelseende eller svårigheter att fokusera?</label>
        <select id="doubleVision" class="textfield">
          <option value="1">Ja</option>
          <option value="0">Nej</option>
        </select>

        <label for="hearing">Hörselförmåga:</label>
        <select id="hearing" class="textfield">
          <option value="1">Döv</option>
          <option value="2">Svår hörselnedsättning (förstår knappt samtal)</option>
          <option value="3">Medel hörselnedsättning (behöver hörapparat eller högt ljud)</option>
          <option value="4">Mild hörselnedsättning (svårt att höra svaga ljud)</option>
          <option value="5">Normal hörsel</option>          
        </select>

        <label for="hearingAid">Använder du hörapparat?</label>
        <select id="hearingAid" class="textfield">
          <option value="1">Ja</option>
          <option value="0">Nej</option>
        </select>

        <label for="tinnitus">Har du tinnitus eller andra hörselproblem?</label>
        <select id="tinnitus" class="textfield">
          <option value="1">Ja</option>
          <option value="0">Nej</option>
        </select>

        <label for="legStrength">Upplevd muskelstyrka i benen:</label>
        <select id="legStrength" class="textfield">
          <option value="1">Mycket svag styrka</option>
          <option value="2">Svag styrka</option>
          <option value="3">Medelstyrka</option>
          <option value="4">God styrka</option>
          <option value="5">Mycket god styrka</option>
        </select>

        <label for="liftHeavy">Har du svårt att lyfta tunga föremål?</label>
        <select id="liftHeavy" class="textfield">
          <option value="1">Ja</option>
          <option value="0">Nej</option>
        </select>

        <label for="stairs">Kan du gå uppför en trappa utan att vila?</label>
        <select id="stairs" class="textfield">
          <option value="1">Ja</option>
          <option value="0">Nej</option>
        </select>



        <label for="fearOfFalling">Är du rädd för att falla?</label>
        <select id="fearOfFalling" class="textfield">
          <option value="1">Ja</option>
          <option value="0">Nej</option>
        </select>

        <label for="avoidActivities">Undviker du vissa aktiviteter av rädsla för att falla?</label>
        <select id="avoidActivities" class="textfield">
          <option value="1">Ja</option>
          <option value="0">Nej</option>
        </select>

        <label for="medicationBalance">Tar du någon medicin som kan påverka balansen?</label>
        <select id="medicationBalance" class="textfield">
          <option value="1">Ja</option>
          <option value="0">Nej</option>
          <option value="2">Osäker</option>
        </select>

        <label for="medicationDizzy">Tar du blodtrycksmedicin eller annan medicin som kan orsaka yrsel?</label>
        <select id="medicationDizzy" class="textfield">
          <option value="1">Ja</option>
          <option value="0">Nej</option>
          <option value="2">Osäker</option>
        </select>




        <label for="dizzyOften">Upplever du ofta yrsel eller svimningskänsla?</label>
        <select id="dizzyOften" class="textfield">
          <option value="1">Ja</option>
          <option value="0">Nej</option>
        </select>

        <label for="memoryProblems">Har du minnesproblem?</label>
        <select id="memoryProblems" class="textfield">
          <option value="1">Ja</option>
          <option value="0">Nej</option>
        </select>

        <label for="concentration">Har du svårt att koncentrera dig i vardagen?</label>
        <select id="concentration" class="textfield">
          <option value="1">Ja</option>
          <option value="0">Nej</option>
        </select>



        <label for="depression">Känner du dig ofta nedstämd eller orolig?</label>
        <select id="depression" class="textfield">
          <option value="1">Ja</option>
          <option value="0">Nej</option>
        </select>

        <button class="button1 btn_click card_mg_block" onclick="createUser()">Registrera Användare</button>
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

{/* <label for="muscleDisease">Har du någon sjukdom som påverkar muskelstyrkan?</label>
<select id="muscleDisease" class="textfield">
  <option value="parkinson">Parkinson</option>
  <option value="stroke">Stroke</option>
  <option value="neurological">Neurologisk sjukdom</option>
  <option value="other">Annat</option>
  <option value="none">Ingen sjukdom</option>
</select>

<label for="cognitiveDiagnosis">Har du fått en diagnos relaterad till kognitiv nedsättning?</label>
<select id="cognitiveDiagnosis" class="textfield">
  <option value="dementia">Demens</option>
  <option value="alzheimers">Alzheimers</option>
  <option value="other">Annat</option>
  <option value="none">Ingen nedsättning</option>
</select>

<label>Har du någon av följande sjukdomar?</label>
<div class="checkbox-group">
  <label>
    <input type="checkbox" name="diseases" value="diabetes"> Diabetes
  </label>
  <label>
    <input type="checkbox" name="diseases" value="hypertension"> Högt blodtryck
  </label>
  <label>
    <input type="checkbox" name="diseases" value="heart"> Hjärtproblem
  </label>
  <label>
    <input type="checkbox" name="diseases" value="osteoporosis"> Osteoporos (benskörhet)
  </label>
  <label>
    <input type="checkbox" name="diseases" value="neurological"> Neurologisk sjukdom (exempel: MS, Parkinson, Stroke)
  </label>
  <label>
    <input type="checkbox" name="diseases" value="depression"> Depression eller ångest (kan påverka fysisk aktivitet)
  </label>
</div> */}