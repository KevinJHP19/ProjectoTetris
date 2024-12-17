
import React from 'react';

export default function tablapartidas() {
    
    let partidas = [
        {nick: "Mruwu", puntos : 1000, fecha: "10/12/2024" },
        {nick: "Pepe", puntos : 1500, fecha: "15/12/2024"},
        {nick: "Juan", puntos : 800, fecha: "17/12/2024"},
    ];

    return (
        <div className='text-white'>
            <table className='table '>
                <thead>
                    <tr>
                        <th>Nick</th>
                        <th>Puntos</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {partidas.map((partida, index) => (
                        <tr key={index}>
                            <td>{partida.nick}</td>
                            <td>{partida.puntos}</td>
                            <td>{partida.fecha}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
