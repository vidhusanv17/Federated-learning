"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, FileHeart, Loader2, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { predictDisease } from "@/lib/simulations";
import { useAppStore } from "@/lib/store";
import type { PredictionInput, PredictionResult } from "@/lib/types";

const initialInput: PredictionInput = {
  age: 48,
  gender: "Female",
  bmi: 31,
  glucose: 164,
  bloodPressure: 142,
  heartRate: 96,
  oxygen: 95,
  symptoms: "fatigue, thirst, mild shortness of breath",
  history: "family history of diabetes and hypertension"
};

export default function DiseasePredictionPage() {
  const [form, setForm] = useState(initialInput);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const setLatestPrediction = useAppStore((state) => state.setLatestPrediction);

  const update = (key: keyof PredictionInput, value: string) => {
    const numericKeys = ["age", "bmi", "glucose", "bloodPressure", "heartRate", "oxygen"];
    setForm((state) => ({
      ...state,
      [key]: numericKeys.includes(key) ? Number(value) : value
    }));
  };

  const runPrediction = () => {
    setLoading(true);
    window.setTimeout(() => {
      const next = predictDisease(form);
      setResult(next);
      setLatestPrediction(next);
      setLoading(false);
    }, 1100);
  };

  return (
    <div>
      <SectionHeading
        eyebrow="Clinical AI inference"
        title="Interactive disease prediction"
        description="Enter patient vitals, symptoms, and medical history to generate a simulated AI diagnosis with confidence, severity, and clinical recommendations."
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Patient Feature Input</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {[
              ["age", "Age"],
              ["bmi", "BMI"],
              ["glucose", "Glucose Level"],
              ["bloodPressure", "Blood Pressure"],
              ["heartRate", "Heart Rate"],
              ["oxygen", "Oxygen Level"]
            ].map(([key, label]) => (
              <label key={key} className="text-sm font-medium">
                {label}
                <Input className="mt-2" type="number" value={form[key as keyof PredictionInput]} onChange={(event) => update(key as keyof PredictionInput, event.target.value)} />
              </label>
            ))}
            <label className="text-sm font-medium">
              Gender
              <select className="mt-2 h-10 w-full rounded-md border bg-background/55 px-3 text-sm outline-none" value={form.gender} onChange={(event) => update("gender", event.target.value)}>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
            </label>
            <label className="text-sm font-medium md:col-span-2">
              Symptoms
              <Input className="mt-2" value={form.symptoms} onChange={(event) => update("symptoms", event.target.value)} />
            </label>
            <label className="text-sm font-medium md:col-span-2">
              Medical History
              <Input className="mt-2" value={form.history} onChange={(event) => update("history", event.target.value)} />
            </label>
            <Button className="md:col-span-2" size="lg" onClick={runPrediction} disabled={loading}>
              {loading ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
              {loading ? "Analyzing encrypted vitals..." : "Predict Disease Risk"}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Medical Report Card</CardTitle>
          </CardHeader>
          <CardContent>
            {!result ? (
              <div className="grid min-h-[420px] place-items-center rounded-lg border border-dashed bg-cyan-300/5 text-center">
                <div>
                  <BrainCircuit className="mx-auto mb-3 text-cyan-300" size={52} />
                  <p className="font-semibold">Awaiting prediction</p>
                  <p className="mt-1 text-sm text-muted-foreground">The diagnosis engine will render risk, confidence, and severity here.</p>
                </div>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
                <div className="rounded-lg border bg-cyan-300/8 p-5">
                  <div className="mb-3 flex items-center gap-2 text-cyan-300">
                    <FileHeart size={18} />
                    <p className="font-semibold">Disease Result</p>
                  </div>
                  <h2 className="text-2xl font-bold">{result.disease}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{result.recommendation}</p>
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>Risk Percentage</span>
                    <strong>{result.risk}%</strong>
                  </div>
                  <Progress value={result.risk} />
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>Confidence Score</span>
                    <strong>{result.confidence}%</strong>
                  </div>
                  <Progress value={result.confidence} />
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-sm text-muted-foreground">Severity Meter</p>
                  <p className="mt-2 text-3xl font-bold text-cyan-300">{result.severity}</p>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
