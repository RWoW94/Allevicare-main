document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".info_button").addEventListener("click", function () {
        const container = document.querySelector(".grid--example");  // Select the container for the information card
        if (!container) return;

        // You can define any dynamic content as variables
        const phone = "08-123 456 78";
        const email = "hejsan@cmail.gh";

        const informationCard = `
        <div class="boxspan_1-5_row card card_flex">
    <div class="card_mg_inline card_mg_block">
        <h2>Information</h2>
        <div class="card_flex card_flex_col">

            <h3>Smarta hem & trygghetsteknik</h3>

            <h4>Säkerhet & trygghet i hemmet</h4>
            <ul>
                <li><strong>Smarta lås & kameraövervakning – Vilka är bäst?</strong><br>
                    <em>Smarta lås som Yale Doorman och Glue Lock erbjuder hög säkerhet och fjärrstyrning via mobilen. När det gäller kameraövervakning är Arlo Pro och Google Nest Cam populära val.</em>
                    <a href="https://www.smarto.se/smartahem/?utm_source=chatgpt.com" target="_blank">Läs mer om smarta lås och kameraövervakning</a>
                </li>
                <li><strong>Sensorer & larm (rörelse, dörrar, brand, gas, vattenläckage)</strong><br>
                    <em>Smarta sensorer från Fibaro, Netatmo och Xiaomi kan kopplas till ett smart hem-system för ökad säkerhet.</em>
                    <a href="https://www.abus.com/se/Konsument/Smarta-hem?utm_source=chatgpt.com" target="_blank">Läs mer om sensorer och larm</a>
                </li>
                <li><strong>Ljus & belysning som anpassar sig automatiskt</strong><br>
                    <em>Philips Hue och IKEA Trådfri erbjuder smart belysning som styrs via appar eller röstassistenter.</em>
                    <a href="https://www.philips-hue.com/sv-se/explore-hue/how-it-works" target="_blank">Läs mer om Philips Hue</a>
                </li>
                <li><strong>Trygghetsknappar & larmtjänster – hur fungerar de?</strong><br>
                    <em>Trygghetslarm som Doro och Careium skickar automatiskt larm till anhöriga eller larmcentral vid tryckning.</em>
                    <a href="https://www.smartahemtest.se/test/basta-brandvarnaren-till-ditt-smarta-hem?utm_source=chatgpt.com" target="_blank">Läs mer om trygghetsknappar och larmtjänster</a>
                </li>
            </ul>

            <h4>Hur använder man smarta produkter?</h4>
            <ul>
                <li><strong>Installationsguider för olika produkter</strong><br>
                    <em>De flesta produkter har detaljerade guider via tillverkarens hemsida eller YouTube.</em>
                    <a href="https://www.ikea.com/se/sv/customer-service/services/installation/installation-av-home-smart-produkter-pubf0c874f1?utm_source=chatgpt.com" target="_blank">Läs mer om installationsguider</a>
                </li>
                <li><strong>Röststyrning med Google Assistant, Alexa, Siri</strong><br>
                    <em>Google Nest, Amazon Echo och Apple HomePod gör det möjligt att styra hemmet med röstkommandon.</em>
                    <a href="https://assistant.google.com/intl/sv_se/" target="_blank">Läs mer om Google Assistant</a>
                </li>
                <li><strong>Styrning via mobilen – hur fungerar det?</strong><br>
                    <em>Appar som Google Home, Apple Home och SmartThings låter dig styra allt från lås till belysning.</em>
                    <a href="https://www.samsung.com/us/smartthings/#what-is-smartthings" target="_blank">Läs mer om SmartThings</a>
                </li>
            </ul>

            <h3>Digital vardag – Kom igång med tekniken</h3>

            <h4>Hur använder man en smartphone eller surfplatta?</h4>
            <ul>
                <li><strong>Grundläggande funktioner – samtal, sms, kamera</strong><br>
                    <em>Moderna smartphones har intuitiva gränssnitt. Android och iPhone har guider för nybörjare.</em>
                    <a href="https://www.apple.com/se/iphone/?utm_source=chatgpt.com" target="_blank">Läs mer om iPhone</a>
                </li>
                <li><strong>Hur man laddar ner & använder appar</strong><br>
                    <em>Google Play Store och Apple App Store erbjuder appar för allt från sociala medier till bankärenden.</em>
                    <a href="https://support.google.com/googleplay/answer/4355207?hl=sv&sjid=16679128268153151842-EU" target="_blank">Läs mer om Google Play Store</a>
                </li>
                <li><strong>Internetbank & Swish – så fungerar det</strong><br>
                    <em>Bank-ID används för säker inloggning. Swish är en mobil betalningstjänst som kopplas till ditt bankkonto.</em>
                    <a href="https://www.swish.nu/hjalp" target="_blank">Läs mer om Swish</a>
                </li>
            </ul>

            <h3>Ekonomi, pension & juridik</h3>

            <h4>Pension & ekonomi som senior</h4>
            <ul>
                <li><strong>Hur funkar pensionen?</strong><br>
                    <em>Pensionen består av allmän pension, tjänstepension och eventuellt privat sparande. Pensionsmyndigheten har en bra kalkylator.</em>
                    <a href="https://www.pensionsmyndigheten.se/" target="_blank">Läs mer om pension</a>
                </li>
                <li><strong>Extra inkomster som pensionär – tips & råd</strong><br>
                    <em>Sälja hantverk online.</em>
                    <a href="https://www.60plusbanken.se/lasvart/hobbyverksamhet/" target="_blank">Läs mer om att sälja online</a>
                </li>
                <li><strong>Bostadstillägg & andra ekonomiska stöd</strong><br>
                    <em>Ansök hos Pensionsmyndigheten om du har låg pension.</em>
                    <a href="https://www.pensionsmyndigheten.se/foraldraledighet-och-barnomsorg/bostadstillaegg" target="_blank">Läs mer om bostadstillägg</a>
                </li>
            </ul>

            <h4>Juridiska frågor & viktiga dokument</h4>
            <ul>
                <li><strong>Vad är en framtidsfullmakt?</strong><br>
                    <em>En fullmakt som låter en betrodd person sköta dina ärenden om du inte längre kan.</em>
                    <a href="https://www.skatteverket.se/privat/skatter/arbeteochinkomst/inkomster/godmanforvaltareellerformyndare/framtidsfullmakt.4.1c68351d170ce5545273f66.html?q=fullmakt" target="_blank">Läs mer om framtidsfullmakt</a>
                </li>
                <li><strong>Testamente & arv – vad gäller?</strong><br>
                    <em>Testamente säkerställer att din vilja följs vid arvsskifte. Kontakta en jurist för rådgivning.</em>
                    <a href="https://www.advokatsamfundet.se/" target="_blank">Läs mer om testamenten och arv</a>
                </li>
                <li><strong>Bouppteckning & bankärenden efter en anhörigs bortgång</strong><br>
                    <em>Skatteverket har en guide för bouppteckning. Banken behöver ofta dödsboets dokumentation.</em>
                    <a href="https://www.skatteverket.se/privat/folkbokforing/narenanhorigdor/bouppteckning.4.18e1b10334ebe8bc80001217.html?q=bouppteckning" target="_blank">Läs mer om bouppteckning</a>
                </li>
            </ul>

            <h3>Hälsa & välmående</h3>

            <h4>Rörelse & motion för äldre</h4>
            <ul>
                <li><strong>Träningstips för bättre balans & styrka</strong><br>
                    <em>Dagliga promenader och enkla styrkeövningar minskar risken för fall.</em>
                    <a href="https://www.xn--seniorhlsa-w5a.se/" target="_blank">Läs mer om träning för äldre</a>
                </li>
                <li><strong>Viktiga övningar för att minska fallrisk</strong><br>
                    <em>Träning av benmuskler och balansövningar är viktiga.</em>
                    <a href="https://www.vardhandboken.se/vard-och-behandling/basal-och-preventiv-omvardnad/fallprevention/riskbedomning/" target="_blank">Läs mer om att minska fallrisk</a>
                </li>
            </ul>

            <h3>Socialt liv & fritid</h3>

            <h4>Hitta aktiviteter & hobbys som äldre</h4>
            <ul>
                <li><strong>Digitala föreningar & senioraktiviteter</strong><br>
                    <em>Föreningar som PRO erbjuder kurser och evenemang.</em>
                    <a href="https://www.pro.se/" target="_blank">Läs mer om PRO</a>
                </li>
                <li><strong>Volontärarbete & engagemang</strong><br>
                    <em>Att engagera sig i frivilligorganisationer ger mening och social kontakt.</em>
                    <a href="https://www.volontarbyran.org/bli-volontar" target="_blank">Läs mer om volontärarbete</a>
                </li>
            </ul>

            <h3>Kontakt</h3>
            <p>Telefon: 08-123 456 78</p>
            <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>

        </div>
    </div>
</div>


    `;
            
        container.insertAdjacentHTML('beforeend', informationCard);
        const card = document.querySelector('.card');
        requestAnimationFrame(() => {
          card.classList.add('show');
        });
    });
});
