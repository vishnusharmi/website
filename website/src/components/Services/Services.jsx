import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Palette,
  Search,
  Cloud,
  Shield,
  TrendingUp,
} from "lucide-react";

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Web Development",
      info: "We create high-performance, scalable, and secure web applications using modern technologies like React.js, Next.js, and Node.js.",
      icon: <Code size={40} />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      info: "From native to cross-platform, we develop mobile apps with smooth performance and intuitive UI using React Native and Flutter.",
      icon: <Smartphone size={40} />,
    },
    {
      id: 3,
      title: "UI/UX Design",
      info: "We craft engaging and visually appealing designs that enhance brand identity and user experience.",
      icon: <Palette size={40} />,
    },
    {
      id: 4,
      title: "SEO & Digital Marketing",
      info: "Our strategies improve website ranking, boost brand visibility, and drive conversions.",
      icon: <Search size={40} />,
    },
    {
      id: 5,
      title: "Cloud & DevOps",
      info: "We provide cloud deployment, CI/CD pipeline setup, and scalable solutions using AWS, GCP, and Azure.",
      icon: <Cloud size={40} />,
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[60vh]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNlcnZpY2VzfGVufDB8fDB8fHww"
          alt="Services Background"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            We provide cutting-edge digital solutions to help businesses succeed
            in the fast-evolving digital landscape.
          </motion.p>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl mx-auto py-16">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-gray-800 p-8 rounded-lg shadow-lg w-80 text-center relative"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: service.id * 0.2 }}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="flex justify-center mb-4 text-green-400">
              {service.icon}
            </div>
            <motion.h2
              className="text-2xl font-semibold mb-2"
              animate={{
                opacity: hoveredService === service.id ? 0 : 1,
                y: hoveredService === service.id ? 10 : 0,
              }}
            >
              {service.title}
            </motion.h2>
            <motion.p
              className="text-gray-300"
              animate={{
                opacity: hoveredService === service.id ? 1 : 0,
                y: hoveredService === service.id ? 0 : 10,
              }}
            >
              {service.info}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="flex flex-col items-center text-center py-16 bg-gray-900">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          className="text-gray-300 max-w-3xl mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We deliver results-driven solutions by combining technology,
          creativity, and business strategy.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-8">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg w-72 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <Shield size={40} className="text-blue-500 mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Reliable & Secure</h3>
            <p className="text-gray-400 text-sm">
              We prioritize security, reliability, and seamless performance.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg w-72 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <TrendingUp size={40} className="text-green-500 mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Results-Driven</h3>
            <p className="text-gray-400 text-sm">
              We ensure measurable growth and long-term success.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
