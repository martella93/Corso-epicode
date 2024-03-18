interface Smartphone {
  credito: number;
  numeroChiamate: number;
}

class User implements Smartphone {
  nome: string;
  cognome: string;
  credito: number;
  numeroChiamate: number;

  constructor(nome: string, cognome: string) {
    this.nome = nome;
    this.cognome = cognome;
    this.credito = 0;
    this.numeroChiamate = 0;
  }

  ricarica(ammontare: number): number {
    this.credito += ammontare;
    console.log(
      `Ricarica di ${ammontare} euro effettuata con successo. Credito residuo: ${this.credito} euro.`
    );
    return ammontare;
  }

  chiamata(minuti: number) {
    const costoChiamata = 0.2;
    const chiamataTot = costoChiamata * minuti;
    if (this.credito >= chiamataTot) {
      this.credito -= chiamataTot;
      this.numeroChiamate += minuti;
      console.log(
        `Chiamata effettuata per ${minuti} minuti. Costo: ${chiamataTot} euro.`
      );
    } else {
      console.log("Credito insufficiente per effettuare la chiamata.");
    }
  }

  chiama404(): number {
    return this.credito;
  }

  getNumeroChiamata(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate() {
    this.numeroChiamate = 0;
    console.log("Numero di minuti di chiamata azzerato.");
  }
}

const user = new User("Luca", "Martella");

user.ricarica(5);
user.chiamata(10);
console.log(`Credito residuo: ${user.chiama404()} euro`);
console.log(`Numero di minuti di chiamata: ${user.getNumeroChiamata()}`);
user.azzeraChiamate();
console.log(`Numero di minuti di chiamata: ${user.getNumeroChiamata()}`);
