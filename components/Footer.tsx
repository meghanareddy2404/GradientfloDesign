import React from "react";
import Link from "next/link";
import { Youtube, Twitter, Linkedin, Instagram } from "lucide-react";
import { Logo } from "./Logo";
// Commenting out Logo import because it can't be found. Uncomment and fix path if Logo exists.
// import { Logo } from "../Logo";

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
    Icon: Youtube,
    href: "#youtube",
  },
  {
    name: "X (Twitter)",
    Icon: Twitter,
    href: "#twitter",
  },
  {
    name: "LinkedIn",
    Icon: Linkedin,
    href: "#linkedin",
  },
  {
    name: "Instagram",
    Icon: Instagram,
    href: "#instagram",
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black border-t border-[rgba(255,255,255,0.05)]">
      <div className="w-full max-w-[1728px] mx-auto pt-[120px] pb-[96px] px-12 md:px-[120px] lg:px-[240px]">
        {/* Top Section - Logo and Social */}
        <div className="w-full border-b border-[rgba(255,255,255,0.05)] pb-6 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="h-6 md:h-8">
              <Logo className="h-full" />
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 items-center">
              {socialLinks.map((social) => {
                const Icon = social.Icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-5 h-5 flex items-center justify-center text-white hover:opacity-70 transition-opacity"
                    aria-label={social.name}
                  >
                    <Icon className="w-full h-full" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation Links - All columns in one line */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 flex-wrap justify-start gap-6 md:gap-6 lg:gap-8 mb-10">
          {/* Product */}
          <FooterColumn title="PRODUCT" links={footerLinks.product} />

          {/* Resources */}
          <FooterColumn title="RESOURCES" links={footerLinks.resources} />

          {/* Company */}
          <FooterColumn title="COMPANY" links={footerLinks.company} />

          {/* Documentation */}
          <FooterColumn
            title="DOCUMENTATION"
            links={footerLinks.documentation}
          />

          {/* Legal */}
          <FooterColumn title="LEGAL" links={footerLinks.legal} />
        </div>

        {/* Bottom Copyright */}
        <div className="w-full pt-6">
          <div className="relative bg-neutral-950 rounded">
            <div className="h-[120px] md:h-[72px] flex flex-col md:flex-row items-center justify-between gap-2 px-6 py-4 md:py-0 md:px-8">
              {/* Copyright */}
              <div className="text-xs text-white uppercase tracking-[1.2px] font-normal">
                COPYRIGHT © GRADIENTFLO 2025
              </div>

              {/* Design Credit */}
              <div className="text-xs text-white text-center md:text-right uppercase tracking-[1.2px] font-normal">
                DESIGNED AND BUILT BY <br /> THE SUPER COOL! PEOPLE OF
                GRADIENTFLO <span>🩵</span>
              </div>
            </div>
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
    <div className="flex flex-col gap-2 min-w-[150px] md:min-w-[180px]">
      <h3 className="text-xs font-medium text-[rgba(255,255,255,0.6)] uppercase tracking-[0.5px] mb-1">
        {title}
      </h3>
      <ul className="flex flex-col gap-1.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="block text-sm text-white hover:text-white/70 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
