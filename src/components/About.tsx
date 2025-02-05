import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaBookOpen,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

const About = () => {
  return (
    <div
      id="about"
      className="container mx-auto px-4 pt-0 mb-10 bg-[url('/rc.jpeg')] bg-cover bg-no-repeat"
    >
      <div className=" bg-opacity-80 p-10 rounded-lg shadow-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-500 text-center mb-10">
          About Me
        </h2>
        <div className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          <p>
            Hi there! I&apos;m{" "}
            <span className="font-semibold text-indigo-500">
              Muzammil Shaheen
            </span>
            , an independent Full-Stack Web Developer and AI Generative Expert
            based in Rahim Yar Khan, Pakistan.
          </p>
          <p className="mt-4">
            Passionate about crafting intuitive and sleek websites, I specialize
            in building impactful digital experiences for startups and small
            businesses. My expertise spans both frontend and backend development,
            enabling me to create seamless, visually appealing, and user-friendly
            applications.
          </p>
          <p className="mt-4">
            Leveraging AI generative tools, I bring innovation and efficiency to
            every project. Let&apos;s collaborate to elevate your digital
            presence and bring your vision to life!
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-indigo-500 mb-6 text-center">
            What I Do
          </h3>
          <ul className="space-y-6 max-w-3xl mx-auto">
            <li className="flex items-center">
              <FaCode className="text-indigo-500 text-2xl mr-4" />
              <span>
                Build responsive and scalable web applications using modern frameworks.
              </span>
            </li>
            <li className="flex items-center">
              <FaLaptopCode className="text-indigo-500 text-2xl mr-4" />
              <span>Optimize performance and deliver seamless user experiences.</span>
            </li>
            <li className="flex items-center">
              <FaBookOpen className="text-indigo-500 text-2xl mr-4" />
              <span>Stay up-to-date with emerging technologies and best practices.</span>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-indigo-500 mb-6 text-center">
            Connect with Me
          </h3>
          <div className="flex justify-center space-x-8 text-2xl">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-500 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-500 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:example@example.com"
              className="text-gray-500 hover:text-indigo-500 transition-colors"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-500 transition-colors"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
