import React from "react";
import Image from "next/image";

const subMetrics = [
  {
    icon: "/assets/3d0c0e9419ae3d70af14884988d6eca31c9c81c4.svg",
    value: "30%",
    label: "Concepts Mastered",
  },
  {
    icon: "/assets/7ad63dfa363435a14690a4bad01045eebb62fa22.svg",
    value: "40%",
    label: "Speed to Apply",
  },
  {
    icon: "/assets/c01c45bd411e1fb409946f5118f8ce042f0f1399.svg",
    value: "20%",
    label: "Content Completed",
  },
  {
    icon: "/assets/908c4d48890cbc37806c9c9705a46e813ee83845.svg",
    value: "10%",
    label: "Skill Refresh",
  },
];

export const MetricsSection: React.FC = () => {
  return (
    <section className="w-full bg-black flex flex-col items-center">
      {/* Main Metric Display with Background */}
      <div className="w-full border border-[#373737] relative h-[500px] md:h-[643px] overflow-hidden flex flex-col items-start justify-between p-6 md:p-8">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/assets/b0d02872668f001c61aa16d7f41eb0300de0048f.png"
            alt="Space background"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full flex flex-col h-full justify-between">
          {/* Top Label */}
          <div className="w-full">
            <p className="text-xs font-semibold text-white uppercase tracking-[0.6px] leading-[18px]">
              Learning Velocity Index
            </p>
          </div>

          {/* Main Metric */}
          <div className="max-w-[448px] pt-4">
            <h2 className="text-7xl md:text-[120px] font-bold text-white tracking-[6px] leading-none mb-4">
              78%
            </h2>
            <p className="text-xl md:text-2xl font-medium text-white tracking-[-0.24px] leading-8">
              Track how quickly skills move from learning to application in real
              work.
            </p>
          </div>

          {/* Bottom Sub-Metrics */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-7 pt-8">
            {subMetrics.map((metric, index) => (
              <SubMetric
                key={index}
                icon={metric.icon}
                value={metric.value}
                label={metric.label}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Border Spacing */}
      <div className="h-40 w-full border-x border-[#373737]" />
    </section>
  );
};

interface SubMetricProps {
  icon: string;
  value: string;
  label: string;
}

const SubMetric: React.FC<SubMetricProps> = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-[192px]">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 shrink-0">
          <Image
            src={icon}
            alt={label}
            width={32}
            height={32}
            className="w-full h-full"
          />
        </div>
        <p className="text-3xl md:text-[40px] font-normal text-white tracking-[-0.8px] leading-[44px]">
          {value}
        </p>
      </div>
      <p className="text-sm text-[rgba(255,255,255,0.8)] leading-6">{label}</p>
    </div>
  );
};

