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
           
            <ProjectCard theme={theme} name={"ASIS Auction"} desc={"The project serves as an online service for generating bids and creating bids for vehicles in Australia.The key feature of the application is the “Bid Bot” which serves as a bidding assistant and makes a bid on behalf of the user."} demo="https://www.asisauctions.com.au/" />
            <ProjectCard theme={theme} name={"Boston George"} desc={"The project serves as a e-commerce website for therapeutic drugs selling company based in Canada.The project’s unique functionality is in the backend where by the node-mailer the backend is able to read mails of the owner and tracking all the payments made to a specific account inorder to keep track of payment status of the product"} demo="https://www.bostongexotics.com" />
        </div>
       
    </div>
  )
}

export default Projects