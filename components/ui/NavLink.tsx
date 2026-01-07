import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  children, 
  className 
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-2 text-[15px] font-normal text-white transition-colors",
        "hover:bg-white/10 rounded-full tracking-[-0.3px]",
        "font-[family-name:var(--font-geist-mono)]",
        className
      )}
    >
      {children}
    </Link>
  );
};

