import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
}

export const Input: React.FC<InputProps> = ({
  className,
  wrapperClassName,
  placeholder,
  ...props
}) => {
  return (
    <div className={cn("relative", wrapperClassName)}>
      <input
        className={cn(
          "w-full bg-transparent px-3 py-1.5 text-[15px] text-white",
          "placeholder:text-white/50 font-medium",
          "border-0 outline-none focus:ring-0",
          className
        )}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

