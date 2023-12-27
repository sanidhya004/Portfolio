import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = ({theme}) => {
  return (
    <div className='py-9 flex flex-col gap-4'>
        <div>
        <p className={theme?'text-3xl text-[#10637D] font-semibold':"text-3xl font-semibold"}>Projects</p>
        </div>
        <div className='flex sm:flex-row flex-col sm:px-4 gap-3 px-1'>
            <ProjectCard theme={theme} name={"PayNRent"}/>
            <ProjectCard theme={theme} name={"Promptopia"}/>
            <ProjectCard theme={theme} name={"KadPharmaceuticals"}/>
            
        </div>
       
    </div>
  )
}

export default Projects