"use client";

import { Bell, Database, KeyRound, Palette, Save, SlidersHorizontal } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function SettingsPage() {
  return (
    <div>
      <SectionHeading
        eyebrow="Platform controls"
        title="Settings"
        description="Tune federation thresholds, security policies, alert routing, model refresh cadence, and interface preferences for the healthcare AI platform."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {[
          ["Federated Aggregation", Database, "Minimum client trust", 72],
          ["Security Policies", KeyRound, "Verification strictness", 91],
          ["Notification Routing", Bell, "Alert sensitivity", 84],
          ["Interface Theme", Palette, "Holographic intensity", 68]
        ].map(([title, Icon, label, value]) => {
          const IconComponent = Icon as typeof Database;
          return (
            <Card key={String(title)}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><IconComponent size={18} className="text-cyan-300" /> {title as string}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2 flex justify-between text-sm">
                  <span>{label as string}</span>
                  <strong>{value as number}%</strong>
                </div>
                <Progress value={value as number} />
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="mt-6">
        <CardContent className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="text-cyan-300" />
            <div>
              <p className="font-semibold">Configuration simulation</p>
              <p className="text-sm text-muted-foreground">Changes are stored locally in this frontend prototype.</p>
            </div>
          </div>
          <Button><Save size={18} /> Save Settings</Button>
        </CardContent>
      </Card>
    </div>
  );
}
