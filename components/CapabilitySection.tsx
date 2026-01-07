import React from "react";
import Image from "next/image";

export const CapabilitySection: React.FC = () => {
  return (
    <section className="w-full bg-black flex flex-col items-center">
      {/* Section Title */}
      <div className="w-full border border-[#373737] flex flex-col items-center justify-center px-6 md:px-12 py-12 md:py-15">
        <h2 className="text-2xl md:text-[40px] font-normal text-white text-center tracking-[-0.8px] leading-tight md:leading-[44px]">
          How Gradientflo{" "}
          <span className="font-minecraft text-[28px] md:text-[36px]">turns</span>{" "}
          code into capability
        </h2>
      </div>

      {/* Steps Grid - Top Row */}
      <div className="w-full flex flex-col lg:flex-row">
        {/* Step 01 - Your Code (with visual) */}
        <div className="flex-1 border border-[#373737] flex flex-col lg:flex-row p-px">
          <div className="flex-1 flex flex-col gap-4 p-8">
            <StepBadge number="01" />
            <h3 className="text-xl md:text-2xl font-medium text-white tracking-[-0.24px] leading-[31.2px]">
              Your Code
            </h3>
            <p className="text-base text-[rgba(250,250,250,0.7)] leading-6">
              Connect your GitHub repositories, pull requests, commit history, and
              issue systems. Your code is the source of truth.
            </p>
          </div>
          <div className="h-[280px] lg:h-[320px] w-full lg:w-[400px] flex items-center justify-center p-4 lg:p-0">
            <div className="relative w-full h-full max-w-[400px]">
              <Image
                src="/assets/cf4825c7376ad293ca05411829897710b194e87a.png"
                alt="Code visualization dashboard"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Step 02 - Codebase Understanding */}
        <div className="w-full lg:w-[400px] border border-[#373737] flex flex-col p-px">
          <div className="flex flex-col gap-4 p-8">
            <StepBadge number="02" />
            <h3 className="text-xl md:text-2xl font-medium text-white tracking-[-0.24px] leading-[31.2px]">
              Codebase Understanding
            </h3>
            <p className="text-base text-[rgba(250,250,250,0.7)] leading-6">
              Gradientflo maps structure and changes in your codebase, showing
              what changed and why it matters.
            </p>
          </div>
        </div>
      </div>

      {/* Steps Grid - Bottom Row */}
      <div className="w-full flex flex-col lg:flex-row">
        {/* Step 03 - Gap Detection */}
        <div className="w-full lg:w-[400px] border border-[#373737] flex flex-col p-px">
          <div className="flex flex-col gap-4 p-8">
            <StepBadge number="03" />
            <h3 className="text-xl md:text-2xl font-medium text-white tracking-[-0.24px] leading-[31.2px]">
              Gap Detection
            </h3>
            <p className="text-base text-[rgba(250,250,250,0.7)] leading-6">
              Every meaningful change is checked for knowledge gaps and learning
              opportunities. Learning moments are detected automatically from
              real work.
            </p>
          </div>
        </div>

        {/* Step 04 - Team Growth (with visual placeholder) */}
        <div className="flex-1 border border-[#373737] flex flex-col lg:flex-row p-px">
          <div className="flex-1 flex flex-col gap-4 p-8">
            <StepBadge number="04" />
            <h3 className="text-xl md:text-2xl font-medium text-white tracking-[-0.24px] leading-[31.2px]">
              Team Growth
            </h3>
            <p className="text-base text-[rgba(250,250,250,0.7)] leading-6">
              Learning moments turn into lessons and measurable progress.
              Delivery improves as understanding grows.
            </p>
          </div>
          
          {/* Visual placeholder for Team Growth illustration */}
          <div className="h-[280px] lg:h-[320px] w-full lg:w-[400px] flex items-center justify-center p-8">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Simplified representation - stacked cards */}
              <div className="relative w-[280px] h-[200px]">
                {/* Background cards */}
                <div className="absolute top-0 left-12 w-[230px] h-[130px] bg-[#08090a] border border-[rgba(255,255,255,0.05)] rounded-xl" />
                
                {/* Middle card with gradient */}
                <div className="absolute top-4 left-8 w-[266px] h-[116px] bg-gradient-to-br from-[#077dea] to-[#70ded1] border border-[rgba(255,255,255,0.05)] rounded-xl" />
                
                {/* Front card */}
                <div className="absolute top-11 left-4 w-[304px] h-[108px] bg-[#08090a] border border-[rgba(255,255,255,0.05)] rounded-xl p-3 flex flex-col gap-2">
                  <div className="w-[150px] h-[14px] bg-[rgba(255,255,255,0.05)] rounded" />
                  <div className="w-full h-[30px] bg-[rgba(255,255,255,0.05)] rounded-lg mt-2" />
                  <button className="mt-2 px-3 py-1.5 border border-white rounded-lg text-[10px] text-white uppercase font-medium self-center flex items-center gap-1.5 hover:bg-white/10 transition-colors">
                    <span className="text-xs">📄</span>
                    Copy page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border Spacing */}
      <div className="h-40 w-full border-r border-[#373737]" />
    </section>
  );
};

interface StepBadgeProps {
  number: string;
}

const StepBadge: React.FC<StepBadgeProps> = ({ number }) => {
  return (
    <div
      className="text-xs font-medium uppercase tracking-[0.6px] leading-[18px] bg-clip-text text-transparent"
      style={{
        backgroundImage:
          "linear-gradient(160deg, rgb(7, 125, 234) 15%, rgb(112, 222, 209) 86%)",
      }}
    >
      Step {number}
    </div>
  );
};

