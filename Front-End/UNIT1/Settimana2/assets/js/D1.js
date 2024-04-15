/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 1. dato stringa: in Java Script questo datatype indica una serie di caratteri. Le stringhe sono scritte tra virgolette.  Es: let myName="Luca";
2. dato numerico: viene usato per i numeri. I numeri posono essere scritti sia interi che decimali. Es: let numero: 25;
3. dato booleano: viene usato per verificare se una cosa è vera o falsa; infatti ha due valori: true e false. Es: let x=10; let z=6; let q=6; (x==z) False  (z==q) True
4. null: serve ad indicare l'assenza voluta di un oggetto; cioè che non esiste proprio.
5. undefined: è quando non viene assegnato un valore alla variabile; quindi il va valore è da definire.
/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let myName="Luca";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(10+20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x=12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName="Martella";

const numero = 10;
console.log(numero);
numero = 16;
console.log(numero); //si avrà un errore in quanto la costante non può cambiare valore; una volta inizializzata rimane quella.
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let subtraction= 4-x;
console.log(subtraction);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1="john";
let name2="John";
console.log("name1 e name2 sono uguali", name1===name2);
console.log("name1 e name2 sono uguali in lowercase", name1.toLowerCase()===name2.toLowerCase());