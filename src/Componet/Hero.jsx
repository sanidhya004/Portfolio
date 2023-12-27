import React from 'react'

const Hero = ({theme}) => {
  return (
    <>
    <div className='flex sm:flex-row flex-col gap-4 '>
      <div>
      <img src="code.png" className='sm:h-[200px] h-[100px]' />
      </div>
      <div className='flex flex-col justify-center items-start  w-fit gap-6 '>
          <p className={theme?'sm:text-6xl text-3xl font-extrabold text-[#10637D]':'sm:text-6xl text-3xl font-bold text-white'}>Sanidhya Sharma</p>
          <p className='sm:text-3xl  text-xl font-semibold'>Transforming ideas into functional,elegant solution</p>
          <button className={theme?'bg-[#10637D] text-white p-3 rounded-md mt-3 font-semibold':'bg-[#10F0FC] text-black p-3 rounded-md mt-3 font-semibold'}>Download Resume.</button>
      </div>
      </div>

      <div>
        <p className={theme?'text-3xl text-[#10637D] font-semibold':"text-3xl font-semibold"}>About</p>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
      </div>

      <div className='flex sm:px-4 gap-9 flex-wrap justify-center px-9'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png" className='sm:h-[90px] h-[50px]'/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" className='sm:h-[90px] h-[50px]'/>
        <img src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" className='sm:h-[90px] h-[50px]'/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" className='sm:h-[90px] h-[50px]'/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png" className='sm:h-[90px] h-[50px]'/>
        <img src="https://miro.medium.com/v2/resize:fit:512/1*W3ZHer9j6Cxzh78m0jLLdw.png" className='sm:h-[90px] h-[50px]'/>
        
      </div>
    </>
  )
}

export default Hero