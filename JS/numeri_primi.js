// devo scrivere un programma che stampi i primi 100 numeri primi
// semplificazione
// stampo i primi 100 numeri che non sono divisibili per 2, 3, 5, 7
// stampo i numeri NON divisibili per 2 e per 3 e per 5 e per 7
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
        console.log(i)
    }
}
let x = 0
for (let i = 0; i < 55; i++) {
    if (i % 2 === 0) {
        x = x + 1
    }
}
console.log(x)
// se questo e' il modo con cui contiamo tutti i numeri pari 
// tra 0 e 55, ALLORA come faccio a fermarmi quando ho raggiunto 100 
// numeri divisibili per 2, 3, 5, 7?
// stampo i primi 100 numeri NON divisibili per 2 e per 3 e per 5 e per 7
let numeriNonDivisibiliVisti = 0
for (let i = 0; numeriNonDivisibiliVisti <= 100; i++) {
    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
        numeriNonDivisibiliVisti = numeriNonDivisibiliVisti + 1
        console.log(i)
    }
}