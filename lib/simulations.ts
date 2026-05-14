import { clamp } from "@/lib/utils";
import type { PredictionInput, PredictionResult } from "@/lib/types";

export function mockFirebaseSignIn(email: string, password: string, role: string) {
  return new Promise<{ uid: string; email: string; role: string }>((resolve, reject) => {
    window.setTimeout(() => {
      if (!email.includes("@") || password.length < 4) {
        reject(new Error("Invalid mock credentials"));
        return;
      }

      resolve({ uid: `mock-${Date.now()}`, email, role });
    }, 900);
  });
}

export function predictDisease(input: PredictionInput): PredictionResult {
  const metabolic =
    input.glucose * 0.23 +
    input.bmi * 1.4 +
    input.age * 0.34 +
    input.bloodPressure * 0.11 -
    input.oxygen * 0.45 +
    input.heartRate * 0.08;
  const symptomBoost = /fever|chest|fatigue|cough|breath/i.test(input.symptoms) ? 12 : 3;
  const historyBoost = /diabetes|cardiac|hypertension|asthma/i.test(input.history) ? 9 : 2;
  const risk = clamp(Math.round((metabolic / 3.7) + symptomBoost + historyBoost), 8, 98);

  const severity =
    risk > 82 ? "Critical" : risk > 62 ? "Elevated" : risk > 35 ? "Moderate" : "Low";
  const disease =
    input.glucose > 155 || input.bmi > 32
      ? "Type 2 Diabetes Risk"
      : input.bloodPressure > 145 || input.heartRate > 105
        ? "Cardiovascular Stress Pattern"
        : input.oxygen < 93 || /cough|breath/i.test(input.symptoms)
          ? "Respiratory Infection Risk"
          : "Low-Risk Preventive Profile";

  return {
    disease,
    risk,
    confidence: clamp(Math.round(84 + risk * 0.13), 86, 99),
    severity,
    recommendation:
      severity === "Critical"
        ? "Escalate to clinician review, order confirmatory diagnostics, and monitor vitals continuously."
        : severity === "Elevated"
          ? "Schedule diagnostic follow-up, review medication history, and activate remote monitoring."
          : "Continue preventive care plan with lifestyle guidance and routine surveillance."
  };
}
