import React from "react";
import Image from "next/image";

const integrations = [
  {
    name: "Notion",
    logo: "/assets/7a87265cc4a78a5a91b37da48f26ada2c297e1d7.png",
    bgColor: "bg-white",
  },
  {
    name: "GitHub",
    logo: "/assets/0322645754fe173e34cb86c4347587f99fd87438.svg",
    bgColor: "bg-gray-900",
  },
  {
    name: "Linear",
    logo: "/assets/a65a2d8987a0f00640c42f9410a08c9691836632.png",
    bgColor: "bg-transparent",
  },
  {
    name: "Slack",
    logo: "/assets/f17e01fd97a13cee96e180ff16060055fd4dcb77.png",
    bgColor: "bg-white",
  },
];

export const IntegrationsSection: React.FC = () => {
  return (
    <section className="w-full bg-black flex flex-col items-center rounded-3xl">
      {/* Header */}
      <div className="w-full border border-[#373737] flex flex-col items-center justify-center px-6 md:px-12 py-12 md:py-15">
        <div className="flex flex-col gap-4 items-center px-6">
          <h2 className="text-2xl md:text-[40px] font-medium text-white text-center tracking-[-0.8px] leading-tight md:leading-[44px]">
            Fits into the tools your{" "}
            <span className="font-minecraft text-[28px] md:text-[36px]">
              teams already use
            </span>
          </h2>
          <p className="text-base text-[rgba(255,255,255,0.7)] text-center leading-6 max-w-3xl">
            Gradientflo integrates directly into your existing engineering and
            planning stack. No new process. No learning portal. No workflow
            disruption.
          </p>
        </div>
      </div>

      {/* Integration Cards */}
      <div className="w-full border border-[#373737]">
        <div className="w-full grid grid-cols-2 md:grid-cols-4">
          {integrations.map((integration, index) => (
            <IntegrationCard
              key={index}
              name={integration.name}
              logo={integration.logo}
              bgColor={integration.bgColor}
            />
          ))}
        </div>
      </div>

      {/* Bottom Border Spacing */}
      <div className="h-40 w-full border-r border-[#373737]" />
    </section>
  );
};

interface IntegrationCardProps {
  name: string;
  logo: string;
  bgColor: string;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({
  name,
  logo,
  bgColor,
}) => {
  return (
    <div className="flex-1 border border-[#373737] flex flex-col gap-4 items-center justify-center px-6 md:px-8 py-10 md:py-12 hover:bg-white/5 transition-colors">
      {/* Logo Container */}
      <div
        className={`w-20 h-20 rounded-full flex items-center justify-center shadow-[0px_2.5px_25px_0px_rgba(0,0,0,0.16)] ${bgColor}`}
      >
        <div className="relative w-16 h-16">
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Name */}
      <p className="text-base text-white leading-6 text-center">{name}</p>
    </div>
  );
};

