# Reflektion

## Introduktion till min Reflektion

Samtliga ändringar jag gjort på modulen finns i testrapport.md som bilder för att visa vad som är gjort mer konkret. I denna sektion kommer jag att reflektera över ändringarna i modulen (L2), men även koden i L3 kopplat till litteraturen. Varje kapitel 2-11 kommer ha en egen rubrik där jag sammanfattar kapitlet kortfattat, sedan förklarar hur det applicerats/eller inte applicerats på min kod, slutligen visas ett screenshot med ett konkret exempel på hur kunskapen från kapitlet beaktats. **OBS** Jag kommer inte kunna reflektera över alla bitar i varje kapitel men jag väljer ut olika exempel.

## Kapitel 2 - Meaningful Names

#### **Allmänn reflektion**

Detta kapitel behandlar kunskap kring att använda meningsfulla namn i kod, även vikten att de är intentionsavslöjande. Enligt boken Clean Code är det viktigt att funktioner, klasser och variabler faktiskt reflekterar sitt syfta och hur de används i koden på ett tydligt sätt. Det i sin tur leder till att vi behöver förlita oss mindre på kommentarer överallt, och koden i sin helhet blir mer lättförståelig. Kapitlet tar även upp vikten av att inte använda namn som kan vilseleda betraktaren, samt vikten av att namnen ska vara sökbara och undvika exempelvis förkortningar som bara utvecklaren själv förstår.

---

#### **L2 reflektion**

För just detta kapitel tycker jag att **Class Names** är av hög relevans då jag faktiskt ändrade min tidigare kod i modulen på grund av denna regel från boken. De beskriver tydligt att klassnamn ska vara "nouns", inte verb som exempelvis Manager. Därav ändrade jag namn på den klassen till WeightCollection. Inte nog med det så ändrade jag även tre metodnamn som faktiskt kunde uppfattas olika beroende på individen, därav ändrade jag namngivning på de för att det skulle bli ännu mer intentions-avslöjande. addWeight() --> addWeightToCollection () för tydlighet. removeWeight () --> removeWeightFromCollection () för tydlighet. add () --> addWeightsTogether () för tydlighet. Namnen blev längre som en konsekvens av detta men jag anser att tydligheten och intentionsavslöjandet väger tyngre.

---

#### **L3 reflektion**

I och med ändringarna i L2 har jag försökt tänka på namngivningen genom hela utvecklingsprocessen och nedan kommer screenshots på tydliga exempel där jag tycker att jag annamat det för att redan nu ha tydliga namn som är relevanta och följer reglerna i Clean Code så väl som möjligt.

Exemplena nedan anser jag till stor del uppfyller Intention-Revealing Names, Avoid Disinformation och Use Pronounceable and searchable names. Min bedömning är att man förstår vad metoden gör utan att se koden, endast på namnet, det är vad det ska vara och är även sökbart och igenkänt.

![Bild över coverage](../images/getheaviestlforspecific.png)

![Bild över coverage](../images/getheaviestl.png)

![Bild över coverage](../images/getnumberofs.png)

## Kapitel 3 - Functions

#### **Allmänn reflektion**

Detta kapitel behandlar

---

#### **L2 reflektion**

För just detta kapitel

---

#### **L3 reflektion**

I och med ändringarna i L2 har jag försökt tänka på namngivningen genom hela utvecklingsprocessen och nedan kommer screenshots på tydliga exempel där jag tycker att jag annamat det för att redan nu ha tydliga namn som är relevanta och följer reglerna i Clean Code så väl som möjligt.

Exemplena nedan anser jag till stor del uppfyller Intention-Revealing Names, Avoid Disinformation och Use Pronounceable and searchable names. Min bedömning är att man förstår vad metoden gör utan att se koden, endast på namnet, det är vad det ska vara och är även sökbart och igenkänt.

![Bild över coverage](bild1)

![Bild över coverage](bild2)

![Bild över coverage](bild3)

1. Reflektera över alla ändringar jag gjort i modulen (L2).
2. Skriv hur varje kapitel 2-11 i Clean Code påverkat eller inte påverkat min kod.
3. Använd bokens termer så gott jag kan och ha med exempel på screenshots ur koden på varje reflektion.
4. Har jag icke självklara överväganden med olika kvalitetsregler som står i konflikt med varandra så är dessa extra intressanta.

// Do one thing kap 3 med funktionerna
