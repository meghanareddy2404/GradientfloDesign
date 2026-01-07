import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";

const footerLinks = {
  product: [
    { label: "Developer", href: "#developer" },
    { label: "Features", href: "#features" },
    { label: "Artifacts", href: "#artifacts" },
    { label: "Agent Log", href: "#agent-log" },
    { label: "Enterprise", href: "#enterprise" },
  ],
  resources: [
    { label: "Customers", href: "#customers" },
    { label: "Blog", href: "#blog" },
    { label: "Pricing", href: "#pricing" },
    { label: "Why Gradientflo", href: "#why" },
    { label: "Compare", href: "#compare" },
  ],
  company: [
    { label: "Careers", href: "#careers" },
    { label: "About", href: "#about" },
  ],
  documentation: [
    { label: "Glossary", href: "#glossary" },
    { label: "Components", href: "#components" },
    { label: "Changelog", href: "#changelog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Responsible Disclosure", href: "#disclosure" },
    { label: "Terms Of Service", href: "#terms" },
    { label: "Security", href: "#security" },
    { label: "DSR/DSAR", href: "#dsr" },
  ],
};

const socialLinks = [
  {
    name: "YouTube",
    icon: "/assets/e8d08cbf19bc5efa7d95f27e0ba24d16f9fa4a4c.svg",
    href: "#youtube",
  },
  {
    name: "X (Twitter)",
    icon: "/assets/d6cd6ca99e3d6c69afe623a9ddfd167ebbff54b3.svg",
    href: "#twitter",
  },
  {
    name: "LinkedIn",
    icon: "/assets/1c117d4b104a2b61f2afbbdb6b059606fff51962.svg",
    href: "#linkedin",
  },
  {
    name: "Instagram",
    icon: "/assets/35cbaeb612ac5cb1b4562c570022cdd6936513bd.svg",
    href: "#instagram",
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black flex flex-col items-center pt-24 md:pt-30 pb-16 md:pb-24 px-4 md:px-[240px]">
      {/* Top Section - Logo and Social */}
      <div className="w-full max-w-[1020px] border-b border-[rgba(255,255,255,0.05)] pb-6 pt-12 md:pt-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="h-16 md:h-20">
            <Logo className="h-full" />
          </div>

          {/* Social Icons */}
          <div className="flex gap-2 items-center">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-7 h-7 flex items-center justify-center hover:opacity-70 transition-opacity"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={28}
                  height={28}
                  className="w-full h-full"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="w-full max-w-[1020px] flex flex-wrap justify-center gap-8 md:gap-12 pt-10 md:pt-12 pb-14 md:pb-18 px-4 md:px-8">
        {/* Product */}
        <FooterColumn title="Product" links={footerLinks.product} />
        
        {/* Resources */}
        <FooterColumn title="Resources" links={footerLinks.resources} />
        
        {/* Company */}
        <FooterColumn title="Company" links={footerLinks.company} />
        
        {/* Documentation */}
        <FooterColumn title="Documentation" links={footerLinks.documentation} />
        
        {/* Legal */}
        <FooterColumn title="Legal" links={footerLinks.legal} />
      </div>

      {/* Bottom Copyright */}
      <div className="w-full bg-[rgba(255,255,255,0.04)]">
        <div className="max-w-[1020px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-8 py-4">
          {/* Copyright */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-white uppercase tracking-[1.2px]">
              Copyright
            </span>
            <span className="text-white text-lg">©</span>
            <span className="text-xs text-white uppercase tracking-[1.2px]">
              Gradientflo 2025
            </span>
          </div>

          {/* Design Credit */}
          <div className="text-xs text-white text-center md:text-right uppercase tracking-[1.2px]">
            <p>Designed and built by</p>
            <p>The Super cool! People of Gradientflo 🩵</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-1 min-w-[150px] md:min-w-[191px]">
      <h3 className="text-[13px] font-medium text-[rgba(255,255,255,0.5)] uppercase tracking-[0.65px] px-3 py-1.5">
        {title}
      </h3>
      <ul className="flex flex-col gap-1">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="block px-3 py-1.5 text-sm text-white hover:text-white/70 transition-colors rounded-full"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

