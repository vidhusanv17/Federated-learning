"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { diseaseTrends, federatedRounds, outbreakRegions, shapFeatures } from "@/lib/data";

const tooltipStyle = {
  background: "rgba(2, 6, 23, 0.88)",
  border: "1px solid rgba(34, 211, 238, 0.3)",
  borderRadius: 8,
  color: "#e0faff"
};

export function DiseaseTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={diseaseTrends}>
        <defs>
          <linearGradient id="respiratory" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="diabetic" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.65} />
            <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(125, 211, 252, .15)" />
        <XAxis dataKey="month" stroke="#7dd3fc" />
        <YAxis stroke="#7dd3fc" />
        <Tooltip contentStyle={tooltipStyle} />
        <Area type="monotone" dataKey="respiratory" stroke="#22d3ee" fill="url(#respiratory)" />
        <Area type="monotone" dataKey="diabetic" stroke="#38bdf8" fill="url(#diabetic)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function FederatedRoundChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={federatedRounds}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(125, 211, 252, .15)" />
        <XAxis dataKey="round" stroke="#7dd3fc" />
        <YAxis stroke="#7dd3fc" />
        <Tooltip contentStyle={tooltipStyle} />
        <Line type="monotone" dataKey="globalAccuracy" stroke="#22d3ee" strokeWidth={3} dot={{ r: 5 }} />
        <Line type="monotone" dataKey="clients" stroke="#34d399" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function ShapBarChart() {
  return (
    <ResponsiveContainer width="100%" height={310}>
      <BarChart data={shapFeatures} layout="vertical" margin={{ left: 24 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(125, 211, 252, .15)" />
        <XAxis type="number" stroke="#7dd3fc" />
        <YAxis type="category" dataKey="feature" stroke="#7dd3fc" width={110} />
        <Tooltip contentStyle={tooltipStyle} />
        <Bar dataKey="contribution" radius={[0, 8, 8, 0]} fill="#22d3ee" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function ContributionPieChart() {
  const colors = ["#22d3ee", "#38bdf8", "#34d399", "#facc15", "#f472b6", "#a78bfa"];
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie data={shapFeatures} dataKey="contribution" nameKey="feature" innerRadius={64} outerRadius={100}>
          {shapFeatures.map((entry, index) => (
            <Cell key={entry.feature} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function OutbreakForecastChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={outbreakRegions}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(125, 211, 252, .15)" />
        <XAxis dataKey="region" stroke="#7dd3fc" />
        <YAxis stroke="#7dd3fc" />
        <Tooltip contentStyle={tooltipStyle} />
        <Bar dataKey="risk" fill="#fb7185" radius={[8, 8, 0, 0]} />
        <Bar dataKey="growth" fill="#22d3ee" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function AnalyticsRadarChart() {
  const data = [
    { subject: "Accuracy", value: 96 },
    { subject: "Trust", value: 92 },
    { subject: "Privacy", value: 98 },
    { subject: "Latency", value: 78 },
    { subject: "Coverage", value: 88 },
    { subject: "Reliability", value: 94 }
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={data}>
        <PolarGrid stroke="rgba(125, 211, 252, .28)" />
        <PolarAngleAxis dataKey="subject" stroke="#7dd3fc" />
        <Radar dataKey="value" stroke="#22d3ee" fill="#22d3ee" fillOpacity={0.28} />
        <Tooltip contentStyle={tooltipStyle} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
