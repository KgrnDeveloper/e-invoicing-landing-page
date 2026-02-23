import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-black font-inter">
      <div className="w-full flex justify-center items-center px-6 py-16">
        <div
          className="w-[75%] rounded-2xl border border-[#2a2a2a] py-16 px-12 flex flex-col items-center text-center gap-6"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 50%, #3d0015 0%, #1a000a 40%, #0a0a0a 100%)",
          }}
        >
          <h4 className="text-4xl text-white font-argent">Partner With KGRN</h4>
          <p className="text-gray-300 text-lg font-inter leading-relaxed">
            Help Your Customers Navigate the AI Era With Confidence
          </p>
          <div className="mt-4 flex gap-6 mx-auto">
            <Link
              className="bg-[#f25d23] py-3 px-10 rounded-md font-semibold text-lg text-white hover:bg-white hover:text-[#f25d23] transition-all duration-300"
              href={"/"}
            >
              Become a Partner
            </Link>
            <Link
              className="bg-transparent py-3 px-10 rounded-md font-semibold text-lg text-white border border-white hover:bg-white hover:text-black transition-all duration-300"
              href={"/"}
            >
              Speak to Our Partnerships Team
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1f1f1f] px-16 py-8 flex justify-between items-start">
        <Image src="/logo-kgrn.png" alt="kgrn logo" width={120} height={40} />

        <div className="flex flex-col items-end gap-3">
          <div className="flex gap-8">
            {["Privacy", "DPA", "Terms", "Partners", "Cookie Preferences"].map(
              (item) => (
                <Link
                  key={item}
                  href={"/"}
                  className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                >
                  {item}
                </Link>
              ),
            )}
          </div>
          <p className="text-gray-500 text-sm">
            2026 © KGRN. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
