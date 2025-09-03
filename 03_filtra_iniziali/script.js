/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.


function firstLettersFilter(array, x) {
    // Creo il nuovo array dove verranno pushate le parole filtrate per la lettera scelta
    const newArray = []
    // Cerco le prime lettere degli elementi dell'array selezionato
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.charAt() === x) {
            newArray.push(element)
        }
    }
    return newArray
}


// Invoca la funzione qui e stampa il risultato in console
let letterToFilter = 'A' //lettera da scegliere per il filtro
const namesA = firstLettersFilter(names, letterToFilter)
console.log(namesA);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]