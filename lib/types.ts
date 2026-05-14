export type NavKey =
  | "dashboard"
  | "federated-learning"
  | "disease-prediction"
  | "explainable-ai"
  | "outbreak-intelligence"
  | "trust-management"
  | "security-privacy"
  | "analytics-reports"
  | "settings"
  | "about";

export type Hospital = {
  id: string;
  name: string;
  region: string;
  localAccuracy: number;
  trustScore: number;
  status: "Online" | "Training" | "Warning" | "Quarantined";
  patients: number;
  latency: number;
};

export type SecurityAlert = {
  id: string;
  title: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  source: string;
  time: string;
};

export type PredictionInput = {
  age: number;
  gender: string;
  bmi: number;
  glucose: number;
  bloodPressure: number;
  heartRate: number;
  oxygen: number;
  symptoms: string;
  history: string;
};

export type PredictionResult = {
  disease: string;
  risk: number;
  confidence: number;
  severity: "Low" | "Moderate" | "Elevated" | "Critical";
  recommendation: string;
};
