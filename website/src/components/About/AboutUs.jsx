import React from "react";
import { motion } from "framer-motion";
import {
  FaHistory,
  FaBullseye,
  FaEye,
  FaHandshake,
  FaAward,
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaGlobe,
  FaCogs,
  FaSmile,
  FaRocket,
} from "react-icons/fa";

// Animation variants for Framer Motion
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const AboutUs = () => {
  return (
    <div className="bg-black text-white  ">
      <div className="container mx-auto px-6 py-12  ">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-8"
        >
          About Us
        </motion.h1>

        {/* Brief Introduction */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg text-center mb-12 max-w-3xl mx-auto"
        >
          Established in 2000, we have built a strong foundation in delivering
          excellence. Over the years, we have achieved milestones in innovation,
          quality service, and customer satisfaction. Our journey is marked by
          relentless pursuit of excellence and a commitment to making a positive
          impact in the world.
        </motion.p>

        {/* Company Information Sections */}
        <div className="grid md:grid-cols-3  gap-6 px-8">
          {/* Company History */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            className="bg-gray-800 p-6 shadow-lg rounded-lg text-center cursor-pointer h-[250px]"
          >
            <FaHistory className="text-blue-500 text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Our History</h2>
            <p>
              Founded in 2000, we have evolved into a market leader,
              continuously innovating and setting new standards in our industry.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            className="bg-gray-800 p-6 shadow-lg rounded-lg text-center cursor-pointer"
          >
            <FaBullseye className="text-green-500 text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p>
              To provide cutting-edge solutions that empower businesses and
              individuals, ensuring sustainability and long-term growth.
            </p>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            className="bg-gray-800 p-6 shadow-lg rounded-lg text-center cursor-pointer"
          >
            <FaEye className="text-purple-500 text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p>
              To be a global leader in innovation and service excellence,
              setting industry benchmarks and exceeding customer expectations.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mt-12 text-center px-8">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-6"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <FaHandshake className="text-orange-500 text-5xl mx-auto mb-4" />
                ),
                title: "Integrity",
                description:
                  "We believe in transparency, trust, and honesty in all our operations.",
              },
              {
                icon: (
                  <FaAward className="text-yellow-500 text-5xl mx-auto mb-4" />
                ),
                title: "Excellence",
                description:
                  "We strive to deliver the highest quality in our products and services.",
              },
              {
                icon: (
                  <FaUsers className="text-blue-500 text-5xl mx-auto mb-4" />
                ),
                title: "Customer First",
                description:
                  "We prioritize our customers' needs and ensure their satisfaction.",
              },
              {
                icon: (
                  <FaLightbulb className="text-green-500 text-5xl mx-auto mb-4" />
                ),
                title: "Innovation",
                description:
                  "We embrace creativity and innovation to stay ahead in the industry.",
              },
              {
                icon: (
                  <FaChartLine className="text-purple-500 text-5xl mx-auto mb-4" />
                ),
                title: "Growth",
                description:
                  "We are committed to continuous improvement and growth.",
              },
              {
                icon: (
                  <FaGlobe className="text-red-500 text-5xl mx-auto mb-4" />
                ),
                title: "Sustainability",
                description:
                  "We aim to create solutions that are environmentally friendly and sustainable.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                className="bg-gray-800 p-6 shadow-lg rounded-lg cursor-pointer  h-[250px]"
              >
                {value.icon}
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12 px-8">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-6"
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <FaCogs className="text-blue-500 text-5xl mx-auto mb-4" />
                ),
                title: "Expertise",
                description:
                  "With over 20 years of experience, we bring unparalleled expertise to every project.",
              },
              {
                icon: (
                  <FaRocket className="text-green-500 text-5xl mx-auto mb-4" />
                ),
                title: "Innovation",
                description:
                  "We leverage the latest technologies to deliver innovative solutions.",
              },
              {
                icon: (
                  <FaSmile className="text-yellow-500 text-5xl mx-auto mb-4" />
                ),
                title: "Customer Satisfaction",
                description: "Our customers' happiness is our top priority.",
              },
              {
                icon: (
                  <FaHandshake className="text-purple-500 text-5xl mx-auto mb-4" />
                ),
                title: "Partnership",
                description:
                  "We build long-term relationships based on trust and collaboration.",
              },
              {
                icon: (
                  <FaAward className="text-red-500 text-5xl mx-auto mb-4" />
                ),
                title: "Quality",
                description:
                  "We are committed to delivering the highest quality in everything we do.",
              },
              {
                icon: (
                  <FaGlobe className="text-blue-500 text-5xl mx-auto mb-4" />
                ),
                title: "Global Reach",
                description:
                  "We serve clients across the globe, delivering solutions that transcend borders.",
              },
            ].map((reason, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                className="bg-gray-800 p-6 shadow-lg rounded-lg cursor-pointer h-[250px]"
              >
                {reason.icon}
                <h3 className="text-xl font-semibold">{reason.title}</h3>
                <p>{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="mt-12">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-6 px-8"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnE_fy9lLMRP5DLYLnGN0LRLzZOiEpMrU4g&s",
                name: "John Doe",
                role: "Founder & CEO",
              },
              {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59vhEZvWkYdudUmDKi3OI8TRHmkVX3Bsmag&s",
                name: "Jane Smith",
                role: "Chief Technology Officer",
              },
              {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDb1foxvM6ZqOOJNWi4m0hSGsxbWxbSWboUQ&s",
                name: "Michael Lee",
                role: "Chief Operating Officer",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                className="bg-gray-800 p-6 shadow-lg rounded-lg text-center cursor-pointer h-[250px]"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Working with this company has been a game-changer for our business. Their expertise and dedication are unmatched.",
                author: "Sarah Johnson",
              },
              {
                quote:
                  "The team is incredibly professional and always goes above and beyond to deliver exceptional results.",
                author: "Michael Brown",
              },
              {
                quote:
                  "Their innovative solutions have helped us stay ahead of the competition. Highly recommend!",
                author: "Emily Davis",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                className="bg-gray-800 p-6 shadow-lg rounded-lg cursor-pointer"
              >
                <p className="italic">"{testimonial.quote}"</p>
                <p className="font-semibold mt-4">- {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg mb-6"
          >
            Let's work together to create something extraordinary. Contact us
            today to get started!
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition"
          >
            Get in Touch
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
