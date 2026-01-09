import React from "react";
import Image from "next/image";

export const WhatGradientfloDoesSection: React.FC = () => {
  return (
    <section className="w-full bg-black flex flex-col items-center px-4 md:px-8 lg:px-[240px] py-0">
      {/* Header */}
      <div className="w-full border border-[#373737] flex flex-col items-center justify-center px-6 md:px-12 py-12 md:py-15">
        <h2 className="text-3xl md:text-[40px] font-normal text-white text-center tracking-[-0.8px] leading-tight md:leading-[44px]">
          What Gradientflo Does Differently
        </h2>
      </div>

      {/* Content Section */}
      <div className="w-full border-x border-[#373737]">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left Column - Text Content */}
          <div className="flex-1 flex flex-col gap-4 lg:gap-10 p-6 md:p-12 lg:pb-12 lg:pt-16 min-w-0">
            {/* Main Description */}
            <div className="flex flex-col gap-2.5 pb-12 md:pb-15 pt-12 md:pt-16">
              <h3 className="text-2xl md:text-[32px] font-normal text-white tracking-[1px] leading-normal">
                Gradientflo is learning infrastructure for engineering teams.
              </h3>
              <p className="text-[15px] text-[rgba(250,250,250,0.7)] tracking-[0.2px] leading-6">
                We do three things continuously
              </p>
            </div>

            {/* Three Actions List */}
            <div className="flex flex-col gap-4 w-full lg:min-w-[535px]">
              <h4 className="text-2xl md:text-[32px] font-normal text-white tracking-[1px] leading-normal">
                Codebase Analysis
              </h4>
              <h4 className="text-2xl md:text-[32px] font-normal text-white tracking-[1px] leading-normal">
                Skill Detection
              </h4>
              <h4 className="text-2xl md:text-[32px] font-normal text-white tracking-[1px] leading-normal">
                Team Improvement
              </h4>
            </div>
          </div>

          {/* Right Column - Visual Content */}
          <div className="w-full lg:w-[595px] flex-shrink-0 relative flex items-center justify-center overflow-hidden min-h-[560px]">
            {/* Gradient Background */}
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 opacity-80 blur-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse at center, #3552bf 0%, #358bdf 18%, #35c5ff 36%, #58a8fb 41%, #7a8bf7 46%, #9d6ef3 51%, #c051ef 56%, #df43b3 64%, #ff3576 73%, #fd5f83 79%, #fa8990 86%, #f8b39d 93%, #f5ddaa 100%)",
                }}
              />
            </div>

            {/* Screenshot Image */}
            <div className="relative z-10 w-full max-w-[800px] h-auto p-4 md:p-8 lg:pl-20 lg:pt-40">
              <div className="relative w-full aspect-[800/447] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/assets/17d14a62ed679e2633df936b25ba1a2165a8402b.png"
                  alt="Gradientflo Platform Interface"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-40 w-full border-x border-t border-[#373737]" />
    </section>
  );
};

