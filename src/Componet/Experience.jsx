import React from 'react'
import CardExp from './CardExp'

const Experience = ({theme}) => {
  return (
    <div className='py-9 flex flex-col gap-4' id="exp">
        <div>
        <p className={theme?'text-3xl text-[#10637D] font-semibold':"text-3xl font-semibold"}>Experience</p>
        </div>
        <div className='flex sm:flex-row flex-col sm:px-4 gap-3 px-1'>
            <CardExp theme={theme} Role={"Front End Developer"} comp={"Brickow"} obj={["Brainstormed ,designed and developed and a SAAS platform designed to minimize effort in maintaining records of payments in a business with bill generating capabilities."]}/>
            <CardExp theme={theme}  Role={"Full Stack Developer"}  comp={"PS Softech Pvt. Ltd"} obj={["Built A website built on React, providing a seamless and user-friendly experience for customers to effortlessly rent vehicles from a wide range of options"
,"Created a robust backend with NodeJS with an interactive UI made on ReactJS",

"Integrated Stripe API for payment gateway",
"Enhanced website security with JWT authentication"]}/>
           
        </div>
       
    </div>
  )
}

export default Experience