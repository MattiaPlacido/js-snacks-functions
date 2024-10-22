/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
const isVocal = (letter) =>
  ["A", "E", "I", "O", "U"].includes(letter.toUpperCase());

const extractVocals = (word) => {
  const vocals = [];
  word.split("").forEach((letter) => {
    if (isVocal(letter)) {
      vocals.push(letter);
    }
  });
  return vocals;
};

// const extractVocals = (word) => {
//   return word.split("").filter(isVocal);
// };

// Invoca la funzione qui e stampa il risultato in console

const vocals = extractVocals(word);

const vocalsCount = vocals.length;

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

console.log(vocalsCount, vocals);
