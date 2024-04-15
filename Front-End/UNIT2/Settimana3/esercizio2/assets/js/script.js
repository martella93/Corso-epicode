const form = document.getElementById("formName");
const Nome = document.getElementById("nome");
const lista = document.getElementById("lista");
const btnCancella = document.getElementById("svuotaLista");
let nomi = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  carica();
  scriviLista();
  salvaInLocalStorage();
});

const carica = () => {
  const singoloNome = Nome.value;
  nomi.push(singoloNome);
};

const scriviLista = () => {
  lista.innerHTML = "";
  nomi.forEach((element) => {
    lista.innerHTML += `<li>${element}</li>`;
  });
};

btnCancella.addEventListener("click", function (e) {
  e.preventDefault();
  svuotaLista();
  cancellaLocalStorage();
});
function svuotaLista() {
  nomi = [];
  lista.innerHTML = "";
}

function salvaInLocalStorage() {
  localStorage.setItem("nomi", JSON.stringify(nomi));
}
function cancellaLocalStorage() {
  localStorage.removeItem("nomi");
}
