var User = /** @class */ (function () {
    function User(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
    }
    User.prototype.ricarica = function (ammontare) {
        this.credito += ammontare;
        console.log("Ricarica di ".concat(ammontare, " euro effettuata con successo. Credito residuo: ").concat(this.credito, " euro."));
        return ammontare;
    };
    User.prototype.chiamata = function (minuti) {
        var costoChiamata = 0.2;
        var chiamataTot = costoChiamata * minuti;
        if (this.credito >= chiamataTot) {
            this.credito -= chiamataTot;
            this.numeroChiamate += minuti;
            console.log("Chiamata effettuata per ".concat(minuti, " minuti. Costo: ").concat(chiamataTot, " euro."));
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    };
    User.prototype.chiama404 = function () {
        return this.credito;
    };
    User.prototype.getNumeroChiamata = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        console.log("Numero di minuti di chiamata azzerato.");
    };
    return User;
}());
var user = new User("Luca", "Martella");
user.ricarica(5);
user.chiamata(10);
console.log("Credito residuo: ".concat(user.chiama404(), " euro"));
console.log("Numero di minuti di chiamata: ".concat(user.getNumeroChiamata()));
user.azzeraChiamate();
console.log("Numero di minuti di chiamata: ".concat(user.getNumeroChiamata()));
