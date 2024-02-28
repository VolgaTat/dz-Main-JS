//Написать код в одну строчку, которая проверит 
//возможность вечти машину по следующим параметрам:

let hasLicence = true;// имеет права
let age = 30;         // возраст
let isDrunk = false;  // пьян

console.log((age >= 18 && hasLicence && !isDrunk) ? "Можно водить машину" : "Нельзя водить! Только игрушечную)")

hasLicence = true;
age = 10;
isDrunk = false;

console.log((age >= 18 && hasLicence && !isDrunk) ? "Можно водить машину" : "Нельзя водить! Только игрушечную)")

hasLicence = false;
age = 10;
isDrunk = false;

console.log((age >= 18 && hasLicence && !isDrunk) ? "Можно водить машину" : "Нельзя водить! Только игрушечную)")

hasLicence = false;
age = 22;
isDrunk = true;

console.log((age >= 18 && hasLicence && !isDrunk) ? "Можно водить машину" : "Нельзя водить! Только игрушечную)")
