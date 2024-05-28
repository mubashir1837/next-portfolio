import React from 'react';
import { FaHandPeace, FaSmile, FaThumbsUp, FaTrophy } from 'react-icons/fa';

const Achievement = () => {
  return (
    <>
      <main className="min-h-screen px-4 py-24 mt-[100%]">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text text-center bg-gradient-to-r from-[#1ff] to-[#fff]">
          Achievements
        </h1>
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="text-center">
                  <FaHandPeace className="text-4xl text-[#1ff] mx-auto mb-2" />
                  <h5 className="text-4xl text-white">3</h5>
                  <p className="text-[#cac5c5]">Total Experience</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="text-center">
                  <FaSmile className="text-4xl text-[#1ff] mx-auto mb-2" />
                  <h5 className="text-4xl text-white">300</h5>
                  <p className="text-[#cac5c5]">Happy Clients</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="text-center">
                  <FaThumbsUp className="text-4xl text-[#1ff] mx-auto mb-2" />
                  <h5 className="text-4xl text-white">100</h5>
                  <p className="text-[#cac5c5]">Project Complete</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="text-center">
                  <FaTrophy className="text-4xl text-[#1ff] mx-auto mb-2" />
                  <h5 className="text-4xl text-white">50</h5>
                  <p className="text-[#cac5c5]">Award Win</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Achievement;
