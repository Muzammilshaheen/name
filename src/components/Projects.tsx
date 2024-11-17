import Card from './Card';
import React from 'react'
import Heading from './Heading';

const data = [
    {
      id: 0,
      title: "Todo List",
      desc: "2-Sept-2022 — My PhD t and their role in cognition. On my panel are Kim Sterelny, Daniel Stoljar, Anna Wierzbicka and",
      img: "/2.jpg",
      tage: ["React", "Node", "CSS", "Typescript"],
    },
    {
      id: 1,
      title: "Weather App",
      desc: "A real-time weather app fetching data from an external API to provide current weather updates for any location.",
      img: "/2.jpg",
      tage: ["JavaScript", "React", "API", "CSS"],
    },
    {
      id: 2,
      title: "Portfolio Website",
      desc: "A personal portfolio website showcasing projects, skills, and contact information with a sleek, responsive design.",
      img: "/3.jpg",
      tage: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: 3,
      title: "E-commerce Platform",
      desc: "A full-stack e-commerce platform with product listings, user authentication, and a shopping cart feature.",
      img: "/4.jpg",
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
      title: "Chat Application",
      desc: "A real-time chat application with WebSocket implementation for seamless communication between users.",
      img: "/6.jpg",
      tage: ["Socket.IO", "Node.js", "React", "CSS"],
    },
  ];
  



const Projects = () => {
  return (
    <div id='projects'className='container pt-32 text-red'>
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