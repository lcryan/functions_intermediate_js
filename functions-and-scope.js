/* Opdracht  1: Cum Laude *
/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger).
// Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet,
// ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.
//
const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
let cumLaudeStudents = 0;
for (let i = 0; i < grades.length; i++) {
    if (i >= 8) {
        cumLaudeStudents = grades[i]
    }
}
console.log(cumLaudeStudents);

// ---- Verwachte uitkomst: 6 //check-done


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

let array1 = [6, 4, 5];
let array2 = [8, 9, 4, 6, 10];

function cumLaude(arrayOfGrades) {
    let cumLaudeStudents = 0;
    for (let i = 0; i < arrayOfGrades.length; i++) {
        if (arrayOfGrades[i] >= 8) {

            cumLaudeStudents = cumLaudeStudents + 1;
        }
    }
    return cumLaudeStudents;
}

console.log(cumLaude(grades))
console.log(cumLaude(array1));
console.log(cumLaude(array2));


// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

const grades2 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
const grades22 = [6, 4, 5];
const grades23 = [8, 9, 4, 6, 10];
let sum = 0;

for (let i = 0; i < grades2.length; i++) {
    sum += grades2[i]
}

let average = sum / grades2.length
console.log(average)


// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

let averageGrades = 0;

function arrayOfGrades() {
    let sum = 0;
    for (let i = 0; i < grades2.length; i++) {
        sum += grades2[i] // zie boven let uit 2a.
        averageGrades = sum / grades2.length
    }
    return averageGrades
}

console.log(arrayOfGrades())


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

let decimalValue = arrayOfGrades().toFixed(2)
console.log(decimalValue)

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

//1. Wir brauchen zum Durchlaufen aller Nummern im Array einen for-loop
//2. Die gesuchte Nummer (welche ist die hoechste Nummer im Array) muss groesser sein als alle Nummern im Array: if else statement
//3. Wir muessen das Ergenis in einer variablen speichern, die wir vor der Funktion abspeichern, um spaeter im console.log darauf zugreifen zu koennen.

const grades3 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6]
let topGrade = 0;

function highestGrade() {
    for (let i = 0; i < grades3.length; i++) {
        if (grades3[i] > topGrade) {
            topGrade = grades3[i];
        }
    }
    return topGrade
}

console.log(highestGrade(topGrade))
// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

const grades31 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6]
let topGrade31 = 0;
for (let i = 0; i < grades31.length; i++) {
    if (grades31[i] > topGrade31) {
        topGrade31 = grades31[i];
    }
}
console.log(topGrade31)
