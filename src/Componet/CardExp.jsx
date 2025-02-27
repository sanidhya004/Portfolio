import React from 'react'

const CardExp = ({theme,Role,comp,obj}) => {
  return (
    <div className={theme?'md:min-h-[300px] sm:w-[100%] min-h-[200px] md:w-[250px]  shadow-lg p-5 ':'md:min-h-[300px] sm:w-[100%] min-h-[200px] md:w-[250px]  bg-[#27282F] p-5'}>
       <div className='flex flex-col gap-3'>
      <p className={theme?"text-[#10637D] font-black ":"text-[#10F0FC] font-extrabold"}>{Role}</p>
        <p className='text-xs font-semibold'>{comp}</p>

        <p className='text-xs font-semibold'>About</p>
        <ul className='list-disc px-3'>
          {obj?.map((obj)=>{
            return(<li className='text-xs'>{obj}</li>)
          })}
        </ul>


      </div>

    </div>
  )
}

export default CardExp