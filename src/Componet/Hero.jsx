import React from 'react';
import { ArrowDown } from 'lucide-react';
import TechStack from './TechStack';
const Hero = ({ theme }) => {
  return (
    <>
      {/* <div className="flex flex-col gap-4 sm:flex-row " id="abt">
        <div>
          <img src="code.png" className="h-[100px] sm:h-[200px]" />
        </div>
        <div className="flex w-fit flex-col items-start  justify-center gap-6 ">
          <p
            className={
              theme
                ? 'text-3xl font-extrabold text-[#10637D] sm:text-6xl'
                : 'text-3xl font-bold text-white sm:text-6xl'
            }>
            Sanidhya Sharma
          </p>
          <p className="text-xl  font-semibold sm:text-3xl">
            Transforming ideas into functional,elegant solution
          </p>
        </div>
      </div>

      <div>
        <p className={theme ? 'text-3xl font-semibold text-[#10637D]' : 'text-3xl font-semibold'}>
          About
        </p>
        <p>
          Hey, I'm Sanidhya, a MERN stack developer deeply immersed in the world of coding and
          football. With a passion for crafting seamless web experiences, I bring ideas to life
          through the magic of code. Off the screen, I'm a fervent football enthusiast, analyzing
          matches and cheering for my favorite teams. My tech journey started with a love for
          innovation and problem-solving, and I thrive on the dynamic challenges of web development.
          Just as on the field where strategies unfold, I enjoy translating that excitement into
          meticulous code. Beyond coding, catch me kicking the ball around, discussing the latest
          football tactics, and soaking in the energy of the game. Join me on this dual adventure of
          coding and football fandom, where creativity meets the thrill of the game!
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-9 px-9 sm:px-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png"
          className="h-[50px] sm:h-[90px]"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
          className="h-[50px] sm:h-[90px]"
        />
        <img
          src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png"
          className="h-[50px] sm:h-[90px]"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
          className="h-[50px] sm:h-[90px]"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png"
          className="h-[50px] sm:h-[90px]"
        />
        <img
          src="https://miro.medium.com/v2/resize:fit:512/1*W3ZHer9j6Cxzh78m0jLLdw.png"
          className="h-[50px] sm:h-[90px]"
        />
      </div>
      <div>
        <div>
          <div className="w-full overflow-hidden h-fit">
            <div className="infinite-scroll-wrapper flex">
          
              <div className="animate-scroll flex items-center space-x-16 px-8">
                <div className="flex h-24 w-24 flex-col items-center justify-center">
                  <div className="h-16 w-16 text-blue-500">
                  <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png"
          className="h-[50px] sm:h-[90px]"
        />
                  </div>
                  
                </div>

                <div className="flex h-24 w-24 flex-col items-center justify-center">
                <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
          className="h-[50px] sm:h-[90px]"
        />
                </div>

                <div className="flex h-24 w-24 flex-col items-center justify-center">
                <img
          src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png"
          className="h-[px] sm:h-[90px]"
        />
                </div>

                <div className="flex h-24 w-24 flex-col items-center justify-center">
                 
                <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
          className="h-[14px] sm:h-[90px]"
        />
                </div>

                <div className="flex h-24 w-24 flex-col items-center justify-center">
                  <div className="h-16 w-16 text-blue-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full">
                      <path d="M4 3H20V21H4V3Z" fill="currentColor" />
                      <path
                        d="M16 8L8 8M16 12L8 12M16 16L8 16"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="mt-2 text-sm font-medium">HTML5</span>
                </div>

                <div className="flex h-24 w-24 flex-col items-center justify-center">
                <img
          src="https://miro.medium.com/v2/resize:fit:512/1*W3ZHer9j6Cxzh78m0jLLdw.png"
          className="h-[14px] sm:h-[90px]"
        />
                </div>
              </div>

              
              
            </div>
          </div>
        </div>
      </div> */}
      <div className='flex justify-center  border-solid border-black h-1/2 flex-col md:flex-row '>
       <section className=" flex items-center pt-24 flex-col">
      <div className="container mx-auto  sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-black w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 flex items-center justify-center rounded-md overflow-hidden shadow-lg">
              <img 
                src="code.png" 
                alt="Logo" 
                className="w-20 h-20 md:w-28 md:h-28 object-contain"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2 animate-slide-in-bottom" style={{ animationDelay: '0.4s' }}>
              Full Stack Developer
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-in-bottom" style={{ animationDelay: '0.5s' }}>
              Sanidhya Sharma
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto md:mx-0 animate-slide-in-bottom" style={{ animationDelay: '0.6s' }}>
              Transforming ideas into functional, elegant solutions
            </p>
            <div className="animate-slide-in-bottom" style={{ animationDelay: '0.7s' }}>
              <a 
                href="#projects" 
                className="inline-flex items-center px-6 py-3 border-2 border-primary rounded-md font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
       
        
      </div>
       
    </section>
    <section id="about" className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">About</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-lg leading-relaxed mb-4">
              Hey, I'm Sanidhya, a MERN stack developer deeply immersed in the world of coding and football. 
              With a passion for crafting seamless web experiences, I bring ideas to life through the magic of code.
            </p>
            <p className="text-lg leading-relaxed">
              My tech journey started with a love for innovation and problem-solving, and I thrive on the dynamic challenges of web development.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-4">My Interests</h3>
            <p className="text-lg leading-relaxed mb-6">
              Off the screen, I'm a fervent football enthusiast, analyzing matches and cheering for my favorite teams. 
            </p>
            
           
          </div>
        </div>
        
       
      </div>
    </section>
    
    
    </div>
    
    
      <div></div>
    
    </>
  );
};

export default Hero;
