import React from 'react'
import Experience from '../Componet/Experience'
import Footer from '../Componet/Footer'
import Hero from '../Componet/Hero'
import Projects from '../Componet/Projects'


const HomePage = ({theme}) => {
  return (
    <div className='min-h-screen min-w-screen py-32 flex   sm:px-20 px-10 gap-12 items-start justify-center flex-col '>
      <Hero theme={theme}/>
      <Experience theme={theme}/>
      <Projects theme={theme}/>
     

    </div>
  )
}

export default HomePage