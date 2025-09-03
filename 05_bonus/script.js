/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

// funzione richiesta dal quesito di base
function timedSalute(x) {
    let saluteIf = ''
    const day = new Date();
    let hour = day.getHours();
    if (hour > 3 && hour < 13) {
        saluteIf = 'Buongiorno ' + x + '.'
    } else if (hour >= 13 || hour <= 17) {
        saluteIf = 'Buon pomeriggio ' + x + '.'
    } else if (hour > 17) {
        saluteIf = 'Buonasera ' + x + '.'
    }
    console.log(hour);
    
    return saluteIf
}

// funzione alternativa per il caso ore 18
function timedSaluteALT(x) {
    let saluteIf = ''
    const day = new Date("March 13, 08 02:20");
    let hour = day.getHours();
    if (hour > 3 && hour < 13) {
        saluteIf = 'Buongiorno ' + x + '.'
    } else if (hour >= 13 && hour <= 17) {
        saluteIf = 'Buon pomeriggio ' + x + '.'
    } else if (hour > 17 || hour <= 3) {
        saluteIf = 'Buonasera ' + x + '.'
    }
    console.log(hour);
    
    return saluteIf
}
// Invoca la funzione qui e stampa il risultato in console

console.log(timedSalute(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

console.log(timedSaluteALT(name));
