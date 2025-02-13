document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".info_button").addEventListener("click", function () {
        const container = document.querySelector(".grid--example");  // Select the container for the information card
        if (!container) return;

        // You can define any dynamic content as variables
        const companyName = "Allevicare";
        const phone = "08-123 456 78";
        const email = "hejsan@cmail.gh";

        const informationCard = `
            <div class="boxspan_1-5_row card card_flex">
                <div class="card_mg_inline card_mg_block"> 
                    <h2>Information</h2>
                    <div class="card_flex card_flex_col">
                        <h3>Vad är ${companyName}</h3>
                        <p>${companyName} är ett företag som fokuserar på att förbättra livskvaliteten för äldre och underlätta arbetet för sjukvårdspersonal.
                            Vi erbjuder innovativa lösningar och tjänster som är anpassade för att möta behoven hos äldre och de som tar hand om dem. </p>
                        <p>Vårt mål är att skapa en trygg och bekväm miljö för äldre genom att erbjuda högkvalitativa vårdtjänster och teknologiska lösningar.
                            Vi strävar efter att vara en pålitlig partner för både vårdtagare och vårdgivare genom att tillhandahålla skräddarsydda lösningar som förbättrar vårdprocessen.</p>

                        <h3>Våra Tjänster</h3>
                        <p>Allevicare erbjuder ett banbrytande AI-verktyg för att uppmärksamma fallolyckor i hemmen. Detta verktyg använder avancerad teknik för att övervaka och analysera rörelser i realtid, vilket gör det möjligt att snabbt upptäcka och reagera på fallolyckor. Genom att använda detta AI-verktyg kan vi minska risken för allvarliga skador och förbättra säkerheten för äldre som bor hemma.</p>
                        <p>Vårt AI-verktyg är enkelt att installera och använda, och det kan integreras med befintliga säkerhetssystem i hemmet. Det ger omedelbara varningar till vårdpersonal och anhöriga vid en fallolycka, vilket säkerställer att hjälp kan ges så snabbt som möjligt. Med Allevicare's AI-verktyg kan du känna dig trygg i vetskapen om att dina nära och kära är säkra och övervakade dygnet runt.</p>

                        <h3>Vårt Team</h3>
                        <p>Vårt team består av erfarna sjuksköterskor, läkare och vårdpersonal som är dedikerade till att ge bästa möjliga vård med vårt AI-verktyg.</p>

                        <h3>Kontakt</h3>
                        <p>Telefon: ${phone}</p>
                        <p>Email: <a href="mailto:${email}">${email}</a></p>
                    </div>
                </div>
            </div>
        `;
        
        container.insertAdjacentHTML('beforeend', informationCard);
    });
});
