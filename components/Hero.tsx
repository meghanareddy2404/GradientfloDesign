"use client";

import React, { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { ArrowRightIcon } from "./icons";

export const Hero: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle form submission
  };

  return (
    <div className="w-full max-w-[870px] px-4 flex flex-col items-center gap-6 md:gap-8 relative">
      {/* New Feature Badge */}
      <a
        href="#"
        className="backdrop-blur-sm backdrop-filter bg-white/15 flex items-center gap-2 md:gap-2.5 pl-1 pr-2 py-1 rounded-[60px] transition-all hover:bg-white/20"
      >
        <div className="bg-white px-2 py-0.5 rounded-[60px] shadow-[0px_2px_4px_0px_rgba(255,255,255,0.05)]">
          <span className="text-[#222] text-xs font-medium uppercase leading-[18px]">
            new
          </span>
        </div>
        <span className="text-white text-xs md:text-sm font-medium leading-[21px]">
          Agentic Learning Platform for Developers
        </span>
        <ArrowRightIcon className="size-4 text-white" />
      </a>

      {/* Main Heading */}
      <h1 className="w-full text-center text-white font-semibold leading-tight md:leading-[80px] tracking-tight md:tracking-[1.28px]">
        <span className="text-3xl md:text-[56px] font-bold font-[family-name:var(--font-geist-sans)]">
          Learning{" "}
        </span>
        <span className="text-2xl md:text-[42px] font-normal font-minecraft">
          Infrastructure
        </span>
        <span className="text-3xl md:text-[56px] font-bold font-[family-name:var(--font-geist-sans)]">
          {" "}
        </span>
        <br />
        <span className="text-3xl md:text-[56px] font-bold font-[family-name:var(--font-geist-sans)]">
          for Engineering Teams
        </span>
      </h1>

      {/* Description */}
      <p className="text-white text-base md:text-lg text-center tracking-[0.36px] leading-[1.4] max-w-[580px] px-4">
        Transform code activities into learning moments. Gradientflo identifies
        growth areas and supports improvement.
      </p>

      {/* Email Form */}
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-sm backdrop-filter bg-white/15 border border-white/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-1.5 p-1.5 rounded-xl w-full sm:w-auto"
      >
        <div className="relative w-full sm:min-w-[249px] h-8">
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-8 bg-transparent text-white placeholder:text-white/50 border-0 focus-visible:ring-0"
            required
          />
        </div>
        <Button
          type="submit"
          variant="default"
          size="sm"
          className="w-full sm:w-auto bg-white text-[#121212] hover:bg-gray-100"
        >
          Beta Access
        </Button>
      </form>
    </div>
  );
};
