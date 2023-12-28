import React from 'react'

const Hero = ({theme}) => {
  return (
    <>
    <div className='flex sm:flex-row flex-col gap-4 ' id="abt">
      <div>
      <img src="code.png" className='sm:h-[200px] h-[100px]' />
      </div>
      <div className='flex flex-col justify-center items-start  w-fit gap-6 '>
          <p className={theme?'sm:text-6xl text-3xl font-extrabold text-[#10637D]':'sm:text-6xl text-3xl font-bold text-white'}>Sanidhya Sharma</p>
          <p className='sm:text-3xl  text-xl font-semibold'>Transforming ideas into functional,elegant solution</p>
         <a href='https://docs.google.com/document/d/1bu_l_ibQWp_ZKGD9KKDyVJEZ6dWhGLNo/edit?usp=sharing&ouid=112585873483213253362&rtpof=true&sd=true'> <button className={theme?'bg-[#10637D] text-white p-3 rounded-md mt-3 font-semibold':'bg-[#10F0FC] text-black p-3 rounded-md mt-3 font-semibold'}>View Resume.</button></a>
      </div>
      </div>

      <div>
        <p className={theme?'text-3xl text-[#10637D] font-semibold':"text-3xl font-semibold"}>About</p>
        <p>
Hey, I'm Sanidhya, a MERN stack developer deeply immersed in the world of coding and football. With a passion for crafting seamless web experiences, I bring ideas to life through the magic of code. Off the screen, I'm a fervent football enthusiast, analyzing matches and cheering for my favorite teams.

My tech journey started with a love for innovation and problem-solving, and I thrive on the dynamic challenges of web development. Just as on the field where strategies unfold, I enjoy translating that excitement into meticulous code. Beyond coding, catch me kicking the ball around, discussing the latest football tactics, and soaking in the energy of the game. Join me on this dual adventure of coding and football fandom, where creativity meets the thrill of the game!</p>
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