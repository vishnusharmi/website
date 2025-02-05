import React from "react";
import Hero from "./Hero";




const DataScienceBanner = () => {
  return (

    <div>
    <div className="relative p-4 mb-5  py-32 flex flex-col items-start justify-center text-white bg-cover bg-center px-32">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-lg"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1390650720/photo/digital-network-connection-abstract-connection-of-dots-and-lines-technology-background-plexus.jpg?s=612x612&w=0&k=20&c=mX3Pe2x4I6ZQp5S6m9kOPo6CIiUB7lB82nD8T0vnEAI=')",
          filter: "blur(2px)", // Extra blur for browsers without Tailwind support
        }}
      ></div>

      {/* Overlay for readability */}
      <div className="absolute inset-0  bg-opacity-60"></div>

      {/* Content */}
      <div className="relative text-left max-w-2xl">
        <h1 className="  md:text-6xl font-bold">
          Your Data Science Technology Partner 
        </h1>
        <p className="text-xl  text-gray-300 mt-4">
          Delivering real-world intelligence
        </p>
        <button className="mt-6 px-6 py-3 border text-xl border-green-500 text-green-400 rounded-md hover:bg-green-500 hover:text-white transition">
          Request Free AI Consultation
        </button>
      </div>

      {/* Certifications Section - Adjusted Alignment */}
      <div className="relative mt-8 text-left max-w-2xl bg-gray-800 bg-opacity-50 p-4 rounded-md">
        <h2 className="text-2xl font-semibold text-green-400 mb-2">
          Industry Standards & Security Compliance
        </h2>
        <ul className="list-disc pl-5 text-md text-gray-300">
          <li>ISO/IEC 12207: Software Life Cycle Processes</li>
          <li>OWASP Security Guidelines</li>
          <li>Agile Development Principles</li>
        </ul>
      </div>

    </div>
    <Hero/>
    </div>
  );
};

export default DataScienceBanner;
