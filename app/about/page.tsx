
 "use client";
import React, { useEffect, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200); // Delayed animation start
  }, []);

  return (
    <section className="p-12 bg-gradient-to-b from-green-500 to-gray-900 text-white">
      <div className={`max-w-5xl mx-auto text-center transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-4xl font-extrabold">About Us</h2>
        <p className="mt-4 text-lg leading-relaxed">
          We are committed to reducing electronic waste by providing efficient and sustainable recycling solutions. 
          Our platform connects individuals and businesses with certified e-waste disposal services, ensuring a 
          cleaner and greener planet.
        </p>

        {/* Benefits Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "♻️", title: "Eco-Friendly", description: "Responsible e-waste recycling to protect the environment." },
            { icon: "🚛", title: "Easy Pickup", description: "Convenient doorstep pickup services for your e-waste." },
            { icon: "📚", title: "Awareness", description: "Educating communities about sustainable e-waste management." },
            { icon: "🌍", title: "Impact", description: "Making a difference in reducing global e-waste pollution." }
          ].map((item, index) => (
            <div
              key={index}
              className={`p-6 bg-black shadow-lg rounded-lg text-center border border-gray-700 transform transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }} // Staggered animation
            >
              <span className="text-5xl">{item.icon}</span>
              <h3 className="text-xl font-semibold mt-4 text-green-300">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <a
            href="/services"
            className="inline-block px-6 py-3 text-lg font-semibold text-black bg-green-400 rounded-lg hover:bg-green-500 transition transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
