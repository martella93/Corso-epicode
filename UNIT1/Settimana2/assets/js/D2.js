/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x=4;
let y=6;
let max;

if(x>y){
  document.getElementById("max").innerHTML= x+ "è maggiore di" +y;
}
else if(x<y){
  document.getElementById("max").innerHTML= y +"è maggioredi "+ x;
}
else{
  document.getElementById("max").innerHTML="sono uguali";
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero=8;

if(numero != 5){
  document.getElementById("notequal").innerHTML="not equal";
}
else{
  document.getElementById("notequal").innerHTML="è uguale a 5"
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let q=17;

document.getElementById("resto").innerHTML=resto;
if(q %5 ===0){
  document.getElementById("resto").innerHTML=q+ "divisibile per 5";
}
else{
  document.getElementById("resto").innerHTML=q+ "non divisibile per 5";
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let a=5;
let b=8;

if(a===8 || b===8 || a+b===8 || a-b===8 ||b-a===8){
  document.getElementById("confronto").innerHTML="la condizione è verificata";
}
else {
  document.getElementById("confronto").innerHTML="la condizione non è verificata";
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart=60;
let spedizione=10;
if(totalShoppingCart>50){
  document.getElementById("totale").innerHTML= "spedizione gratuita";
}

else{
  document.getElementById("totale").innerHTML="costo spedizione 10 euro"
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 
let blackfriday=0.8;
let totalShoppingCart2= (75 * blackfriday);
let spedizione2=10;

if(totalShoppingCart2 >50) {
  document.getElementById("sconto").innerHTML= "costo ordine" + totalShoppingCart2 ;
}

else{
  document.getElementById("sconto").innerHTML="costo ordine" + (totalShoppingCart2 + spedizione);
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1=5;
let num2=6;
let num3=14;
let arrayOrdina= document.getElementById("arrayOrdina"); //serve a non scrivere sempre getElementById
if (num1 > num2) {
	if (num3 > num1) {
		arrayOrdina.innerHTML = num3 + ', ' + num1+ ', ' + num2;
	} else {
		if (num3 > num2) {
			arrayOrdina.innerHTML = num1 + ', ' + num3 + ', ' + num2;
		} else {
			arrayOrdina.innerHTML = num1 + ', ' + num2 + ', ' + num3;
		}
	}
} else {
	if (num3 > num2) {
		arrayOrdina.innerHTML = num3 + ', ' + num2 + ', ' + num1;
	} else {
		if (num3 > num1) {
			arrayOrdina.innerHTML = num2 + ', ' + num3 + ', ' + num1;
		} else {
			arrayOrdina.innerHTML = num2 + ', ' + num1 + ', ' + num3;
		}
	}
}





/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let testo="ciao";
if(typeof testo=== "number"){
  document.getElementById("tipo").innerHTML= "è un numero";
}
else{document.getElementById("tipo").innerHTML= "non è un numero";

}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let number=12;

if(number %2===0){
  document.getElementById("pari").innerHTML= "pari";
}
else{
  document.getElementById("pari").innerHTML= "dispari";
}
/* SCRIVI QUI LA TUA RISPOSTA */

 //ESERCIZIO 10
 // Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 5");
    } else if (val < 5) {
      console.log("maggiore di 10");
    } else {
      console.log("uguale o maggiore di 10");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city="Toronto";
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
const newArray=[];
newArray.push[0]=1;
newArray.push[1]=2;
newArray.push[2]=3;
newArray.push[3]=4;
newArray.push[4]=5;
newArray.push[5]=6;
newArray.push[6]=7;
newArray.push[7]=8;
newArray.push[8]=9;
newArray.push[9]=10;

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

newArray.push[9]=100;