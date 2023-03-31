import {Persona} from './Persona';
import {Dirección} from './Dirección';
import { Teléfono } from './Teléfono';
import { Mail } from './Mail';


let direccion1 = new Dirección("San Agustín",14,4,"A",33450,"Oviedo","Asturias");
let direccionesPersona1 = [direccion1];
let telefono1 = new Teléfono("Personal", 678564356);
let mail1 = new Mail("Personal","angefernandzz@gmail.com");
let telefonosPersona1 = [telefono1];
let mailsPersona1 = [mail1];
let nota1 = "Ir al médico";
let notesPersona1 = [nota1];

let direccion2 = new Dirección("Emiliano",44,3,"C",45450,"Avilés","Asturias");
let direccionesPersona2 = [direccion2];
let telefono2 = new Teléfono("Personal", 678564356);
let telefonosPersona2 = [telefono2];
let mail2 = new Mail("Personal","diego1100@gmail.com");
let mailsPersona2 = [mail2];
let nota2 = "Arreglar espejo";
let notesPersona2 = [nota2];

let direccion3 = new Dirección("Gaspar García",19,1,"B",35650,"Madrid","Madrid");
let direccionesPersona3 = [direccion3];
let telefono3 = new Teléfono("Personal", 678564356);
let telefonosPersona3 = [telefono3];
let mail3 = new Mail("Personal","clarasimon@gmail.com");
let mailsPersona3 = [mail3];
let nota3 = "Estudiar matemáticas";
let notesPersona3 = [nota3];



let persona1 = new Persona("Ángela","Fernández González",19,"12345678C",
new Date("2003-01-16"),"azul","mujer",direccionesPersona1
,mailsPersona1,telefonosPersona1,notesPersona1);

let persona2 = new Persona("Diego","García Álvarez",19,"67589987H",
new Date("2003-01-20"),"rojo","hombre",direccionesPersona2,
mailsPersona2,telefonosPersona2,notesPersona2);

let persona3 = new Persona("Clara","Simón Rodríguez",24,"13565678C",
new Date("2003-05-30"),"amarillo","mujer",direccionesPersona3,
mailsPersona3,telefonosPersona3,notesPersona3);
console.log(persona1.toString());
console.log(persona2.toString());
console.log(persona3.toString());

let personas =[persona1,persona2,persona3]; 
let personToSearch:string = "13565678C";
let newDireccion = new Dirección("Cataluña",49,2,"C",40650,"Barcelona","Cataluña");
let newTelefono = new Teléfono("Profesional", 656734568);
let newMail = new Mail("Profesional","clarass@gmail.com");
personas.forEach(function(value){
if (value.getDNI==personToSearch){
    value.addDireccion(newDireccion);
    value.addMail(newMail);
    value.addTelefono(newTelefono);
    }
})
console.log(persona3.toString);
    