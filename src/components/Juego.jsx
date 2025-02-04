import React, { useState, useEffect }  from 'react';

import { modelos }   from '../lib/modelos.js';
import Panel from './Panel.jsx';
import Pieza from './Pieza.jsx';
import nuevaPieza from '../lib/nuevaPieza.js';

export default function  Juego(){
        const pieza1 = nuevaPieza();
        const pieza2 = nuevaPieza();
        const pieza3 = nuevaPieza();
        const pieza4 = nuevaPieza();
        const [flecha, setflecha] = useState('');
        
    
        const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);

        const [piezaActual, setpiezaActual] = useState(nuevaPieza());
        
        if (piezaActual.columna === 1 || piezaActual.columna === 11) {
                const minimo = 1;
                piezaActual.columna = Math.floor(Math.random() * (9 - minimo)) + minimo;
                const pintarPieza = () =>  {
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
        
        function insertarNuevaPieza(){
                setpiezaActual(nuevaPieza());
        }
        function moverDra(){
                console.log('Moviste a la derecha')
        }
        function moverIz(){
                console.log('Moviste a la izquierda')
        }
        function girar(){
                console.log('Giraste')
        }
        function bajar(){
                console.log('Bajaste')
        }
        
        useEffect(() =>{
                function controlTeclas(){
                        
                        setflecha(event.key)
                        
                        switch(flecha){
                                case 'ArrowLeft':
                                        moverIz();
                                        break;
                                case 'ArrowRight':
                                        moverDra();
                                        
                                        break;
                                case 'ArrowDown':
                                        bajar();
                                        break;
                                case 'g':
                                        girar();
                                        break;
                                default:
                                        break;
                        }
                }
                console.log("Se ejecuta el useEffect")
                window.addEventListener('keydown', controlTeclas)
                return () => {
                        window.removeEventListener('keydown', controlTeclas)
                }

        }
        


)
        
        
        
        

        
    return ( 
                
            <div id="intro" className='text-center p-5 bg-seconday text-white' style={{fontSize: '1.5em'}}>
                
            <Panel modelos={arrayCasillas} />
            <button className='btn btn-primary' onClick={insertarNuevaPieza}>Insertarpieza</button>
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