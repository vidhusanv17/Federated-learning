"use client";

import { motion } from "framer-motion";
import { AlertTriangle, MapPin, RadioTower, Siren } from "lucide-react";
import { OutbreakForecastChart } from "@/components/charts";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { outbreakRegions } from "@/lib/data";

export default function OutbreakIntelligencePage() {
  return (
    <div>
      <SectionHeading
        eyebrow="Epidemiology intelligence"
        title="Outbreak prediction system"
        description="Forecast disease spread, detect high-risk zones, and surface emergency alerts from simulated regional telemetry and federated hospital signals."
      />

      <div className="grid gap-6 xl:grid-cols-[1.2fr_.8fr]">
        <Card className="p-5">
          <div className="relative min-h-[440px] overflow-hidden rounded-lg border border-cyan-300/15 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.2),transparent_58%)]">
            <div className="absolute inset-8 rounded-[45%] border border-cyan-300/15" />
            <div className="absolute inset-16 rounded-[45%] border border-cyan-300/10" />
            {outbreakRegions.map((zone, index) => (
              <motion.div
                key={zone.region}
                className="absolute"
                style={{
                  left: `${18 + (index * 17) % 68}%`,
                  top: `${20 + (index * 23) % 55}%`
                }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.25 }}
              >
                <span className={`absolute -inset-5 rounded-full ${zone.risk > 70 ? "bg-rose-400/25" : zone.risk > 50 ? "bg-amber-300/25" : "bg-emerald-300/20"} blur-md`} />
                <span className="relative flex items-center gap-1 rounded-full border bg-background/75 px-3 py-2 text-xs shadow-glow">
                  <MapPin size={14} className="text-cyan-300" />
                  {zone.region}
                </span>
              </motion.div>
            ))}
            <div className="absolute bottom-5 left-5 rounded-md border bg-background/60 p-3 text-sm">
              <p className="font-semibold text-cyan-300">Animated outbreak heatmap</p>
              <p className="text-muted-foreground">High-risk zones pulse by forecast severity.</p>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Emergency Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {outbreakRegions.map((region) => (
              <div key={region.region} className="rounded-lg border bg-background/40 p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {region.risk > 70 ? <Siren className="text-rose-400" size={18} /> : <RadioTower className="text-cyan-300" size={18} />}
                    <p className="font-semibold">{region.region}</p>
                  </div>
                  <span className="text-sm font-bold">{region.risk}%</span>
                </div>
                <Progress value={region.risk} />
                <p className="mt-2 text-xs text-muted-foreground">{region.cases.toLocaleString()} cases - growth {region.growth}%</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Forecasting Graphs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center gap-2 text-sm text-amber-300">
            <AlertTriangle size={16} />
            Delhi NCR requires surge screening and hospital capacity planning.
          </div>
          <OutbreakForecastChart />
        </CardContent>
      </Card>
    </div>
  );
}
