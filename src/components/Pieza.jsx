import React from 'react';
export default function Panel({ modelos }) {
    
    

    return (
        <div className='panel'>
            {modelos.map((fila, filaIndex) => (
                <div key={filaIndex} className='row'>
                    {fila.map((celda, celdaIndex) => (
                        <div key={celdaIndex} className='col border'>
                            {celda}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

