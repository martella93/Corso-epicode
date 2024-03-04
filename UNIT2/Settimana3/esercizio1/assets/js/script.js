class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  confrontaEta(altraPersona) {
    if (this.age > altraPersona.age) {
      return `${this.firstName} è più vecchio di ${altraPersona.firstName}`;
    } else if (this.age < altraPersona.age) {
      return `${this.firstName} è più giovane di ${altraPersona.firstName}`;
    } else {
      return `${this.firstName} ha la stessa età di ${altraPersona.firstName}`;
    }
  }
}

const utente = new User("luca", "martella", 30, "lecce");
const utente1 = new User("marco", "rossi", 25, "bari");
const confronto = utente.confrontaEta(utente1);
console.log(confronto);

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  
}

const listaPet = [];


document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const nuovoPet = new Pet(petName, ownerName, species, breed);
  listaPet.push(nuovoPet);
  stampaLista();
});

function stampaLista() {
  const lista = document.getElementById("listaPets");
  lista.innerHTML = "";
  for (let i = 0; i < listaPet.length; i++) {
    const pet = listaPet[i];
    const listItem = document.createElement("li");
    listItem.textContent = `Nome: ${pet.petName}   Padrone: ${pet.ownerName}   Specie: ${pet.species}   Razza: ${pet.breed}`;
    lista.appendChild(listItem);
  }

}
