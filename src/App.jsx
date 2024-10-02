import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import './App.css'
import ContenedorInicio from './components/ContenedorInicio'
import ContenedorNoticias from './components/ContenedorNoticias'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
      <NavBar/>
      <ContenedorInicio/>
      <ContenedorNoticias/>
      <Footer/>
    </>
  )
}

export default App
