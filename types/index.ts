// Global type definitions for the application

export interface NavItem {
  label: string;
  href: string;
}

export interface ButtonVariant {
  variant: "primary" | "secondary" | "ghost";
  size: "sm" | "md" | "lg";
}

export interface IconProps {
  className?: string;
}

export interface FormData {
  email: string;
}

// Utility types
export type ClassName = string | undefined;
export type Children = React.ReactNode;

