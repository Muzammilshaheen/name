import Card from './Card';
import React from 'react'
import Heading from './Heading';

const data = [
    {
      id: 0,
      title: "HTML",
      desc: "2-Sept-2022 — My PhD t and their role in cognition. On my panel are Kim Sterelny, Daniel Stoljar, Anna Wierzbicka and",
      img: "/html.webp",
      tage: ["React", "Node", "CSS", "Typescript"],
    },
    {
      id: 1,
      title: "CSS",
      desc: "A real-time weather app fetching data from an external API to provide current weather updates for any location.",
      img: "/css.webp",
      tage: ["JavaScript", "React", "API", "CSS"],
    },
    {
      id: 2,
      title: "React",
      desc: "A personal portfolio website showcasing projects, skills, and contact information with a sleek, responsive design.",
      img: "/rc.jpeg",
      tage: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: 3,
      title: "E-commerce Platform",
      desc: "A full-stack e-commerce platform with product listings, user authentication, and a shopping cart feature.",
      img: "/c.webp",
      tage: ["Node.js", "Express", "MongoDB", "React"],
    },
    {
      id: 4,
      title: "Blog Application",
      desc: "A dynamic blogging platform allowing users to create, edit, and share their articles with a rich text editor.",
      img: "/5.jpg",
      tage: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    },
    {
      id: 5,
      title: "JavaScript",
      desc: "A real-time chat application with WebSocket implementation for seamless communication between users.",
      img: "/jv.jpeg",
      tage: ["JavaScript", "Node.js", "React", "CSS"],
    },
  ];
  



const Projects = () => {
  return (
    <div data-aos="zoom-in-left" id='projects'
   
    className="container pt-32 bg-no-repeat bg-cover bg-center text-white"
    style={{ backgroundImage: "url('/m.avif')" }} 
  >
     <Heading  title='My project'/>
     <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center '>
     {data.map((el)=>(<Card
     key={el.id}
     title={el.title}
     desc={el.desc}
     img={el.img}
     tags={el.tage}
     />))}
     </div>
    </div>
  )
}

export default Projects