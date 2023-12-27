import React from 'react'

const CardExp = ({theme,Role}) => {
  return (
    <div className={theme?'sm:h-[300px] sm:w-[300px] h-[200px] w-[250px]  shadow-lg p-5':'sm:h-[300px] sm:w-[300px] h-[200px] w-[250px]  bg-[#27282F] p-5'}>
        <p className={theme?"text-[#10637D] font-black ":"text-[#10F0FC] font-extrabold"}>{Role}</p>
    </div>
  )
}

export default CardExp