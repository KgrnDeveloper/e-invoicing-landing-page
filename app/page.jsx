import ThirdSection from "@/components/ThirdSection";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center">
      {/* Hero Section */}
      <div className="w-full flex justify-center items-center pt-12 pb-20">
        <div className="w-[70%] text-center">
          <div className="flex flex-col gap-6">
            <p className="text-xl">AI Opportunity Assessment for SMEs</p>
            <h2 className="text-6xl font-argent">
              Help Your SME Customers Navigate AI. Stay Relevant. Build Trust.
              Earn Revenue.
            </h2>
            <p className="text-xl">
              AI is becoming one of the biggest sources of uncertainty for SMEs.
              Many are quietly trying to make sense of what it means for their
              business, even if they're not asking directly. Partner with
              Servita to give your customers clarity, not hype, and position
              your organisation as a trusted guide in the AI era.
            </p>
            <div className="mt-8 flex gap-10 mx-auto">
              <Link
                className="bg-[#f25d23] py-3 px-6 rounded-sm font-semibold text-lg hover:bg-white hover:text-[#f25d23] transition-all duration-300"
                href={"/"}
              >
                Become a Partner
              </Link>
              <Link
                className="bg-black py-3 px-6 rounded-sm font-semibold text-lg border hover:bg-white hover:text-black transition-all duration-300"
                href={"/"}
              >
                Speak to Our Partnerships Team
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Second Section */}
      <div className="w-full flex justify-center items-center h-[45vh]">
        <div className="w-[70%] text-center">
          <div className="flex flex-col gap-8">
            <h2 className="text-5xl font-argent">
              See What Your Customers Experience When you Introduce Them to
              Servita SME
            </h2>
            <p className="text-lg px-20">
              This is a snapshot of the outcomes from our AI Opportunity
              Assessment. It shows some of what we'll deliver to your customers,
              from sector disruption and value potential to a practical 90-day
              plan. Each assessment is tailored to their business and gives them
              everything they need to move forward with confidence.
            </p>
          </div>
        </div>
      </div>
      {/* Third Section  */}
      <div className="mb-20">
        <ThirdSection/>
      </div>
    </div>
  );
};

export default Home;
