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

![Bild över coverage](../images/getheaviestlforspecific.png)

![Bild över coverage](../images/getheaviestl.png)

![Bild över coverage](../images/getnumberofs.png)

## Kapitel 3 - Functions

#### **Allmänn reflektion**

Kapitel 3 handlar i stora drag om hur funktioner skrivs bäst och vad man ska tänka på kring det. De ska göra en sak, inte vara för stora, ha en konsekvent abstraktionsnivå, samt att funktionerna ska komma som en berättelse nästan i följd. Kapitlet förklarar att argument ska minimeras och istället fokusera på namn som är beskrivande. Kapitlet berör också att funktioner inte ska ha sidoeffekter och i största allmänhet handlar det om hur vi skriver funktioner för att uppnå bättre och renare kod som är lättförståelig.

---

#### **L2 reflektion**

I testrapport.md syns screenshots på vad jag åtgärdat i L2 och just i denna sektionen skulle jag vilja fokusera på **Do One Thing** specifikt för att inte srkiva för mycket text här. Jag bröt ut `fromTextInput ()`, `getTotalWeight()` och `getAverageWeight()` i flera mindre funktioner. Detta gjorde jag för att metoderna inte skulle göra flera saker samtidigt och inte ha olika abstraktionsnivå.

- `fromTextInput ()` bröts ut till `validateTextInput ()`, `validateUnitInput ()` och `parseUserInput ()`.

- `getTotalWeight ()` bröts ut till `validateWeightUnit ()`, `addUpAllWeightsInGrams ()` och `convertTotalWeightToWantedUnit ()`.

- `getAverageWeight ()` bröts ut till `calculateTheAverageWeight ()` och `validateCollectionHasWeights ()`.

---

#### **L3 reflektion**

Här är ett exempel på en valideringsmetod jag tycker speglar precis det som kapitel 3 handlar om, att funktioner ska göra en sak, och göra den bra. Bryta ut större funktioner till mindre och så vidare.

![Bild över coverage](../images/validatesession.png)

I detta exempel finns både positivt och negativt. Jag vill beröra detta för att påvisa att jag är medveten kring det. Jag tycker den kan få positiv feedback då den gör det som den säger, namngivning är bra och den är relativt lätt att följa enligt mig. Jag tycker också att den är logisk stegvis, att koden faktiskt "berättar en historia". Men även här går att förbättra exempelvis att den gör flera saker även om jag brytit ut vissa saker. Samt att det är olika abstraktionsnivåer från högnivåkoncept till lågnivå. Jag ville ta med detta för att visa bristerna så väl som det goda då jag fortfarande lär mig.

![Bild över coverage](../images/getavgforspecific.png)

## Kapitel 4 - Comments

#### **Allmänn reflektion**

Detta

---

#### **L2 reflektion**

För

---

#### **L3 reflektion**

Hej

![Bild över coverage]()

![Bild över coverage]()

![Bild över coverage]()
