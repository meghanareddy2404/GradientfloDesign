"use client";
import React, { useState, useMemo } from "react";

const COLORS = {
  emerald: "#10b981",
  purple: "#a855f7",
  zinc700: "#3f3f46",
  textDim: "#52525b",
  textLight: "#f4f4f5",
  bgCard: "#0a0a0a",
};

const RECOMMENDATIONS = [
  { id: "tokens", label: "Neural Tokenizing", y: 180 },
  { id: "synthesis", label: "SLM Synthesis", y: 260 },
  { id: "patterns", label: "Latent Patterns", y: 340 },
  { id: "hydration", label: "Context Hydration", y: 420 },
  { id: "inference", label: "Real-time Inference", y: 500 },
];

const INTELLIGENCE = [
  { id: "distill", label: "Distillation ROI", y: 100 },
  { id: "accuracy", label: "Model Accuracy", y: 230 },
  { id: "latency", label: "Hydration Latency", y: 360 },
  { id: "coverage", label: "Repo Coverage", y: 490 },
  { id: "dna", label: "Neural Engineering DNA", y: 620 },
];

export const TalentFlow: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);

  const nodes = useMemo(() => {
    const arr = [];
    const colorOptions = [COLORS.emerald, COLORS.purple, "white"];
    for (let i = 0; i < 180; i++) {
      arr.push({
        id: i,
        x: 60 + Math.random() * 260,
        y: 80 + Math.random() * 520,
        size: 2 + Math.random() * 8,
        color: colorOptions[i % colorOptions.length],
        recIdx: i % RECOMMENDATIONS.length,
      });
    }
    return arr;
  }, []);

  return (
    <svg
      viewBox="0 0 1200 700"
      className="w-full h-full select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="neuralGlow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="bandGrad" x1="0" y1="0" x2="0" y2="100%">
          <stop offset="0%" stopColor={COLORS.emerald} stopOpacity="0" />
          <stop offset="50%" stopColor={COLORS.emerald} stopOpacity="0.4" />
          <stop offset="100%" stopColor={COLORS.emerald} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Semantic Headers */}
      <g
        className="uppercase tracking-[0.6em] font-black text-[12px]"
        fill={COLORS.textDim}
      >
        <text x="190" y="45" textAnchor="middle">
          Code Artifacts
        </text>
        <text x="440" y="45" textAnchor="middle">
          Inference Engine
        </text>
        <text x="700" y="45" textAnchor="middle">
          Latent Space
        </text>
        <text x="1000" y="45" textAnchor="middle">
          AI Intelligence
        </text>
      </g>

      {/* Neural Paths */}
      {nodes.map((node) => (
        <g
          key={node.id}
          onClick={() => setActiveNodeId(node.id)}
          className="cursor-pointer group"
        >
          {activeNodeId === node.id && (
            <g>
              <path
                d={`M ${node.x} ${node.y} C 380 ${node.y}, 400 ${
                  RECOMMENDATIONS[node.recIdx].y
                }, 440 ${RECOMMENDATIONS[node.recIdx].y}`}
                stroke={node.color}
                strokeWidth="3"
                fill="none"
                strokeDasharray="10,10"
                filter="url(#neuralGlow)"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="100"
                  to="0"
                  dur="0.8s"
                  repeatCount="indefinite"
                />
              </path>
              <line
                x1="440"
                y1={RECOMMENDATIONS[node.recIdx].y}
                x2="630"
                y2={RECOMMENDATIONS[node.recIdx].y}
                stroke={node.color}
                strokeWidth="2.5"
                opacity="0.9"
              />
              <path
                d={`M 750 ${RECOMMENDATIONS[node.recIdx].y} C 880 ${
                  RECOMMENDATIONS[node.recIdx].y
                }, 920 350, 940 350`}
                stroke={node.color}
                strokeWidth="1.5"
                fill="none"
                opacity="0.3"
              />
            </g>
          )}
          <circle
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill={node.color}
            opacity={
              activeNodeId === null || activeNodeId === node.id ? 0.9 : 0.05
            }
            className="transition-all duration-700 ease-out"
            filter={activeNodeId === node.id ? "url(#neuralGlow)" : ""}
          />
        </g>
      ))}

      {/* Inference Band */}
      <rect
        x="430"
        y="80"
        width="20"
        height="520"
        fill="url(#bandGrad)"
        rx="10"
      />
      <g transform="translate(448, 340) rotate(-90)">
        <text
          textAnchor="middle"
          fill={COLORS.emerald}
          fontSize="14"
          fontWeight="900"
          letterSpacing="8"
          opacity="0.8"
        >
          DISTILLING
        </text>
      </g>

      {/* Latent Clusters */}
      <rect
        x="630"
        y="140"
        width="170"
        height="420"
        fill="#020202"
        stroke="white"
        strokeOpacity="0.1"
        rx="24"
      />
      {RECOMMENDATIONS.map((rec) => (
        <g key={rec.id} transform={`translate(715, ${rec.y})`}>
          <text
            textAnchor="middle"
            y="5"
            fill="white"
            fontSize="12"
            fontWeight="900"
            opacity="1"
          >
            {rec.label}
          </text>
        </g>
      ))}

      {/* Model Analytics */}
      <g transform="translate(940, 0)">
        <circle cx="0" cy="350" r="6" fill="white" filter="url(#neuralGlow)" />
        {INTELLIGENCE.map((item) => (
          <g key={item.id} transform={`translate(0, ${item.y})`}>
            <path
              d={`M 0 ${350 - item.y} C 60 ${350 - item.y}, 90 0, 150 0`}
              stroke="white"
              strokeOpacity="0.15"
              strokeWidth="2"
              fill="none"
            />
            <text
              x="165"
              y="6"
              fill="white"
              fontSize="16"
              fontWeight="900"
              opacity="1"
            >
              {item.label}
            </text>
            <rect
              x="165"
              y="16"
              width="120"
              height="4"
              rx="2"
              fill={COLORS.emerald}
              opacity="0.3"
            />
          </g>
        ))}
      </g>

      <g transform="translate(600, 25)">
        <text
          textAnchor="middle"
          fill="white"
          fontSize="18"
          fontWeight="900"
          letterSpacing="6"
          opacity="1"
          className="uppercase"
        >
          Context Synthesis Engine{" "}
          <tspan fill={COLORS.emerald} opacity="0.8">
            0xNeural
          </tspan>
        </text>
      </g>
    </svg>
  );
};

