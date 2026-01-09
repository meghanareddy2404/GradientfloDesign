import React from "react";
import {
  GitMerge,
  Package,
  Code,
  MessageSquare,
  RefreshCw,
  AlertTriangle,
  Shield,
  Clock,
  FileText,
  Share2,
  LucideIcon,
} from "lucide-react";

const signalSources: Array<{
  id: number;
  Icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    id: 1,
    Icon: GitMerge,
    title: "PR Merged",
    description: "New code patterns introduced",
  },
  {
    id: 2,
    Icon: Package,
    title: "New Dependency",
    description: "Library or framework added",
  },
  {
    id: 3,
    Icon: Code,
    title: "Complex Diff",
    description: "High complexity change",
  },
  {
    id: 4,
    Icon: MessageSquare,
    title: "Reviewer Comment",
    description: "Knowledge gap in review",
  },
  {
    id: 5,
    Icon: RefreshCw,
    title: "Repeated Query",
    description: "Same concept queried",
  },
  {
    id: 6,
    Icon: AlertTriangle,
    title: "Incident",
    description: "Production issue detected",
  },
  {
    id: 7,
    Icon: Shield,
    title: "Security Scan",
    description: "Vulnerability discovered",
  },
  {
    id: 8,
    Icon: Clock,
    title: "Skill Decay",
    description: "Skill unused 30+ days",
  },
  {
    id: 9,
    Icon: FileText,
    title: "Doc Reactivation",
    description: "Documentation touched",
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center rounded-3xl">
      {/* Header */}
      <div className="w-full border border-[#373737] flex flex-col items-center justify-center px-6 py-12 md:py-15">
        <h2 className="text-2xl md:text-[40px] font-medium text-white text-center tracking-[-0.8px] leading-tight md:leading-[44px]">
          Nine signal sources.{" "}
          <span className="font-minecraft text-[28px] md:text-[36px]">
            Zero
          </span>{" "}
          manual tagging.
        </h2>
      </div>

      {/* Main Content Grid */}
      <div className="w-full flex flex-col lg:flex-row border-b border-r  border-[#373737]">
        {/* Left Side - 3x3 Grid of Signal Sources */}
        <div className="flex-1 w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {signalSources.map((source) => (
            <FeatureCard
              key={source.id}
              Icon={source.Icon}
              title={source.title}
              description={source.description}
            />
          ))}
        </div>

        {/* Right Side - Learning Signal Card */}
        <div className="w-full lg:w-1/4 lg:min-h-[480px] border-l border-[#373737] flex items-center justify-center p-8 lg:p-12">
          <LearningSignalCard
            concept="Agentic Memory"
            understanding={88}
            urgency="low"
          />
        </div>
      </div>

      {/* Bottom Border Spacing */}
      <div className="h-40 w-full border-x border-[#373737]" />
    </section>
  );
};

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  Icon,
  title,
  description,
}) => {
  return (
    <div className="h-[160px] w-full border-[0.8px] border-[#373737] flex flex-col gap-4 items-center justify-center p-6 hover:bg-white/5 transition-colors">
      <Icon className="w-8 h-8 text-linear-gradient(180deg, #5DCD89 43.27%, #35C5FF 100%) shrink-0" />
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
    <div className="w-[240px] h-[240px] rounded-full flex flex-col gap-3 items-center justify-center p-9 ">
      {/* Icon */}
      <Share2 className="w-12 h-12 text-white shrink-0" />

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
