import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="container pt-32">
      <h2 className="text-4xl md:text-5xl font-bold text-indigo-500">About Me</h2>
      <p className="text-gray-500 pt-4 leading-relaxed text-lg">
        Hello! I'm <span className="text-white font-bold">Muzammil Shaheen</span>, a passionate developer and lifelong learner with a strong interest in building 
        innovative solutions to real-world problems. With a background in <span className="text-indigo-400 font-bold">Next.js</span>, I thrive 
        on challenges and continually seek opportunities to improve and expand my skill set. When I'm not coding, 
        you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book. 
        Let's connect and create something amazing together!
      </p>

      
      <ul className="mt-8 space-y-2 text-lg">
        <li className="flex items-center gap-2">
          ✅ <span>Building dynamic web applications with Next.js</span>
        </li>
        <li className="flex items-center gap-2">
          ✅ <span>Experience with React.js and Tailwind CSS</span>
        </li>
        <li className="flex items-center gap-2">
          ✅ <span>Contributing to open-source projects</span>
        </li>
        <li className="flex items-center gap-2">
          ✅ <span>Exploring the latest trends in web development</span>
        </li>
      </ul>
    </div>
  );
};

// Footer //
const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6 mt-16">
      <div className="container flex flex-col items-center">
        <p className="text-lg">© 2024 Muzammil Shaheen. All rights reserved.</p>
        <div className="flex gap-4 mt-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
            <FaLinkedin size={25} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
            <FaGithub size={25} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
            <FaTwitter size={25} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
            <FaFacebook size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <>
      <About />
      <Footer />
    </>
  );
};

export default App;
