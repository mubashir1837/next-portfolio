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
        keywords="education, qualifications, background, stanford, cousera, IBM, edurka, Udemy"
      />
      <section className="education py-10 sm:py-16 lg:py-24 text-center">
        <div className="container mx-auto">
          <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1ff] to-[#fff]">Education</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="education-item bg-[#27b4e3] p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="mb-4">
              <Image src="/images/yul.jpg" alt="Profile Image" width={100} height={100} className="rounded-full align-center" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-[#fff]">Matric</h3>
            <p className="text-[#fff] mb-2">Uswa Public School Yultar</p>
            <p className="text-[#fff] mb-4">Science</p>
            <p className="text-[#fff]">2019-2021</p>
          </div>

          <div className="education-item bg-[#27b4e3] p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="mb-4">
              <Image src="/images/uswa2.png" alt="Profile Image" width={100} height={100} className="rounded-full align-center" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-[#fff]">Intermediate</h3>
            <p className="text-[#fff] mb-2">Uswa College Islamabad</p>
            <p className="text-[#fff] mb-4">Pre Medical</p>
            <p className="text-[#fff]">2021-2023</p>
          </div>

          <div className="education-item bg-[#27b4e3] p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="mb-4">
              <Image src="/images/uswa2.png" alt="Profile Image" width={100} height={100} className="rounded-full align-center" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Bachelor</h3>
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
