import project1 from "../assets/projects/project-1.jpg";
import weater from "../assets/projects/weater.png";
import project3 from "../assets/projects/project-3.jpg";
import engine from "../assets/projects/engine.png";

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
    title: "E-Commerce Website",
    image: project1,
    description:
      "A responsive e-commerce website for selling clothes, where you can reserve products and add them to the cart. It consists of four pages, including sections for men, women, children, and best-sellers",
    technologies: ["HTML", "CSS", "React.Js"],
    link: "https://your-ecommerce-project-link.com",  // الخاصية الجديدة

    
  },
  {
    title: "Weater App",
    image: weater,
    description:
      "An app to check the temperature, wind speed, and humidity.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://hussein-ashraf1200.github.io/APP-FOR-WEATHER/" , // الخاصية الجديدة

  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "Tailwind", "React.Js"],
    link: "https://hussein-ashraf1200.github.io/React-portfolio/",  // الخاصية الجديدة
  },
  {
    title: "Image Engine Search",
    image: engine,
    description:
      "A search engine for heigh-resolution images.",
    technologies: ["HTML", "CSS" , "Javascript"],
    link: "https://hussein-ashraf1200.github.io/Image-search-engine/",  // الخاصية الجديدة

  },
];

export const CONTACT = {
  address: "Egypt - Alexandria - El Agamy - ST 13 ",
  phoneNo: "01210238724",
  phoneNo1: "Phone 01013395766",
  email: "hussein061200@gmail.com",
};
