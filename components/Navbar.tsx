"use client";

import React from "react";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";
import { NavLink } from "./ui/NavLink";
import { DiscordIcon } from "./icons";

const navItems = [
  { label: "Why", href: "#why" },
  { label: "Agents", href: "#agents" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Blogs", href: "#blogs" },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full max-w-[1024px] px-4 md:px-6 py-6 md:py-8 flex items-center justify-between border-[0.6px] border-transparent rounded-2xl overflow-hidden">
      {/* Logo */}
      <div className="shrink-0">
        <Logo className="md:h-8 h-6" />
      </div>

      {/* Navigation Links - Hidden on mobile */}
      <div className="hidden lg:flex flex-1 items-center justify-center min-w-0">
        <div className="flex gap-1 items-center">
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center gap-2 md:gap-2.5 shrink-0">
        <Button
          variant="secondary"
          size="sm"
          className="p-2 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
          aria-label="Join Discord"
        >
          <DiscordIcon className="size-4 text-white" />
        </Button>
        <Button
          variant="default"
          size="sm"
          className="text-xs whitespace-nowrap bg-white text-[#121212] hover:bg-gray-100"
        >
          Get Beta Access
        </Button>
      </div>
    </nav>
  );
};
