// Creazione di un array monodimensionale
let fruits = ["apple", "banana", "orange", "grape"];


// Accesso, modifica e cancellazione dei valori in un array
console.log(fruits[0]); // Output: "apple"
fruits[1] = "pear";
console.log(fruits); // Output: ["apple", "pear", "orange", "grape"]
fruits.splice(2, 1); // Rimuove l'elemento "orange"
console.log(fruits); // Output: ["apple", "pear", "grape"]


// Concatenazione di array
let vegetables = ["carrot", "broccoli"];
let combinedArray = fruits.concat(vegetables);
console.log(combinedArray); // Output: ["apple", "pear", "grape", "carrot", "broccoli"]


// Utilizzo dei metodi pop(), shift(), e splice()
fruits.pop(); // Rimuove l'ultimo elemento "grape"
console.log(fruits); // Output: ["apple", "pear"]

fruits.shift(); // Rimuove il primo elemento "apple"
console.log(fruits); // Output: ["pear"]

fruits.splice(0, 1, "kiwi"); // Sostituisce "pear" con "kiwi"
console.log(fruits); // Output: ["kiwi"]


// Trovare elementi in un array
let index = fruits.indexOf("kiwi");
console.log(index); // Output: 0 (indice dell'elemento "kiwi" nell'array)


// Ordinamento dell'array
fruits.push("orange", "apple");
fruits.sort();
console.log(fruits); // Output: ["apple", "apple", "kiwi", "orange"]


// Creazione di un array bidimensionale e accesso agli elementi
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let emptyArray = [];
let emptyIndex = emptyArray.pop();
console.log(emptyIndex);

let myElementFind = username.find(function (element) {
  return element === "Davide";
});


numbers = [-10, 9, 5, 6, -7, 8, -5, 0];
let myElementFindNumber = numbers.reverse().find(function (element) {
  return element >= 0;
});

console.log(myElementFind);
console.log(myElementFindNumber);
