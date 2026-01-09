import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui";
import { ArrowRightIcon } from "@/components/icons";
import {
  TraditionalLearningSection,
  WhatGradientfloDoesSection,
} from "@/components/why";

export default function WhyPage() {
  return (
    <main className="min-h-screen bg-[#111111] flex flex-col items-center relative overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Knowledge Debt */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-20 md:py-32 relative">
        {/* Glowing Gradient Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full max-w-[1200px] h-[600px] md:h-[800px] relative">
            {/* Pink-Purple-Blue Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/30 via-purple-500/40 to-blue-500/30 rounded-full blur-3xl md:blur-[120px] opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-purple-400/30 to-blue-400/20 rounded-full blur-2xl md:blur-[100px] opacity-40" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-6 md:gap-8 text-center">
          {/* Pre-headline */}
          <p className="text-sm md:text-base text-white/70 uppercase tracking-[2px] md:tracking-[3px] font-medium">
            The Problem Nobody Measures
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight md:leading-[1.1]">
            Knowledge{" "}
            <span className="font-minecraft text-5xl md:text-7xl lg:text-8xl relative inline-block">
              Debt
            </span>
            <br />
            Is The Real Bottleneck
          </h1>

          {/* Descriptive Paragraph */}
          <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mt-4">
            Every engineering organization accumulates knowledge debt. Traditional
            documentation fails, we accelerates learning.
          </p>

          {/* CTA Button */}
          <div className="mt-6 md:mt-8">
            <Button
              variant="ghost"
              size="lg"
              className="group bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-6 text-base md:text-lg rounded-lg"
            >
              Beta Access
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Traditional Learning Section */}
      <TraditionalLearningSection />

      {/* What Gradientflo Does Section */}
      <WhatGradientfloDoesSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

