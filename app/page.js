// pages/index.js (assuming your file is named index.js)
"use client"
import React from "react";
import SEO from "./components/SEO";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import EducationSection from "./components/EducationSection";
import ProjectSection from "./components/ProjectSection";
import Achievement from "./components/Achievement";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600">
      <SEO
        title="Mubashir Ali Portfolio Website"
        description="Welcome to my personal portfolio website"
        keywords="home, personal, portfolio, Mubashir, Baltistan,  nextjs_portfolio"
      />
      <Navbar />
      
      <div className="container mt-20 mx-auto px-12 py-0">
        <Hero />
        <br />
        <br />
        <AboutMe />
        <Skills />
        <EducationSection />
        <ProjectSection />
        <Achievement/>
        <Footer />
        
      </div>
    </main>
  );
}
