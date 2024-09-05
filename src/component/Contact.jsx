/* eslint-disable react/no-unescaped-entities */
import {CONTACT} from '../constants'
import {motion} from 'framer-motion'
import '../Css/main.css';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1}}
      className="text-center text-4xl mt-8">Get  in Touch </motion.h2>
      <div className="text-center tracking-tighter ">

  


        
{/* test */}
<section>

  <div className="contant" id="contant">
    <motion.div       
     whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1}}  >
    <div className="contact-text">
      <h2>Contact <span>Me</span></h2>
      <h4> Let's work together, let me inspire you</h4>
      
      <ul className="contact-list">
        <li>
        {CONTACT.email}
        </li>
        <li>
          {CONTACT.phoneNo}
        </li>
      </ul>
    </div>

    </motion.div>
<motion.div 
     whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:1}}
>
    <div className="contant-form">
      <form>
        <input type="text" placeholder="Enter Your Name" required />
        <input type="email" placeholder="Enter Your Email" required />
        <input type="text" placeholder="Enter Your Subject" required />
        <textarea name="" id="" cols="40" rows="10" placeholder="Enter Your Message" required></textarea>
        <input type="submit" value="Submit" className="send" />
      </form>
    </div>
  
</motion.div>

  </div>
</section>




{/* test */}



      </div>
    </div>
  )
}

export default Contact
