"use client";
import React from 'react';
import Image from "next/image";
import SEO from '../components/SEO';
import FadeIn from 'react-fade-in';




const AboutMe = () => {
  return (
    <>
    <FadeIn>
      <SEO
        title="About Mubashir Ali"
        description="Learn more about me, my background, and my interests."
        keywords="about me, background, biography, beautiful about me, portfolio, awesome_portfolio, portfolio vercel"
      />
      
      
      <section className="about-me flex flex-col sm:flex-row items-center justify-center text-center sm:text-left py-24 mt-[80%]"> 
        <div className="text-white max-w-lg">
          <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1ff] to-[#fff]">About Me</span>
          </h2>
          <p className="text-lg sm:text-xl mb-8 ">
            As an undergraduate computational biologist and dedicated web application 
            developer from Pakistan, I merge my passion for programming languages with 
            cutting-edge biological research. Crafting elegant code, I weave intricate 
            digital solutions, bridging science and technology. With each line 
            written, I advance towards a future where innovation knows no bounds.
          </p>
        </div>
        <div className="mt-16 sm:mt-0 sm:ml-12 "> 
          <Image src="/images/pro.jpg" alt="Profile Image" width={250} height={250} className="rounded-full border-4 border-white" />
        </div>
      </section>
      </FadeIn>
     
    </>
  );
};

export default AboutMe;
