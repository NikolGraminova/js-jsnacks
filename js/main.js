/* Consegna ESERCIZIO FONDAMENTALE:

Milestone 1:
Crea una funzione chiamata sommaNumeri che prenda un array di N numeri e calcoli la somma di tutti questi numeri contenuti nell'array, restituendolo come risultato.
Utilizzare la funzione sommaNumeri per stampare il risultato. L'array di N numeri da passare alla funzione lo create chiedendo all'utente quanti numeri vuole inserire (cioè N), 
e poi facendogli inserire questi N numeri all'utente stesso tramite apposito prompt().

Milestone 2:
Crea una funzione chiamata mediaAritmetica che prende in input un array di N numeri e restituisca la media aritmetica dei numeri contenuti nell'array.
Utilizzare la funzione sommaNumeri precedentemente creata per calcolare la media dei numeri che vanno chiesti all'utente attraverso dei prompt.
Potete ad esempio provare ad usare questo programma per inserire N voti di scuola e farvi restituire qual è la media di tutti i voti inseriti! */


// ----- Programma principale -----

//Milestone 1
let numbersAmount = parseInt(prompt("Quanti numeri vuoi inserire? :"));
let numberSum = sommaNumeri(numbersAmount);
console.log("La somma dei numeri scelti è: " + (numberSum));

//Milestone 2

console.log("La loro media è: " + (mediaAritmetica(numberSum, numbersAmount)));


// ----- Funzioni -----

function sommaNumeri(arrayLength) {
    let numbersArray = []
    let result = 0;
    for (let i = 0; i < arrayLength; i++) {
        let num = parseInt(prompt("Aggiungi un numero:"))
        numbersArray.push(num);
        result += num;
    } return result;
}

function mediaAritmetica(arraySum, nums) {
    return arraySum / nums;
}