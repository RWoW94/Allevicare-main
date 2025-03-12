document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".info_button").addEventListener("click", function () {
        const container = document.querySelector(".grid--example");
        if (!container) return;
        

        const informationCard = `
        <div class="boxspan_1-5_row card">
            <div class="card_mg_inline card_mg_block">
                <h2>Information</h2>
                <div class="card_flex">
                    <h3>Smarta hem & trygghetsteknik</h3>
                </div>
                
                <div class="card_flex">
                    <div class="card_content">Smarta lås & kamerabevakning</div>
                    <div class="question_button btn_click" data-info="Smarta lås som Yale Doorman och Glue Lock erbjuder hög säkerhet och fjärrstyrning via mobilen. Kameraövervakning med Arlo Pro och Google Nest Cam. <a href='https://www.smarto.se/smartahem/' target='_blank'>Läs mer</a>"><i class="bi bi-question"></i></div>
                </div>

                <div class="card_flex">
                    <div class="card_content">Sensorer & larm</div>
                    <div class="question_button btn_click" data-info="Smarta sensorer från Fibaro, Netatmo och Xiaomi för högre säkerhet. <a href='https://www.abus.com/se/Konsument/Smarta-hem' target='_blank'>Läs mer</a>"><i class="bi bi-question"></i></div>
                </div>

                <div class="card_flex">
                    <div class="card_content">Ljus & belysning</div>
                    <div class="question_button btn_click" data-info="Philips Hue och IKEA Trådfri erbjuder smart belysning som styrs via appar eller röstassistenter. <a href='https://www.philips-hue.com/sv-se/explore-hue/how-it-works' target='_blank'>Läs mer</a>"><i class="bi bi-question"></i></div>
                </div>

                <div class="card_flex">
                    <div class="card_content">Trygghetsknappar & larmtjänster </div>
                    <div class="question_button btn_click" data-info="Trygghetslarm som Doro och Careium skickar automatiskt larm till anhöriga eller larmcentral vid tryckning. <a href='https://www.smartahemtest.se/test/basta-brandvarnaren-till-ditt-smarta-hem' target='_blank'>Läs mer</a>"><i class="bi bi-question"></i></div>
                </div>

                <h3>Hur använder man smarta produkter?</h3>
                <div class="card_flex">
                    <div class="card_content">Installationsguider IKEA</div>
                    <div class="question_button btn_click" data-info="De flesta produkter har detaljerade guider via tillverkarens hemsida eller YouTube. <a href='https://www.ikea.com/se/sv/customer-service/services/installation/installation-av-home-smart-produkter-pubf0c874f1' target='_blank'>Läs mer</a>"><i class="bi bi-question"></i></div>
                </div>

                <div class="card_flex">
                    <div class="card_content">Röststyrning</div>
                    <div class="question_button btn_click" data-info="Google Nest, Amazon Echo och Apple HomePod gör det möjligt att styra hemmet med röstkommandon. <a href='https://assistant.google.com/intl/sv_se/' target='_blank'>Läs mer</a>"><i class="bi bi-question"></i></div>
                </div>

                <div class="card_flex">
                    <div class="card_content">Styrning via mobilen</div>
                    <div class="question_button btn_click" data-info="Appar som Google Home, Apple Home och SmartThings låter dig styra allt från lås till belysning. <a href='https://www.samsung.com/us/smartthings/#what-is-smartthings' target='_blank'>Läs mer</a>"><i class="bi bi-question"></i></div>
                </div>

                <h3>Digital vardag – Kom igång med tekniken</h3>
                <div class="card_flex">
                    <div class="card_content">Iphone guide</div>
                    <div class="question_button btn_click" data-info="De flesta produkter har detaljerade guider via tillverkarens hemsida eller YouTube. <a href='https://support.apple.com/sv-se/guide/iphone/welcome/ios' target='_blank'>Läs mer</a>"><i class="bi bi-question"></i></div>
                </div>

                <div class="card_flex">
                    <div class="card_content">Laddar ner & använd appar</div>
                    <div class="question_button btn_click" data-info="Google Play Store och Apple App Store erbjuder appar för allt från sociala medier till bankärenden. <a href='https://support.google.com/googleplay/answer/4355207?hl=sv&sjid=16679128268153151842-EU' target='_blank'>Läs mer</a>"><i class="bi bi-question"></i></div>
                </div>

                <div class="card_flex">
                    <div class="card_content">Swish</div>
                    <div class="question_button btn_click" data-info="Bank-ID används för säker inloggning. Swish är en mobil betalningstjänst som kopplas till ditt bankkonto. <a href='https://www.swish.nu/hjalp' target='_blank'>Läs mer</a>"><i class="bi bi-question"></i></div>
                </div>

                <h3>Ekonomi, pension</h3>
                <div class="card_flex">
                    <div class="card_content">Hur funkar pensionen?</div>
                    <div class="question_button btn_click" data-info="Pensionen består av allmän pension, tjänstepension och eventuellt privat sparande. <a href='https://www.pensionsmyndigheten.se/' target='_blank'>Läs mer</a>"><i class="bi bi-question"></i></div>
                </div>

                 <div class="card_flex">
                    <div class="card_content">Extra inkomst som pensionär</div>
                    <div class="question_button btn_click" data-info="Sälja hantverk online. <a href='https://www.60plusbanken.se/lasvart/hobbyverksamhet/' target='_blank'>Läs mer</a>"><i class="bi bi-question"></i></div>
                </div>

                <div class="card_flex">
                    <div class="card_content">Bostadstillägg</div>
                    <div class="question_button btn_click" data-info="Ansök bostadstillägg hos Pensionsmyndigheten om du har låg pension. <a href='https://www.pensionsmyndigheten.se/foraldraledighet-och-barnomsorg/bostadstillaegg' target='_blank'>Läs mer</a>"><i class="bi bi-question"></i></div>
                </div>

                 <h3>Juridiska frågor & viktiga dokument</h3>
                 <div class="card_flex">
                    <div class="card_content">Framtidsfullmakt</div>
                    <div class="question_button btn_click" data-info="En fullmakt som låter en betrodd person sköta dina ärenden om du inte längre kan. <a href='https://www.skatteverket.se/privat/skatter/arbeteochinkomst/inkomster/godmanforvaltareellerformyndare/framtidsfullmakt.4.1c68351d170ce5545273f66.html?q=fullmakt' target='_blank'>Läs mer</a>"><i class="bi bi-question"></i></div>
                </div>

                 <div class="card_flex">
                    <div class="card_content">Testamente & arv</div>
                    <div class="question_button btn_click" data-info="Testamente säkerställer att din vilja följs vid arvsskifte. Kontakta en jurist för rådgivning. <a href='https://www.advokatsamfundet.se/' target='_blank'>Läs mer</a>"><i class="bi bi-question"></i></div>
                </div>

                 <div class="card_flex">
                    <div class="card_content">Bouppteckning</div>
                    <div class="question_button btn_click" data-info="Skatteverket har en guide för bouppteckning. Banken behöver ofta dödsboets dokumentation. <a href='https://www.skatteverket.se/privat/folkbokforing/narenanhorigdor/bouppteckning.4.18e1b10334ebe8bc80001217.html?q=bouppteckning' target='_blank'>Läs mer</a>"><i class="bi bi-question"></i></div>
                </div>

                <h3>Hälsa & välmående</h3>
                <div class="card_flex">
                    <div class="card_content">Träningstips</div>
                    <div class="question_button btn_click" data-info="Dagliga promenader och enkla styrkeövningar minskar risken för fall. <a href='https://www.xn--seniorhlsa-w5a.se/' target='_blank'>Läs mer</a>"><i class="bi bi-question"></i></div>
                </div>

                 <div class="card_flex">
                    <div class="card_content">Minska fallrisk</div>
                    <div class="question_button btn_click" data-info="Träning av benmuskler och balansövningar är viktiga. <a href='https://www.vardhandboken.se/vard-och-behandling/basal-och-preventiv-omvardnad/fallprevention/riskbedomning/' target='_blank'>Läs mer</a>"><i class="bi bi-question"></i></div>
                </div>

                 <h3>Socialt liv & fritid</h3>
                <div class="card_flex">
                    <div class="card_content">Senioraktiviteter</div>
                    <div class="question_button btn_click" data-info="Föreningar som PRO erbjuder kurser och evenemang. <a href='https://www.pro.se/' target='_blank'>Läs mer</a>"><i class="bi bi-question"></i></div>
                </div>

                 <div class="card_flex">
                    <div class="card_content">Volontärarbete</div>
                    <div class="question_button btn_click" data-info="Att engagera sig i frivilligorganisationer ger mening och social kontakt. <a href='https://www.volontarbyran.org/bli-volontar' target='_blank'>Läs mer</a>"><i class="bi bi-question"></i></div>
                </div>

                <h3>Kontakt</h3>
                <p>Telefon: 072-123 456 78</p>
                <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
            </div>
        </div>`;
        
        container.insertAdjacentHTML('beforeend', informationCard);
        const card = document.querySelector('.card');
        requestAnimationFrame(() => {
            card.classList.add('show');
        });

        /* Lägger till en eventlyssnare till frågeknappen */
        const questionButtons = document.querySelectorAll('.question_button');
        questionButtons.forEach(button => {
            button.addEventListener('click', function () {
                const parentCardFlex = this.closest('.card_flex');
                let infoElement = parentCardFlex.nextElementSibling;

                if (infoElement && infoElement.classList.contains('riskinfo_card')) {
                    infoElement.remove();
                    this.innerHTML = '<i class="bi bi-question"></i>';
                } else {
                    const info = this.getAttribute('data-info');
                    infoElement = document.createElement('div');
                    infoElement.classList.add('riskinfo_card');
                    infoElement.innerHTML = `<div><p>${info}</p></div>`;
                    parentCardFlex.insertAdjacentElement('afterend', infoElement);
                    this.innerHTML = '<i class="bi bi-x"></i>';
                }
            });
        });
    });
});