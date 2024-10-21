/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

const getInitialsFirstChar = (namesArray, dChar) => {
  const filteredNames = [];

  for (let i = 0; i < namesArray.length; i++)
    if (namesArray[i].charAt(0).toUpperCase() === dChar.toUpperCase())
      filteredNames.push(namesArray[i]);

  return filteredNames;
};

// Invoca la funzione qui e stampa il risultato in console
const filteredNames = getInitialsFirstChar(names, "a");

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log(filteredNames);
