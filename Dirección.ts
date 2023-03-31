export class Dirección{
    private calle: string;
    private numero: number;
    private piso: number;
    private letra: string;
    private codigo_postal: number;
    private población: string;
    private provincia: string;

    public constructor(calle: string,número:number, piso: number,letra:string,codigo_postal: number,
        población:string,provincia:string){
            this.calle = calle;
            this.numero = número;
            this.piso = piso;
            this.letra = letra;
            this.codigo_postal = codigo_postal;
            this.población = población;
            this.provincia = provincia;
        }
    public toString():string{
        return "Dirección:" + " " +this.calle + " " + this.numero  + " " + this.piso  + " " + this.letra  + " " +
        this.codigo_postal + " " + this.población + " " +this.provincia;
    }
}