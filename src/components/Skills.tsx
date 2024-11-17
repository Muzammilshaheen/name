import React from 'react';

const Skills = () => {
  return (
    <section
      id="skill"
      className="container mx-auto p-8 md:p-16 bg-black rounded-2xl border-4 border-dashed border-indigo-300 shadow-lg 2xl:border-gray-500 2xl:shadow-gray-500"
      >
      
      <h1 className="text-center font-bold text-6xl text-indigo-500 mb-16">Skills</h1>

      
      <div className="grid md:grid-cols-2 gap-20 items-center">
        
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-200 mb-4">
            Technology I Work With
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            The application of scientific knowledge for practical purposes, especially in industry.
            Advances in computer technology have transformed the industry and continue to provide
            innovative solutions. Engineering and applied sciences drive progress across various
            domains.
          </p>
        </div>

        
        <div>
          <div className="grid grid-cols-2 text-center text-2xl sm:text-3xl font-medium text-gray-700 gap-6">
           
            <div className="space-y-3">
              <div className="p-4 bg-indigo-100 rounded-lg shadow hover:bg-indigo-500 hover:scale-105 hover:text-white transition-all duration-300">
                <h2>Next.js</h2>
              </div>
              <div className="p-4 bg-indigo-100 rounded-lg shadow hover:bg-indigo-500 hover:scale-105 hover:text-white transition-all duration-300">
                <h2>React</h2>
              </div>
              <div className="p-4 bg-indigo-100 rounded-lg shadow hover:bg-indigo-500 hover:scale-105 hover:text-white transition-all duration-300">
                <h2>TypeScript</h2>
              </div>
            </div>

           
            <div className="space-y-3">
              <div className="p-4 bg-indigo-100 rounded-lg shadow hover:bg-indigo-500 hover:scale-105 hover:text-white transition-all duration-300">
                <h2>CSS</h2>
              </div>
              <div className="p-4 bg-indigo-100 rounded-lg shadow hover:bg-indigo-500 hover:scale-105 hover:text-white transition-all duration-300">
                <h2>HTML</h2>
              </div>
              <div className="p-4 bg-indigo-100 rounded-lg shadow hover:bg-indigo-500 hover:scale-105 hover:text-white transition-all duration-300">
                <h2>Tailwind</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
