import React from 'react'

const NavBar = () => {
  
    return (
    <div className='navbar'>
      <div className='logotipo'>
        <a href="/">
          <img src="src/assets/images/logoPITsinfondo.png" alt="Logo del equipo" width="80px" height="80px" />
          <h1 className='titulo'><span id='pitFont'>PIT</span><span id='simFont'>SIM</span>RACING</h1>
        </a>
      </div>
      <div className='navegacion'>
        <a href="#">Integrantes</a>
        <a href="#">Calendario</a>
        <a href="#">Torneos</a>
        <a href="#">Contacto</a>
      </div>
    </div>
    
  )
}

export default NavBar
