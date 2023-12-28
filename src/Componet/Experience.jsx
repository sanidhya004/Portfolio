import React from 'react'
import CardExp from './CardExp'

const Experience = ({theme}) => {
  return (
    <div className='py-9 flex flex-col gap-4' id="exp">
        <div>
        <p className={theme?'text-3xl text-[#10637D] font-semibold':"text-3xl font-semibold"}>Experience</p>
        </div>
        <div className='flex sm:flex-row flex-col sm:px-4 gap-3 px-1'>
            <CardExp theme={theme} Role={"Front End Developer"}/>
            <CardExp theme={theme}  Role={"Full Stack Developer"}/>
           
        </div>
       
    </div>
  )
}

export default Experience