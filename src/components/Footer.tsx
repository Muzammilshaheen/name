import React from "react";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold text-indigo-500 mb-4">Connect with Me</h2>
        <p className="mb-6 text-gray-400">
          Feel free to reeach out via email, WhatsApp, or connect on social platforms!
        </p>

        <div className="flex justify-center space-x-6 text-2xl">
          
          <a
            href="mailto:your-email@gmail.com"
            className="text-gray-300 hover:text-indigo-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>

          
          <a
            href="https://wa.me/1234567890"
            className="text-gray-300 hover:text-green-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>

          
          <a
            href="https://github.com/yourusername"
            className="text-gray-300 hover:text-indigo-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          
          <a
            href="https://linkedin.com/in/yourusername"
            className="text-gray-300 hover:text-indigo-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          
          <a
            href="https://twitter.com/yourusername"
            className="text-gray-300 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
        @2024 Muzammil Shaheen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
