import React, { useState }  from 'react';

import { modelos }   from '../lib/modelos.js';
import Panel from './Panel.jsx';
import Pieza from './Pieza.jsx';
import nuevaPieza from '../lib/nuevaPieza.js';

export default function  Juego(){
        const pieza1 = nuevaPieza();
        const pieza2 = nuevaPieza();
        const pieza3 = nuevaPieza();
        const pieza4 = nuevaPieza();
        
        
    
        const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);

        const [piezaActual, setpiezaActual] = useState(nuevaPieza());
        if (piezaActual.columna === 1 || piezaActual.columna === 11) {
                const minimo = 1;
                piezaActual.columna = Math.floor(Math.random() * (10 - minimo)) + minimo;
                const pintarPieza = () =>{
                        piezaActual.matriz.map((fila, filaIndex) => {
                                fila.map((celda, celdaIndex) => {
                                        arrayCasillas[piezaActual.fila + filaIndex][piezaActual.columna + celdaIndex] = celda;
                                })
                        }
                        
                        
                )}
                console.log(piezaActual);
                if(pintarPieza()){
                setArrayCasillas(arrayCasillas);
        }
        }
        
        
        
        
        
        

        
    return ( 
                
            <div id="intro" className='text-center p-5 bg-seconday text-white' style={{fontSize: '1.5em'}}>
                
            <Panel modelos={arrayCasillas} />
            <br></br>
            <Pieza modelos={modelos.piezas[4].matriz[0]} />
                <br></br>
                <Pieza modelos={pieza1.matriz} />
                <br />
                <Pieza modelos={pieza2.matriz} />
                <br />
                <Pieza modelos={pieza3.matriz} />
                <br />
                <Pieza modelos={pieza4.matriz} />
                


            </div>
            
    
    

    )

}