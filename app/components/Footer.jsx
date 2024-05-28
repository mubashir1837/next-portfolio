import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center w-full max-w-7xl mx-auto">
        <div className="text-center lg:text-left lg:max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-100">
            Get in Touch!
          </h1>
          <p className="text-lg sm:text-xl lg:text-lg text-white text-center lg:text-left mb-6 lg:max-w-lg">
            I am currently exploring exciting new opportunities and eagerly anticipate receiving thoughtful messages in my inbox. Whether you have inquiries, potential job opportunities, or simply wish to connect, rest assured, I will respond promptly and warmly!
          </p>
          <p className="text-md sm:text-lg lg:text-md text-white text-center lg:text-left mb-12 lg:max-w-lg">
            An enthusiastic undergraduate student, passionate about Bioinformatics, Biopython, Python, JavaScript, HTML, and CSS.
          </p>
          <div className="flex items-center justify-center lg:justify-start mb-8">
            <FaMapMarkerAlt className="text-white text-2xl mr-2" />
            <span className="text-white text-lg">Islamabad, Pakistan</span>
          </div>
          <div className="flex space-x-4 justify-center lg:justify-start">
            <a href="mailto:your-email@example.com" className="text-white text-3xl">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin-profile" className="text-white text-3xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com/your-github-username" className="text-white text-3xl">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/your-instagram-profile" className="text-white text-3xl">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/your-facebook-profile" className="text-white text-3xl">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/your-twitter-profile" className="text-white text-3xl">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <img src="/images/pro.jpg" alt="GitHub Profile Photo" className="w-40 h-40 rounded-full mx-auto lg:mx-0" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
