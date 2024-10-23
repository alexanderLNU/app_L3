# Alexander Strength Lifting Tool (L3)

## Introduktion av App

**"Alexander Strength Lifting Tool"** är en konsollapplikation som i en session tillåter användare lägga till styrketräningspass där användaren specificerar sina övningar, vikt, enhet, reps och sets. När användaren registrerat träningspasset med sina valda övningar kan användaren få ut statistik baserat på prestationerna den registrerat. Exempelvis: Vad har jag tagit som mest i vikt? Vad är min lägsta vikt i just Bänkpress? Lista alla dina registrerade träningspass.

Appen är tänkt att vidareutvecklas för att kunna besitta mer funktionalitet men också erbjuda ett UI med inlogg för användare för att kunna spara och lagra datan även när appen stängs.

## Dokumentation

Här finner du all detaljerad dokumentation kring appen och vad du kan göra med den!

[Kravspecifikation och Vision](./Documentation/kravspecifikation.md)

[Reflektion](./Documentation/reflection.md)

[Testrapport](./Documentation/testrapport.md)

## Installation

Så här kommer du igång med **"Alexander Strength Lifting Tool"**!

**Innan du påbörjar installationen!**

Vänligen kontrollera att du inte har en äldre version av Node än version 14.

```bash
node -v
```

1. **Klona detta repositoriet på följande sätt:**

```
git clone https://github.com/alexanderLNU/app_L3.git
```

2. **Installera alla beroenden:**

   Öppna en ny terminal och kopiera in:

```
npm install
```

3. **Starta applikationen:**

   Skriv in följande i ditt terminalfönster:

```
node src/main.js
```

Du bör nu presenteras av detta i terminalen och är redo att använda appen:

```
Hello, Welcome to "Alexander Strength Lifting Tool"!

Main Menu:
1. Add new lifting session
2. View your stats
3. View all lifting sessions
4. Remove a lifting session
5. Quit the app
Choose one of the following (1-5):
```

## Exempel på användning

Här kommer ett scenario och exempel på användning av appen. Du kan göra mer än vad som illustreras här men detta kan hjälpa dig att komma igång med användandet på ett smidigt sätt!

#### Skapa en "Lifting Session" med Bench Press och se att statistiken för tyngsta lyft skrivs ut

**Steg 1:** Öppna terminalen i Visual Studio Code.
**Steg 2:** Starta applikationen med kommandot:
`node src/main.js`

**Förväntat resultat/Output**
Applikationen ska nu ha skrivit ut följande i terminalen:

```
Hello, Welcome to "Alexander Strength Lifting Tool"!

Main Menu:
1. Add new lifting session
2. View your stats
3. View all lifting sessions
4. Remove a lifting session
5. Quit the app
Choose one of the following (1-5):
```

**Steg 3:** Välj alternativ 1 i huvudmenyn "Add new lifting session"

**Din input**
Efter att ha valt alternativ 1, kommer applikationen be dig om information för att skapa en ny lifting session. Använd följande input-data för de olika frågeställningarna:

```
Enter the name of your lifting session: Chest Session
Enter the name of the lift: Bench Press
Enter the weight lifted: 90
Enter the unit of the weight (kg/lbs): kg
Enter the reps done: 8
Enter the sets done: 4
Do you want to add another lift to the session? (y/n): n
```

**Förväntat resultat/Output**
Efter du valt "n" på sista frågeställningen ska applikationen skriva ut:

```
You have successfully added the lifting session!
```

**Steg 4:** Välj alternativ 2 i huvudmenyn

**Förväntat resultat/Output**
Applikationen ska skriva ut 6 olika alternativ för att visa användaren statistik. Det ska presenteras som följande:

```
Your performance stats:
1. The heaviest lift out of all lifts
2. The lightest lift out of all lifts
3. The average weight out of all lifts
4. The heaviest lift of a specific lift
5. The lightest lift of a specific lift
6. The average weight of a specific lift
Choose one of the following (1-6):
```

**Steg 5:** Välj alternativ 1.

**Förväntat resultat/Output**

The heaviest lift out of all lifts is: 90 kg

Du kan nu fortsätta utforska applikationen!
