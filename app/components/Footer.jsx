import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaSkype, FaWhatsapp, FaQuora } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 ">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center w-full max-w-7xl mx-auto">
        <div className="text-center lg:text-left lg:max-w-2xl">
          <h2 className="text-3xl  lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#1fff] to-[#fff]">
            Get in Touch!
          </h2>
          <p className="text-lg sm:text-xl lg:text-lg text-white text-center lg:text-left mb-6 lg:max-w-6xl">
            I am currently exploring exciting new opportunities and eagerly anticipate receiving thoughtful messages in my inbox. Whether you have inquiries, potential job opportunities, or simply wish to connect, rest assured, I will respond promptly and warmly!
          </p>
          <div className="p-3 mb-4 w-60  bg-[#11ffffc4] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 cursor-pointer">
            <a href="https://www.google.com/maps/place/Islamabad,+Islamabad+Capital+Territory,+Pakistan" target='_blank' className=" text-center flex items-center justify-center space-x-2">
              <FaMapMarkerAlt className="text-[#fff] text-2xl" />
              <span>Islamabad, Pakistan</span>
            </a>
          </div>
          <div className="flex space-x-4 justify-center lg:justify-start size-max-0px sm:max-w-xl">
            <a href="mailto:mubashirali1837@gmail.com" target='blank' className="text-white text-xl">
              <FaEnvelope />
            </a>
            <a href="https://linkedin.com/in/mubashirali3" target='blank' className="text-white text-xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com/mubashir1837" target='_blank' className="text-white text-xl">
              <FaGithub />
            </a>
            <a href="https://instagram.com/mubashir_aliyaar_37/" target='blank' className="text-white text-xl">
              <FaInstagram />
            </a>
            <a href="https://join.skype.com/invite/tbUVmyPL6ySt" target='_blank' className="text-white text-xl">
              <FaSkype />
            </a>
            <a href="http://Wa.me/+923275882664" target='_blank' className="text-white text-xl">
              <FaWhatsapp />
            </a>
            <a href="https://www.quora.com/profile/Mubashir-Ali-762" target='_blank' className="text-white text-xl">
              <FaQuora />
            </a>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <img src="/images/sm.jpeg" alt=" Profile Photo" width={200} height={200} className="rounded-full mr-8 " />
        </div>
      </div>
    </section>
  );
};

export default Footer;
