import React from 'react'
import CardExp from './CardExp'

const Experience = ({theme}) => {
  return (
    <div className='py-9 flex justify-between flex-col gap-4 px-5 ' id="exp">
        <div>
        <p className={theme?'text-3xl text-[#10637D] font-semibold':"text-3xl font-semibold"}>Experience</p>
        </div>
        <div className='flex sm:flex-row-reverse flex-col-reverse sm:px-4 gap-3 px-1'>
          
            <CardExp theme={theme} Role={"Front End Developer"} comp={"Brickow"} obj={["Brainstormed ,designed and developed and a SAAS platform designed to minimize effort in maintaining records of payments in a business with bill generating capabilities."]}/>
            <CardExp theme={theme}  Role={"Full Stack Developer"}  comp={"PS Softech Pvt. Ltd"} obj={["Built A website built on React, providing a seamless and user-friendly experience for customers to effortlessly rent vehicles from a wide range of options"
,"Created a robust backend with NodeJS with an interactive UI made on ReactJS",

"Integrated Stripe API for payment gateway",
"Enhanced website security with JWT authentication"]}/>
        <CardExp theme={theme}  Role={"Full Stack Developer"}  comp={"Quantum IT Innovations"} obj={["Worked on Real World Projects incooperating the knowledge of backend technologies and frotend technologies"
,"Interacted with clients in order to understand the vision that they have for their projects and shaping it into delivarable project",

"Created various middlewares in projects",
"Worked closely with the UI/UX team to ensure delivery of a figma acccurate frontend"]}/>

<CardExp theme={theme} Role={"Front End Developer"} comp={"Accenture"} obj={["Frontend Development with React.js – Building and maintaining an admin dashboard for BestBuy using React.js","Migrating Best Buy’s existing Angular dashboard to React, improving maintainability and performance."]}/>
           
        </div>
       
    </div>
  )
}

export default Experience