const task = document.getElementById('task');
const btnAdd = document.getElementById("inserisci");
const lista = document.getElementById("lista");
let singleTask;
let tasks = [];

btnAdd.addEventListener("click", function (e) {
    e.preventDefault();
    if (task.value === '') {
        alert('inserire un task');
        return;
    }
    carica();
    scrivoLista();
    cancellaForm();
});


const carica = () => {
    singleTask = task.value;
    tasks.push(singleTask);
}

const scrivoLista = () => {
    lista.innerHTML = '';
    tasks.forEach((element, index) => {
        lista.innerHTML += `<li>${element}&nbsp;<button type="button" onclick="elimina(${index});">cancella</button></li>`

    });
    cancellaForm();

}


function cancellaForm() {
    task.value = '';
}


const elimina = (indice) => {
    tasks.splice(indice, 1);
    scrivoLista();
}
