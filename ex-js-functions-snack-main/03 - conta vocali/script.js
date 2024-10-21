/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
const isVocal = (letter) =>
  ["A", "B", "C", "D", "E"].includes(letter.toUpperCase());

const extractVocals = (word) => {
  const vocals = [];
  for (let i = 0; i < word.length; i++)
    if (isVocal(word[i])) vocals.push(word[i]);
  return vocals;
};

// Invoca la funzione qui e stampa il risultato in console

const vocals = extractVocals(word);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

console.log(vocals);
