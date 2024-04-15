/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
let num1 = 11;
let num2 = 12;

function area(num1, num2) {
  return (num1 * num2) / 2;
}
console.log(area(num1, num2));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 5;
let b = 4;
function crazySum(a, b) {
  if (a != b) {
    return a + b;
  }
  if (a === b) {
    return (a + b) * 3;
  }
}

console.log(crazySum(a, b));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 11;
let y = 19;
function crazyDiff(x, y) {
  if (x < 19) {
    return Math.abs(x - y);
  }
  if (x > 19) {
    return Math.abs(x - y) * 3;
  }
}
console.log(crazyDiff(x, y));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n = 400;
function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return "true";
  }
  else{
    return "false";
  }
}
console.log(boundary(n));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(stringa){
    if(stringa.starsWhith("EPICODE")){
        return stringa;
    } else{
        return 'EPICODE'+ stringa;
    }
}
console.log(epify('EPICODE 2024'));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
let num = 11;
function check3and7(num) {
  if (num > 0) {
    if (num % 3 === 0 || num % 7 === 0) {
      return num + "è un multiplo di 3 o di 7";
    } else {
      return num + "non è multiplo di 3 o di 7";
    }
  }
}
console.log(check3and7(num));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
let str="epicode";
function reverseString(str){
    let arrayStringa= str.split('');
    let arrayInvertito=arrayStringa.reverse();
    let strFinale=arrayInvertito.join('');
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 /*Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
let stri='ciao luca come stai';
function upperFirst(){

}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (str) {
    return str.slice(1, str.length - 1)
  }
  console.log(cutString('EPICODE'))
  
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
    const arr = []
    for (let i = 0; i < n; i++) {
      arr.push(Math.floor(Math.random() * 10))
    }
    return arr
  }
  console.log(giveMeRandom(5))
  
