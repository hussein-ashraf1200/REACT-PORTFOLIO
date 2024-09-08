import {PROJECTS} from '../constants'
import { motion } from 'framer-motion'
import { GrView } from "react-icons/gr";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
      className="text-center text-4xl mt-8">Project</motion.h2>
<div>{PROJECTS.map((project, index)=> (
  <div key={index} className='mb-8 mt-8 flex flex-wrap lg:justify-center'>
    <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.6}}
    
    className='mb-8 mt-8 mr-8 flex flex-wrap lg:justify-center'>
      <a href={project.link } target="_blank" rel="noopener noreferrer">
        <GrView className=" ml-20	 cursor-pointer hover:scale-125 hover:text-cyan-300" />
    </a>
    </motion.div>
    <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.6}}
    className="w-full lg:w-1/4 ">
    <img src={project.image} width={150} height={150} alt={project.title}  className='mb-6 rounded' />
    </motion.div>
    <motion.div 
    
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:1.6}}
    className="w-full max-w-xl lg:w-3/4">
    <h6 className='mb-2 font-semibold'>{project.title}</h6>
    <p className='mb-4 text-neutral-400'>{project.description}</p>
    {project.technologies.map((tech, index)=> (
      <span key={index} className='mr-2 mt-4 roundde cursor-pointer bg-neutral-900
                    p-6 rounded-lg shadow-2xl hover:bg-cyan-300 
                   transition-shadow duration-300 px-2 py-1 text-sm font-medium text-purple-800 '>
        {tech}
      </span>
    ) )} 
    </motion.div>
    

  </div>
))}
    </div>
    </div>
  )
}

export default Project
