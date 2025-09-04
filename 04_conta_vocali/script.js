/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vowelCount(x) {
    x = x.toLowerCase();
    let count = 0
    let vowelsFound = '';
    
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        if (element === "a" ||
            element === "e" ||
            element === "i" ||
            element === "o" ||
            element === "u") {
                count += 1, vowelsFound += element;
            }
        }
    const result = count + ' ' + vowelsFound
    return result;
}

// Invoca la funzione qui e stampa il risultato in console
const vowelsOfWord = vowelCount(word)
console.log(vowelsOfWord);



//Risultato atteso se si passa 'javascript': 3 (a, a, i)