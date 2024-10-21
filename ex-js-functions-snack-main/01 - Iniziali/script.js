/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
const getInitials = (namesArray) => {
  const initialsArray = [];

  for (let i = 0; i < namesArray.length; i++)
    initialsArray.push(namesArray[i].charAt(0));

  return initialsArray;
};

//funzione che utilizza le mappe al posto del for
// const getInitials = (namesArray) => namesArray.map((name) => name.charAt(0));

// Invoca la funzione qui e stampa il risultato in console
const initials = getInitials(names);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(initials);
