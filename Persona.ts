import { Dirección } from './Dirección';
import { Mail } from './Mail';
import { Teléfono } from './Teléfono';

export class Persona{
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private DNI: string;
    private cumpleaños: Date;
    private color_favorito: string;
    private sexo: string;
    private direcciones: Dirección[];
    private mails: Mail[];
    private teléfonos: Teléfono[];
    private notas: string[];

    public constructor(nombre:string,apellidos:string,edad:number, DNI:string, cumpleaños:Date,
        color_favorito:string, sexo:string,direcciones: Dirección[],mails: Mail[],teléfonos:Teléfono[],
        notas: string[]){
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.edad = edad;
            this.DNI = DNI;
            this.cumpleaños=cumpleaños;
            this.color_favorito=color_favorito;
            this.sexo=sexo;
            this.direcciones=direcciones;
            this.mails=mails;
            this.teléfonos=teléfonos;
            this.notas = notas;
            
        }
    
    public set setNombre(nombre:string){
        if (nombre.length!=0 && nombre!=null){
            this.nombre = nombre;
        }
    }
    public get getNombre(){
        return this.nombre;
    }

    public set setApellidos(apellidos:string){
        if (apellidos.length!=0 && apellidos!=null){
            this.apellidos = apellidos;
        }
    }
    
    public get getApellidos(){
        return this.apellidos;
    }

    public set setEdad(edad:number){
        if (edad>0){
            this.edad = edad;
        }
    }

    public get getEdad(){
        return this.edad;
    }

    public set setDNI(DNI: string){
        if(DNI.length==9){
            this.DNI=DNI;
        }
    }

    public get getDNI(){
        return this.DNI;
    }

    public set setCumpleaños(cumpleaños:Date){
        this.cumpleaños = cumpleaños;
    }

    public get getCumpleaños(){
        return this.cumpleaños;
    }

    public set setColorFavorito(color_favorito:string){
        if (color_favorito.length!=0 && color_favorito!=null){
            this.color_favorito = color_favorito;
        }
    }
    public get getColorFavorito(){
        return this.color_favorito;
    }

    public set setSexo(sexo:string){
        if (sexo.length!=0 && sexo!=null){
            this.sexo = sexo;
        }
    }

    public get getSexo(){
        return this.sexo;
    }

    public set setDirecciones(direcciones:Dirección[]){
        if (direcciones.length!==0 && direcciones){
            this.direcciones = direcciones;
        }
    }
    public get getDirecciones(){
        return this.direcciones;
    }

    public set setMails(mails:Mail[]){
        if (mails.length!==0 && mails){
            this.mails = mails;
        }
    }

    public get getMails(){
        return this.mails;
    }

    public set setTelefonos(telefonos: Teléfono[]){
        if (telefonos.length!==0&&telefonos){
            this.teléfonos=telefonos;
        }
    }

    public get getTelefonos(){
        return this.teléfonos;
    }
    
    public set setNotas(notas:string[]){
        if (notas.length!==0&&notas){
            this.notas = notas;
        }
    }

    public get getNotas(){
        return this.notas;
    }

    public addDireccion(direccion: Dirección){
        if (direccion!=null){
            this.direcciones.push(direccion);
        }
    }

    public addTelefono(telefono: Teléfono){
        if (telefono!=null){
            this.teléfonos.push(telefono);
        }
    }
    public addMail(mail: Mail){
        if (mail!=null){
            this.mails.push(mail);
        }
    }  
    
    public toString():string{
        let result ="";
        result+= this.nombre + " " +this.apellidos + " " +this.apellidos  + " " + this.DNI 
        + " " + this.cumpleaños + " " +this.color_favorito + " " +this.color_favorito + " " +
        this.sexo;
        this.direcciones.forEach(function(value){
            result+=value.toString();
        });
        this.teléfonos.forEach(function(value){
            result+=value.toString();
        });
        this.mails.forEach(function(value){
            result+=value.toString();
        });
        this.notas.forEach(function(value){
            result+=value.toString();
        });
        return result;
    }

}
