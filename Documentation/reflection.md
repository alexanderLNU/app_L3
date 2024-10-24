# Reflektion

## Introduktion till min Reflektion

Samtliga ändringar jag gjort på modulen finns i testrapport.md som bilder för att visa vad som är gjort mer konkret. I denna sektion kommer jag att reflektera över ändringarna i modulen (L2), men även koden i L3 kopplat till litteraturen. Varje kapitel 2-11 kommer ha en egen rubrik där jag sammanfattar kapitlet kortfattat, sedan förklarar hur det applicerats/eller inte applicerats på min kod, slutligen visas ett screenshot med ett konkret exempel på hur kunskapen från kapitlet beaktats. **OBS** Jag kommer inte kunna reflektera över alla bitar i varje kapitel men jag väljer ut olika exempel.

## Kapitel 2 - Meaningful Names

#### **Allmänn reflektion**

Detta kapitel behandlar kunskap kring att använda meningsfulla namn i kod, även vikten att de är intentionsavslöjande. Enligt boken Clean Code är det viktigt att funktioner, klasser och variabler faktiskt reflekterar sitt syfta och hur de används i koden på ett tydligt sätt. Det i sin tur leder till att vi behöver förlita oss mindre på kommentarer överallt, och koden i sin helhet blir mer lättförståelig. Kapitlet tar även upp vikten av att inte använda namn som kan vilseleda betraktaren, samt vikten av att namnen ska vara sökbara och undvika exempelvis förkortningar som bara utvecklaren själv förstår.

---

#### **L2 reflektion**

För just detta kapitel tycker jag att **Class Names** är av hög relevans då jag faktiskt ändrade min tidigare kod i modulen på grund av denna regel från boken. De beskriver tydligt att klassnamn ska vara "nouns", inte verb som exempelvis Manager. Därav ändrade jag namn på den klassen till `WeightCollection`. Inte nog med det så ändrade jag även tre metodnamn som faktiskt kunde uppfattas olika beroende på individen, därav ändrade jag namngivning på de för att det skulle bli ännu mer intentions-avslöjande. `addWeight ()` --> `addWeightToCollection ()` för tydlighet. `removeWeight ()` --> `removeWeightFromCollection ()` för tydlighet. `add ()` --> `addWeightsTogether ()` för tydlighet. Namnen blev längre som en konsekvens av detta men jag anser att tydligheten och intentionsavslöjandet väger tyngre.

---

#### **L3 reflektion**

I och med ändringarna i L2 har jag försökt tänka på namngivningen genom hela utvecklingsprocessen och nedan kommer screenshots på tydliga exempel där jag tycker att jag annamat det för att redan nu ha tydliga namn som är relevanta och följer reglerna i Clean Code så väl som möjligt.

Exemplena nedan anser jag till stor del uppfyller Intention-Revealing Names, Avoid Disinformation och Use Pronounceable and searchable names. Min bedömning är att man förstår vad metoden gör utan att se koden, endast på namnet, det är vad det ska vara och är även sökbart och igenkänt.

![Kod-screenshot](../images/getheaviestlforspecific.png)

![Kod-screenshot](../images/getheaviestl.png)

![Kod-screenshot](../images/getnumberofs.png)

## Kapitel 3 - Functions

#### **Allmänn reflektion**

Kapitel 3 handlar i stora drag om hur funktioner skrivs bäst och vad man ska tänka på kring det. De ska göra en sak, inte vara för stora, ha en konsekvent abstraktionsnivå, samt att funktionerna ska komma som en berättelse nästan i följd. Kapitlet förklarar att argument ska minimeras och istället fokusera på namn som är beskrivande. Kapitlet berör också att funktioner inte ska ha sidoeffekter och i största allmänhet handlar det om hur vi skriver funktioner för att uppnå bättre och renare kod som är lättförståelig.

---

#### **L2 reflektion**

I testrapport.md syns screenshots på vad jag åtgärdat i L2 och just i denna sektionen skulle jag vilja fokusera på **Do One Thing** specifikt för att inte skriva för mycket text här. Jag bröt ut `fromTextInput ()`, `getTotalWeight()` och `getAverageWeight()` i flera mindre funktioner. Detta gjorde jag för att metoderna inte skulle göra flera saker samtidigt och inte ha olika abstraktionsnivå.

- `fromTextInput ()` bröts ut till `validateTextInput ()`, `validateUnitInput ()` och `parseUserInput ()`.

- `getTotalWeight ()` bröts ut till `validateWeightUnit ()`, `addUpAllWeightsInGrams ()` och `convertTotalWeightToWantedUnit ()`.

