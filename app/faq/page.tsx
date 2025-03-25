"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is e-waste?",
    answer: "E-waste refers to discarded electronic devices such as computers, smartphones, televisions, and other electronic appliances that are no longer in use.",
  },
  {
    question: "Why is proper e-waste disposal important?",
    answer: "Improper disposal of e-waste can release harmful chemicals into the environment, causing pollution and health hazards. Recycling helps conserve resources and reduces electronic waste.",
  },
  {
    question: "How can I recycle my e-waste?",
    answer: "You can schedule a pickup with our service, drop off your e-waste at designated recycling centers, or donate usable devices to those in need.",
  },
  {
    question: "Is my personal data safe when recycling old devices?",
    answer: "Before recycling, ensure that you erase all personal data from your devices. We also offer secure data destruction services to help protect your privacy.",
  },
  {
    question: "What happens to my recycled e-waste?",
    answer: "Recycled e-waste is processed to extract valuable materials like metals and plastics, which are then reused in manufacturing new products.",
  },
  {
    question: "Do you offer e-waste disposal services for businesses?",
    answer: "Yes, we provide corporate e-waste solutions, including bulk pickup and responsible recycling for offices and organizations.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="p-12 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-700">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 mt-4">
          Find answers to common questions about e-waste recycling and our services.
        </p>

        <div className="mt-6 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
              <button
                className="w-full flex justify-between items-center p-4 text-left font-semibold text-green-700 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 border-t border-gray-200 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
