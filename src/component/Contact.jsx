/* eslint-disable react/no-unescaped-entities */
import {CONTACT} from '../constants'
import {motion} from 'framer-motion'
import '../Css/main.css';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 flex flex-wrap lg:justify-center">
     
      <div className="text-center tracking-tighter flex flex-wrap lg:justify-center">
    
{/* test */}
<section className='flex flex-wrap lg:justify-center md:text-center'>

  <div className="contant 	 flex flex-wrap lg:justify-center	w-1/2" id="contant">
    <motion.div       
     whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-50}}
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
        <div className="contant-form ">
  <form action="https://formspree.io/f/myzgvobj" method="POST">
    <input type="text" name="name" placeholder="Enter Your Name" required />
    <input type="email" name="email" placeholder="Enter Your Email" required />
    <input type="text" name="subject" placeholder="Enter Your Subject" required />
    <textarea name="message" cols="40" rows="10" placeholder="Enter Your Message" required></textarea>
    <input type="submit" value="Submit" className="send" />
  </form>
    </div>

    </motion.div>
<motion.div 
     whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:1}}
>
</motion.div>
  </div>
</section>
{/* test */}
     </div>
    </div>
  )
}

export default Contact
