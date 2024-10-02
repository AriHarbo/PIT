import React from 'react'

const ContenedorNoticias = () => {
  return (
    <section className='apartadoNoticias'>
        <h2>Noticias</h2>
        <div className='gridNoticias'>
            <div className='noticia noticia1'>
                <img src="src/assets/images/imagenNoticia1.jpg" alt="Imagen del juego F1 24"/>
                <div className='textoNoticia'>
                    <h3>Noticia relleno 1</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae placeat molestias eaque aperiam a fugit enim quos ea dolore tempora, deleniti possimus harum ducimus suscipit non rerum nobis quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quam ab officiis ipsam temporibus veniam, deleniti, animi, corrupti adipisci nesciunt delectus dicta provident eveniet possimus quis odit. Voluptatibus, iure illum.</p>
                </div>
            </div>
            <div className='noticia noticia2'>
                <div className='textoNoticia'>
                    <h3>Noticia relleno 2</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae placeat molestias eaque aperiam a fugit enim quos ea dolore tempora, deleniti possimus harum ducimus suscipit non rerum nobis quasi!</p>
                </div>
                <img src="src/assets/images/imagenNoticia2.jpg" alt="Imagen de F1 24" />
            </div>
            <div className='noticia noticia3'>
            <div className='textoNoticia'>
                    <h3>Noticia relleno 3</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae placeat molestias eaque aperiam a fugit enim quos ea dolore tempora, deleniti possimus harum ducimus suscipit non rerum nobis quasi!</p>
                </div>
            </div> 
        </div>
    </section>
  )
}

export default ContenedorNoticias
