import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Pages/HomePage'
import NavBar from './Componet/NavBar'
import Footer from './Componet/Footer'
import { useEffect } from 'react'

function App() {
  

  const[bg,setBg]=useState(localStorage.getItem("bg"))

  useEffect(()=>{
    
     const isDarkMode = JSON.parse(localStorage.getItem("bg") || "false");
    
     setBg(isDarkMode)
  },[])
  const handlebg=()=>{
     localStorage.setItem("bg",!bg)
     setBg(!bg)
     
  }

  return (
    <>
     <div className={bg?"light ":"dark"} >
      <NavBar handlebg={handlebg} theme={bg}/>
      <HomePage theme={bg}/>
      <Footer/>
     </div>
    </>
  )
}

export default App
