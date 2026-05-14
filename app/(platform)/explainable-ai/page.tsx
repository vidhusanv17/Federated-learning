"use client";

import { ArrowRight, Brain, GitBranch, Microscope } from "lucide-react";
import { ContributionPieChart, ShapBarChart } from "@/components/charts";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { shapFeatures } from "@/lib/data";

export default function ExplainableAiPage() {
  return (
    <div>
      <SectionHeading
        eyebrow="Model transparency"
        title="Explainable AI dashboard"
        description="SHAP-style importance, LIME-style local explanations, confidence analysis, and decision flow reveal why the clinical model produced its prediction."
      />

      <div className="grid gap-6 xl:grid-cols-[1.3fr_.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>SHAP-Style Feature Importance</CardTitle>
          </CardHeader>
          <CardContent>
            <ShapBarChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contribution Percentages</CardTitle>
          </CardHeader>
          <CardContent>
            <ContributionPieChart />
            <div className="grid gap-3">
              {shapFeatures.slice(0, 4).map((feature) => (
                <div key={feature.feature}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{feature.feature}</span>
                    <span>{feature.contribution}%</span>
                  </div>
                  <Progress value={feature.contribution * 2.4} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>LIME-Style Explanation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p><strong className="text-foreground">Glucose influence:</strong> elevated glucose shifted the local prediction toward metabolic disease risk.</p>
            <p><strong className="text-foreground">BMI impact:</strong> BMI increased risk because it co-occurs with glucose and blood pressure signals.</p>
            <p><strong className="text-foreground">Age factor:</strong> age increased baseline probability but did not dominate the prediction.</p>
            <p><strong className="text-foreground">Blood pressure:</strong> systolic elevation contributed to cardiovascular stress detection.</p>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Why This Prediction Was Made</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-4">
              {[
                ["Input vitals", Brain],
                ["Feature weighting", Microscope],
                ["Trust-filtered model", GitBranch],
                ["Clinical recommendation", ArrowRight]
              ].map(([label, Icon], index) => {
                const IconComponent = Icon as typeof Brain;
                return (
                  <div key={String(label)} className="rounded-lg border bg-background/40 p-4 text-center">
                    <IconComponent className="mx-auto mb-3 text-cyan-300" />
                    <p className="text-sm font-semibold">{label as string}</p>
                    <p className="mt-2 text-xs text-muted-foreground">Step {index + 1}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 grid grid-cols-8 gap-1">
              {Array.from({ length: 48 }, (_, index) => (
                <span
                  key={index}
                  className="h-8 rounded-sm"
                  style={{ background: `rgba(${34 + index * 3}, 211, 238, ${0.16 + (index % 6) * 0.08})` }}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
