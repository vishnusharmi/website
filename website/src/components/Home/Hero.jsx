import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000; // Animation duration in ms
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}+</span>;
};

const Hero = () => {
  return (
    <div>
      {/* Achievements Section */}
      <section className="py-5 bg-gray-100 h-96 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Our Achievements</h2>
        <p className="text-gray-600 mt-4">
          Celebrating our journey with groundbreaking projects and innovations.
        </p>

        {/* Milestones */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {[
            { count: 500, label: "Successful Projects" },
            { count: 100, label: "Happy Clients" },
            { count: 10, label: "Years of Excellence" },
            { count: 50, label: "Industry Awards" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg w-60 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-5xl font-bold text-blue-600">
                <Counter target={item.count} />
              </h3>
              <p className="text-gray-700 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-900">Why Choose Us?</h2>
        <p className="text-gray-600 mt-4">
          Discover the reasons why we stand out in the industry.
        </p>

        {/* Reasons Cards */}
        <div className="flex flex-wrap justify-center gap-8 mt-10 px-6">
          {[
            {
              title: "Expert Team",
              desc: "Our team consists of highly skilled professionals with years of experience.",
              img: "https://cdn.pixabay.com/photo/2016/10/22/10/35/network-1760303_640.png",
            },
            {
              title: "Innovative Solutions",
              desc: "We deliver cutting-edge solutions tailored to your business needs.",
              img: "https://cdn.pixabay.com/photo/2020/06/04/11/10/bulb-5258341_1280.jpg",
            },
            {
              title: "Client-Centric Approach",
              desc: "Your success is our priority. We work closely with you to achieve your goals.",
              img: "https://img.freepik.com/free-vector/choice-worker-concept_52683-43931.jpg",
            },
            {
              title: "Proven Track Record",
              desc: "With a history of successful projects, we ensure quality and reliability.",
              img: "https://img.freepik.com/free-vector/share-business-dividend-calculation_335657-1217.jpg",
            },
          ].map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden w-80"
              whileHover={{ scale: 1.05 }}
            >
              <img src={reason.img} alt={reason.title} className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">{reason.title}</h3>
                <p className="text-gray-600 mt-2">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      {/* <section className="py-16 bg-gray-900 text-white text-center">
        <h2 className="text-4xl font-bold">Let's Work Together</h2>
        <p className="mt-4 text-lg">Connect with us to discuss your next big idea.</p>

        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <a
            href="/contact"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition-all"
          >
            Contact Us
          </a>
          <a
            href="/locations"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-md transition-all"
          >
            Our Locations
          </a>
        </div>
      </section> */}
      <section className="py-16 bg-blue-900 text-white text-center">
<h2 className="text-4xl font-bold">Our Services</h2>
<p className="mt-4 text-lg">Innovative solutions tailored to your needs.</p>

{/* Service Cards */}
<div className="flex flex-wrap justify-center gap-8 mt-10 px-6">
{[
{
title: "AI & Data Science",
desc: "Harnessing AI for business transformation.",
img: "https://img.freepik.com/free-vector/hand-drawn-ai-investing-illustration_23-2151170216.jpg?ga=GA1.1.1507168917.1736320104&semt=ais_hybrid",
},
{
title: "Software Development",
desc: "Custom software solutions for enterprises.",
img: "https://img.freepik.com/free-vector/online-shopping-concept-landing-page_23-2148253518.jpg?ga=GA1.1.1507168917.1736320104&semt=ais_hybrid",
},
{
title: "Cybersecurity",
desc: "Protecting your data and infrastructure.",
img: "https://img.freepik.com/free-vector/developers-robot-work-laptop-with-magnifier-industrial-cybersecurity-industrial-robotics-malware-safeguarding-industrial-robotics-concept_335657-1902.jpg?t=st=1738734378~exp=1738737978~hmac=2a8b97b2fd06b838dc18bdb17ad3df4395f3d8b488017f110087ff7598689976&w=996",
},
].map((service, index) => (
<motion.div
key={index}
className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden w-80"
whileHover={{ scale: 1.05 }}
>
<img src={service.img} alt={service.title} className="w-full h-40 object-cover" />
<div className="p-6">
<h3 className="text-xl font-bold">{service.title}</h3>
<p className="text-gray-600 mt-2">{service.desc}</p>
</div>
</motion.div>
))}
</div>

<a
href="/services"
className="inline-block mt-11 px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition-all"
>
Explore All Services
</a>
</section>

{/* Our Projects Section */}
<section className="py-16 bg-gray-100 text-center">
<h2 className="text-4xl font-bold text-gray-900">Our Projects</h2>
<p className="text-gray-600 mt-4">Driving innovation through real-world solutions.</p>

{/* Project Showcase */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-6">
{[
{
title: "AI-Powered Analytics",
img: "https://cdn.pixabay.com/photo/2024/06/13/17/33/graph-8828099_640.png",
},
{
title: "E-Commerce Platform",
img: "https://img.freepik.com/premium-psd/3d-illustration-live-commerce-ecommerce-online-selling_554821-2098.jpg?w=996",
},
{
title: "Cloud Security Solution",
img: "https://media.istockphoto.com/id/2185337692/photo/security-of-cloud-computing-and-server-encryption-networking-and-connect-technology.jpg?s=2048x2048&w=is&k=20&c=D4x5qZ4QFt17YMyoa-YFpzibImNRwdtMty0q1HY2It8=",
},
].map((project, index) => (
<motion.div
key={index}
className="bg-white rounded-lg shadow-lg overflow-hidden"
whileHover={{ scale: 1.05 }}
>
<img src={project.img} alt={project.title} className="w-full h-40 object-cover" />
<div className="p-6">
<h3 className="text-xl font-bold">{project.title}</h3>
</div>
</motion.div>
))}
</div>

<a
href="/projects"
className="inline-block mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-all"
>
View All Projects
</a>
</section>

{/* Contact Us Section */}
<section className="py-16 bg-gray-900 text-white text-center">
<h2 className="text-4xl font-bold">Let's Work Together</h2>
<p className="mt-4 text-lg">Connect with us to discuss your next big idea.</p>

<div className="mt-8 flex flex-wrap justify-center gap-8">
<a href="/contact" className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition-all">
Contact Us
</a>
<a href="/locations" className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-md transition-all">
Our Locations
</a>
</div>
</section>
    </div>
  );
};

export default Hero;
