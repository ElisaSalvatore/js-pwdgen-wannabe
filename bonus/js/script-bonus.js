// PROMPT User Data

// Chiedere nome animale domestico utente
const userPetName = prompt(`Inserisci il nome di un tuo animale domestico:`);
console.log(userPetName);

// Chiedere cibo preferito utente
const userFavoriteFood = prompt(`Inserisci il tuo cibo preferito`);
console.log(userFavoriteFood);

// Chiedere anno di nascita utente
const userYearBirth = prompt(`Inserisci il tuo anno di nascita:`);
console.log(userYearBirth);

// Result User Data
let userData = `${userPetName}${userFavoriteFood}${userYearBirth}`;
console.log(userData);

// Anno passato
let lastYear = 20;
console.log(lastYear);

// Result User Data + anno passato
let htmlElement = document.getElementById(`userPwd`);
htmlElement.innerHTML = `${userData}${lastYear}`;

