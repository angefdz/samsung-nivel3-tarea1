export class Mail{
    private tipo: string;
    private dirección: string;

    public constructor(tipo:string,dirección:string){
        this.tipo = tipo;
        this.dirección = dirección;
    }

    public set setTipo(tipo:string){
        if (tipo!=null&&tipo.length!=0){
            this.tipo = tipo;
        }
    }
    public get getTipo(){
        return this.tipo;
    }

    public set setDirección(direccion:string){
        if (direccion!=null && direccion.length!=0){
            this.dirección=direccion;
        }
    }

    public get getDirección(){
        return this.dirección;
    }

    public toString():string{
        return "Mail:" + " " +this.tipo + " " +this.dirección;
    }
}