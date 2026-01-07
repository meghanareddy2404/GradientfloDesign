import React from "react";
import Image from "next/image";

const features = [
  {
    icon: "/assets/7ad63dfa363435a14690a4bad01045eebb62fa22.svg",
    title: "SOC 2 Aligned",
    description: "Enterprise-grade security controls and audit trails",
  },
  {
    icon: "/assets/7ad63dfa363435a14690a4bad01045eebb62fa22.svg",
    title: "SSO & RBAC",
    description: "Single sign-on with role-based access control",
  },
  {
    icon: "/assets/7ad63dfa363435a14690a4bad01045eebb62fa22.svg",
    title: "Data Isolation",
    description: "Your data stays within your security perimeter",
  },
  {
    icon: "/assets/7ad63dfa363435a14690a4bad01045eebb62fa22.svg",
    title: "White Glove",
    description: "Dedicated success team and learning design support",
  },
];

export const EnterpriseSection: React.FC = () => {
  return (
    <section className="w-full bg-black flex flex-col items-center">
      {/* Header */}
      <div className="w-full border border-[#373737] flex flex-col items-center justify-center px-6 md:px-12 py-12 md:py-15">
        <div className="flex flex-col gap-4 items-center px-6">
          <h2 className="text-2xl md:text-[40px] font-medium text-white text-center tracking-[-0.8px] leading-tight md:leading-[44px]">
            Why Gradientflo for Enterprise
          </h2>
          <p className="text-base text-[rgba(255,255,255,0.7)] text-center leading-6 max-w-3xl">
            Security, compliance, and scale—designed for organizations that take
            learning infrastructure seriously.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="w-full border border-[#373737]">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      {/* Bottom Border Spacing */}
      <div className="h-40 w-full border-r border-[#373737]" />
    </section>
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex-1 border border-[#373737] flex flex-col gap-4 items-start px-6 md:px-8 py-10 md:py-12 hover:bg-white/5 transition-colors min-h-[200px]">
      {/* Icon */}
      <div className="w-8 h-8 shrink-0">
        <Image
          src={icon}
          alt={title}
          width={32}
          height={32}
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl md:text-2xl font-medium text-white leading-tight">
          {title}
        </h3>
        <p className="text-sm md:text-base text-[rgba(255,255,255,0.7)] leading-6">
          {description}
        </p>
      </div>
    </div>
  );
};

