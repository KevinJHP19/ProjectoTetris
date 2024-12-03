import React from 'react';

function App() {
  const nombre = 'Carlos';
  console.log(nombre);

  return (
    <div>
      <a href="https://example.com" target="_blank" rel="noreferrer">Visita nuestro sitio</a>
    </div>
  );
}

function saludo() {
  console.log("Hola mundo!");
}

saludo();

export default App;
