import React from "react";
import Image from "next/image";

const features = [
  {
    id: 1,
    icon: "/assets/2763506207ba184d3751786850066ccf16969762.svg",
    title: "Repo Intelligence",
  },
  {
    id: 2,
    icon: "/assets/d7f0f95f11196600d601f4f3c4b9f9e110dd50b7.svg",
    title: "Learning Intelligence",
  },
  {
    id: 3,
    icon: "/assets/4ffa7c9ff2bb3c046b89cb663bc1d9892ded1b57.svg",
    title: "PR & Application Rate",
  },
  {
    id: 4,
    icon: "/assets/7f47b64dd0737dc367f721caddce0ab037a02321.svg",
    title: "Developer Intelligence",
  },
  {
    id: 5,
    icon: "/assets/fe1ada3bcc692532c032f3a9963f25c8f906613e.svg",
    title: "Recommendations",
  },
];

export const CodeIndexingSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center rounded-3xl">
      {/* Top Border */}
      <div className="h-20 w-full border-b border-r border-[#373737]" />

      {/* Main Content */}
      <div className="w-full flex flex-col lg:flex-row border-b border-[#373737]">
        {/* Left Side - Text Content */}
        <div className="flex-1 flex flex-col gap-4 justify-center p-8 lg:p-8 border-r border-[#373737]">
          <h2 className="text-3xl lg:text-4xl font-normal text-white tracking-[-0.8px] leading-[44px]">
            <span className="font-minecraft text-[32px] lg:text-[36px]">Code</span>
            <span className="text-[36px] lg:text-[40px]"> Indexing</span>
          </h2>
          <p className="text-base text-[rgba(250,250,250,0.7)] leading-6 font-normal">
            Automated knowledge distillation. We turn raw commits into high-fidelity
            neural tokens that power your team&apos;s collective intelligence.
          </p>
        </div>

        {/* Right Side - Features Grid */}
        <div className="relative p-8 lg:p-8 border-l border-[#373737] flex items-center justify-end">
          {/* Connection Lines Background */}
          <div className="absolute left-[141px] top-[77px] w-[466px] h-[134px] pointer-events-none hidden lg:block">
            <Image
              src="/assets/95699da74b48c7e606593767b72a01b85337bd65.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Features Grid */}
          <div className="flex flex-col gap-8 items-center relative z-10">
            {/* Top Row */}
            <div className="flex gap-8 items-start justify-center flex-wrap">
              <FeatureCard
                icon={features[0].icon}
                title={features[0].title}
              />
              <FeatureCard
                icon={features[1].icon}
                title={features[1].title}
              />
            </div>

            {/* Bottom Row */}
            <div className="flex gap-8 items-start justify-center flex-wrap">
              <FeatureCard
                icon={features[2].icon}
                title={features[2].title}
              />
              <FeatureCard
                icon={features[3].icon}
                title={features[3].title}
              />
            </div>
          </div>

          {/* Recommendations Card */}
          <div className="ml-0 lg:ml-8 hidden lg:block relative z-10">
            <FeatureCard
              icon={features[4].icon}
              title={features[4].title}
            />
          </div>
        </div>
      </div>

      {/* Context Synthesis Engine Visualization */}
      <div className="w-full border border-[#373737] p-8">
        <div className="w-full flex items-center justify-center">
          <div className="relative w-full max-w-[1160px] h-[400px] lg:h-[589px] rounded-[113px] overflow-hidden">
            <Image
              src="/assets/fc4c1da3e4d3751f17961237b85c2eacf57a532a.png"
              alt="Context Synthesis Engine Neural"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="h-40 w-full border-r border-[#373737]" />
    </section>
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => {
  return (
    <div className="bg-black border border-[#373737] flex flex-col gap-3 items-center justify-center py-4 w-[200px] hover:border-[#555] transition-colors">
      <div className="w-6 h-6 relative">
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
          className="w-full h-full"
        />
      </div>
      <h3 className="text-base text-white text-center font-normal leading-[24.96px]">
        {title}
      </h3>
    </div>
  );
};

