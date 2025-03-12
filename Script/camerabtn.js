const riskArray = [
  {
    kategori: "Höga trösklar",
    risker: [
       "Entrédörren – En 5 cm hög metalltröskel gör det svårt att ta sig in och ut med rullator eller rullstol, särskilt om balansen är nedsatt.",
       "Mellan hallen och vardagsrummet – En 3 cm tröskel i ek utgör en snubbelrisk, särskilt för en person med begränsad fotlyftning eller nedsatt känsel i fötterna.",
       "I badrumsdörren – En 4 cm hög våtrumströskel för att hålla vattnet inne kan vara svår att kliva över för någon med svaga benmuskler eller gånghjälpmedel.",
       "Vid balkongdörren – En 6 cm tröskel i aluminium försvårar passage för en äldre person som vill gå ut och få frisk luft, särskilt om rullator används.",
       "Sovrumsdörren – En 2,5 cm hög tröskel kan vara en osynlig fallrisk i mörkret eller vid trötthet, särskilt om personen går upp på natten.",
       "Mellan köket och matsalen – En nivåskillnad på 1,8 cm kan verka obetydlig men kan orsaka snubbling för en person med försämrad balans eller synnedsättning.",
       "Vid dörröppningen till tvättstugan – En 3 cm hög tröskel kan göra det svårt att hantera en tvättkorg om rörelseförmågan är begränsad.",
       "I förrådsutrymmet – En gammal 5 cm tröskel i trä kan vara svår att se och öka risken för snedsteg, särskilt för någon som bär på saker.",
       "Vid garageingången – En 4 cm tröskel i betong kan vara ett hinder för en person som använder käpp eller rullator och vill ta sig ut till bilen.",
       "Mellan sovrummet och badrummet – En 2 cm tröskel kan störa en trygg gångväg, särskilt om personen behöver snabb tillgång till toaletten på natten."
    ]
  },
  {
    kategori: "Stark ljusstyrka",
    risker: [
      "I hallen – En för stark taklampa skapar bländning och kan försvåra anpassning mellan mörker och ljus när personen kommer in utifrån.",
      "I köket – Mycket starka LED-spotlights under köksskåpen reflekteras i bänkskivan, vilket kan vara påfrestande för ögon med åldersrelaterad ljuskänslighet.",
      "I badrummet – En kraftfull takbelysning i kombination med blanka kakelväggar skapar reflektioner som kan göra det svårare att se kontraster och konturer.",
      "I vardagsrummet – En för stark taklampa kan skapa skarpa skuggor, vilket gör det svårare att urskilja föremål och möbler för någon med nedsatt syn.",
      "Vid spegeln i sovrummet – En överdrivet ljusstark smink- och rakspegel kan orsaka obehag och irritation för äldre personer med känsliga ögon.",
      "I trappan – Starka ljuskällor direkt ovanför trappsteget kan orsaka bländning och göra det svårt att bedöma djupet på varje steg.",
      "I läslampan vid sängen – En för stark glödlampa kan orsaka ansträngning för ögonen och leda till snabb trötthet vid läsning.",
      "I fönster nära TV:n – För starkt naturligt ljus utan gardiner eller persienner kan orsaka kontrastproblem på skärmen och anstränga synen.",
      "I garderoben – En mycket ljusstark LED-list kan skapa obehagliga skuggor och göra det svårt att urskilja färger på kläder.",
      "Vid ytterdörrens belysning – En kraftfull strålkastare med rörelsesensor kan orsaka tillfällig bländning när någon går ut eller kommer hem i mörker."
    ]
  },
  {
    kategori: "Köksanpassningar",
    risker: [
      "Köksskåpen är för högt placerade – Överskåpen sitter på 50 cm avstånd från bänkskivan, vilket gör det svårt för en äldre person att nå tallrikar och glas utan att använda en ostadig pall.",
      "Ugnen är placerad för lågt – Ugnen är installerad strax ovanför golvnivå, vilket kräver att personen böjer sig djupt ner för att sätta in eller ta ut varma plåtar, en riskfaktor för fall och ryggproblem.",
       "Diskhon är för djup – En djup diskho på 22 cm gör det ansträngande att diska, särskilt för någon med begränsad styrka i armar och axlar.",
      "Köksfläkten är svår att nå – Fläkten sitter på 1,85 meters höjd och styrs via knappar längst upp, vilket gör det svårt att använda den utan att sträcka sig riskfyllt.",
      "Spisreglagen är placerade längst bak – Reglagen sitter vid spisens bakkant, vilket gör att en äldre person måste sträcka sig över heta kastruller för att justera värmen.",
       "Lådhandtagen sticker ut – Kökslådor har metallhandtag som sticker ut 4 cm, vilket utgör en risk att fastna med kläder eller stöta i sig när man går förbi.",
       "Kylskåpsdörren är för tung – Dörren kräver mycket kraft att öppna och stänga, vilket kan vara svårt för en person med nedsatt handstyrka eller reumatism.",
       "Arbetsbänken har blanka ytor – Starkt reflekterande laminatyta skapar bländning från kökslamporna, vilket kan göra det svårare att se föremål och konturer.",
       "Hörnskåpet saknar utdragbara hyllor – Det nedre hörnskåpet har en djup konstruktion utan utdragbara hyllor, vilket gör det svårt att nå inre föremål utan att böja sig djupt.",
       "Kaffebryggaren står långt in på bänken – Placeringen kräver att personen lutar sig fram och sträcker sig långt för att fylla på vatten, vilket kan leda till tappade föremål eller spill av hett vatten."
    ]
  },
  {
    kategori: "Möbler/Tillgänglighet",
    risker: [
       "Soffan är för låg – Sittdynan är placerad på 38 cm höjd, vilket gör det svårt för en äldre person att resa sig upp utan att tippa framåt och belasta knän och höfter.",
       "Matbordets ben är i vägen – Bordet har ett massivt underrede med korslagda ben, vilket gör det svårt att sitta bekvämt med rullstol eller rullator.",
       "Sängens höjd är obekväm – Madrassen är placerad på 45 cm, vilket är för lågt för en äldre person att resa sig från utan att använda händerna som stöd.",
        "Fåtöljen har för mjuka dynor – När man sätter sig sjunker dynorna ner 10 cm, vilket gör det svårt att resa sig upp utan hjälp.",
       "Mattor skapar snubbelrisk – En tjock ryamatta i vardagsrummet är svår att gå på med rullator, och kan leda till att fötterna fastnar i kanten.",
       "TV:n är placerad för högt – Skärmen sitter på en höjd av 1,5 meter, vilket gör att en äldre person måste luta huvudet bakåt vid tittande, vilket kan leda till nacksmärta.",
       "Dörrhandtagen är svåra att greppa – De runda dörrknopparna i hela huset kräver starkt grepp och vridning, vilket är svårt för en person med artrit.",
       "Byrån har vassa hörn – Byrån i sovrummet har skarpa kanter som är placerade i knähöjd, en potentiell skaderisk vid nattliga toalettbesök.",
       "Stolen i hallen saknar armstöd – Det finns en sittplats i hallen för att ta på sig skor, men utan armstöd blir det svårt att resa sig upp säkert.",
      "Balkongmöblerna är instabila – De hopfällbara plaststolarna på balkongen vinglar när man sätter sig, vilket ökar risken för fall för någon med nedsatt balans."
    ]
  }
];


document.getElementById('cameraButton').addEventListener('click', function() {
  let randomNumber = Math.floor(Math.random() * 7) + 1;

  for (let i = 0; i < randomNumber; i++) {
    let randNr = Math.floor(Math.random() * 4);
    let level = Math.floor(Math.random() * 5) + 1;
    let name = riskArray[randNr].kategori;
    let description = riskArray[randNr].risker[Math.floor(Math.random() * 10)];
    let username = window.location.pathname.split("/")[1]

    fetch(`http://localhost:3000/users/${username}`)
    .then((response) => response.json())
    .then((userData) => {
    const {socialnumber} = userData;
    
    fetch('http://localhost:3000/reportedrisk', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ socialnumber, name, description, level })
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        console.error("Error:", data.message);
      } else {
        console.log("Risks identified:", data)
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });

      });
    }
  });