import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaSkype } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 ">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center w-full max-w-7xl mx-auto">
        <div className="text-center lg:text-left lg:max-w-2xl">
          <h2 className="text-xl sm:text-2xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-100">
            Get in Touch!
          </h2>
          <p className="text-lg sm:text-xl lg:text-lg text-white text-center lg:text-left mb-6 lg:max-w-6xl">
            I am currently exploring exciting new opportunities and eagerly anticipate receiving thoughtful messages in my inbox. Whether you have inquiries, potential job opportunities, or simply wish to connect, rest assured, I will respond promptly and warmly!
          </p>
          <div className="flex items-center justify-center lg:justify-start mb-8">
            <FaMapMarkerAlt className="text-white text-2xl mr-2" />
            <span className="text-white text-lg">Islamabad, Pakistan</span>
          </div>
          <div className="flex space-x-4 justify-center lg:justify-start size-max-0px sm:max-w-xl">
            <a href={"mailto:mubashirali1837@gmail.com"} className="text-white text-2xl">
              <FaEnvelope />
            </a>
            <a href="https://linkedin.com/in/mubashirali3" className="text-white text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com/mubashir1837" className="text-white text-2xl">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/your-instagram-profile" className="text-white text-2xl">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/your-facebook-profile" className="text-white text-2xl">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/your-twitter-profile" target='_blank' className="text-white text-2xl">
              <FaSkype />
            </a>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <img src="/images/sm.jpeg" alt=" Profile Photo"  width={200} height={200} className="rounded-full mr-8 " />
        </div>
      </div>
    </section>
  );
};

export default Footer;
