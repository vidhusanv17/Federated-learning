"use client";

import { motion } from "framer-motion";
import { Fingerprint, KeyRound, Lock, ScanLine, Shield, ShieldAlert } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { securityAlerts } from "@/lib/data";

export default function SecurityPrivacyPage() {
  return (
    <div>
      <SectionHeading
        eyebrow="Cybersecurity center"
        title="Security and privacy monitoring"
        description="Encrypted communication, intrusion detection, attack prevention, privacy-preserving federated learning, and secure verification are unified here."
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <Card className="p-6">
          <div className="relative grid min-h-[430px] place-items-center overflow-hidden rounded-lg border bg-cyan-300/5">
            <motion.div
              className="absolute h-80 w-80 rounded-full border border-cyan-300/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute h-56 w-56 rounded-full border border-sky-300/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />
            <div className="z-10 grid h-40 w-40 place-items-center rounded-full border bg-background/80 text-center shadow-glow">
              <Shield className="mx-auto mb-2 text-cyan-300" size={46} />
              <p className="font-bold">AI Firewall</p>
              <p className="text-xs text-muted-foreground">Zero-trust active</p>
            </div>
            <div className="absolute bottom-6 grid grid-cols-3 gap-3 text-xs">
              <span className="rounded-md border bg-background/60 px-3 py-2"><Lock size={14} className="mb-1 text-cyan-300" /> TLS 1.3</span>
              <span className="rounded-md border bg-background/60 px-3 py-2"><KeyRound size={14} className="mb-1 text-cyan-300" /> DP budget</span>
              <span className="rounded-md border bg-background/60 px-3 py-2"><Fingerprint size={14} className="mb-1 text-cyan-300" /> MFA</span>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Threat Monitoring Widgets</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {securityAlerts.map((alert) => (
              <div key={alert.id} className="rounded-lg border bg-background/40 p-4">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="text-cyan-300" size={18} />
                    <p className="font-semibold">{alert.title}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{alert.source} - severity {alert.severity}</p>
              </div>
            ))}
            <div className="rounded-lg border bg-background/40 p-4">
              <div className="mb-2 flex items-center gap-2 text-cyan-300">
                <ScanLine size={18} />
                Secure verification score
              </div>
              <Progress value={98} />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-4">
        {["Encrypted Communication", "Intrusion Detection", "Attack Prevention", "Privacy-Preserving FL"].map((item, index) => (
          <Card key={item}>
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">{item}</p>
              <p className="mt-3 text-3xl font-bold text-cyan-300">{[99, 94, 97, 98][index]}%</p>
              <Progress value={[99, 94, 97, 98][index]} className="mt-4" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
