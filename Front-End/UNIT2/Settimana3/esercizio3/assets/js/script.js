let books = [];
let carrello = [];
async function fetchBooks() {
  await fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      books = data;
      caricaCard();
    })
    .catch((err) => {
      console.log("Error fetching books", err);
    });
}

function  caricaCard(){
  const bookListContainer = document.getElementById("bookList");
  books.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("col");
    card.innerHTML = `
    <div class= "card h-100">
    <img src = "${book.img}" class = "card-img-top" alt="$(book.img)">
    <div class= "card-body">
    <h4 class="card-title">${book.title}</h4>
    <p class = "card-text">Prezzo: ${book.price} </p>
    <button class="btn btn-danger" onclick="removeCard(${books.indexOf(book)})" >SCARTA</button>
    <button class="btn btn-danger" onclick="compraOra()" >COMPRA</button>
    </div>
    </div>`;
    bookListContainer.appendChild(card);
  });
}
fetchBooks();

function removeCard(index) {
    books.splice(index, 1);
    updateBooks();

}

function updateBooks() {
    const booksContainer = document.getElementById("bookList");
    booksContainer.innerHTML = "";
    caricaCard();
}

