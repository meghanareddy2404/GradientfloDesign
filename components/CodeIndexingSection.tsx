import React from "react";
import Image from "next/image";
import {
  Database,
  Brain,
  User,
  BookOpen,
  TrendingUp,
  LucideIcon,
} from "lucide-react";
import { TalentFlow } from "./TalentFlow";

const features: Array<{ id: number; Icon: LucideIcon; title: string }> = [
  {
    id: 1,
    Icon: Database,
    title: "Repo Intelligence",
  },
  {
    id: 2,
    Icon: Brain,
    title: "Learning Intelligence",
  },
  {
    id: 3,
    Icon: User,
    title: "PR & Application Rate",
  },
  {
    id: 4,
    Icon: BookOpen,
    title: "Developer Intelligence",
  },
  {
    id: 5,
    Icon: TrendingUp,
    title: "Recommendations",
  },
];

export const CodeIndexingSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center rounded-3xl">
      {/* Top Border */}
      <div className="h-20 w-full border-b border-r border-l border-[#373737]" />

      {/* Main Content */}
      <div className="w-full flex flex-col lg:flex-row border-b border-r border-l border-[#373737]">
        {/* Left Side - Text Content */}
        <div className="flex-1 flex flex-col gap-4 justify-center p-8 lg:p-8 border-r border-[#373737]">
          <h2 className="text-3xl lg:text-4xl font-normal text-white tracking-[-0.8px] leading-[44px]">
            <span className="font-minecraft text-[32px] lg:text-[36px]">
              Code
            </span>
            <span className="text-[36px] lg:text-[40px]"> Indexing</span>
          </h2>
          <p className="text-base text-[rgba(250,250,250,0.7)] leading-6 font-normal">
            Automated knowledge distillation. We turn raw commits into
            high-fidelity neural tokens that power your team&apos;s collective
            intelligence.
          </p>
        </div>

        {/* Right Side - Features Grid */}
        <div className="relative p-8 lg:p-8 border-l border-[#373737] flex items-center md:justify-end">
          {/* Connection Lines Background */}
          <div className="absolute left-[141px] top-[77px] w-[466px] h-[134px] pointer-events-none hidden md:block">
            <Image
              src="/assets/95699da74b48c7e606593767b72a01b85337bd65.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Features Grid */}
          <div className="flex flex-col gap-8 items-center relative z-10 w-full">
            {/* Top Row */}
            <div className="flex gap-8 items-start justify-center flex-wrap">
              <FeatureCard Icon={features[0].Icon} title={features[0].title} />
              <FeatureCard Icon={features[1].Icon} title={features[1].title} />
            </div>

            {/* Middle Row - Recommendations (visible on small screens only) */}
            <div className="flex gap-8 items-start justify-center md:hidden w-full">
              <FeatureCard Icon={features[4].Icon} title={features[4].title} />
            </div>

            {/* Bottom Row */}
            <div className="flex gap-8 items-start justify-center flex-wrap">
              <FeatureCard Icon={features[2].Icon} title={features[2].title} />
              <FeatureCard Icon={features[3].Icon} title={features[3].title} />
            </div>
          </div>

          {/* Recommendations Card - Right side on medium and large screens */}
          <div className="ml-0 md:ml-8 hidden md:block relative z-10">
            <FeatureCard Icon={features[4].Icon} title={features[4].title} />
          </div>
        </div>
      </div>

      {/* Context Synthesis Engine Visualization */}
      <div className="w-full border border-[#373737] p-4 md:p-8 lg:p-12">
        <div className="w-full flex items-center justify-center">
          <div className="bg-[#080808] rounded-[1.5rem] md:rounded-[3.5rem] border border-white/5 p-2 md:p-10 shadow-3xl relative overflow-hidden group w-full max-w-[1160px]">
            <div className="absolute inset-0 bg-purple-500/[0.08] blur-[200px] rounded-full transition-all" />
            <div className="w-full aspect-[4/3] md:aspect-[16/8] relative z-10">
              <TalentFlow />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="h-40 w-full border-r border-l border-[#373737]" />
    </section>
  );
};

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, title }) => {
  return (
    <div className="bg-black border border-[#373737] flex flex-col gap-3 items-center justify-center py-4 w-[200px] hover:border-[#555] transition-colors">
      <Icon className="w-6 h-6 text-white" />
      <h3 className="text-base text-white text-center font-normal leading-[24.96px]">
        {title}
      </h3>
    </div>
  );
};

