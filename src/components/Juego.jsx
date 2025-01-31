import React, { useState }  from 'react';

import { modelos }   from '../lib/modelos.js';
import Panel from './Panel.jsx';



export default function  Juego(){

    const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);
    return ( 

            <div id="intro" className='text-center p-5 bg-seconday text-white' style={{fontSize: '1.5em'}}>
                
            <Panel modelos={arrayCasillas} />
            </div>
    
    

    )}