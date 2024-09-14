import weater from "../assets/projects/weater.png";
import engine from "../assets/projects/engine.png";
import bookstore from "../assets/projects/bookstore.png";
import CarRent from '../assets/projects/CarRent.png';
import food from '../assets/projects/food.png';
import Travel from '../assets/projects/Travel.png';
import shoper from '../assets/projects/shoper.png';


export const HERO_CONTENT = `
I am a passionate Front-End developer with a knack for crafting responsive and efficient web applications. I have honed my skills in front-end technologies like React. My goal is to leverage my expertise to create innovative user interfaces that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `
I am a dedicated and versatile Front-End developer with a passion for creating efficient and user-friendly web applications. I have worked with technologies such as React js. My journey in web development began with a deep curiosity about how things work, which evolved into a career focused on continuous learning and adapting to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality user interfaces. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;



export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Frontend Developer",
    company: "Freelancer.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js . Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: [ "HTML", "Css", "Javascript", "React.js" ,"Tailwind"],
  
  },
 
];



export const PROJECTS = [
  {
    title: "E-Commerce Website Shopper",
    image: shoper,
    description:
      "A responsive e-commerce website for selling clothes, where you can reserve products and add them to the cart. It consists of four pages, including sections for men, women, children, and best-sellers",
    technologies: ["HTML", "CSS", "React.Js"],
    link: "https://shopper-two-beta.vercel.app/",  // الخاصية الجديدة

    
  },



  {
    title: "Book Store",
    image: bookstore,
    description:
      "Aresposive website to get books.",
    technologies: ["HTML", "Tailwind" , "React", "Javascript"],
    link: "https://book-store-wm9n.vercel.app/",  // الخاصية الجديدة

  },
  {
    title: "Car Rent",
    image: CarRent,
    description:
      "Aresposive website to Rent Cars .",
    technologies: ["HTML", "Tailwind" , "React", "Javascript"],
    link: "https://car-rent-virid.vercel.app//",  // الخاصية الجديدة

  },
  {
    title: "Food website",
    image: food,
    description:
      "Aresposive website to Order meals.",
    technologies: ["HTML", "Tailwind" , "React", "Javascript"],
    link: "https://book-store-wm9n.vercel.app/",  // الخاصية الجديدة

  },
  {
    title: "Travel",
    image: Travel,
    description:
      "Aresposive website .",
    technologies: ["HTML", "Tailwind" , "React", "Javascript"],
    link: "https://travel-omega-lyart.vercel.app//",  // الخاصية الجديدة

  },
    {
    title: "Image Engine Search",
    image: engine,
    description:
      "A search engine for heigh-resolution images.",
    technologies: ["HTML", "CSS" , "Javascript"],
    link: "https://hussein-ashraf1200.github.io/Image-search-engine/",  // الخاصية الجديدة

  },
    {
    title: "Weather App",
    image: weater,
    description:
      "An app to check the temperature, wind speed, and humidity.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://hussein-ashraf1200.github.io/APP-FOR-WEATHER/" , // الخاصية الجديدة

  },

];

export const CONTACT = {
  address: "Egypt - Alexandria - El Agamy - ST 13 ",
  phoneNo: "01210238724",
  phoneNo1: "Phone 01013395766",
  email: "hussein061200@gmail.com",
};
