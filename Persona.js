"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad, DNI, cumpleaños, color_favorito, sexo, direcciones, mails, teléfonos, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.DNI = DNI;
        this.cumpleaños = cumpleaños;
        this.color_favorito = color_favorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.teléfonos = teléfonos;
        this.notas = notas;
    }
    set setNombre(nombre) {
        if (nombre.length != 0 && nombre != null) {
            this.nombre = nombre;
        }
    }
    get getNombre() {
        return this.nombre;
    }
    set setApellidos(apellidos) {
        if (apellidos.length != 0 && apellidos != null) {
            this.apellidos = apellidos;
        }
    }
    get getApellidos() {
        return this.apellidos;
    }
    set setEdad(edad) {
        if (edad > 0) {
            this.edad = edad;
        }
    }
    get getEdad() {
        return this.edad;
    }
    set setDNI(DNI) {
        if (DNI.length == 9) {
            this.DNI = DNI;
        }
    }
    get getDNI() {
        return this.DNI;
    }
    set setCumpleaños(cumpleaños) {
        this.cumpleaños = cumpleaños;
    }
    get getCumpleaños() {
        return this.cumpleaños;
    }
    set setColorFavorito(color_favorito) {
        if (color_favorito.length != 0 && color_favorito != null) {
            this.color_favorito = color_favorito;
        }
    }
    get getColorFavorito() {
        return this.color_favorito;
    }
    set setSexo(sexo) {
        if (sexo.length != 0 && sexo != null) {
            this.sexo = sexo;
        }
    }
    get getSexo() {
        return this.sexo;
    }
    set setDirecciones(direcciones) {
        if (direcciones.length !== 0 && direcciones) {
            this.direcciones = direcciones;
        }
    }
    get getDirecciones() {
        return this.direcciones;
    }
    set setMails(mails) {
        if (mails.length !== 0 && mails) {
            this.mails = mails;
        }
    }
    get getMails() {
        return this.mails;
    }
    set setTelefonos(telefonos) {
        if (telefonos.length !== 0 && telefonos) {
            this.teléfonos = telefonos;
        }
    }
    get getTelefonos() {
        return this.teléfonos;
    }
    set setNotas(notas) {
        if (notas.length !== 0 && notas) {
            this.notas = notas;
        }
    }
    get getNotas() {
        return this.notas;
    }
    addDireccion(direccion) {
        if (direccion != null) {
            this.direcciones.push(direccion);
        }
    }
    addTelefono(telefono) {
        if (telefono != null) {
            this.teléfonos.push(telefono);
        }
    }
    addMail(mail) {
        if (mail != null) {
            this.mails.push(mail);
        }
    }
    toString() {
        let result = "";
        result += this.nombre + " " + this.apellidos + " " + this.apellidos + " " + this.DNI
            + " " + this.cumpleaños + " " + this.color_favorito + " " + this.color_favorito + " " +
            this.sexo;
        this.direcciones.forEach(function (value) {
            result += value.toString();
        });
        this.teléfonos.forEach(function (value) {
            result += value.toString();
        });
        this.mails.forEach(function (value) {
            result += value.toString();
        });
        this.notas.forEach(function (value) {
            result += value.toString();
        });
        return result;
    }
}
exports.Persona = Persona;
