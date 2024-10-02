import React from 'react'

const ContenedorInicio = () => {
  return (
    <section className='contenedorInicio'>
      <div className='mensajeBienvenida'>
        <h1>¡Bienvenidos a <span className='colorSecundario'>PIT</span> Simracing!</h1>
        <h2>Informate sobre el increible mundo de F1 24</h2>
        <p>Nuestro equipo está formado por pilotos dedicados que buscan perfeccionar sus habilidades y competir al más alto nivel en el emocionante mundo del simracing. Acompáñanos en nuestro viaje por las pistas virtuales, donde cada curva es una oportunidad para demostrar nuestra velocidad y precisión.</p>
        <a href="#">Contáctanos</a>     
      </div>
      <div>
        <img src="src/assets/images/pilotof1.png" alt="Piloto de f1 minimalista" />
      </div>
    </section>
  )
}

export default ContenedorInicio
