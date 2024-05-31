"use client";
import React from 'react';
import Image from "next/image";
import SEO from '../components/SEO';



const EducationSection = () => {
  return (
    <>
      <SEO
        title="Education"
        description="My educational background and qualifications."
        keywords="education, qualifications, background, stanford, coursera, IBM, edureka, Udemy"
      />
      
      <section className="education py-10 sm:py-16 lg:py-24 text-center mt-[90%]">
        <div className="container mx-auto">
          <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1ff] to-[#fff]">Education</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="education-item bg-purple-700 p-6 rounded-lg flex flex-col items-center shadow-lg hover:shadow-lg transition-transform transform hover:-translate-y-2 bg-opacity-50 shadow-[#ffffff]">
              <div className="mb-4">
                <div className="relative" style={{ width: '100px', height: '100px' }}>
                  <Image src="/images/yul.jpg" alt="Profile Image" fill className="rounded-full object-cover" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#fff]">Matric</h3>
              <p className="text-[#fff] mb-2">Uswa Public School Yultar</p>
              <p className="text-[#fff] mb-4">Science</p>
              <p className="text-[#fff]">2019-2021</p>
            </div>

            <div className="education-item border-white border-6 bg-purple-700 p-6 rounded-lg flex flex-col items-center shadow-lg hover:shadow-lg transition-transform transform hover:-translate-y-2 bg-opacity-50 shadow-[#ffffff]">
              <div className="mb-4">
                <div className="relative" style={{ width: '100px', height: '100px' }}>
                  <Image src="/images/uswa2.png" alt="Profile Image" fill className="rounded-full object-cover" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#fff]">Intermediate</h3>
              <p className="text-[#fff] mb-2">Uswa College Islamabad</p>
              <p className="text-[#fff] mb-4">Pre Medical</p>
              <p className="text-[#fff]">2021-2023</p>
            </div>

            <div className="education-item bg-purple-700 p-6 rounded-lg flex flex-col items-center shadow-lg hover:shadow-lg transition-transform transform hover:-translate-y-2 bg-opacity-50 shadow-[#ffffff]">
              <div className="mb-4">
                <div className="relative" style={{ width: '100px', height: '100px' }}>
                  <Image src="/images/uswa2.png" alt="Profile Image" fill className="rounded-full object-cover" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#fff]">Bachelor</h3>
              <p className="text-[#fff] mb-2">University ...</p>
              <p className="text-[#fff] mb-4">Field of Study</p>
              <p className="text-[#fff]">Year of Graduation</p>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default EducationSection;
