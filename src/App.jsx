import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import './App.css'
import ContenedorInicio from './components/ContenedorInicio'
import ContenedorNoticias from './components/ContenedorNoticias'
import Footer from './components/Footer'
import ContenedorYT from './components/ContenedorYT'

function App() {
  
  return (
    <>
      <NavBar/>
      <ContenedorInicio/>
      <ContenedorNoticias/>
      <ContenedorYT/>
      <Footer/>
    </>
  )
}

export default App
