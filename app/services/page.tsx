"use client";
import React, { useEffect, useState } from "react";

const services = [
  { title: "E-Waste Pickup", description: "Schedule a hassle-free pickup for your old and unused electronic devices, ensuring responsible disposal.", icon: "🚛" },
  { title: "Recycling & Disposal", description: "We follow strict environmental guidelines to recycle e-waste, reducing pollution and conserving resources.", icon: "♻️" },
  { title: "Awareness Campaigns", description: "Educating individuals and businesses on the importance of responsible e-waste management.", icon: "📚" },
  { title: "Donate & Reuse", description: "Promote sustainability by donating reusable electronics to those in need, giving devices a second life.", icon: "🎁" },
  { title: "Battery Recycling", description: "Proper recycling of batteries to prevent hazardous chemical leaks and environmental damage.", icon: "🔋" },
  { title: "Secure Data Destruction", description: "Ensuring complete erasure of personal and business data from old electronic devices before recycling.", icon: "🔒" },
  { title: "Corporate E-Waste Solutions", description: "Custom recycling solutions for businesses and offices, managing bulk e-waste responsibly.", icon: "🏢" },
  { title: "Electronic Repair Services", description: "Extending the lifespan of devices by offering repair and refurbishment services.", icon: "🛠️" }
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <section className="p-12 bg-gradient-to-b from-gray-100 to-green-300 dark:from-gray-900 dark:to-green-800 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold">Our Services</h2>
        <p className="text-lg mt-4">We offer eco-friendly e-waste management solutions to ensure proper disposal, recycling, and awareness for a sustainable future.</p>

        {/* Service Cards with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl text-center border border-gray-300 dark:border-gray-700 transform transition-all duration-1000 ease-out 
              ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"} hover:scale-105 hover:shadow-lg hover:shadow-green-400`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-5xl">{service.icon}</div>
              <h3 className="text-2xl font-semibold mt-4 text-green-600 dark:text-green-300">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <a
            href="/services"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition transform hover:scale-105 dark:text-black dark:bg-green-400 dark:hover:bg-green-500"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
