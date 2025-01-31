class modeloPieza {

    constructor(numero,nombre,angulo,fila,columna,matriz){
        this.numero = numero;
        this.nombre = nombre;
        this.angulo = angulo;
        this.fila = fila;
        this.columna = columna;
        this.matriz = matriz;
    }
    girar(){
        if(this.angulo === 3){
            this.angulo = 0;
        }else{
            this.angulo++;
        }
        
        
    }

}
export default modeloPieza;