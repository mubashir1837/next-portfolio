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
      <section className="min-h-screen px-4 py-24 bg-gradient-to-r from-[#010524] to-[#040c5c]">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text text-center bg-gradient-to-r from-[#19e345] to-[#fff]">
          Skills
        </h1>
        <div className="container-fluid py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/12"></div>
              <div className="w-full lg:w-5/12 px-4">
                <p className="text-lg text-white">
                  I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services, and online stores. I created many projects related to Bioinformatics by using deep learning and machine learning. Here are skills I&apos;ve acquired too.
                </p>
              </div>
              <div className="w-full lg:w-5/12 px-4 mt-8 lg:mt-0">
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
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <p className="text-lg text-white">HTML</p>
                    <span className="text-lg text-white">89%</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '89%' }}></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <p className="text-lg text-white">CSS</p>
                    <span className="text-lg text-white">89%</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '89%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4 justify-center">
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="text-center">
                  <span className="block mb-2">
                    <i className="fa fa-hand-peace-o text-green-500"></i>
                  </span>
                  <h5 className="text-4xl text-white">3</h5>
                  <p className="text-gray-400">Total Experience</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="text-center">
                  <span className="block mb-2">
                    <i className="fa fa-smile-o text-green-500"></i>
                  </span>
                  <h5 className="text-4xl text-white">300</h5>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="text-center">
                  <span className="block mb-2">
                    <i className="fa fa-thumbs-up text-green-500"></i>
                  </span>
                  <h5 className="text-4xl text-white">100</h5>
                  <p className="text-gray-400">Project Complete</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="text-center">
                  <span className="block mb-2">
                    <i className="fa fa-trophy text-green-500"></i>
                  </span>
                  <h5 className="text-4xl text-white">50</h5>
                  <p className="text-gray-400">Award Win</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
