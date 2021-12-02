// PROMPT

// Chiedere nome utente - CONST
const userName = prompt('Inserisci il tuo nome:');
console.log(userName);

// Chiedere cognome utente - CONST
const userSurname = prompt('Inserisci il tuo cognome:');
console.log(userSurname);

// Chiedere colore preferito - CONST
const userColor = prompt('Inserisci il tuo colore preferito:');
console.log(userColor);

// result: Password generata - LET
let userData = userName + userSurname + userColor;
console.log(userData);

// // Anno corrente - LET
let currentYear = 21;
console.log(currentYear);

// result + anno - LET
let htmlElement = document.getElementById('userPwd');
htmlElement.innerHTML = `${userData}${currentYear}`;