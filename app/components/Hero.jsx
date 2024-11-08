"use client";
import Link from "next/link";
import React from "react";
import SEO from '../components/SEO';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Welcome to my personal website. Learn more about me and my work."
        keywords="home, personal website, web developer, awesome portfolio, Planner, SEMrush"
      />
      <section className="hero py-12">
        <div className="text-center mb-6">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1ff] to-[#fff]">Hello I&apos;m </span>
            <br />
            <TypeAnimation
              sequence={[
                'Mubashir Ali',
                1000,
                'Bioinformatician',
                1000,
                'Web developer',
                1000,
                'Machine Learning Enthusiast',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-base sm:text-lg mb-9 lg:text-lg max-w-lg mx-auto  ">
            A proficient programmer excels in web development, driven by a passion for crafting inventive solutions that push boundaries and inspire progress.
          </p>
          <div className="mt-4">
            <Link href="http://Wa.me/+923275882664">
              <button className="bg-[#fff]  hover:bg-[#1f90b6] hover:text-white border border-[#ffffff] text-[#27b4e3] font-bold py-3 px-6 mr-4 rounded-full">
                Hire Me
              </button>
            </Link>
            <Link href="https://github.com/mubashir1837/Curriculum-Vitae/blob/main/Curriculum%20Vitae.pdf">
              <button className="bg-[#1f90b6] hover:bg-[#fff] text-white hover:text-[#27b4e3] font-bold py-3 px-6 mt-2 rounded-full border border-[#ffff]">
                Download CV
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