- `getAverageWeight ()` bröts ut till `calculateTheAverageWeight ()` och `validateCollectionHasWeights ()`.

---

#### **L3 reflektion**

Här är ett exempel på en valideringsmetod jag tycker speglar precis det som kapitel 3 handlar om, att funktioner ska göra en sak, och göra den bra. Bryta ut större funktioner till mindre och så vidare.

![Kod-screenshot](../images/validatesession.png)

I detta exempel finns både positivt och negativt. Jag vill beröra detta för att påvisa att jag är medveten kring det. Jag tycker den kan få positiv feedback då den gör det som den säger, namngivning är bra och den är relativt lätt att följa enligt mig. Jag tycker också att den är logisk stegvis, att koden faktiskt "berättar en historia". Men även här går att förbättra exempelvis att den gör flera saker även om jag brytit ut vissa saker. Samt att det är olika abstraktionsnivåer från högnivåkoncept till lågnivå. Jag ville ta med detta för att visa bristerna så väl som det goda då jag fortfarande lär mig.

![Kod-screenshot](../images/getavgforspecific.png)

## Kapitel 4 - Comments

#### **Allmänn reflektion**

Kapiteltet berör vikten av kommentarer och förklarar att det är en nödvändighet att använda sig utav det men att det ändå ska användas sparsamt. Jag tolkar boken som att de säger att kommentarer är ett typ av misslyckande då koden i sig själv inte "berättar allt". Jag håller med att fokus borde ligga på att skriva tydlig kod och inte lita fullt ut på att kommentarer ska täcka allt då det i en förlängning blir svårt att hålla kommentarerna uppdatterade. Boken menar att koden är den källan man kan lita på.

---

#### **L2 reflektion och L3**

Jag har använt skolans ESLint vilket innebär att alla funktioner måste ha JSDoc. Jag är väl medveten om att det används för mycket där min kod redan är självförklarande och tydlig nog. Men jag har valt att se det som att jag följer en kodstandard, som att jag arbetade på ett företag, där jag måste följa dessa lintregler och anpassa mig. Så det är positivt i sig, men det blir helt klart överflödigt med kommentarer och med hänvisning till boken bör koden vara tydlig och uttrycksfull för att ersätta överflödiga kommentarer helt enkelt.

---

Här är exempel på hur min JSDoc kan se ut:

![Kod-screenshot](../images/commentsexample.png)

## Kapitel 5 - Formatting

#### **Allmänn reflektion**

Detta kapitel visar och förklarar i både text och kodexempel hur viktigt det är att ha en struktur på sin kod som är läsbar och konsekvent hela tiden. Det handlar om att koden ska kunna vara underhållbar och förståelig dels för teamet men även framtida utvecklare som kommer arbeta i kodbasen. Boken beskriver att team bör ha en kodstandard för formattering så att koden inte är olika i hela kodbasen. Sammanfattningsvis tycker jag kapitlet redogör för hur viktigt det är att koden är förståelig, läsbar och enhetlig, det kan vi inte uppnå utan formattering.

#### **L2 reflektion**

Jag tycker att jag, i min modul, har en bra funktionell uppdelning och att funktioner är tydligt separerade från varandra, att det finns en konsekvent vertikal seperation genom projektet med tomrader, samt horisontell densitet. Jag vet med säkerhet att det kan bli bättre och att jag kan öka läsbarheten men jag är överlag nöjd med hur mitt projekt ser ut och jag tror andra utvecklare skulle finna modulen relativt enkel att läsa av och arbeta i.

---

#### **L3 reflektion**

Eftersom jag använt samma kodstandard och regler i både modulen och appen är min reflektion väldigt lik här. Men jag ser reflektionsdelen av denna uppgiften som ett tillfälle att lära sig, därför skulle jag rikta lite självkritik mot mig själv som jag anser hör hemma till ämnet formattering. Mina metoder har en tendens att ibland bli lite längre än vad de behöver, ibland är det dock svårt och man halvt tvingas till att en metod ska göra flera saker för smidighetens skull i stunden. Ett exempel på detta är `addNewLiftingSession ()`. Jag hade säkerligen kunnat separera denna metoden ut i flera olika istället för bland annat, användarinmatning och validering. Men det handlar dels om kompetensbrist men även tid för min del. Men jag tycker formattering över lag är mycket god i båda mina projekt för att ge positiv feedback! Men jag skulle kunna ha fler tomrader för att öka läsbarheten ytterligare.

![Kod-screenshot](../images/addnewliftmenu.png)

