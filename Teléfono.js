"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teléfono = void 0;
class Teléfono {
    constructor(tipo, número) {
        this.tipo = tipo;
        this.número = número;
    }
    set setTipo(tipo) {
        if (tipo != null && tipo.length != 0) {
            this.tipo = tipo;
        }
    }
    get getTipo() {
        return this.tipo;
    }
    set setNumero(numero) {
        if (numero > 0) {
            this.número = numero;
        }
    }
    get getNumero() {
        return this.número;
    }
    toString() {
        return "Teléfono:" + " " + this.tipo + " " + this.número;
    }
}
exports.Teléfono = Teléfono;
