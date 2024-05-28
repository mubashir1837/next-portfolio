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
      <section className="min-h-screen px-4 py-24 mt-[100%]">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text text-center bg-gradient-to-r from-[#1fff] to-[#fff]">
          Skills
        </h1>
        <div className="w-full lg:w-6/12 mx-auto text-center">
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <p className="text-lg text-white">Python</p>
              <span className="text-lg text-white">95%</span>
            </div>
            <div className="w-full bg-white rounded-full h-2.5">
              <div className="bg-[#28b6bb] h-2.5 rounded-full" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <p className="text-lg text-white">JavaScript</p>
              <span className="text-lg text-white">75%</span>
            </div>
            <div className="w-full bg-white rounded-full h-2.5">
              <div className="bg-[#28b6bb] h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <p className="text-lg text-white">HTML</p>
              <span className="text-lg text-white">89%</span>
            </div>
            <div className="w-full bg-white rounded-full h-2.5">
              <div className="bg-[#28b6bb] h-2.5 rounded-full" style={{ width: '89%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <p className="text-lg text-white">CSS</p>
              <span className="text-lg text-white">89%</span>
            </div>
            <div className="w-full bg-white rounded-full h-2.5">
              <div className="bg-[#28b6bb] h-2.5 rounded-full" style={{ width: '89%' }}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
