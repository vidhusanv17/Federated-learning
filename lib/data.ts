import type { Hospital, SecurityAlert } from "@/lib/types";

export const kpis = [
  { label: "Total Patients", value: 128420, delta: 12.4, accent: "cyan" },
  { label: "Positive Cases", value: 8420, delta: -4.8, accent: "rose" },
  { label: "Active Hospitals", value: 64, delta: 8.1, accent: "emerald" },
  { label: "Federated Clients", value: 52, delta: 15.7, accent: "sky" },
  { label: "AI Accuracy", value: 96.8, suffix: "%", delta: 2.2, accent: "cyan" },
  { label: "Outbreak Risk", value: 38, suffix: "%", delta: -6.3, accent: "amber" },
  { label: "Trust Score", value: 92.6, suffix: "%", delta: 1.9, accent: "emerald" },
  { label: "Threat Status", value: 3, delta: -21.5, accent: "rose" }
];

export const hospitals: Hospital[] = [
  { id: "h1", name: "Apollo NeuroCare", region: "South Asia", localAccuracy: 96.2, trustScore: 97, status: "Training", patients: 18240, latency: 22 },
  { id: "h2", name: "Mercy General", region: "North America", localAccuracy: 94.8, trustScore: 93, status: "Online", patients: 16450, latency: 38 },
  { id: "h3", name: "St. Helix Institute", region: "Europe", localAccuracy: 92.5, trustScore: 86, status: "Warning", patients: 12090, latency: 55 },
  { id: "h4", name: "Kyoto BioHealth", region: "East Asia", localAccuracy: 97.1, trustScore: 98, status: "Online", patients: 21980, latency: 18 },
  { id: "h5", name: "CapeCare Medical", region: "Africa", localAccuracy: 90.4, trustScore: 78, status: "Warning", patients: 9330, latency: 76 },
  { id: "h6", name: "Andes Precision Health", region: "South America", localAccuracy: 88.1, trustScore: 42, status: "Quarantined", patients: 7740, latency: 121 }
];

export const diseaseTrends = [
  { month: "Jan", respiratory: 32, cardiac: 21, diabetic: 42, influenza: 18 },
  { month: "Feb", respiratory: 36, cardiac: 24, diabetic: 40, influenza: 24 },
  { month: "Mar", respiratory: 41, cardiac: 25, diabetic: 44, influenza: 31 },
  { month: "Apr", respiratory: 38, cardiac: 29, diabetic: 48, influenza: 35 },
  { month: "May", respiratory: 46, cardiac: 31, diabetic: 50, influenza: 39 },
  { month: "Jun", respiratory: 51, cardiac: 34, diabetic: 53, influenza: 42 },
  { month: "Jul", respiratory: 48, cardiac: 32, diabetic: 56, influenza: 36 },
  { month: "Aug", respiratory: 56, cardiac: 39, diabetic: 59, influenza: 45 }
];

export const federatedRounds = [
  { round: "R1", globalAccuracy: 87, loss: 0.42, clients: 41 },
  { round: "R2", globalAccuracy: 90, loss: 0.34, clients: 45 },
  { round: "R3", globalAccuracy: 92, loss: 0.28, clients: 48 },
  { round: "R4", globalAccuracy: 94, loss: 0.21, clients: 50 },
  { round: "R5", globalAccuracy: 96.8, loss: 0.16, clients: 52 }
];

export const shapFeatures = [
  { feature: "Glucose", contribution: 34, direction: "High" },
  { feature: "BMI", contribution: 21, direction: "Medium" },
  { feature: "Age", contribution: 18, direction: "Medium" },
  { feature: "Blood Pressure", contribution: 15, direction: "High" },
  { feature: "Oxygen Level", contribution: 8, direction: "Low" },
  { feature: "Family History", contribution: 4, direction: "Low" }
];

export const outbreakRegions = [
  { region: "Delhi NCR", risk: 82, cases: 1842, growth: 12.1 },
  { region: "Mumbai", risk: 64, cases: 1230, growth: 8.4 },
  { region: "Bengaluru", risk: 46, cases: 920, growth: 3.8 },
  { region: "Chennai", risk: 57, cases: 1014, growth: 6.2 },
  { region: "Hyderabad", risk: 38, cases: 714, growth: -2.5 }
];

export const securityAlerts: SecurityAlert[] = [
  { id: "a1", title: "Abnormal gradient update rejected", severity: "High", source: "Andes Precision Health", time: "2 min ago" },
  { id: "a2", title: "Differential privacy budget refreshed", severity: "Low", source: "Aggregation Core", time: "8 min ago" },
  { id: "a3", title: "Repeated login anomaly contained", severity: "Medium", source: "Identity Gateway", time: "16 min ago" },
  { id: "a4", title: "Encrypted model channel verified", severity: "Low", source: "Kyoto BioHealth", time: "24 min ago" }
];

export const reportRows = [
  { name: "Patient Risk Summary", owner: "Clinical AI", status: "Ready", score: 96 },
  { name: "Hospital Trust Audit", owner: "Federated Ops", status: "Ready", score: 92 },
  { name: "Outbreak Forecast", owner: "Epidemiology", status: "Generating", score: 88 },
  { name: "Security Privacy Review", owner: "SOC", status: "Ready", score: 98 }
];
