"use client";
import Image from "next/image";
import React from "react";

const EleventhSection = () => {
  const masks = [
    "/scroll-clients/Dedalus_idY5Dz3hNP_0.avif",
    "/scroll-clients/Google_Logo_2x.avif",
    "/scroll-clients/IQVIA_png.avif",
    "/scroll-clients/Mask3.png",
    "/scroll-clients/Mask5.avif",
    "/scroll-clients/TalkTalk_png.avif",
    "/scroll-clients/TeleTracking_png.avif",
    "/scroll-clients/Synapxe_idZ5S3CYyM_0.avif",
  ];

  return (
    <div className="relative w-full overflow-hidden my-10">
      {/* Soft edge fade */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      <div className="marquee">
        <div className="marquee-track">
          {[...masks, ...masks].map((src, index) => (
            <Image
              key={index}
              src={src}
              width={150}
              height={100}
              alt="Mask"
              className="flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee {
          overflow: hidden;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          gap: 80px;
          width: max-content;
          animation: marquee 5s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default EleventhSection;
