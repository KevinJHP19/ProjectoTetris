import React, { useState }  from 'react';

import { modelos }   from '../lib/modelos.js';
import Panel from './Panel.jsx';
import Pieza from './Pieza.jsx';
import modeloPieza from '../lib/modeloPieza.js';

export default function  Juego(){
        //prueba para la calse modeloPieza
        const l = new modeloPieza(1,"Ele",0,0,0,modelos.piezas[0].matriz);
        l.girar();
        l.girar();
        l.girar();
        
        console.log(l);

    const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);
    return ( 

            <div id="intro" className='text-center p-5 bg-seconday text-white' style={{fontSize: '1.5em'}}>
                
            <Panel modelos={arrayCasillas} />
            <br></br>
            <Pieza modelos={modelos.piezas[4].matriz[0]} />
            </div>
    
    

    )}