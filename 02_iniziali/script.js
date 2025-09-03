/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function firstLettersOf(array) {
    // Creo il nuovo array dove verranno pushate le lettere
    const newArray = []
    // Cerco le prime lettere degli elementi dell'array selezionato
    for (let i = 0; i < array.length; i++) {
        const elements = array[i];
        newArray.push(elements.charAt())

        console.log(elements, newArray);
    }
    return newArray
}


// Invoca la funzione qui e stampa il risultato in console
const initialsNames = firstLettersOf(names)
console.log(newwarray);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]