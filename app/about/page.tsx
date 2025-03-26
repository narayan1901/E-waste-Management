
"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200); // Delayed animation start
    setMounted(true); // Ensure the component is mounted before rendering theme-dependent UI
  }, []);

  // Prevent hydration mismatch by using the mounted flag
  const currentTheme = mounted ? (theme === "system" ? systemTheme : theme) : "light";

  return (
    <section
      className={`p-12 transition-colors duration-500 ${
        currentTheme === "dark" ? "bg-gray-900 text-white" : "bg-green-100 text-gray-900"
      }`}
    >
      <div
        className={`max-w-5xl mx-auto text-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
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
              className={`p-6 shadow-lg rounded-lg text-center border transition-all duration-1000 ease-out ${
                currentTheme === "dark" ? "bg-black border-gray-700" : "bg-white border-gray-300"
              } transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              style={{ transitionDelay: `${index * 200}ms` }} // Staggered animation
            >
              <span className="text-5xl">{item.icon}</span>
              <h3 className={`text-xl font-semibold mt-4 ${currentTheme === "dark" ? "text-green-300" : "text-green-700"}`}>
                {item.title}
              </h3>
              <p className={`${currentTheme === "dark" ? "text-gray-400" : "text-gray-600"}`}>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <a
            href="/services"
            className="inline-block px-6 py-3 text-lg font-semibold rounded-lg transition transform hover:scale-105"
            style={{
              backgroundColor: currentTheme === "dark" ? "#22c55e" : "#10b981",
              color: currentTheme === "dark" ? "black" : "white",
            }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