## Kapitel 6 - Objects and Data Structures

#### **Allmänn reflektion**

I detta kapitel talar författaren bland annat om att det är ett vanligt misstag att exponera objekts privata data genom exempelvis getters och setters och att det så kallat "undergräver" abstraktionens syfte. I stort handlar kapitlet om skillnaderna och att objekt döljer data och sedan exponerar detta med hjälp av funktioner/metoder och att datastrukturer exponerar sin. Något som boken tar upp är "The Law of Demeter" som i stort handlar om att objekt inte ska känna till andra objekts inre infromation som de interagerar med och att det finns risk för train-wrecks som de skriver.

---

#### **Reflektioner i min kod**

Jag har försökt, enligt upopgiftens krav, att utveckla mina projekt så pass objektorienterat som jag kan. Jag tycker att det är utmanande med det objektorienterade tankesättet och därför tror jag att jag lätt kan "råka" bryta lite mot principerna. Dock har jag använt privata fält för att dölja dessa och följa det som boken tar om the law of demeter, nedan finns exempel i bilder. Jag har också försökt att använda getters och setters då det är nödvändigt och jag har även fokuserat på att försöka att göra så det inte bryter mot abstraktionerna. Tanken har varit att hämta data utan att exponera den direkt och generellt minimerar hur mycket data jag exponerar. Men jag vet att jag ibland exponerar interna strukturer men det viktiga är att jag tar lärdom av det då objektorienterad programmering är en stor utmaning för mig.

---

![Kod-screenshot](../images/privatafalt.png)

![Kod-screenshot](../images/getliftstats.png)

## Kapitel 7 - Error Handling

#### **Allmänn reflektion**

En av alla viktiga delar för att skriva "Clean Code" är just felhantering men det kan vara svårt med felhantering då det lätt kan göra koden svår att läsa. Boken förklarar att det är viktigt att ha en separation mellan själva "huvudlogiken" och felhanteringen för att undvika detta. De tar också upp att felkoder inte är att föredra, utan istället kasta undantag och att dessa undantag ska ge tillräckligt med kontext.

---

#### **L2 reflektion**

Jag refaktorerade L2 en hel del som jag visade med screenshots i testrapporten, en del i det arbetet var att bryta ut metoder i flera metoder, specifikt valideringsmetoder. Då uppfyller jag reglerna ganska väl i Clean Code enligt mig eftersom jag anropar valideringsmetoden inuti de andra metoderna - istället för att ha valideringen direkt i metoden och bryta mot Do One Thing bland annat. Första bilden nedan är ett exempel på min metod fromTextInput som resulterade i tre ytterligare metoder: `validateTextInput ()`, `validateUnitInput ()` och `parseUserInput ()`. Jag är nöjd med den refaktoriseringen och jag tycker ändå att jag till min förmåga uppfyller kapitlet väl med tanke på korrigeringarna.

---

#### **L3 reflektion**

I och med refaktoriseringen jag gjorde på mina metoder i L2 så försökte jag behålla samma tankesätt i L3. Att jag bryter ut det i flera metoder och anropar de, istället för att ha extremt mycket kod i varje funktion - som dessutom gör flera olika saker, vilket inte är bra. Jag tar med exempel på det nedan också hur jag använt detta.

Något jag tycker är viktigt att nämna är också att Daniel tagit upp att validering i constructorn är en bra grej, jag försökte få med det också och ta till mig den informationen! (Se bild på det nedan med)

![Kod-screenshot](../images/validateltva.png)

![Kod-screenshot](../images/valexempel.png)

![Kod-screenshot](../images/valconstructor.png)

## Kapitel 8 - Boundaries

#### **Allmänn reflektion**

---

#### **L2 reflektion**

---

#### **L3 reflektion**

![Kod-screenshot]()

![Kod-screenshot]()

![Kod-screenshot]()

## Kapitel 9 - Unit Tests

#### **Allmänn reflektion**

---

#### **L2 reflektion**

---

#### **L3 reflektion**

![Kod-screenshot]()

![Kod-screenshot]()

![Kod-screenshot]()

## Kapitel 10 - Classes

#### **Allmänn reflektion**

---

#### **L2 reflektion**

---

#### **L3 reflektion**

![Kod-screenshot]()

![Kod-screenshot]()

![Kod-screenshot]()

## Kapitel 11 - Systems

#### **Allmänn reflektion**

---

#### **L2 reflektion**

---

#### **L3 reflektion**

![Kod-screenshot]()

![Kod-screenshot]()

![Kod-screenshot]()
