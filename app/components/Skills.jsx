"use client";
import React from "react";
import SEO from '../components/SEO';


const Skills = () => {
  return (
    <>
      <SEO
        title="Mubashir Ali portfolio"
        description="A list of my skills and technologies I'm proficient in."
        keywords="skills, technologies, proficiency Planner, Ahrefs, SEMrush,"
      />
    
      <section className="min-h-screen px-4 py-24 mt-[90%]">
        <div className="text-center">
          <h2 className="mb-9 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1ff] to-[#fff] text-center">Skills</span>
          </h2>
        </div>
        <div className="w-full lg:w-6/12 mx-auto text-center">
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <p className="text-lg text-white">Python</p>
              <span className="text-lg text-white">95%</span>
            </div>
            <div className="w-full bg-[#dfdbdb] rounded-full h-2.5">
              <div className="bg-[#1fff] h-2.5 rounded-full" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <p className="text-lg text-white">JavaScript</p>
              <span className="text-lg text-white">80%</span>
            </div>
            <div className="w-full bg-[#dfdbdb] rounded-full h-2.5">
              <div className="bg-[#1fff] h-2.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <p className="text-lg text-white">Tailwind CSS</p>
              <span className="text-lg text-white">95%</span>
            </div>
            <div className="w-full bg-[#dfdbdb] rounded-full h-2.5">
              <div className="bg-[#1fff] h-2.5 rounded-full" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <p className="text-lg text-white">Bootstrap</p>
              <span className="text-lg text-white">95%</span>
            </div>
            <div className="w-full bg-[#dfdbdb] rounded-full h-2.5">
              <div className="bg-[#1fff] h-2.5 rounded-full" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <p className="text-lg text-white">Nextjs</p>
              <span className="text-lg text-white">85%</span>
            </div>
            <div className="w-full bg-[#dfdbdb] rounded-full h-2.5">
              <div className="bg-[#1fff] h-2.5 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <p className="text-lg text-white">HTML</p>
              <span className="text-lg text-white">89%</span>
            </div>
            <div className="w-full bg-[#dfdbdb] rounded-full h-2.5">
              <div className="bg-[#1ff] h-2.5 rounded-full" style={{ width: '89%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <p className="text-lg text-white">CSS</p>
              <span className="text-lg text-white">90%</span>
            </div>
            <div className="w-full bg-[#dfdbdb] rounded-full h-2.5">
              <div className="bg-[#1fff] h-2.5 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
