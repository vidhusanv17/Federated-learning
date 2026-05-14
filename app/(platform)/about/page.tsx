import { BrainCircuit, Globe2, HeartPulse, Network, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div>
      <SectionHeading
        eyebrow="Project overview"
        title="Trust-Aware Federated Learning with Explainable AI"
        description="A secure collaborative intelligence framework for disease prediction, outbreak forecasting, clinical transparency, and privacy-preserving healthcare AI."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {[
          ["SDG Goals", Globe2, "Supports good health, resilient infrastructure, and responsible AI collaboration."],
          ["Explainable AI", BrainCircuit, "Integrates SHAP-style and LIME-style evidence for clinical decisions."],
          ["Federated Learning", Network, "Trains across hospitals without centralizing sensitive patient records."],
          ["Trust-Aware AI", ShieldCheck, "Weights hospitals by reliability and detects suspicious model updates."],
          ["Secure Intelligence", HeartPulse, "Combines encryption, privacy controls, and outbreak intelligence."]
        ].map(([title, Icon, copy]) => {
          const IconComponent = Icon as typeof Globe2;
          return (
            <Card key={String(title)}>
              <CardContent className="p-5">
                <IconComponent className="mb-4 text-cyan-300" size={30} />
                <h2 className="font-bold">{title as string}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{copy as string}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <footer className="mt-8 rounded-lg border border-cyan-300/20 bg-background/45 p-6 text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">Secure collaborative intelligence for healthcare AI.</p>
        <p className="mt-2">
          This frontend demonstrates trust-aware federated learning, explainable disease prediction, outbreak intelligence, privacy preservation, and cybersecurity-aware distributed learning.
        </p>
      </footer>
    </div>
  );
}
