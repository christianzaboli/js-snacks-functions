/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function salute(x) {
    const saluteX = "ciao " + x;
    return saluteX
}

// Invoca la funzione qui e stampa il risultato in console

const welcome = salute(userName);
console.log(welcome);


//Risultato atteso se si passa 'Mario': // ciao Mario
