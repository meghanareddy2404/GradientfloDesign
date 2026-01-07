import React from "react";
import Image from "next/image";

const signalSources = [
  {
    id: 1,
    icon: "/assets/52932c90e59f8a8ec83d257a7568603219425ee6.svg",
    title: "PR Merged",
    description: "New code patterns introduced",
  },
  {
    id: 2,
    icon: "/assets/0e7722cad963fc1ec9d19ed0eed56f8cbde10e87.svg",
    title: "New Dependency",
    description: "Library or framework added",
  },
  {
    id: 3,
    icon: "/assets/13672056a407baa51dac3b451088e7c5bd658586.svg",
    title: "Complex Diff",
    description: "High complexity change",
  },
  {
    id: 4,
    icon: "/assets/405200b0efebbb8835d1ac8bba28f9485676f5c8.svg",
    title: "Reviewer Comment",
    description: "Knowledge gap in review",
  },
  {
    id: 5,
    icon: "/assets/4186822a5dc7c98bb96c2f789631eeefbdf09916.svg",
    title: "Repeated Query",
    description: "Same concept queried",
  },
  {
    id: 6,
    icon: "/assets/fcad01296effed5f02431473c3fa75e63a16da83.svg",
    title: "Incident",
    description: "Production issue detected",
  },
  {
    id: 7,
    icon: "/assets/52c30b68560a39b0afd8212ca00b2cb002e7d902.svg",
    title: "Security Scan",
    description: "Vulnerability discovered",
  },
  {
    id: 8,
    icon: "/assets/47d0c2e2b58c79410c4167c2c63b0526370d7737.svg",
    title: "Skill Decay",
    description: "Skill unused 30+ days",
  },
  {
    id: 9,
    icon: "/assets/9486007f1cc327b0ae99a9780f71eba55f22caa0.svg",
    title: "Doc Reactivation",
    description: "Documentation touched",
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full bg-black flex flex-col items-center rounded-3xl">
      {/* Header */}
      <div className="w-full border border-[#373737] flex flex-col items-center justify-center px-6 py-12 md:py-15">
        <h2 className="text-2xl md:text-[40px] font-medium text-white text-center tracking-[-0.8px] leading-tight md:leading-[44px]">
          Nine signal sources.{" "}
          <span className="font-minecraft text-[28px] md:text-[36px]">Zero</span>{" "}
          manual tagging.
        </h2>
      </div>

      {/* Main Content Grid */}
      <div className="w-full flex flex-col lg:flex-row">
        {/* Left Side - 3x3 Grid of Signal Sources */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {signalSources.map((source) => (
            <FeatureCard
              key={source.id}
              icon={source.icon}
              title={source.title}
              description={source.description}
            />
          ))}
        </div>

        {/* Right Side - Learning Signal Card */}
        <div className="w-full lg:w-[480px] border border-[#373737] flex items-center justify-center p-4 lg:p-0">
          <LearningSignalCard
            concept="Agentic Memory"
            understanding={88}
            urgency="low"
          />
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
    <div className="h-[160px] w-full border-[0.8px] border-[#373737] flex flex-col gap-4 items-center justify-center p-6 hover:bg-white/5 transition-colors">
      <div className="relative w-8 h-8 shrink-0">
        <Image src={icon} alt={title} width={32} height={32} className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-1 items-center w-full">
        <h3 className="text-xl font-medium text-white text-center leading-[24.96px]">
          {title}
        </h3>
        <p className="text-xs text-[rgba(255,255,255,0.7)] text-center leading-[19.2px]">
          {description}
        </p>
      </div>
    </div>
  );
};

interface LearningSignalProps {
  concept: string;
  understanding: number;
  urgency: string;
}

const LearningSignalCard: React.FC<LearningSignalProps> = ({
  concept,
  understanding,
  urgency,
}) => {
  return (
    <div className="w-[240px] h-[240px] rounded-full flex flex-col gap-3 items-center justify-center p-9 border border-[#373737]">
      {/* Icon */}
      <div className="relative w-12 h-12 shrink-0">
        <Image
          src="/assets/d43d7558188229195131bed84064c10837f9b600.svg"
          alt="Learning Signal"
          width={48}
          height={48}
          className="w-full h-full"
        />
      </div>

      {/* Title and Subtitle */}
      <div className="flex flex-col gap-1 items-center">
        <h3 className="text-[19.2px] font-medium text-white text-center tracking-[-0.192px] leading-[24.96px]">
          Learning Signal
        </h3>
        <p className="text-[12.8px] text-[rgba(255,255,255,0.7)] text-center leading-[19.2px]">
          Detected & Classified
        </p>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-1 w-[220px]">
        <DetailRow label="Concept" value={concept} />
        <DetailRow label="Understanding" value={`${understanding}%`} />
        <DetailRow label="Urgency" value={urgency} />
      </div>
    </div>
  );
};

interface DetailRowProps {
  label: string;
  value: string;
}

const DetailRow: React.FC<DetailRowProps> = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between text-[12.8px] leading-[19.2px] w-full">
      <span className="text-[rgba(255,255,255,0.7)] font-normal">{label}</span>
      <span className="text-white font-medium">{value}</span>
    </div>
  );
};

