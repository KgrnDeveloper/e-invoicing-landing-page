import ThirdSection from "@/components/ThirdSection";
import Link from "next/link";
import { FaRegHandshake, FaRegLightbulb } from "react-icons/fa";
import { BiError } from "react-icons/bi";
import { PiStorefrontFill } from "react-icons/pi";
import { FaCalendarDays } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { FaEarthAsia } from "react-icons/fa6";
import { PiHeadsetBold } from "react-icons/pi";
import { RiFocus2Line } from "react-icons/ri";
import { BsCash } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import React from "react";
import EleventhSection from "@/components/EleventhSection";
import FaqSection from "@/components/FaqSection";

const Home = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center">
      {/* Hero Section */}
      <div className="w-full flex justify-center items-center pt-12 pb-20">
        <div className="lg:w-[70%] w-[90%] text-center">
          <div className="flex flex-col gap-6">
            <p className="lg:text-xl">AI Opportunity Assessment for SMEs</p>
            <h2 className="lg:text-6xl text-2xl font-argent">
              Help Your SME Customers Navigate AI. Stay Relevant. Build Trust.
              Earn Revenue.
            </h2>
            <p className="lg:text-xl text-gray-100">
              AI is becoming one of the biggest sources of uncertainty for SMEs.
              Many are quietly trying to make sense of what it means for their
              business, even if they're not asking directly. Partner with
              Servita to give your customers clarity, not hype, and position
              your organisation as a trusted guide in the AI era.
            </p>
            <div className="lg:mt-8 mt-2 flex gap-2 lg:gap-10 mx-auto">
              <Link
                className="bg-[#f25d23] py-3 px-6 rounded-sm font-semibold lg:text-lg hover:bg-white hover:text-[#f25d23] transition-all duration-300"
                href={"/"}
              >
                Become a Partner
              </Link>
              <Link
                className="bg-black py-3 px-6 rounded-sm font-semibold lg:text-lg border hover:bg-white hover:text-black transition-all duration-300"
                href={"/"}
              >
                Speak to Our Partnerships Team
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Second Section */}
      <div className="w-full flex justify-center items-center lg:my-14">
        <div className="lg:w-[70%] w-[90%] text-center">
          <div className="flex flex-col gap-8">
            <h2 className="lg:text-5xl text-2xl font-argent">
              See What Your Customers Experience When you Introduce Them to
              Servita SME
            </h2>
            <p className="text-lg lg:px-20 text-gray-100">
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
        <ThirdSection />
      </div>
      {/* Fourth section */}
      <div className="w-full flex justify-center items-center">
        <div className="lg:w-[70%] text-center">
          <div className="flex flex-col gap-8">
            <h2 className="lg:text-5xl text-2xl font-argent">Who You're Working With</h2>
          </div>
        </div>
      </div>
      {/* Video Section */}
      <div className="w-full flex justify-center items-center py-16">
        <div className="w-[85%] aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="/video1.mp4"
            title=""
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* Fifth section */}
      <div className="w-full flex flex-col mb-20 justify-center items-center">
        <div className="w-[70%] text-center">
          <div className="flex flex-col gap-8">
            <h2 className="lg:text-5xl text-2xl font-argent">
              Why Organisations Like Yours Are<br className="hidden lg:flex"/> Partnering With Servita
            </h2>
          </div>
        </div>
        <div className="md:gap-[1rem] lg:w-[80vw] w-[90vw] lg:mt-20 mt-10 p-0 m-0 space-y-6 md:space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 xl:gap-8">
          {/* Card 1 */}
          <div className="relative rounded-2xl px-4 pt-4 pb-4 md:px-[41px] md:pt-[34px] md:pb-[48px] transition-all duration-300 overflow-hidden hover:shadow-2xl border-[1.37px] border-[#262626] bg-gradient-to-br from-[#0c0c0c] to-[#360000] h-auto">
            <div className="relative z-10 w-full md:max-w-none lg:max-w-[410px]">
              <div className="flex items-center gap-5 lg:flex-col lg:items-start gap-5 lg:gap-[20px]">
                <div className="text-5xl">
                  <FaRegLightbulb />
                </div>

                <h4 className="text-lg lg:text-[30px] text-white font-argent">
                  Your Customers Are Thinking About AI
                </h4>
              </div>

              <p className="text-gray-100 lg:text-[15px] text-sm mt-[16px] font-inter leading-[29px]">
                SMEs know AI matters, but most don't know where to start. Some
                ask directly. Others worry quietly and look elsewhere for
                answers.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl px-4 pt-4 pb-4 md:px-[41px] md:pt-[34px] md:pb-[48px] transition-all duration-300 overflow-hidden hover:shadow-2xl border-[1.37px] border-[#262626] bg-gradient-to-br from-[#0c0c0c] to-[#360000] h-auto">
            <div className="relative z-10 w-full md:max-w-none lg:max-w-[410px]">
              <div className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-[20px]">
                <div className="text-5xl">
                  <FaRegHandshake />
                </div>

                <h4 className="text-lg lg:text-[30px] text-white font-argent">
                  Your Customers Are Thinking About AI
                </h4>
              </div>

              <p className="text-gray-100 lg:text-[15px] text-sm mt-[16px] font-inter leading-[29px]">
                SMEs know AI matters, but most don't know where to start. Some
                ask directly. Others worry quietly and look elsewhere for
                answers.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl px-4 pt-4 pb-4 md:px-[41px] md:pt-[34px] md:pb-[48px] transition-all duration-300 overflow-hidden hover:shadow-2xl border-[1.37px] border-[#262626] bg-gradient-to-br from-[#0c0c0c] to-[#360000] h-auto">
            <div className="relative z-10 w-full md:max-w-none lg:max-w-[410px]">
              <div className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-[20px]">
                <div className="text-5xl">
                  <BiError />
                </div>

                <h4 className="text-lg lg:text-[30px] text-white font-argent">
                  Your Customers Are Thinking About AI
                </h4>
              </div>

              <p className="text-gray-100 lg:text-[15px] text-sm mt-[16px] font-inter leading-[29px]">
                SMEs know AI matters, but most don't know where to start. Some
                ask directly. Others worry quietly and look elsewhere for
                answers.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p className="font-argent lg:text-3xl text-xl">
            That's exactly where Servita fits.
          </p>
        </div>
      </div>
      {/* Sixth section  */}
      <div>
        <div className="w-full flex justify-center items-center lg:mt-18 lg:pb-20 pb-8">
          <div className="lg:w-[70%] w-[90vw] text-center">
            <div className="flex flex-col gap-6">
              <h2 className="lg:text-5xl text-2xl font-argent">
                What You're Offering Your Customers
              </h2>
              <p className="font-inter font-normal text-gray-100 lg:px-34">
                Servita's AI Opportunity Assessment gives SMEs clear, practical
                direction on how AI applies to their business, where it creates
                real value, and what to avoid. It's not consulting. It's not
                software. And it's not generic advice. It's clarity. Delivered
                in days. It allows them to make informed decisions before
                committing to tools, projects, or spend.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="lg:w-[70vw] flex flex-col lg:space-y-8">
            <div className="w-full flex lg:flex-row flex-col justify-center items-center lg:space-x-4">
              <div className="lg:max-w-xs lg:h-auto flex items-center lg:items-start lg:flex-col gap-6 p-6">
                <span className="text-3xl">
                  <PiStorefrontFill />
                </span>
                <h4 className="font-argent text-[24px]">
                  Independent and vendor neutral
                </h4>
              </div>
              <div className="lg:max-w-xs lg:h-auto flex items-center lg:items-start lg:flex-col gap-6 p-6">
                <span className="text-3xl">
                  <FaRegLightbulb />
                </span>
                <h4 className="font-argent text-[24px]">
                  Practical and business focused
                </h4>
              </div>
              <div className="lg:max-w-xs lg:h-auto flex items-center lg:items-start lg:flex-col gap-6 p-6">
                <span className="text-3xl">
                  <FaCalendarDays />
                </span>
                <h4 className="font-argent text-[24px]">
                  Delivered in 5 business days
                </h4>
              </div>
            </div>
            <div className="w-full flex lg:flex-row flex-col justify-center items-center lg:space-x-4">
              <div className="lg:max-w-xs lg:h-auto flex items-center lg:items-start lg:flex-col gap-6 p-6">
                <span className="text-3xl">
                  <IoMdPeople />
                </span>
                <h4 className="font-argent text-[24px]">
                  Designed specifically for SMEs
                </h4>
              </div>
              <div className="lg:max-w-xs lg:h-auto flex items-center lg:items-start lg:flex-col gap-6 p-6">
                <span className="text-3xl">
                  <FaEarthAsia />
                </span>
                <h4 className="font-argent text-[24px]">
                  Trusted by enterprises and governments globally
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Seventh Section  */}
      <div className="lg:mt-20 mt-8">
        <div className="py-6">
          <h2 className="font-argent lg:text-5xl text-2xl text-center">
            Why Partner With Servita
          </h2>
        </div>
        <div className="w-[80vw] grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-20 my-8 lg:my-20">
          <div className="space-y-2">
            <div className="text-4xl mb-4">
              <PiHeadsetBold />
            </div>
            <h4 className="font-argent text-3xl font-medium">
              Strengthen Customer Trust
            </h4>
            <p className="text-lg">
              You position your organisation as proactive, informed, and
              genuinely helpful at a moment when SMEs feel uncertain.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl mb-4">
              <GoShieldCheck />
            </div>
            <h4 className="font-argent text-3xl font-medium">
              Help Without Selling
            </h4>
            <p className="text-lg">
              You're not pushing AI tools or services. You're helping SMEs get
              clarity so they can make better decisions.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl mb-4">
              <RiFocus2Line />
            </div>
            <h4 className="font-argent text-3xl font-medium">
              Stay Focused on Your Core Business
            </h4>
            <p className="text-lg">
              We do the work. You stay focused on what you already do best.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl mb-4">
              <BsCash />
            </div>
            <h4 className="font-argent text-3xl font-medium">
              Earn Revenue Effortlessly
            </h4>
            <p className="text-lg">
              You receive a commission for every assessment purchased using your
              referral link or code. No delivery. No fulfilment. No support.
            </p>
          </div>
        </div>
      </div>
      {/* Eighth Section  */}
      <div className="lg:w-full w-[90vw] flex flex-col justify-center items-center py-16">
        <div className="text-center space-y-8 mb-16">
          <h2 className="lg:text-6xl text-2xl font-argent">
            A Message From Our Head of Partnerships
          </h2>
          <p className="font-inter font-normal text-lg text-gray-100 lg:px-60">
            Rachel leads partnerships at Servita and works directly with
            organisations like yours to make partnering simple, credible and
            valuable for both you and your customers.
          </p>
        </div>
        <div>
          <div className="w-[90vw] aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="/video1.mp4"
              title=""
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="my-14">
          <Link
            className="bg-[#f25d23] py-3 px-6 rounded-sm font-semibold lg:text-lg hover:bg-white hover:text-[#f25d23] transition-all duration-300"
            href={"/"}
          >
            Get Your Assessment
          </Link>
        </div>
      </div>
      {/* Nineth Section  */}
      <div className="w-full flex flex-col mb-20 justify-center items-center">
        <div className="lg:w-[70%] w-[90vw] text-center">
          <div className="flex flex-col gap-8">
            <h2 className="lg:text-5xl text-2xl font-argent">How the Partnership Works</h2>
          </div>
        </div>
        <div className="md:gap-[1rem] w-[85vw] lg:w-[80vw] mt-8 lg:mt-20 p-0 m-0 space-y-6 md:space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 xl:gap-8">
          {/* Card 1 */}
          <div className="relative rounded-2xl px-4 pt-4 pb-4 md:px-[41px] md:pt-[34px] md:pb-[48px] transition-all duration-300 overflow-hidden hover:shadow-2xl border-[1.37px] border-[#262626] bg-gradient-to-br from-[#0c0c0c] to-[#360000] h-auto">
            <div className="relative z-10 w-full md:max-w-none lg:max-w-[410px]">
              <div className="flex items-center lg:flex-col lg:items-start gap-5 lg:gap-[20px]">
                <div className="text-5xl font-argent">1</div>

                <h4 className="text-[22px] lg:text-[30px] text-white font-argent">
                  Sign Up as a Partner
                </h4>
              </div>

              <p className="text-gray-100 lg:text-[15px] mt-[16px] font-inter leading-[29px]">
                Create your partner account in minutes. You'll receive a unique
                referral link and code.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl px-4 pt-4 pb-4 md:px-[41px] md:pt-[34px] md:pb-[48px] transition-all duration-300 overflow-hidden hover:shadow-2xl border-[1.37px] border-[#262626] bg-gradient-to-br from-[#0c0c0c] to-[#360000] h-auto">
            <div className="relative z-10 w-full md:max-w-none lg:max-w-[410px]">
              <div className="flex items-center lg:flex-col lg:items-start gap-5 lg:gap-[20px]">
                <div className="text-5xl font-argent">2</div>

                <h4 className="text-[22px] lg:text-[30px] text-white font-argent">
                  Share With Your Audience
                </h4>
              </div>

              <p className="text-gray-100 lg:text-[15px] mt-[16px] font-inter leading-[29px]">
                Introduce Servita SME to your customers, members, or clients in
                a way that fits your brand and channels.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl px-4 pt-4 pb-4 md:px-[41px] md:pt-[34px] md:pb-[48px] transition-all duration-300 overflow-hidden hover:shadow-2xl border-[1.37px] border-[#262626] bg-gradient-to-br from-[#0c0c0c] to-[#360000] h-auto">
            <div className="relative z-10 w-full md:max-w-none lg:max-w-[410px]">
              <div className="flex items-center lg:flex-col lg:items-start gap-5 lg:gap-[20px]">
                <div className="text-5xl font-argent">3</div>

                <h4 className="text-[22px] lg:text-[30px] text-white font-argent">
                  We Deliver. You Earn.
                </h4>
              </div>

              <p className="text-gray-100 lg:text-[15px] mt-[16px] font-inter leading-[29px]">
                We deliver the assessment. You earn commission for every
                completed purchase.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 px-10 lg:px-0">
          <p className="font-argent text-center lg:text-3xl">
            No exclusivity. No quotas. No minimums. No obligation.
          </p>
        </div>
      </div>
      {/* Tenth Section  */}
      <div className="lg:w-full w-[90vw] font-inter flex flex-col justify-center items-center">
        <div className="text-center space-y-8 mb-16 flex flex-col items-center justify-center">
          <h2 className="lg:text-6xl text-2xl font-argent">
            What Your Customers Can Access
          </h2>
          <p className="lg:w-[50vw] font-inter font-normal text-lg text-gray-100">
            The same transformation approach used by enterprises and
            governments, now packaged into a fixed-price assessment designed for
            SMEs.
          </p>
        </div>
        <div className="lg:w-[70vw] flex lg:flex-row gap-8 lg:gap-0 flex-col justify-around">
          <div className="lg:border-y lg:border-l lg:rounded-tl-2xl lg:rounded-bl-2xl border rounded-2xl lg:mt-8 p-6">
            <div className="space-y-2 pb-3 border-b border-gray-600">
              <h4 className="text-3xl font-bold">Clarity</h4>
              <h5 className="text-xl font-bold">AED 14,000</h5>
            </div>
            <p className="py-5 text-sm border-b border-gray-600">
              <span className="font-semibold">
                Make the right first decision.
              </span>{" "}
              A complete, standalone assessment designed to replace uncertainty
              with direction. Clarity is ideal if you want to understand where
              AI will actually pay back, what to prioritise first, and how to
              focus effort before spending money or time.
            </p>
            <ul className="py-5 border-b border-gray-600 text-sm space-y-2">
              <li className="flex items-center gap-1">
                <span className="text-2xl text-[#f25d23]">
                  <TiTick />
                </span>
                AI Readiness Radar
              </li>
              <li className="flex items-center gap-1">
                <span className="text-2xl text-[#f25d23]">
                  <TiTick />
                </span>
                Sector Disruption Heatmap
              </li>
              <li className="flex items-center gap-1">
                <span className="text-2xl text-[#f25d23]">
                  <TiTick />
                </span>
                3x High-ROI Pilot Use Cases
              </li>
              <li className="flex items-center gap-1">
                <span className="text-2xl text-[#f25d23]">
                  <TiTick />
                </span>
                Year 1 Financial Payback Forecast
              </li>
              <li className="flex items-center gap-1">
                <span className="text-2xl text-[#f25d23]">
                  <TiTick />
                </span>
                90-Day Execution Roadmap
              </li>
            </ul>
            <div className="py-5 space-y-2">
              <h6 className="text-sm font-bold">
                Delivered within 5 business days
              </h6>
              <p className="text-sm mb-5">
                Designed for teams making an important first decision.
              </p>
              <button className="bg-[#f25d23] w-full py-2 rounded-md hover:text-[#f25d23] hover:bg-white transition-all duration-300 cursor-pointer">
                Choose Clarity
              </button>
            </div>
          </div>
          <div className="border rounded-2xl p-6">
            <div className="space-y-2 pb-3 border-b border-gray-600">
              <h4 className="text-3xl font-bold">Momentum</h4>
              <h5 className="text-xl font-bold">AED 14,000</h5>
            </div>
            <p className="py-5 text-sm border-b border-gray-600">
              <span className="font-semibold">
                Turn the right decisions into action.{" "}
              </span>{" "}
              Turn the right decisions into action. Everything in Clarity, plus
              deeper analysis to remove execution risk. Momentum is ideal if you
              want confidence not just in what to do, but how to launch quickly
              and avoid early mistakes. This is the most common choice for SMEs
              who want clarity without overbuying.
            </p>
            <ul className="py-5 border-b border-gray-600 text-sm space-y-2">
              <li className="flex items-center gap-1">
                <span className="text-2xl text-[#f25d23]">
                  <TiTick />
                </span>
                AI Readiness Radar
              </li>
              <li className="flex items-center gap-1">
                <span className="text-2xl text-[#f25d23]">
                  <TiTick />
                </span>
                Sector Disruption Heatmap
              </li>
              <li className="flex items-center gap-1">
                <span className="text-2xl text-[#f25d23]">
                  <TiTick />
                </span>
                3x High-ROI Pilot Use Cases
              </li>
              <li className="flex items-center gap-1">
                <span className="text-2xl text-[#f25d23]">
                  <TiTick />
                </span>
                Year 1 Financial Payback Forecast
              </li>
              <li className="flex items-center gap-1">
                <span className="text-2xl text-[#f25d23]">
                  <TiTick />
                </span>
                90-Day Execution Roadmap
              </li>
              <li className="flex items-center gap-1">
                <span className="text-2xl text-[#f25d23]">
                  <TiTick />
                </span>
                Expert Risk & Action Notes
              </li>
            </ul>
            <div className="py-5 space-y-2">
              <h6 className="text-sm font-bold">
                Delivered within 5 business days
              </h6>
              <p className="text-sm mb-5">
                Designed for teams making an important first decision.
              </p>
              <button className="bg-[#f25d23] w-full py-2 rounded-md hover:text-[#f25d23] hover:bg-white transition-all duration-300 cursor-pointer">
                Choose Clarity
              </button>
            </div>
          </div>
          <div className="lg:border-y lg:border-r lg:rounded-tr-2xl lg:rounded-br-2xl border rounded-2xl lg:mt-8 p-6">
            <div className="space-y-2 pb-3 border-b border-gray-600">
              <h4 className="text-3xl font-bold">Clarity</h4>
              <h5 className="text-xl font-bold">AED 14,000</h5>
            </div>
            <p className="py-5 text-sm border-b border-gray-600">
              <span className="font-semibold">
                Make the right first decision.
              </span>{" "}
              A complete, standalone assessment designed to replace uncertainty
              with direction. Clarity is ideal if you want to understand where
              AI will actually pay back, what to prioritise first, and how to
              focus effort before spending money or time.
            </p>
            <ul className="py-5 border-b border-gray-600 text-sm space-y-2">
              <li className="flex items-center gap-1">
                <span className="text-2xl text-[#f25d23]">
                  <TiTick />
                </span>
                AI Readiness Radar
              </li>
              <li className="flex items-center gap-1">
                <span className="text-2xl text-[#f25d23]">
                  <TiTick />
                </span>
                Sector Disruption Heatmap
              </li>
              <li className="flex items-center gap-1">
                <span className="text-2xl text-[#f25d23]">
                  <TiTick />
                </span>
                3x High-ROI Pilot Use Cases
              </li>
              <li className="flex items-center gap-1">
                <span className="text-2xl text-[#f25d23]">
                  <TiTick />
                </span>
                Year 1 Financial Payback Forecast
              </li>
              <li className="flex items-center gap-1">
                <span className="text-2xl text-[#f25d23]">
                  <TiTick />
                </span>
                90-Day Execution Roadmap
              </li>
            </ul>
            <div className="py-5 space-y-2">
              <h6 className="text-sm font-bold">
                Delivered within 5 business days
              </h6>
              <p className="text-sm mb-5">
                Designed for teams making an important first decision.
              </p>
              <button className="bg-[#f25d23] w-full py-2 rounded-md hover:text-[#f25d23] hover:bg-white transition-all duration-300 cursor-pointer">
                Choose Clarity
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <p className="lg:w-[50vw] mt-6 text-center">
            All assessments are standalone and delivered within five business
            days. The difference between tiers is depth of confidence, not
            speed.
          </p>
          <h5 className="my-6 font-argent lg:text-3xl text-center text-xl">
            We Only Accept a Limited Number of Clients Each Month to Ensure
            Quality
          </h5>
        </div>
      </div>
      {/* Eleventh Section  */}
      <div className="w-full">
        <EleventhSection />
      </div>
      {/* Twelveth Section  */}
      <div className="w-full">
        <FaqSection />
      </div>
    </div>
  );
};

export default Home;
