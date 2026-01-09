import React from "react";

interface AnimatedDashboardProps {
  accentColor: string;
  speed: number;
  glowIntensity: number;
}

const THEME = {
  emerald: "#10b981",
  purple: "#a855f7",
  zinc900: "#0c0c0c",
  zinc800: "#18181b",
  zinc700: "#3f3f46",
  zinc500: "#71717a",
  zinc400: "#a1a1aa",
};

export const AnimatedDashboard: React.FC<AnimatedDashboardProps> = ({
  speed,
  glowIntensity,
}) => {
  const duration = 1 / speed;

  return (
    <svg
      id="dashboard-asset-svg"
      viewBox="0 0 1200 660"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full select-none"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="panelBack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0c0c0c" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
        <filter id="subtleGlow">
          <feGaussianBlur stdDeviation={5 * glowIntensity} result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background Grid */}
      <pattern
        id="innerGrid"
        width="60"
        height="60"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 60 0 L 0 0 0 60"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          strokeOpacity="0.05"
        />
      </pattern>
      <rect width="1200" height="660" fill="url(#innerGrid)" />

      {/* Left Panel: SLM Context Hydration */}
      <g transform="translate(100, 80)">
        <rect
          width="320"
          height="240"
          rx="24"
          fill="url(#panelBack)"
          stroke="white"
          strokeOpacity="0.08"
        />
        <text
          x="24"
          y="32"
          fill={THEME.zinc500}
          fontSize="9"
          fontWeight="900"
          letterSpacing="4"
          className="uppercase"
        >
          Token Context Window
        </text>

        <path
          d="M 40 160 Q 90 110, 140 150 T 240 100 T 280 140"
          stroke={THEME.emerald}
          strokeWidth="4"
          fill="none"
          opacity="0.9"
          filter="url(#subtleGlow)"
        >
          <animate
            attributeName="stroke-dasharray"
            from="0, 600"
            to="600, 0"
            dur={`${5 * duration}s`}
            repeatCount="indefinite"
          />
        </path>

        <g transform="translate(24, 210)">
          <text fill="white" fontSize="32" fontWeight="900">
            128
            <tspan fontSize="16" fill={THEME.emerald} dx="4">
              K TOKENS
            </tspan>
          </text>
          <text
            y="18"
            fill={THEME.zinc700}
            fontSize="8"
            fontWeight="900"
            letterSpacing="1.5"
          >
            SATURATION STABLE
          </text>
        </g>
      </g>

      {/* Left Panel Bottom: Model Distillation */}
      <g transform="translate(100, 340)">
        <rect
          width="320"
          height="260"
          rx="24"
          fill="url(#panelBack)"
          stroke="white"
          strokeOpacity="0.08"
        />
        <text
          x="24"
          y="32"
          fill={THEME.zinc500}
          fontSize="9"
          fontWeight="900"
          letterSpacing="4"
          className="uppercase"
        >
          Model Distillation
        </text>

        {[...Array(4)].map((_, i) => (
          <g key={i} transform={`translate(24, ${85 + i * 40})`}>
            <rect width="272" height="6" rx="3" fill="#0f0f0f" />
            <rect
              width={140 + Math.random() * 100}
              height="6"
              rx="3"
              fill={i % 2 === 0 ? THEME.emerald : "white"}
              fillOpacity="0.5"
            >
              <animate
                attributeName="width"
                values="140;272;140"
                dur={`${3 + i}s`}
                repeatCount="indefinite"
              />
            </rect>
            <text
              y="-14"
              fill={THEME.zinc700}
              fontSize="7"
              fontWeight="900"
              letterSpacing="2.5"
            >
              DISTILL_LAYER_0x0{i + 1}
            </text>
          </g>
        ))}
      </g>

      {/* Center Panel: SLM_CORE_ORCHESTRATOR */}
      <g transform="translate(440, 50)">
        <rect
          width="320"
          height="560"
          rx="40"
          fill="url(#panelBack)"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="1.5"
        />
        <text
          x="160"
          y="40"
          textAnchor="middle"
          fill={THEME.zinc500}
          fontSize="10"
          fontWeight="900"
          letterSpacing="5"
        >
          SLM_CORE_ORCHESTRATOR
        </text>

        {/* Pulsing Neural Core */}
        <circle cx="160" cy="220" r="60" fill="white" fillOpacity="0.02">
          <animate
            attributeName="r"
            values="60;80;60"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="160"
          cy="220"
          r="40"
          fill="white"
          fillOpacity="0.1"
          filter="url(#subtleGlow)"
        />

        {/* Inference Stream */}
        <g transform="translate(35, 330)">
          {[...Array(7)].map((_, i) => (
            <g key={i} transform={`translate(0, ${i * 32})`}>
              <rect
                width="250"
                height="20"
                rx="10"
                fill="white"
                fillOpacity="0.03"
                stroke="white"
                strokeOpacity="0.05"
              />
              <rect
                x="15"
                y="9"
                width={60 + Math.random() * 120}
                height="2"
                rx="1"
                fill={THEME.emerald}
                opacity="0.6"
              >
                <animate
                  attributeName="opacity"
                  values="0.2;0.8;0.2"
                  dur={`${2 + i}s`}
                  repeatCount="indefinite"
                />
              </rect>
            </g>
          ))}
        </g>

        {/* Inference Status Bar */}
        <g transform="translate(30, 505)">
          <rect
            width="260"
            height="36"
            rx="18"
            fill="#000"
            stroke="white"
            strokeOpacity="0.15"
          />
          <text
            x="24"
            y="21"
            fill="white"
            fontSize="10"
            fontWeight="900"
            fontStyle="italic"
            opacity="0.6"
          >
            Synthesizing inference...
          </text>
          <circle
            cx="230"
            cy="18"
            r="6"
            fill={THEME.emerald}
            filter="url(#subtleGlow)"
          >
            <animate
              attributeName="fill-opacity"
              values="0.5;1;0.5"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>

      {/* Right Panel: Inference Performance */}
      <g transform="translate(780, 80)">
        <rect
          width="320"
          height="520"
          rx="24"
          fill="url(#panelBack)"
          stroke="white"
          strokeOpacity="0.08"
        />
        <text
          x="24"
          y="32"
          fill={THEME.zinc500}
          fontSize="9"
          fontWeight="900"
          letterSpacing="4"
          className="uppercase"
        >
          Inference Performance
        </text>

        <g transform="translate(160, 190)">
          <circle r="95" stroke="#0f0f0f" strokeWidth="16" fill="none" />
          <circle
            r="95"
            stroke="white"
            strokeWidth="16"
            fill="none"
            strokeDasharray="597"
            strokeDashoffset="150"
            strokeLinecap="round"
            filter="url(#subtleGlow)"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="597; 200; 597"
              dur="15s"
              repeatCount="indefinite"
            />
          </circle>
          <text
            textAnchor="middle"
            y="10"
            fill="white"
            fontSize="48"
            fontWeight="900"
          >
            0.8
            <tspan fontSize="18" fill={THEME.emerald} dx="4">
              MS
            </tspan>
          </text>
          <text
            textAnchor="middle"
            y="38"
            fill={THEME.zinc700}
            fontSize="9"
            fontWeight="900"
            letterSpacing="2"
          >
            INFERENCE LATENCY
          </text>
        </g>

        <g transform="translate(30, 335)">
          {[
            "KNOWLEDGE_DISTILLATION",
            "WEIGHT_ADJUSTMENT",
            "LATENT_STABILITY",
          ].map((label, i) => (
            <g key={i} transform={`translate(0, ${i * 60})`}>
              <text
                fill={THEME.zinc500}
                fontSize="8"
                fontWeight="900"
                letterSpacing="3"
              >
                {label}
              </text>
              <rect y="18" width="260" height="4" rx="2" fill="#0f0f0f" />
              <rect
                y="18"
                width={100 + Math.random() * 140}
                height="4"
                rx="2"
                fill={i === 0 ? THEME.emerald : "white"}
                opacity="0.7"
              >
                <animate
                  attributeName="width"
                  values="100;260;100"
                  dur={`${5 + i}s`}
                  repeatCount="indefinite"
                />
              </rect>
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
};

