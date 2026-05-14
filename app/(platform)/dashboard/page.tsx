"use client";

import { motion } from "framer-motion";
import { Activity, BrainCircuit, CheckCircle2, Cpu, ShieldAlert } from "lucide-react";
import { DiseaseTrendChart, FederatedRoundChart } from "@/components/charts";
import { MetricCard } from "@/components/metric-card";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { kpis, securityAlerts } from "@/lib/data";

export default function DashboardPage() {
  return (
    <div>
      <SectionHeading
        eyebrow="Enterprise command center"
        title="Real-time secure healthcare intelligence"
        description="Federated model performance, disease trends, outbreak indicators, trust drift, and cybersecurity posture are monitored from one operational dashboard."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <MetricCard key={kpi.label} {...kpi} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Disease Trend Graphs</CardTitle>
          </CardHeader>
          <CardContent>
            <DiseaseTrendChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              ["Trust gate active", "Reject client updates below 55 trust score before aggregation."],
              ["Outbreak watch", "Delhi NCR risk is elevated; allocate respiratory screening capacity."],
              ["Explainability check", "Glucose contribution rose 8% against the latest cohort baseline."]
            ].map(([title, text], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.12 }}
                className="rounded-lg border bg-background/40 p-4"
              >
                <div className="mb-2 flex items-center gap-2 text-cyan-300">
                  <BrainCircuit size={17} />
                  <p className="font-semibold">{title}</p>
                </div>
                <p className="text-sm text-muted-foreground">{text}</p>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Federated Aggregation Rounds</CardTitle>
          </CardHeader>
          <CardContent>
            <FederatedRoundChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Activity Timeline</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {securityAlerts.map((alert, index) => (
              <div key={alert.id} className="flex gap-3">
                <span className="mt-1 grid h-8 w-8 place-items-center rounded-md bg-cyan-400/15 text-cyan-300">
                  {index === 0 ? <ShieldAlert size={16} /> : index === 1 ? <CheckCircle2 size={16} /> : <Cpu size={16} />}
                </span>
                <div>
                  <p className="text-sm font-medium">{alert.title}</p>
                  <p className="text-xs text-muted-foreground">{alert.source} - {alert.time}</p>
                </div>
              </div>
            ))}
            <Badge>
              <Activity size={13} className="mr-1" />
              Dynamic metrics updating
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
