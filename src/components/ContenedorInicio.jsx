import React from 'react'

const ContenedorInicio = () => {
  return (
    <section className='contenedorInicio'>
      <div className='mensajeBienvenida'>
        <h1>¡Bienvenidos a <span className='colorSecundario'>PIT</span> Simracing!</h1>
        <p>Nuestro equipo está formado por pilotos dedicados que buscan perfeccionar sus habilidades y competir al más alto nivel en el emocionante mundo del simracing. Acompáñanos en nuestro viaje por las pistas virtuales, donde cada curva es una oportunidad para demostrar nuestra velocidad y precisión.</p>     
      </div>
      <div className='divisionYT'>
        <h2>Lo mas reciente de nuestro canal:</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/gBoeWgzXCvA?si=ff4IBVrZfUq3tRsj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <a className="enlaceYT" href="https://www.youtube.com/@pitsimracing">
            <img src="src/assets/images/Youtube_logo.png" alt="Logo de youtube" width="40px" height="30px" />
            <h3>¡Suscribete aqui!</h3>
        </a>
      </div>
    </section>
  )
}

export default ContenedorInicio
