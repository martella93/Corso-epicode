/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
console.log(random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: "Luca",
  surname: "Martella",
  age: "30",
};
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["c++", "c", "javaScript"];
console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("java");
console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
};
const risultatoCasuale = dice();
console.log(risultatoCasuale);
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (numero1, numero2) => {
  return Math.max(numero1, numero2);
};
const risultatoMaggiore = whoIsBigger(8, 10);
console.log(risultatoMaggiore);
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = (stringa) => {
  const paroleArray = stringa.split(" ");
  return paroleArray;
};
const string = "I love coding";
const risultato = splitMe(string);
console.log(risultato);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = (stringa, rimuoviPrimo) => {
  if (rimuoviPrimo) {
    return stringa.slice(1);
  } else {
    return stringa.slice(0, -1);
  }
};
const stringaInput = "Ciao";
const risultatoSenzaPrimo = deleteOne(stringaInput, true);
const risultatoSenzaUltimo = deleteOne(stringaInput, false);

console.log(risultatoSenzaPrimo);
console.log(risultatoSenzaUltimo);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = (stringa) => {
  return stringa.replace(/\d/g, "");
};

const stringaConNumeri = "Lu1ca3";
const risultatoSenzaNumeri = onlyLetters(stringaConNumeri);

console.log(
  `Stringa con numeri: ${stringaConNumeri} Stringa senza numeri: ${risultatoSenzaNumeri}`
);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = (stringa) => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(stringa);
};

const email = "luca8martella@gmail.com";
const email1 = "luca.martella";
const risultato1 = isThisAnEmail(email);
const risultato2 = isThisAnEmail(email1);

console.log(
  `"${email}" è un valido indirizzo email? ${risultato1}       "${email1}" è un valido indirizzo email? ${risultato2}`
);

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = () => {
  const dataCorrente = new Date();
  const numeroGiorno = dataCorrente.getDay();
  const giorniSettimana = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  return giorniSettimana[numeroGiorno];
};

const giornoCorrente = whatDayIsIt();
console.log("Oggi è :", giornoCorrente);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollTheDices = (numeroDiVolte) => {
  const values = [];
  let sum = 0;
  for (let i = 0; i < numeroDiVolte; i++) {
    const valoreDado = dice();
    values.push(valoreDado);
    sum += valoreDado;
  }
  return {
    sum,
    values,
  };
};

const risultatoLancio = rollTheDices(2); //lancio il dado per due volte
console.log("Risultato del lancio:", risultatoLancio);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = (inputDate) => {
  const inputDateTime = new Date(inputDate);
  const currentDateTime = new Date();
  const timeDifference = currentDateTime - inputDateTime;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
};

const inputDate = "2024-02-05";
const result = howManyDays(inputDate);
console.log(`I giorni trascorsi da ${inputDate} sono: ${result} giorni.`);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = (compleanno) => {
  const oggi = new Date();

  const giornoOggi = oggi.getDate();
  const meseOggi = oggi.getMonth() + 1;
  const giornoCompleanno = compleanno.getDate();
  const meseCompleanno = compleanno.getMonth() + 1;

  return giornoOggi === giornoCompleanno && meseOggi === meseCompleanno;
};

const compleanno = new Date("1993-07-14");
const mioCompleanno = isTodayMyBirthday(compleanno);

console.log("Oggi è il mio compleanno?", mioCompleanno);

// Arrays & Oggetti
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const deleteProp = (oggetto, stringa) => {
  const oggettoModificato = { ...oggetto };
  delete oggettoModificato[stringa];
  return oggettoModificato;
};
const nomeProprieta = "name";
const oggettoSenzaProprieta = deleteProp(me, nomeProprieta);

console.log("Oggetto originale:", me);
console.log(
  `Oggetto senza la proprietà "${nomeProprieta}":`,
  oggettoSenzaProprieta
);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = (movies) => {
  let filmPiuRecente = movies[0];
  for (let i = 1; i < movies.length; i++) {
    if (movies[i].Year > filmPiuRecente.Year) {
      filmPiuRecente = movies[i];
    }
  }

  return filmPiuRecente;
};

const filmPiuRecente = newestMovie(movies);
console.log("Film più recente:", filmPiuRecente);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = (movies) => {
  return movies.length;
};
const numeroDiFilm = countMovies(movies);

console.log("Film contenuti nell'array:", numeroDiFilm);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = (movies) => {
  const anniFilm = movies.map((film) => film.Year);
  return anniFilm;
};

const anniFilm = onlyTheYears(movies);

