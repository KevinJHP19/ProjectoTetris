import { modelos } from './modelos.js';
import modeloPieza from './modeloPieza.js';
export default function nuevaPieza() {
    console.log
    
    const numrandom = Math.floor(Math.random() * modelos.piezas.length);

    return (
        new modeloPieza(numrandom,modelos.piezas[numrandom].nombre,0,0,1,modelos.piezas[numrandom].matriz[0])
    )

     

}