import React, { useState, useEffect }  from 'react';

import { modelos }   from '../lib/modelos.js';
import Panel from './Panel.jsx';
import Pieza from './Pieza.jsx';
import nuevaPieza from '../lib/nuevaPieza.js';

export default function  Juego(){
        //piezas de ejemplo
        const pieza1 = nuevaPieza();
        const pieza2 = nuevaPieza();
        const pieza3 = nuevaPieza();
        const pieza4 = nuevaPieza();
        //Estados del juego
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
                // Crear una copia de la pieza actual con la nueva posición
                const nuevaColumna = piezaActual.columna + 1;
    
                // Verificar que no se salga de los límites
                if (nuevaColumna + piezaActual.matriz[0].length <= 12) {
                        setpiezaActual({...piezaActual, columna: nuevaColumna});
                        
                        // Crear una copia del array de casillas
                        const nuevoArrayCasillas = arrayCasillas.map(row => [...row]);
                        
                        // Limpiar la posición anterior
                        piezaActual.matriz.forEach((fila, filaIndex) => {
                        fila.forEach((_, celdaIndex) => {
                                nuevoArrayCasillas[piezaActual.fila + filaIndex][piezaActual.columna + celdaIndex] = 0;
                        });
                        });
                        
                        // Pintar la pieza en la nueva posición
                        piezaActual.matriz.forEach((fila, filaIndex) => {
                        fila.forEach((celda, celdaIndex) => {
                                if (celda !== 0) {
                                nuevoArrayCasillas[piezaActual.fila + filaIndex][nuevaColumna + celdaIndex] = celda;
                                }
                        });
                        });
                        
                        setArrayCasillas(nuevoArrayCasillas);
                }
                
        }
        function moverIz(){
                console.log('Moviste a la izquierda')
                const nuevaColumna = piezaActual.columna - 1;
    
                // Verificar que no se salga de los límites
                if (nuevaColumna >= 1) {
                        setpiezaActual({...piezaActual, columna: nuevaColumna});
                        
                        // Crear una copia del array de casillas
                        const nuevoArrayCasillas = arrayCasillas.map(row => [...row]);
                        
                        // Limpiar la posición anterior
                        piezaActual.matriz.forEach((fila, filaIndex) => {
                        fila.forEach((_, celdaIndex) => {
                                nuevoArrayCasillas[piezaActual.fila + filaIndex][piezaActual.columna + celdaIndex] = 0;
                        });
                        });
                        
                        // Pintar la pieza en la nueva posición
                        piezaActual.matriz.forEach((fila, filaIndex) => {
                        fila.forEach((celda, celdaIndex) => {
                                if (celda !== 0) {
                                nuevoArrayCasillas[piezaActual.fila + filaIndex][nuevaColumna + celdaIndex] = celda;
                                }
                        });
                        });
                        
                        setArrayCasillas(nuevoArrayCasillas);
                }
        }
        function girar(){
                console.log('Giraste')
                
        }
        function bajar(){
                // Incrementar la posición vertical
                const nuevaFila = piezaActual.fila + 1;
                
                // Actualizar la pieza actual con la nueva posición
                setpiezaActual({...piezaActual, fila: nuevaFila});
                
                // Crear una copia del array de casillas para modificarlo
                const nuevoArrayCasillas = [...arrayCasillas];
                
                // Pintar la pieza en la nueva posición
                piezaActual.matriz.forEach((fila, filaIndex) => {
                        fila.forEach((celda, celdaIndex) => {
                        if (celda !== 0) { // Solo pintar las celdas no vacías
                                nuevoArrayCasillas[nuevaFila + filaIndex][piezaActual.columna + celdaIndex] = celda;
                        }
                        });
                });
                
                // Actualizar el estado del panel
                setArrayCasillas(nuevoArrayCasillas);
    
    console.log('Pieza bajada a fila:', nuevaFila);
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
                                case 'ArrowUp':
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