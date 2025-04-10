import { ExternalLink, Github } from 'lucide-react';
import TechStack from './TechStack';

const Projects = ({theme}) => {
  const projects = [
    {
      title: "Ticketr",
      description: "Next-gen ticketing platform with intelligent queues, instant updates, and bulletproof transactions",
      image: "https://images.unsplash.com/photo-1662383729882-e03ce8e00887?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: [ "Next.js" , "Typescript" , "Convex" , "Stripe" , "Clerk"],
      githubLink: "https://github.com/sanidhya004/Tickiting",
      liveLink: "https://tickiter.vercel.app/"
    },
    {
      title: "Promptopia",
      description: "Developed a high-quality, SEO-optimized web page for WBT Services using Next.js to showcase their projects effectively, enhancing online visibility and attracting potential clients",
      image: "https://plus.unsplash.com/premium_photo-1726079246917-46f2b37f7e9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Next.js" , "JavaScript" , "Tailwindcss"],
      githubLink: "https://github.com/sanidhya004/Promptopia",
      liveLink: "https://promptopia-orpin.vercel.app/"
    },
    {
      title: "Boston George",
      description: "Developed a full-stack e-commerce platform for Boston George, an online cannabis store in Canada, utilizing Node and React to build a robust and user-friendly platform with features such as user authentication, secure payment processing, and inventory management, ensuring compliance with all relevant regulations.",
      image: "https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Redux", "Node.js","Sequalize","Bootstrap"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "WBT service",
      description: "Designed and developed a high-performance, SEO-optimized web platform using Next.js for WBT Services, enabling an enhanced digital showcase of refinery equipment with improved search visibility and a seamless user experience.",
      image: "https://www.wbtservices.co.uk/_next/image?url=%2Fcase-study-filtration-installation.webp&w=1920&q=75",
      technologies: ["Next.js", "Tailwind Css", "SEO optimization"],
      githubLink: "#",
      liveLink: "https://www.wbtservices.co.uk/"
    },
    {
      title: "Ares Elite Academy",
      description: "Developed a comprehensive e-commerce and booking platform for Ares Elite Academy using Next.js, enabling the sale of therapeutic drugs in Australia and providing a seamless appointment scheduling system for athletes. The project spans three dedicated portals—Admin, Doctor, and Athlete—each with unique functionalities, including on-demand online training sessions for remote athletic coaching.",
      image: "https://plus.unsplash.com/premium_photo-1681826116800-142c0c79c764?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Redux", "Stripe","Node","Express"],
      githubLink: "#",
      liveLink: "https://areselitesportsvision.com/about"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className='overflow-hidden  flex justify-center items-center'>
    <TechStack/>
    </div>
      <div className="container mx-auto px-4 py-5">
      <p className={theme?'text-3xl text-[#10637D] font-semibold py-4':"text-3xl font-semibold py-4"}>Projects</p>
        
        <div className="bento-grid">
          {/* Featured project */}
          <div className="bento-item bento-item-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="h-72 mb-6 overflow-hidden rounded-lg">
              <img 
                src={projects[0].image} 
                alt={projects[0].title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">{projects[0].title}</h3>
              <div className="flex gap-3">
                <a 
                  href={projects[0].githubLink} 
                  className="p-2 border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="View GitHub Repository"
                >
                  <Github size={18} />
                </a>
                <a 
                  href={projects[0].liveLink} 
                  className="p-2 border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="View Live Site"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              {projects[0].description}
            </p>
            <div className="flex flex-wrap gap-2">
              {projects[0].technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-xs rounded-full bg-background text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Other projects */}
          {projects.slice(1).map((project, index) => (
            <div 
              key={index}
              className="bento-item bento-item-md animate-fade-in"
              style={{ animationDelay: `${0.3 + (index * 0.2)}s` }}
            >
              <div className="h-40 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <div className="flex gap-2">
                  <a 
                    href={project.githubLink} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="View GitHub Repository"
                  >
                    <Github size={16} />
                  </a>
                  <a 
                    href={project.liveLink} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="View Live Site"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 text-xs rounded-full bg-background text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Call to action */}
          <div className="bento-item bento-item-sm animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="h-full flex flex-col items-center justify-center text-center">
              <p className="text-lg mb-4">Want to see more of my work?</p>
              <a 
                href="https://github.com/sanidhya004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border-2 border-primary rounded-md font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github className="mr-2" size={18} />
                Visit GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
