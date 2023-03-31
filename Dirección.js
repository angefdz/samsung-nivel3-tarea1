"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dirección = void 0;
class Dirección {
    constructor(calle, número, piso, letra, codigo_postal, población, provincia) {
        this.calle = calle;
        this.numero = número;
        this.piso = piso;
        this.letra = letra;
        this.codigo_postal = codigo_postal;
        this.población = población;
        this.provincia = provincia;
    }
    toString() {
        return "Dirección:" + " " + this.calle + " " + this.numero + " " + this.piso + " " + this.letra + " " +
            this.codigo_postal + " " + this.población + " " + this.provincia;
    }
}
exports.Dirección = Dirección;
