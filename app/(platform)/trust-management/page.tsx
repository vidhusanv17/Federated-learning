"use client";

import { GitMerge, ShieldCheck, ShieldX, TriangleAlert } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { hospitals } from "@/lib/data";

const colorForTrust = (score: number) =>
  score >= 85 ? "bg-emerald-400 text-emerald-950" : score >= 60 ? "bg-amber-300 text-amber-950" : "bg-rose-400 text-rose-950";

export default function TrustManagementPage() {
  return (
    <div>
      <SectionHeading
        eyebrow="Trust-aware aggregation"
        title="Hospital trust management"
        description="Monitor hospital trust scores, malicious client detection, suspicious node alerts, aggregation reliability, and weighted contribution logic."
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Dynamic Trust Graph</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative min-h-[430px] rounded-lg border bg-cyan-300/5 p-6">
              <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border bg-background/80 text-center shadow-glow">
                <GitMerge className="text-cyan-300" />
                <p className="text-xs font-semibold">Weighted Aggregator</p>
              </div>
              {hospitals.map((hospital, index) => (
                <div
                  key={hospital.id}
                  className="absolute"
                  style={{
                    left: `${12 + (index % 3) * 36}%`,
                    top: `${12 + Math.floor(index / 3) * 58}%`
                  }}
                >
                  <span className={`grid h-20 w-20 place-items-center rounded-full ${colorForTrust(hospital.trustScore)} shadow-glow`}>
                    {hospital.trustScore >= 85 ? <ShieldCheck /> : hospital.trustScore >= 60 ? <TriangleAlert /> : <ShieldX />}
                  </span>
                  <p className="mt-2 max-w-28 text-center text-xs font-semibold">{hospital.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trust Analytics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {hospitals.map((hospital) => (
              <div key={hospital.id} className="rounded-lg border bg-background/40 p-4">
                <div className="mb-2 flex justify-between gap-3">
                  <div>
                    <p className="font-semibold">{hospital.name}</p>
                    <p className="text-xs text-muted-foreground">{hospital.status} - latency {hospital.latency} ms</p>
                  </div>
                  <span className={`h-fit rounded-full px-2 py-1 text-xs font-bold ${colorForTrust(hospital.trustScore)}`}>
                    {hospital.trustScore}%
                  </span>
                </div>
                <Progress value={hospital.trustScore} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {[
          ["Malicious Client Detection", "1 quarantined node", ShieldX],
          ["Suspicious Node Alerts", "2 hospitals under review", TriangleAlert],
          ["Aggregation Reliability", "94.7% weighted confidence", ShieldCheck]
        ].map(([title, value, Icon]) => {
          const IconComponent = Icon as typeof ShieldCheck;
          return (
            <Card key={String(title)}>
              <CardContent className="p-5">
                <IconComponent className="mb-4 text-cyan-300" />
                <p className="text-sm text-muted-foreground">{title as string}</p>
                <p className="mt-2 text-2xl font-bold">{value as string}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
