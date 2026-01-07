import React from "react";

const metrics = [
  { value: "2.4x", label: "Learning Velocity Index" },
  { value: "87%", label: "Application Rate" },
  { value: "94%", label: "Knowledge Graph Coverage" },
  { value: "91%", label: "Concept Retention Over Time" },
];

export const ImpactSection: React.FC = () => {
  return (
    <section className="w-full bg-black flex flex-col items-center">
      {/* Section Title */}
      <div className="w-full border border-[#373737] flex flex-col items-center justify-center px-6 md:px-12 py-12 md:py-15">
        <h2 className="text-2xl md:text-[40px] font-medium text-white text-center tracking-[-0.8px] leading-tight md:leading-[44px]">
          <span className="font-minecraft text-[28px] md:text-[36px]">Learning</span>{" "}
          lives inside the project not outside it
        </h2>
      </div>

      {/* Main Content - Text + Illustration */}
      <div className="w-full border border-[#373737] flex flex-col lg:flex-row items-start justify-center p-6 md:p-8 gap-8">
        {/* Left Side - Text Content */}
        <div className="flex-1 flex flex-col gap-5">
          <p className="text-base text-[rgba(255,255,255,0.7)] leading-6 max-w-[720px]">
            Traditional learning systems sit outside delivery. Gradientflo embeds
            learning directly into the codebase and workflow.
          </p>
          
          <ul className="flex flex-col gap-3 text-white text-base leading-6">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Learning is triggered by PRs not courses</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Context comes from the actual repository</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Knowledge stays current because the code changes</span>
            </li>
          </ul>
        </div>

        {/* Right Side - Illustration */}
        <div className="flex-1 flex items-center justify-center p-2">
          <div className="relative w-full max-w-[300px] h-[240px] flex items-center justify-center">
            {/* Simplified illustration - stacked cards with hover effect */}
            <div className="relative w-[280px] h-[200px]">
              {/* Background cards */}
              <div className="absolute top-0 left-16 w-[172px] h-[97px] bg-[#08090a] border border-[rgba(255,255,255,0.05)] rounded-lg" />
              
              {/* Middle card with gradient */}
              <div className="absolute top-3 left-12 w-[200px] h-[87px] bg-gradient-to-br from-[#077dea] to-[#70ded1] border border-[rgba(255,255,255,0.05)] rounded-lg" />
              
              {/* Front card */}
              <div className="absolute top-8 left-8 w-[228px] h-[81px] bg-[#08090a] border border-[rgba(255,255,255,0.05)] rounded-lg p-2 flex flex-col gap-2">
                <div className="w-[112px] h-[10px] bg-[rgba(255,255,255,0.05)] rounded" />
                <div className="w-full h-[22px] bg-[rgba(255,255,255,0.05)] rounded mt-1" />
                <button className="mt-1 px-2 py-1 border border-white rounded text-[7px] text-white uppercase font-medium self-center flex items-center gap-1 hover:bg-white/10 transition-colors">
                  <span className="text-[8px]">📄</span>
                  Copy page
                </button>
              </div>

              {/* Pointer icons */}
              <div className="absolute top-0 left-4 w-5 h-5 bg-gradient-to-b from-[#097fe9] to-[#6edcd1] rounded-full flex items-center justify-center">
                <span className="text-white text-[10px]">⚡</span>
              </div>
              
              <div className="absolute bottom-0 right-12 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-[10px]">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="w-full flex flex-col sm:flex-row">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            value={metric.value}
            label={metric.label}
          />
        ))}
      </div>

      {/* Bottom Border Spacing */}
      <div className="h-40 w-full border-r border-[#373737]" />
    </section>
  );
};

interface MetricCardProps {
  value: string;
  label: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, label }) => {
  return (
    <div className="flex-1 border border-[#373737] flex flex-col gap-4 items-start px-6 md:px-8 py-10 md:py-12 min-w-0">
      <h3 className="text-4xl md:text-[40px] font-medium text-white leading-normal">
        {value}
      </h3>
      <p className="text-base text-[rgba(255,255,255,0.7)] leading-6">
        {label}
      </p>
    </div>
  );
};

