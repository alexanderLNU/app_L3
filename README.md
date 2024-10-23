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

## Kom igång
