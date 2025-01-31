
import React from 'react';

export default function  InicioVista() {
    return (
        
        <div id="intro" className="text-center p-5 bg-secondary text-white" style={{fontSize: '1.5em'}}>
        <header className="d-flex align-items-center justify-content-center">
			<img src="logo.png" alt="logo" width="200" className="mt-5" />
		</header>
		<div className="container mt-5 bg-opacity-50 bg-dark p-2">
			
      <div id="intro" className="text-center p-5">
        <p>Tetris és un videojoc de tipus trencaclosques. Fou inventat per lenginyer informàtic rus Aleksei Pàjitnov lany 1984, mentre treballava a lAcadèmia de Ciències de Moscou.</p>
        <h2>Instruccions:</h2>
        <p>Pots moure les peces fent servir les fletxes desquerra i dreta</p>
        <p>Amb la fletxa avall pots girar la peça</p>
        <p><strong>Ñ</strong> per canviar la peça actual per la peça que està a punt de sortir (que pots veure a la columna de la dreta)</p>
        <p>Al final de la partida podràs desar la teva puntuació, i verue el ranking de jugadors</p>
        <button className="btn btn-success fs-1 mt-5">JUGAR</button>
				
      </div>
        </div>

        
        </div>
        
    )
}