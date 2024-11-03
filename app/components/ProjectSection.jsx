"use client";
import React from "react";
import { FaLink } from "react-icons/fa";
import SEO from '../components/SEO';


const ProjectSection = () => {
  return (
    <>
      <SEO
        title="Projects"
        description="Showcasing my projects and work."
        keywords="projects, portfolio, work"
      />
    
      <section className="projects py-24 sm:py-16 lg:py-24 text-center mt-[90%]">
        <div className="container mx-auto">
          <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] to-[#1ff]">Projects</span>
          </h2>
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project-box bg-purple-700  p-6 rounded-lg  flex flex-col shadow-lg hover:shadow-lg transition-transform transform hover:-translate-y-2 bg-opacity-50  text-center shadow-[#ffffff]">
              <h3 className="text-xl font-bold mb-4 text-[#fff]">CodeWithBismilah</h3>
              <p className="text-[#fff] mb-4">
                This is <b>CodeWithBimsillah</b> website here we offer free coding materials.
              </p>
              <a
                href="https://codewithbismillah.vercel.app/"
                className="mt-auto flex justify-center"
              >
                <button className="bg-[#25a4ad] hover:bg-[#34aaaa] text-[#fff] hover:text-[#f3f1f1] font-bold py-2 px-4 rounded flex items-center justify-center">
                  <FaLink className="mr-2" /> View project
                </button>
              </a>
            </div>
            <div className="project-box bg-purple-700  p-6 rounded-lg  flex flex-col shadow-lg hover:shadow-lg transition-transform transform hover:-translate-y-2 bg-opacity-50  text-center shadow-[#ffffff]">
              <h3 className="text-xl font-bold mb-4 text-[#fff]">Ecommerce Website</h3>
              <p className="text-[#fff] mb-4">
                This an ecommerce website designed by using HTML, and tailwind CSS .
              </p>
              <a
                href="https://shopppings.vercel.app/"
                className="mt-auto flex justify-center"
              >
                <button className="bg-[#25a4ad] hover:bg-[#34aaaa] text-[#fff] hover:text-[#f3f1f1] font-bold py-2 px-4 rounded flex items-center justify-center">
                  <FaLink className="mr-2" /> View project
                </button>
              </a>
            </div>

            <div className="project-box bg-purple-700  p-6 rounded-lg  flex flex-col shadow-lg hover:shadow-lg transition-transform transform hover:-translate-y-2 bg-opacity-50  text-center shadow-[#ffffff]">
              <h3 className="text-xl font-bold mb-4 text-[#fff]">Text Analyzer</h3>
              <p className="text-[#fff] mb-4">
                This project is showing Text Analyzer website
              </p>
              <a
                href="https://texts-analyzerr.vercel.app/"
                className="mt-auto flex justify-center"
              >
                <button className="bg-[#25a4ad] hover:bg-[#34aaaa] text-[#fff] hover:text-[#f3f1f1] font-bold py-2 px-4 rounded flex items-center justify-center">
                  <FaLink className="mr-2" /> View project
                </button>
              </a>
            </div>

            <div className="project-box bg-purple-700  p-6 rounded-lg  flex flex-col shadow-lg hover:shadow-lg transition-transform transform hover:-translate-y-2 bg-opacity-50  text-center shadow-[#ffffff]">
              <h3 className="text-xl font-bold mb-4 text-[#fff]">Calculator</h3>
              <p className="text-[#fff] mb-4">
                This project shows a calculator app designed with HTML, CSS and JavaScript only.
              </p>
              <a
                href="https://calculator-j.vercel.app/"
                className="mt-auto flex justify-center"
              >
                <button className="bg-[#25a4ad] hover:bg-[#34aaaa] text-[#fff] hover:text-[#f3f1f1] font-bold py-2 px-4 rounded flex items-center justify-center">
                  <FaLink className="mr-2" /> View project
                </button>
              </a>
            </div>

            <div className="project-box bg-purple-700  p-6 rounded-lg  flex flex-col shadow-lg hover:shadow-lg transition-transform transform hover:-translate-y-2 bg-opacity-50  text-center shadow-[#ffffff]">
              <h3 className="text-xl font-bold mb-4 text-[#fff]">Portfolio website</h3>
              <p className="text-[#fff] mb-4">
                This is a Portfolio website designed with nextjs, it show cases your skills, eduactions, projects etc.
              </p>
              <a
                href="https://awesome-portfolio2024.vercel.app/"
                className="mt-auto flex justify-center"
              >
                <button className="bg-[#25a4ad] hover:bg-[#34aaaa] text-[#fff] hover:text-[#f3f1f1] font-bold py-2 px-4 rounded flex items-center justify-center">
                  <FaLink className="mr-2" /> View project
                </button>
              </a>
            </div>
            <div className="project-box bg-purple-700  p-6 rounded-lg  flex flex-col shadow-lg hover:shadow-lg transition-transform transform hover:-translate-y-2 bg-opacity-50  text-center shadow-[#ffffff]">
              <h3 className="text-xl font-bold mb-4 text-[#fff]">Portfolio website</h3>
              <p className="text-[#fff] mb-4">
                This is a Portfolio website designed with bootstrap, it show cases your skills, eduactions, projects etc.
              </p>
              <a
                href="https://mubashir-ali.vercel.app/"
                className="mt-auto flex justify-center"
              >
                <button className="bg-[#25a4ad] hover:bg-[#34aaaa] text-[#fff] hover:text-[#f3f1f1] font-bold py-2 px-4 rounded flex items-center justify-center">
                  <FaLink className="mr-2" /> View project
                </button>
              </a>
            </div>

            <div className="project-box bg-purple-700  p-6 rounded-lg  flex flex-col shadow-lg hover:shadow-lg transition-transform transform hover:-translate-y-2 bg-opacity-50 hover:shadow-[#]  text-center shadow-[#ffffff]">
              <h3 className="text-xl font-bold mb-4 text-[#fff]">Food ordering website</h3>
              <p className="text-[#fff] mb-4">
                This project is about food ordering website.
              </p>
              <a
                href="https://foodweb-five.vercel.app/"
                className="mt-auto flex justify-center"
              >
                <button className="bg-[#25a4ad] hover:bg-[#34aaaa] text-[#fff] hover:text-[#f3f1f1] font-bold py-2 px-4 rounded flex items-center justify-center">
                  <FaLink className="mr-2" /> View project
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default ProjectSection