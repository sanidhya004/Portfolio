import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = ({theme}) => {
  return (
    <div className='py-9 flex flex-col gap-4' id="proj">
        <div>
        <p className={theme?'text-3xl text-[#10637D] font-semibold':"text-3xl font-semibold"}>Projects</p>
        </div>
        <div className='flex sm:flex-row flex-col sm:px-4 gap-3 px-1'>
        <ProjectCard theme={theme} name={"Promptopia"} desc={"A dedicated full stack website created to allow users to share their innovative ChatGPT prompts"} demo="https://promptopia-orpin.vercel.app/"/>
            {/* <ProjectCard theme={theme} name={"PayNRent"} desc={"A website built on React, providing a seamless and user-friendly experience for customers to effortlessly rent vehicles from a wide range of options.."} git="https://github.com/sanidhya004/Paynrent" /> */}
           
            <ProjectCard theme={theme} name={"WBT Services Ltd"} desc={"As a developer, I contributed to the creation of a website for WBT Services Ltd, a company specializing in industrial systems and solutions. My role involved developing and implementing web functionalities to support their business goals, such as showcasing products, providing information, and facilitating customer interactions."} demo="https://www.wbtservices.co.uk/" />
            <ProjectCard theme={theme} name={"Boston George"} desc={"The project serves as a e-commerce website for therapeutic drugs selling company based in Canada.The project’s unique functionality is in the backend where by the node-mailer the backend is able to read mails of the owner and tracking all the payments made to a specific account inorder to keep track of payment status of the product"} demo="https://www.bostongexotics.com" />
        </div>
       
    </div>
  )
}

export default Projects
