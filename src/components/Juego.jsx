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
        
        console.log(modelos.piezas.length);
    
        const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);
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
            
    
    

    )}