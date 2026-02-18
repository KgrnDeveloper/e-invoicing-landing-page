"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const slides = [
  {
    title: "Your 90-Day Plan to Get Moving Fast",
    content: [
      "You receive a phased 30-60-90 day roadmap that shows what to tackle first, what depends on what, and how to move forward without stalling.",
      "Each phase includes clear actions, milestones, and success measures so momentum starts immediately.",
      "This is not a strategy deck. It's a practical plan your team can execute straight away.",
    ],
    image: "/potential-dollar-desktop.avif",
  },
  {
    title: "Phase 1: Initiate Quickly",
    content: [
      "You will follow a step-by-step plan for thirty, sixty, and ninety days that identifies priorities clearly and removes blockers that slow progress along the way.",
      "Every phase provides precise steps, measurable targets, and defined checkpoints so your team can gain traction immediately without losing focus.",
      "This is a hands-on operational plan, not a theoretical deck, allowing your team to implement actions effectively and reach desired results efficiently.",
    ],
    image: "/potential-dollar-desktop.avif",
  },
  {
    title: "Phase 2: Build Momentum",
    content: [
      "The roadmap highlights key priorities, dependencies, and timelines, so you can accelerate execution and prevent delays while keeping everyone aligned on objectives.",
      "Each stage contains concrete actions, milestones, and success metrics designed to generate visible progress and maintain consistent energy across all teams.",
      "This practical guide ensures your team moves confidently, executing plans without waiting or stalling and achieving tangible outcomes quickly and efficiently.",
    ],
    image: "/potential-dollar-desktop.avif",
  },
  {
    title: "Phase 3: Scale Execution",
    content: [
      "You can expand initiatives across departments using the same roadmap structure, tracking progress and ensuring each task contributes directly to overall goals successfully.",
      "Every phase includes actionable items, milestones, and measurable results that help teams maintain focus and drive continuous progress throughout the project lifecycle.",
      "This operational plan is designed to be implemented immediately, giving your team clear direction and a repeatable framework to achieve results efficiently and consistently.",
    ],
    image: "/potential-dollar-desktop.avif",
  },
  {
    title: "Phase 4: Achieve Results",
    content: [
      "The final roadmap phase ensures your team completes all critical tasks, measures outcomes accurately, and achieves the desired objectives fully within the planned ninety days.",
      "Each action and milestone is clearly defined with measurable targets so progress can be monitored and success is visible across the entire team immediately.",
      "This comprehensive plan allows your team to execute confidently, finalize all deliverables, and ensure lasting impact without ambiguity or delay in achieving results successfully.",
    ],
    image: "/potential-dollar-desktop.avif",
  },
];

const ThirdSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(true);

  // Auto-switch slides every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNextSlide = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setAnimate(true);
    }, 400); // match transition duration
  };

  const handleSelectSlide = (index) => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setAnimate(true);
    }, 300);
  };

  return (
    <div className="w-[80vw] pb-10 mx-auto">
      <div
        className={`w-full flex gap-10 transition-all duration-500 ${
          animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
        key={currentSlide}
      >
        <div className="w-[60%] my-auto">
          <h2 className="font-argent text-[20px] lg:text-[36px] font-medium leading-[38px] mb-10">
            {slides[currentSlide].title}
          </h2>
          <div className="flex flex-col gap-3">
            {slides[currentSlide].content.map((text, idx) => (
              <p key={idx} className="font-inter leading-[24px] text-gray-100">
                {text}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Image
            src={slides[currentSlide].image}
            width={800}
            height={100}
            alt="desktop-image"
          />
        </div>
      </div>

      {/* Bottom buttons / lines */}
      <div className="flex justify-center gap-3 mt-12">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => handleSelectSlide(index)}
            className={`w-20 h-1 cursor-pointer transition-all duration-300 ${
              currentSlide === index
                ? "bg-[#f25d23] scale-x-100 rounded-md"
                : "bg-gray-300 scale-x-75 rounded-md"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ThirdSection;
