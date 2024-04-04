import React from 'react'
import { FaGithub } from 'react-icons/fa'

const ProjectCard = ({theme,name,desc,demo,git}) => {
  return (
    <div className={theme?'sm:h-[300px] sm:w-[300px] h-[200px] w-[250px]  shadow-lg p-5 relative':'sm:h-[300px] sm:w-[300px] h-[200px] w-[250px]  bg-[#27282F] p-5 relative'}>
      <div className='flex flex-col gap-3'>
      <p className={theme?"text-[#10637D] font-black ":"text-[#10F0FC] font-extrabold"}>{name}</p>
        <p className='text-xs'>{desc}</p>

      </div>

      <div className='right-0 absolute bottom-3 flex justify-end items-end gap-4 px-3 text-xs'>
          {demo?<a href={demo}><button>Live Demo</button></a>:<></>} 
           {git && <button className='text-xl'><FaGithub/></button>}

      </div>
        
    </div>
  )
}

export default ProjectCard