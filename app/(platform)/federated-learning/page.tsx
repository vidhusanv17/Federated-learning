"use client";

import { motion } from "framer-motion";
import { Building2, DatabaseZap, Lock, Server, Wifi } from "lucide-react";
import { FederatedRoundChart } from "@/components/charts";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { hospitals } from "@/lib/data";

export default function FederatedLearningPage() {
  return (
    <div>
      <SectionHeading
        eyebrow="Privacy-preserving training"
        title="Federated learning simulation"
        description="Hospitals train local models without raw patient data leaving their systems. Encrypted gradients are weighted by trust before secure aggregation."
      />

      <div className="grid gap-6 xl:grid-cols-[1.25fr_.95fr]">
        <Card className="min-h-[520px] p-5">
          <div className="relative grid h-full min-h-[480px] place-items-center overflow-hidden rounded-lg border border-cyan-300/15 bg-cyan-300/5">
            <motion.div
              className="absolute h-[360px] w-[360px] rounded-full border border-cyan-300/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />
            <motion.div className="z-10 grid h-36 w-36 place-items-center rounded-full border border-cyan-300/40 bg-background/75 text-center shadow-glow">
              <div>
                <Server className="mx-auto mb-2 text-cyan-300" />
                <p className="text-sm font-bold">Secure Aggregation Server</p>
                <p className="text-xs text-muted-foreground">Round 05 active</p>
              </div>
            </motion.div>
            {hospitals.map((hospital, index) => {
              const angle = (index / hospitals.length) * Math.PI * 2;
              const x = Math.cos(angle) * 210;
              const y = Math.sin(angle) * 170;
              return (
                <motion.div
                  key={hospital.id}
                  className="absolute grid h-24 w-24 place-items-center rounded-lg border border-cyan-300/25 bg-background/70 text-center text-xs shadow-glow"
                  style={{ x, y }}
                  animate={{ y: [y - 7, y + 7, y - 7] }}
                  transition={{ duration: 4 + index * 0.3, repeat: Infinity }}
                >
                  <Building2 className="text-cyan-300" size={21} />
                  <span className="px-2 font-semibold">{hospital.name.split(" ")[0]}</span>
                </motion.div>
              );
            })}
            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-md border bg-background/60 px-3 py-2 text-xs text-cyan-200">
              <Lock size={14} />
              Homomorphic encryption channel active
            </div>
          </div>
        </Card>

        <div className="grid gap-4">
          {hospitals.map((hospital) => (
            <Card key={hospital.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{hospital.name}</p>
                    <p className="text-xs text-muted-foreground">{hospital.region} - {hospital.patients.toLocaleString()} active patients</p>
                  </div>
                  <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-xs text-cyan-300">{hospital.status}</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Local Accuracy</p>
                    <p className="font-bold">{hospital.localAccuracy}%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Trust Score</p>
                    <p className="font-bold">{hospital.trustScore}%</p>
                  </div>
                </div>
                <Progress value={hospital.trustScore} className="mt-4" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Secure Decentralized Learning Rounds</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><DatabaseZap size={16} className="text-cyan-300" /> Local training complete</span>
            <span className="flex items-center gap-2"><Wifi size={16} className="text-emerald-300" /> Encrypted communication stable</span>
          </div>
          <FederatedRoundChart />
        </CardContent>
      </Card>
    </div>
  );
}
