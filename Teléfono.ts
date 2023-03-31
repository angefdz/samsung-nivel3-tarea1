export class Teléfono{
    private tipo: string;
    private número: number;

    public constructor(tipo:string,número:number){
        this.tipo = tipo;
        this.número = número;
    }

    public set setTipo(tipo:string){
        if (tipo!=null&&tipo.length!=0){
            this.tipo = tipo;
        }
    }
    public get getTipo(){
        return this.tipo;
    }

    public set setNumero(numero:number){
        if (numero>0){
            this.número = numero;
        }
    }

    public get getNumero(){
        return this.número;
    }

    public toString():string{
        return "Teléfono:" + " " + this.tipo + " " +this.número;
    }
}