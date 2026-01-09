import React from "react";
import Image from "next/image";
import {
  Navbar,
  Hero,
  CodeIndexingSection,
  CapabilitySection,
  FeaturesSection,
  LearningSystemSection,
  ImpactSection,
  MetricsSection,
  IntegrationsSection,
  EnterpriseSection,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] flex flex-col items-center pb-8 md:pb-[30px] pt-0 px-4 md:px-0 relative overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-1 w-full flex flex-col items-center gap-12 md:gap-16 md:px-4 lg:px-0 pt-6 md:pt-10 relative">
        {/* Background Gradient Effect - Hidden on mobile for performance */}
        <div className="hidden lg:block absolute left-[306px] top-[-1197px] w-[1069px] h-[292px] flex items-center justify-center pointer-events-none">
          <div className="rotate-[270deg]">
            <Image
              src="/assets/ecaf58d0719dc7efcba27d119cceb7711645ca35.svg"
              alt=""
              width={1069}
              height={292}
              className="opacity-60"
              priority
            />
          </div>
        </div>

        {/* Hero Section */}
        <Hero />

        {/* Platform Preview */}
        <div
          style={{
            background:
              "conic-gradient(from 53.23deg at 50% 50%, #3552BF 0deg, #35C5FF 129.81deg, #C051EF 180.01deg, #FF3576 261.35deg, #F5DDAA 360deg)",
          }}
          className="relative w-full max-w-[1248px] aspect-[1248/832] p-[4px] md:p-[8px] rounded-3xl"
        >
          <div className="bg-[#0B0B0B] rounded-[20px] w-full h-full relative overflow-hidden">
            <Image
              src="/assets/e74ed57f623576498a1f0340b9ad5bdc7f657aa9.png"
              alt="Gradientflo Platform Preview"
              fill
              className="object-cover object-center pointer-events-none"
              priority
            />
          </div>
        </div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute left-0 bottom-0 w-full h-[297px] bg-gradient-to-b from-transparent to-black pointer-events-none" />
      </div>

      {/* Code Indexing Section */}
      <div className="w-full bg-black">
        <div className="w-full max-w-[374.8px] md:max-w-[753.6px] lg:max-w-[1148px] mx-auto px-2 md:px-2">
          <CodeIndexingSection />
        </div>
      </div>

      {/* Capability Section */}
      <div className="w-full bg-black">
        <div className="w-full max-w-[374.8px] md:max-w-[753.6px] lg:max-w-[1148px] mx-auto px-2 md:px-2">
          <CapabilitySection />
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-black">
        <div className="w-full max-w-[374.8px] md:max-w-[753.6px] lg:max-w-[1148px] mx-auto px-2 md:px-2">
          <FeaturesSection />
        </div>
      </div>

      {/* Learning System Section */}
      <div className="w-full bg-black">
        <div className="w-full max-w-[374.8px] md:max-w-[753.6px] lg:max-w-[1148px] mx-auto px-2 md:px-2">
          <LearningSystemSection />
        </div>
      </div>

      {/* Impact Section */}
      <div className="w-full bg-black">
        <div className="w-full max-w-[374.8px] md:max-w-[753.6px] lg:max-w-[1148px] mx-auto px-2 md:px-2">
          <ImpactSection />
        </div>
      </div>

      {/* Metrics Section */}
      <div className="w-full bg-black">
        <div className="w-full max-w-[374.8px] md:max-w-[753.6px] lg:max-w-[1148px] mx-auto px-2 md:px-2">
          <MetricsSection />
        </div>
      </div>

      {/* Integrations Section */}
      <div className="w-full bg-black">
        <div className="w-full max-w-[374.8px] md:max-w-[753.6px] lg:max-w-[1148px] mx-auto px-2 md:px-2">
          <IntegrationsSection />
        </div>
      </div>

      {/* Enterprise Section */}
      <div className="w-full bg-black">
        <div className="w-full max-w-[374.8px] md:max-w-[753.6px] lg:max-w-[1148px] mx-auto px-2 md:px-2">
          <EnterpriseSection />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

