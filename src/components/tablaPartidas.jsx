import React, { useState } from 'react';
export default function Tablapartidas() {
    const [partidas, setPartidas] = useState([
        // Ejemplo de datos de partidas
        { nick: 'Mruwu', puntos: 1000, fecha: '2023-01-01' },
        { nick: 'Pablo', puntos: 1500, fecha: '2023-02-01' },
        { nick: 'Juan', puntos: 1200, fecha: '2023-01-15' },
    ]);
    const [ordenNickAsc, setOrdenNickAsc] = useState(true);
    const [ordenPuntosAsc, setOrdenPuntosAsc] = useState(true);
    const [ordenFechaAsc, setOrdenFechaAsc] = useState(true);
    


    function Ordenarnick() {
        const arrayordenadonick = partidas.sort((a, b) => 
            ordenNickAsc ? a.nick.localeCompare(b.nick) : b.nick.localeCompare(a.nick)
        );
        setOrdenNickAsc(!ordenNickAsc);
        setPartidas([...arrayordenadonick]);
    }

    function Ordenarpuntos() {
        const arrayordenadopuntos = partidas.sort((a, b) => 
            ordenPuntosAsc ? a.puntos - b.puntos : b.puntos - a.puntos
        );
        setOrdenPuntosAsc(!ordenPuntosAsc);
        setPartidas([...arrayordenadopuntos]);
    }

    function Ordenarfecha() {
        const arrayordenadofecha = partidas.sort((a, b) => 
            ordenFechaAsc ? new Date(a.fecha) - new Date(b.fecha) : new Date(b.fecha) - new Date(a.fecha)
        );
        setOrdenFechaAsc(!ordenFechaAsc);
        setPartidas([...arrayordenadofecha]);
    }
    function agregarPartida(){
        const nick = document.querySelector('#nick').value;
        const puntos = parseInt(document.querySelector('#puntos').value);
        const fecha = document.querySelector('#fecha').value;
        const nuevaPartida = { nick, puntos, fecha };
        setPartidas([...partidas, nuevaPartida]);
        document.querySelector('#nick').value = '';
        document.querySelector('#puntos').value = '';
        document.querySelector('#fecha').value = '';
    }

    return (
        <div className='text-white m-3 rounded-5 bg-dark p-3'>
            <table className='table table-dark table-hover  '>
                <thead>
                    <tr>
                        <th>
                            Nick <button onClick={Ordenarnick} className='btn btn-primary'>Ordenar</button>
                        </th>
                        <th>
                            Puntos <button onClick={Ordenarpuntos} className='btn btn-primary'>Ordenar</button>
                        </th>
                        <th>
                            Fecha <button onClick={Ordenarfecha} className='btn btn-primary'>Ordenar</button>
                        </th>
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
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Agregar nueva partida
            </button>
            {/* Modal */}
            <div className="modal fade text-dark" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header text-venter">
                            <h5 className="modal-title" id="exampleModalLabel">Agregar nueva partida</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-start">
                            <form className='text-dark'>
                                <div className="mb-3">
                                    <label htmlFor="nick" className="form-label ">Nick:</label>
                                    <input type="text" className="form-control" id="nick" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="puntos" className="form-label">Puntos:</label>
                                    <input type="number" className="form-control" id="puntos"  required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fecha" className="form-label">Fecha:</label>
                                    <input type="text" className="form-control" id="fecha" required  placeholder='aaaa-mm-dd' />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary"  data-bs-dismiss="modal" onClick={agregarPartida}>Guardar</button>
                        </div>
                    </div>
                </div>
            </div>





    </div>
    );
}
 

