import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import InicioVista from './components/inicioVista.jsx';
import Juego from './components/Juego.jsx';
import PartidasVista from './components/PartidasVista.jsx';

function App() { 
  return ( 
  <Router>
    <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>Tetris</Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'><img src="logo.png" alt="" /></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/Juego'>Juego</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/Partidas'>Partidas</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  
  <div className='container-fluid mt-4 ' >
    <Routes>
      <Route path='/' element={<InicioVista/>} />
      <Route path='/Juego' element={<Juego />} />
      <Route path='/Partidas' element={<PartidasVista />} />
    </Routes>
    </div>
  </Router>
  
)
}
export default App;
