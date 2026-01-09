import React from "react";

export const TraditionalLearningSection: React.FC = () => {
  return (
    <section className="w-full bg-black flex flex-col items-center px-4 md:px-8 lg:px-[240px] py-16 md:py-20">
      {/* Header */}
      <div className="w-full border border-[#373737] flex flex-col items-center justify-center px-6 md:px-12 py-12 md:py-15 gap-4">
        <p className="text-xs md:text-sm font-medium uppercase tracking-[0.6px] bg-gradient-to-br from-[#077dea] to-[#70dee1] bg-clip-text text-transparent">
          Why Traditional Learning Fails Engineering Teams
        </p>
        <h2 className="text-3xl md:text-[40px] font-normal text-white text-center tracking-[-0.8px] leading-tight md:leading-[44px]">
          Learning Detached From Delivery Does Not Compound
        </h2>
      </div>

      {/* Two Column Comparison */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 border border-[#373737]">
        {/* Left Column - In Reality */}
        <div className="flex flex-col gap-4 p-6 md:p-8 border-r border-[#373737]">
          <h3 className="text-xl md:text-2xl font-medium text-white tracking-[-0.24px]">
            In reality
          </h3>
          <p className="text-base text-[rgba(250,250,250,0.7)] leading-6">
            Static content creates documentation debt, and generic courses create
            false confidence.
          </p>

          {/* Bullet Points with Gray Border */}
          <div className="flex flex-col gap-4 pl-4 border-l-4 border-[rgba(250,250,250,0.7)] mt-4">
            <p className="text-base text-[rgba(250,250,250,0.7)] leading-6">
              Developers learn while shipping
            </p>
            <p className="text-base text-[rgba(250,250,250,0.7)] leading-6">
              Context changes every sprint
            </p>
            <p className="text-base text-[rgba(250,250,250,0.7)] leading-6">
              And relevance expires within weeks
            </p>
          </div>

          {/* Graphics Illustration - Downward Trend */}
          <div className="flex items-center justify-center mt-8">
            <div className="relative w-full max-w-[376px] h-[242px]">
              {/* Placeholder for downward arrow/graphic - using a simple SVG representation */}
              <svg
                viewBox="0 0 377 242"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M50 50 L150 120 L250 140 L327 200"
                  stroke="rgba(250,250,250,0.3)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="50" cy="50" r="8" fill="rgba(250,250,250,0.5)" />
                <circle cx="150" cy="120" r="8" fill="rgba(250,250,250,0.5)" />
                <circle cx="250" cy="140" r="8" fill="rgba(250,250,250,0.5)" />
                <circle cx="327" cy="200" r="8" fill="rgba(250,250,250,0.5)" />
                <path
                  d="M320 190 L327 200 L334 190"
                  stroke="rgba(250,250,250,0.5)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column - Gradientflo Solution */}
        <div className="flex flex-col gap-4 p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-medium text-white tracking-[-0.24px]">
            Gradientflo ties learning to real projects.
          </h3>
          <p className="text-base text-[#fafafa] leading-6">
            This is learning that compounds execution.
          </p>

          {/* Bullet Points with Blue Border */}
          <div className="flex flex-col gap-4 pl-4 border-l-4 border-[#3552bf] mt-4">
            <p className="text-base text-[#fafafa] leading-6">
              From your codebase
            </p>
            <p className="text-base text-[#fafafa] leading-6">From your PRs</p>
            <p className="text-base text-[#fafafa] leading-6">
              From real architectural decisions
            </p>
            <p className="text-base text-[#fafafa] leading-6">
              From mistakes and reviews
            </p>
          </div>

          {/* Graphics Illustration - Upward Trend */}
          <div className="flex items-center justify-center mt-8">
            <div className="relative w-full max-w-[376px] h-[241px]">
              {/* Placeholder for upward arrow/graphic - using a simple SVG representation */}
              <svg
                viewBox="0 0 377 241"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <defs>
                  <linearGradient id="gradientUp" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3552bf" />
                    <stop offset="100%" stopColor="#70dee1" />
                  </linearGradient>
                </defs>
                <path
                  d="M50 190 L150 130 L250 90 L327 40"
                  stroke="url(#gradientUp)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="50" cy="190" r="8" fill="#3552bf" />
                <circle cx="150" cy="130" r="8" fill="#4a68d4" />
                <circle cx="250" cy="90" r="8" fill="#5b8ce7" />
                <circle cx="327" cy="40" r="8" fill="#70dee1" />
                <path
                  d="M320 50 L327 40 L334 50"
                  stroke="url(#gradientUp)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-40 w-full border-x border-[#373737]" />
    </section>
  );
};

