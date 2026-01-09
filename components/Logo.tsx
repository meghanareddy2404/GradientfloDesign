import React from "react";
import Image from "next/image";

export const Logo: React.FC<{ className?: string }> = ({
  className = "h-4",
}) => {
  return (
    <div className={className}>
      <Image
        src="/assets/Gradientflologo.png"
        alt="Gradientflo"
        width={110}
        height={16}
        className="h-full w-auto"
        priority
      />
    </div>
  );
};
