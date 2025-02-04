import React, { useState, useEffect } from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const banners = [
  "Innovating for a better future",
  "Delivering excellence in every project",
  "Your trusted partner in technology",
];

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and dynamic websites tailored to your needs.",
  },
  {
    title: "AI Solutions",
    description:
      "Leveraging AI to enhance business operations with smart automation.",
  },
  {
    title: "Cloud Computing",
    description:
      "Providing secure, scalable cloud solutions to support your growth.",
  },
  {
    title: "Cybersecurity",
    description:
      "Protecting your data and infrastructure with cutting-edge security measures.",
  },
];

const projects = [
  {
    title: "Smart AI Assistant",
    description:
      "An intelligent assistant powered by AI to streamline daily tasks.",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A robust e-commerce solution designed for seamless user experiences.",
  },
  {
    title: "Cloud Management System",
    description: "A cloud-based platform for managing resources efficiently.",
  },
  {
    title: "Mobile Health App",
    description:
      "An app that monitors health metrics and offers personalized health advice.",
  },
  {
    title: "Blockchain-based Voting System",
    description:
      "A secure voting platform powered by blockchain technology to ensure transparency and integrity.",
  },
  {
    title: "AI-Powered Chatbot",
    description:
      "A chatbot leveraging AI to provide customer support and automate repetitive tasks.",
  },
  {
    title: "Smart Home Automation",
    description:
      "An IoT solution that enables remote control and automation of home devices for convenience and energy efficiency.",
  },
];

export default function Home() {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="bg-gray-900  min-h-screen p-10 text-white">
        {/* Dynamic Banner */}
        <motion.h1
          key={bannerIndex}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center mb-12  shadow-lg"
        >
          {banners[bannerIndex]}
        </motion.h1>

        {/* Services Section */}
        <h2 className="text-3xl font-semibold text-center mb-8 ">
          Our Services
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          style={{ animationIterationCount: "1" }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 text-center shadow-2xl rounded-lg transition-transform transform hover:scale-105"
              Info={service}
            />
          ))}
        </div>

        {/* Key Projects Section */}
        <h2 className="text-3xl font-semibold text-center mt-12 mb-8 ">
          Key Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8  text-center shadow-2xl rounded-lg transition-transform transform hover:scale-105 hover:bg-[#6c5ce7]"
              Info={project}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
