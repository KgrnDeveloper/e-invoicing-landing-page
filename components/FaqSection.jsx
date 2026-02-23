'use client'
import React, { useState } from "react";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We provide end-to-end digital solutions including web development, UI/UX design, branding, and performance optimization.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines depend on complexity. A typical website takes 2–6 weeks from planning to launch.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer maintenance and support packages to ensure your product stays updated and secure.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We primarily use modern stacks like Next.js, React, Tailwind CSS, Node.js, and scalable backend solutions.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Absolutely. We can audit, redesign, and optimize your existing platform for better performance and UX.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply contact us with your requirements, and we’ll schedule a consultation to understand your goals.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="lg:text-5xl text-3xl font-argent mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-white/20 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-2 flex justify-between items-center hover:bg-white/5 transition"
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 py-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-white/70">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;