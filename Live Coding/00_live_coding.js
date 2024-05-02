// Conditional branches
let time = 15;
if (time < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}


let temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside.");
} else if (temperature > 20) {
  console.log("It's a pleasant day.");
} else {
  console.log("It's cool outside.");
}


let dayOfWeek = "Monday";
switch (dayOfWeek) {
  case "Monday":
    console.log("Start of the workweek.");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("Middle of the workweek.");
    break;
  case "Friday":
    console.log("End of the workweek.");
    break;
  default:
    console.log("Weekend!");
}


// While loop:
let fruits = ["apple", "banana", "orange"];
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}


// For loop:
for (let i = 0; i < 5; i++) {
    console.log(i);
}


//Advanced 
let x = 5;
let y = 10;

if (x > 0 && y > 0) {
  console.log("Entrambi x e y sono maggiori di zero.");
} else {
  console.log("Almeno uno tra x e y non è maggiore di zero.");
}


let age = 25;
if (age < 18 || age > 65) {
  console.log("La persona è o minorenne o ultracinquantenne.");
} else {
  console.log("La persona è tra i 18 e i 65 anni.");
}


let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("L'utente non è loggato.");
} else {
  console.log("L'utente è loggato.");
}



let i = 0;
let j = 5;
while (i < 5 && j > 0) {
  console.log(`i: ${i}, j: ${j}`);
  i++;
  j--;
}



let condition = true;
let counter = 0;
while (condition || counter < 3) {
  console.log(`Counter: ${counter}`);
  counter++;
  condition = false; // Modifica condition per uscire dopo la prima iterazione
}




let isValid = true;
let attempts = 0;
while (!isValid) {
  console.log("La validità è falsa.");
  attempts++;
  if (attempts > 2) {
    isValid = true; // Modifica isValid per uscire dopo 3 tentativi
  }
}
