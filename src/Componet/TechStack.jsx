
import { useEffect, useRef } from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    //{ name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  ];

  // Duplicate the technologies to create a seamless infinite scroll effect
  const allTechnologies = [...technologies, ...technologies];
  
  return (
    <section className="   overflow-hidden hidden md:block">
      <div className="container mx-auto px-6">
        
        
        <div className="relative">
          {/* First row - left to right */}
          <div className="flex overflow-hidden mb-8">
            <div className="flex scroll-left">
              {technologies.map((tech, index) => (
                <div 
                  key={`row1-${tech.name}-${index}`}
                  className="flex flex-col items-center mx-6 "
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="tech-icon mb-3 h-14 w-14"
                  />
                  <span className="font-medium text-sm">{tech.name}</span>
                </div>
              ))}
              {technologies.map((tech, index) => (
                <div 
                  key={`row1-dup-${tech.name}-${index}`}
                  className="flex flex-col items-center mx-6"
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="tech-icon mb-3 h-14 w-14"
                  />
                  <span className="font-medium text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Second row - right to left */}
          <div className="flex overflow-hidden">
            <div className="flex scroll-right">
              {technologies.map((tech, index) => (
                <div 
                  key={`row2-${tech.name}-${index}`}
                  className="flex flex-col items-center mx-6"
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="tech-icon mb-3 h-14 w-14"
                  />
                  <span className="font-medium text-sm">{tech.name}</span>
                </div>
              ))}
              {technologies.map((tech, index) => (
                <div 
                  key={`row2-dup-${tech.name}-${index}`}
                  className="flex flex-col items-center mx-6"
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="tech-icon mb-3 h-14 w-14"
                  />
                  <span className="font-medium text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;