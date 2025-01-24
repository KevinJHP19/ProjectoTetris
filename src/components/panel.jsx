import React from 'react';


export default function Panel({modelos}){
    return (
        <div className=''>
            {modelos.map((fila, index) => (
                <div key={index} className='row'>
                    {fila.map((celda, index) =>(
                        <div key={index} className='col border'>
                            {celda}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}