console.log("Anno uscita film:", anniFilm);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = (movies) => {
  const filmMillennioScorso = movies.filter((film) => {
    const annoProduzione = film.Year;
    return annoProduzione < "2000";
  });

  return filmMillennioScorso;
};

const filmMillennioScorso = onlyInLastMillennium(movies);
console.log("Film prodotti nel millennio scorso:", filmMillennioScorso);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = (movies) => {
  let sommaAnni = 0;
  for (let i = 0; i < movies.length; i++) {
    sommaAnni += Number(movies[i].Year);
  }
  return sommaAnni;
};

const sommaAnniDeiFilm = sumAllTheYears(movies);

console.log("La somma è: ", sommaAnniDeiFilm);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = (movies, stringa) => {
  const filmRicercati = movies.filter((film) => {
    return film.Title.includes(stringa);
  });

  return filmRicercati;
};

const Ricerca = searchByTitle(movies, "Lord");
console.log("Risultato ricerca per titolo:", Ricerca);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = (movies, searchString) => {
  const match = [];
  const unmatch = [];

  movies.reduce((acc, film) => {
    if (film.Title.includes(searchString)) {
      match.push(film);
    } else {
      unmatch.push(film);
    }
    return acc;
  });

  return { match, unmatch };
};

const risultatoRicerca = searchAndDivide(movies, "Avengers");
console.log("Risultato della ricerca e divisione:", risultatoRicerca);

/* ESERCIZIO 19
Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
 */
const removeIndex = (indexToRemove, movies) => {
   
    if (indexToRemove >= 0 && indexToRemove < movies.length) {
    
        movies.splice(indexToRemove, 1);
    } else {
        console.log("Indice non valido.");
    }
    
    return movies;
};

const indexToRemove = 2;
const updatedMovies = removeIndex(indexToRemove, movies.slice()); 
console.log("Array aggiornato:", updatedMovies);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const ContainerElement = () => {
  const containerElement = document.getElementById("container");
  return containerElement;
};

const containerElement = ContainerElement();

if (containerElement) {
  console.log("Elemento dotato id 'container' trovato:", containerElement);
} else {
  console.log("Elemento dotato id 'container' non trovato.");
}
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const selezionaTd = () => {
  const tdElements = document.querySelectorAll("td");
  return tdElements;
};

const tdElements = selezionaTd();

if (tdElements.length > 0) {
  console.log("Elementi <td> trovati:", td);
} else {
  console.log("Nessun elemento <td> trovato.");
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const stampaTd = () => {
  const tdElements = selezionaTd();
  tdElements.forEach((tdElement, index) => {
    console.log(
      `Testo contenuto in ogni <td> ${index + 1}:`,
      tdElement.textContent
    );
  });
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const aggiungiColoreRed = () => {
  const linkElements = document.querySelectorAll("a");

  linkElements.forEach((linkElement) => {
    linkElement.style.backgroundColor = "red";
  });
};

aggiungiColoreRed();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const newElement = () => {
  const myList = document.getElementById("myList");

  if (myList) {
    const newListItem = document.createElement("li");
    newListItem.textContent = "Nuovo elemento della lista";
    myList.appendChild(newListItem);
  } else {
    console.log("elemento con id 'myList' non trovato");
  }
};

newElement();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const svuotaLista = () => {
  const myList = document.getElementById("myList");
  if (myList) {
    myList.innerHTML = "";
  } else {
    console.log("Elemento con id 'myList' non trovato");
  }
};

svuotaLista();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const aaggiungClass = () => {
  const trElements = document.querySelectorAll("tr");

  trElements.forEach((trElement) => {
    trElement.classList.add("test");
  });
};

aaggiungClass();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
const halfTree = (altezza) => {
  if (typeof altezza === "number" && altezza > 0) {
    for (let i = 1; i <= altezza; i++) {
      console.log("*".repeat(i));
    }
  } else {
    console.log("Inserisci un numero positivo intero come parametro.");
  }
};

halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const tree = (altezza) => {
  if (typeof altezza === "number" && altezza > 0 && Number.isInteger(altezza)) {
    for (let i = 1; i <= altezza; i++) {
      const riga = " ".repeat(altezza - i) + "*".repeat(2 * i - 1);

      console.log(riga);
    }
  } else {
    console.log("Inserisci un numero positivo intero come parametro.");
  }
};

tree(3);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
const isItPrime = (numero) => {
  if (numero % 2 != 0 || numero === 2) {
    return true;
  } else {
    return false;
  }
};
console.log(isItPrime(3));

/* Questo array viene usato per gli esercizi. Non modificarlo. */
