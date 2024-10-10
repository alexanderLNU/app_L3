# Vision och Krav

## Vision för appen

I denna iteration eller version av appen vill jag att den ska vara relativt enkel men ändå kunna uppfylla kraven för att vara som en loggbok för styrketränare. Tanken är att personer som tränar på gym kan registrera sina styrkeprestationer för de olika övningar de har. Exempelvis tar person X 40 kg i bänkpress och kan då logga det. Tanken är att det blir en konsollapplikation där användaren kan se en historik av vilka vikter den tagit i respektive övning, samt kunna använda modulen till att få fram när de presterat som bäst (högsta vikt) och sämst (lägsta vikt). Även genomsnittet av vikter ska kunna fungera. Appen ska kunna tillgodose tillräckligt med funktioner för att vara användbar för personer som styrketränar och vill följa upp sin styrketräning. På grund av den bristande tid som finns åt detta projektet kan jag inte utveckla den mest optimala appen men visionen är att appen till slut ska bestå av både en backend och frontend med inloggning och så vidare. I denna version läggs fokus/vision på att funktionaliteten ska vara på plats enligt kraven, samt att konsollapplikationen ska gå att bruka som det är tänkt.

## Kravspecifikation

Jag har delat upp kravspecifikationen i olika rubriker likt det individuella projektet i 1dv613 för att samla allt strukturerat.

### Funktionella Krav

- En användare ska kunna registrera/logga tagen vikt för olika styrkeövningar.
- Det som registreras av användare ska sparas och användaren ska kunna se sina loggade pass.
- En användare ska kunna få fram olika vikter beroende på vad man vill se (Högsta vikt, lägsta vikt och snittet av vikt tagen av användaren). Detta är de primära kraven men mer funktionalitet kan komma att anpassas in i appen.
- Applikationen ska kunna omvandla olika viktenheter då det kan vara relevant för användaren (g, kg, mg, lb, stone och oz).

### Icke-funktionella Krav

- Appen ska ha ett konsollgränssnitt för enkel användning.
- Appen ska vara enkel att vidareutveckla och underhålla för att kunna bygga vidare på applikationen vid första leverans.
- Appen ska följa Clean Codes principer så gott det går och i de fallen det går att applicera. Det kan hända att det finns brister trots detta krav på grund av kompetensbrist.

### Organisationskrav

- Det är viktigt att applikationen utvecklas i vanilla javascript på ett objektorienterat sätt med klasser.
- För att kunna följa utvecklingen av applikationen bör det göras commits till Github frekvent med rimliga mellanrum.

### Versionshantering

- Versionhantering sker genom Git och koden återfinns på ett Github repositorium.

### Kodstandard

- LNU ESLint kommer att följas genom hela applikationens utveckling.
- Applikationen ska ha Clean Code som stöd för att uppnå hög kodkvalitet.
- All kod och kommentarer ska vara på engelska, språk ska inte blandas.

### Koddokumentation

- JSDoc kommer användas genom hela utvecklingen.
- README-fil kommer finnas tillgänglig för applikationen på Github.
- Denna vision och kravspecifikation kommer finnas tillgänglig på Github.
- Reflektion kommer finnas tillgänglig för Clean Code kapitel.
- Sammanställning på vilka förändringar jag gjort på modulen (L2) kommer finnas tillgänglig på Github.

### Externa Krav

- I denna version kommer inte appen behandla personuppgifter eller något dylikt, därav bedömer jag att det inte finns några etiska problem eller dylikt som kan förekomma.
