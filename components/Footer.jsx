import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-black font-inter">
      {/* Partner Section */}
      <div className="w-full flex justify-center items-center px-6 py-16">
        <div
          className="w-full md:w-3/4 lg:w-2/3 rounded-2xl border border-[#2a2a2a] py-12 md:py-16 px-6 md:px-12 flex flex-col items-center text-center gap-6"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 50%, #3d0015 0%, #1a000a 40%, #0a0a0a 100%)",
          }}
        >
          <h4 className="text-3xl md:text-4xl text-white font-argent">
            Partner With KGRN
          </h4>
          <p className="text-gray-300 text-base md:text-lg font-inter leading-relaxed">
            Help Your Customers Navigate the AI Era With Confidence
          </p>
          <div className="mt-4 flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">
            <Link
              className="bg-[#f25d23] py-3 px-10 rounded-md font-semibold lg:text-lg text-white hover:bg-white hover:text-[#f25d23] transition-all duration-300 text-center"
              href={"/"}
            >
              Become a Partner
            </Link>
            <Link
              className="bg-transparent py-3 px-10 rounded-md font-semibold lg:text-lg text-white border border-white hover:bg-white hover:text-black transition-all duration-300 text-center"
              href={"/"}
            >
              Speak to Our Partnerships Team
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-[#1f1f1f] px-6 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">
        <Image src="/logo-kgrn.png" alt="kgrn logo" width={120} height={40} />

        <div className="flex flex-col md:items-end gap-3 w-full md:w-auto text-center md:text-right">
          <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 justify-center md:justify-end">
            {["Privacy", "DPA", "Terms", "Partners", "Cookie Preferences"].map(
              (item) => (
                <Link
                  key={item}
                  href={"/"}
                  className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                >
                  {item}
                </Link>
              )
            )}
          </div>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            2026 © KGRN. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;