/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.
const customGreeting = (name) => {
  const time = new Date();
  const hour = time.getHours();
  let output;

  if (hour < 13) output = `Buongiorno ${name}`;
  else if (hour < 17) output = `Buon pomeriggio ${name}`;
  else output = `Buonasera ${name}`;

  return output;
};

// Invoca la funzione qui e stampa il risultato in console
const greeting = customGreeting(name);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
console.log(greeting);
