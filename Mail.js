"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    constructor(tipo, dirección) {
        this.tipo = tipo;
        this.dirección = dirección;
    }
    set setTipo(tipo) {
        if (tipo != null && tipo.length != 0) {
            this.tipo = tipo;
        }
    }
    get getTipo() {
        return this.tipo;
    }
    set setDirección(direccion) {
        if (direccion != null && direccion.length != 0) {
            this.dirección = direccion;
        }
    }
    get getDirección() {
        return this.dirección;
    }
    toString() {
        return "Mail:" + " " + this.tipo + " " + this.dirección;
    }
}
exports.Mail = Mail;
