import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Pages/HomePage'
import NavBar from './Componet/NavBar'

function App() {
  const [count, setCount] = useState(0)

  const[bg,setBg]=useState(true)
  const handlebg=()=>{
     setBg(!bg)
  }

  return (
    <>
     <div className={bg?"light":"dark"} >
      <NavBar handlebg={handlebg} theme={bg}/>
      <HomePage theme={bg}/>
     </div>
    </>
  )
}

export default App
