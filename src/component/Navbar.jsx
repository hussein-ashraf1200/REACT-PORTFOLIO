import logo from "../assets/logo.jpg"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import { FaWhatsappSquare } from "react-icons/fa";

const Navbar = () =>{
  return (
   <nav className="   mb-20 flex items-center justify-between py-3">
 <div className=" flex flex-shrink items-center">
    <img className="mx-2 w-16" src={logo} alt="logo" />
</div>
<div className=" m-8 flex items-center justify-center gap-4 text-2xl">

<a href="https://github.com/hussein-ashraf1200" target="_blank" rel="noopener noreferrer">
    <FaGithub className="text-white" />
</a>
<a href="https://www.linkedin.com/messaging/thread/2-NTc2Y2U5NDAtYjc5OS00ODU2LWJjNDEtODRmMzA1ZTM3NGEyXzAxMw==/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="text-white" />
</a>
<a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
    <FaWhatsappSquare className="text-white" />
</a>

</div>

  </nav>
  )
};

export default Navbar
