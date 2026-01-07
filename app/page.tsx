import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CodeIndexingSection } from "@/components/CodeIndexingSection";
import { CapabilitySection } from "@/components/CapabilitySection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { LearningSystemSection } from "@/components/LearningSystemSection";
import { ImpactSection } from "@/components/ImpactSection";
import { MetricsSection } from "@/components/MetricsSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { EnterpriseSection } from "@/components/EnterpriseSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] flex flex-col items-center pb-8 md:pb-[30px] pt-0 px-4 md:px-0 relative overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-1 w-full flex flex-col items-center gap-12 md:gap-16 px-0 py-6 md:py-10 relative">
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
        <div className="relative w-full max-w-[1248px] aspect-[1248/832] rounded-xl md:rounded-2xl border-4 md:border-8 border-[#3552bf] overflow-hidden">
          <Image
            src="/assets/e74ed57f623576498a1f0340b9ad5bdc7f657aa9.png"
            alt="Gradientflo Platform Preview"
            fill
            className="object-cover object-center pointer-events-none"
            priority
          />
        </div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute left-0 bottom-0 w-full h-[297px] bg-gradient-to-b from-transparent to-black pointer-events-none" />
      </div>

      {/* Code Indexing Section */}
      <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-[240px]">
        <CodeIndexingSection />
      </div>

      {/* Capability Section */}
      <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-[240px]">
        <CapabilitySection />
      </div>

      {/* Features Section */}
      <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-[240px]">
        <FeaturesSection />
      </div>

      {/* Learning System Section */}
      <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-[240px]">
        <LearningSystemSection />
      </div>

      {/* Impact Section */}
      <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-[240px]">
        <ImpactSection />
      </div>

      {/* Metrics Section */}
      <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-[240px]">
        <MetricsSection />
      </div>

      {/* Integrations Section */}
      <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-[240px]">
        <IntegrationsSection />
      </div>

      {/* Enterprise Section */}
      <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-[240px]">
        <EnterpriseSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

