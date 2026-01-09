import React from "react";
import Image from "next/image";

export const LearningSystemSection: React.FC = () => {
  return (
    <section className="w-full bg-black flex flex-col items-center">
      {/* Section Title */}
      <div className="w-full border border-[#373737] flex flex-col items-center justify-center px-6 md:px-12 py-12 md:py-15">
        <h2 className="text-2xl md:text-[40px] font-medium text-white text-center tracking-[-0.8px] leading-tight md:leading-[44px]">
          Automation that runs{" "}
          <span className="font-minecraft text-[28px] md:text-[36px]">your</span>{" "}
          learning system
        </h2>
      </div>

      {/* Neural DNA Visualization */}
      <div className="w-full border border-[#373737] flex flex-col items-center px-4 md:px-0 py-8 md:py-12">
        <div className="relative w-full max-w-[936px] aspect-[936/577] rounded-3xl md:rounded-[48px] overflow-hidden">
          <Image
            src="/assets/f8c850e36ac991c421b9a1d8743c1f4470170466.png"
            alt="Neural DNA: SLM Ontology Graph - Automation learning system visualization"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Bottom Border Spacing */}
      <div className="h-40 w-full border-x border-[#373737]" />
    </section>
  );
};

