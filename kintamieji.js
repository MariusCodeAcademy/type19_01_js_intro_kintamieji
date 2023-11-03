'use strict';
console.log('kintamieji js loaded');

// Primityvus kintamieji
// let arba const - deklaruojam kintamji, rasom TIK pirma karta sukuriant kintamaji
let age = 48; // number
let pi = 3.14; // number
let year = 2023;
// pakeisti year reiksme (nebedeklaruojam)
year = 2024;

// String - textas
let name = 'James';
let town = 'London';
let month = 'Lapkritis';

// Boolean kintamasis - tik 2 reiksmes true arba false
// isUserLoggedIn - camelCase - pagrindinis js
// IsUserLoggedIn - PascalCase
// is-user-logged-in - kebab-calse
// is_user_logged_in - snake_calse
let isRaining = false;
let isUserLoggedIn = true;
let isSpecial = true;

// null ir undefined
// null - yra kintamasis bet nera reiksmes, naudojamas isvalyti kintamojo reiksme
// undefined - kintamojo reiksme po deklaracijos, naudojamas suzinoti ar yra nustatyta reiksme

let userName;
console.log(userName); // undefined
userName = 'james123';
console.log(userName); // james123
// isvalti userName reiksme
userName = null;
console.log(userName); // null

// susikurtumes po kitnamaji savo
// amziui
let myAge = 35;
// miestui
let myTown = 'CapeTown';
// Vardui
let myName = 'James';

// kintamji kiek man bus metu po 5 metu
let ageAfter = myAge + 5;

// atspausdinti reikmes su console.log()

console.log('ageAfter:', ageAfter);
console.log('myAge ===', myAge);
console.log('isUserLoggedIn ===', isUserLoggedIn);
