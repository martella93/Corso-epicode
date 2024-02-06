function init() {
  changeTitle();
  addClassToTitle();
  changePcontent();
  changeUrls();
  addToTheSecond();
  addParagraph();
  hideFirstUl();
  paintItGreen();
  makeItClickable();
  revealFooterLink();
  generateTable();
  addRow();
  hideAllImages();
  changeColorWithRandom();
}

/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const titolo = document.querySelector("h1");

const changeTitle = function () {
  let vecchioTitolo = titolo.innerText;
  titolo.innerText = `Nuovo titolo modificato da JS; il vecchio titolo era: ***${vecchioTitolo}***`;
};
changeTitle();
/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */

const addClassToTitle = function () {
  titolo.classList.add("myHeading");
};
addClassToTitle();
/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */

const changePcontent = function () {
  let selettore = document.querySelectorAll("div p");
  for (let i = 0; i < selettore.length; i++) {
    selettore[i].innerText = "ho cambiato i p figli dei div";
  }
};
changePcontent();
/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */

const changeUrls = function () {
  const links = document.querySelectorAll("a: not (footer a)");
  for (let i = 0; i < links.length; i++) {
    links[i].setAttribute((href = "https://www.google.it/"));
  }
};

changeUrls();

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const addToTheSecond = function () {
  let li = document.createElement("li");
  li.innerText = "testo aggiunto";
  document.getElementById("secondList").appendChild(li);
};
addToTheSecond();
/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

const addParagraph = function () {
  let div = document.querySelector("div");
  const p = document.createElement("p");
  p.innerText = "è un paragrafo";
  div.appendChild(p);
};
addParagraph();

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const hideFirstUl = function () {
  const primaLista = document
    .getElementById("firtList")
    .setAttribute("style", "dispay: none");
};
hideFirstUl();
/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function () {
  const ul = document.querySelectorAll("ul");
  for (let i = 0; i < ul.length; i++) {
    ul[i].setAttribute("style", "background-color:green");
  }
};
paintItGreen();

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

const makeItClickable = function () {
  titolo.style.cursor = "pointer";
  titolo.addEventListener("click", function () {
    let scritta = titolo.innerText.split("");
    scritta.pop();
    let nuovaScritta = scritta.join("");
    titolo.innerText = nuovaScritta;
  });
};
makeItClickable();

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */

const revealFooterLink = function () {
  const footer = document.querySelector("footer");
  footer.style.cursor = "pointer";
  footer.addEventListener("click", function () {
    const footerLink = document.querySelector("footer a ");
    const linkFooter = footerLink.getAttribute("href");
    alert(linkFooter);
  });
};
revealFooterLink();

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const generateTable = function () {};
generateTable();

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {};
addRow();

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {
  const images = document.querySelectorAll("img");
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
};
hideAllImages();
/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
const changeColorWithRandom = function () {
  const cambiaColore = document.getElementById("changeMyColor");
  cambiaColore.style.cursor = "pointer";
  cambiaColore.addEventListener("click", function () {
    let rosso = Math.round(Math.random() * 255);
    let verde = Math.round(Math.random() * 255);
    let blu = Math.round(Math.random() * 255);

    let coloreRandom = "rgb(" + rosso + "," + verde + "," + blu + ")";
    cambiaColore.style.color = coloreRandom;
  });
};

changeColorWithRandom();
