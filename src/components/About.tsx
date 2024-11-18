import React from "react";
import { FaCode, FaLaptopCode, FaBookOpen, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="container pt-32 mb-10">
      <h2 className="text-4xl md:text-5xl font-bold text-indigo-500 text-center mb-10">About Me</h2>
      <div className="text-gray-500 pt-4 text-lg leading-relaxed">
        <p>
          Hi there! I&apos;m <span className="font-semibold text-indigo-500">Muzammil Shaheen</span>, a 
          passionate <span className="font-semibold">Full-Stack Developer</span> and tech enthusiast dedicated to crafting 
          innovative solutions for real-world challenges. With expertise in modern frameworks like
          <span className="font-semibold">Next.js</span>, I specialize in creating seamless, high-performance web 
          applications.
        </p>
        <p className="mt-4">
          My journey as a developer is fueled by curiosity and a commitment to lifelong learning. Whether it&apos;s exploring 
          the latest technologies, contributing to open-source communities, or tackling new challenges, I thrive on 
          opportunities that allow me to grow and make a meaningful impact.
        </p>
        <p className="mt-4">
          When I&apos;m not coding, you&apos;ll find me immersed in a good book, delving into design trends, or experimenting with 
          exciting side projects. Let&apos;s collaborate and bring ideas to life together!
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold text-indigo-500 mb-4">What I Do</h3>
        <ul className="space-y-4">
          <li className="flex items-center">
            <FaCode className="text-indigo-500 text-xl mr-4" />
            <span>Build responsive and scalable web applications using modern frameworks.</span>
          </li>
          <li className="flex items-center">
            <FaLaptopCode className="text-indigo-500 text-xl mr-4" />
            <span>Optimize performance and deliver seamless user experiences.</span>
          </li>
          <li className="flex items-center">
            <FaBookOpen className="text-indigo-500 text-xl mr-4" />
            <span>Stay up-to-date with emerging technologies and best practices.</span>
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold text-indigo-500 mb-4">Connect with Me</h3>
        <div className="flex space-x-6 text-2xl">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-500">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-500">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
