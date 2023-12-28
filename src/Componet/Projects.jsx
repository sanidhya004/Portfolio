import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = ({theme}) => {
  return (
    <div className='py-9 flex flex-col gap-4' id="proj">
        <div>
        <p className={theme?'text-3xl text-[#10637D] font-semibold':"text-3xl font-semibold"}>Projects</p>
        </div>
        <div className='flex sm:flex-row flex-col sm:px-4 gap-3 px-1'>
            <ProjectCard theme={theme} name={"PayNRent"} desc={"A website built on React, providing a seamless and user-friendly experience for customers to effortlessly rent vehicles from a wide range of options.."}/>
            <ProjectCard theme={theme} name={"Promptopia"} desc={"A dedicated full stack website created to allow users to share their innovative ChatGPT prompts"}/>
            <ProjectCard theme={theme} name={"KadPharmaceuticals"} desc={"Kad Pharmaceuticals' custom-designed landing page and User Interface, that showcases their products, services, and brand identity, creating a visually appealing and informative online presence to improve organic traffic on the website driving business growth."}/>
            
        </div>
       
    </div>
  )
}

export default Projects