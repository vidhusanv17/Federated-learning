"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Fingerprint, LockKeyhole, Mail, ScanFace, ShieldCheck, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Particles } from "@/components/particles";
import { mockFirebaseSignIn } from "@/lib/simulations";
import { useAppStore } from "@/lib/store";

export default function LoginPage() {
  const router = useRouter();
  const setUser = useAppStore((state) => state.setUser);
  const [role, setRole] = useState("Hospital Admin");
  const [email, setEmail] = useState("admin@trusthealth.ai");
  const [password, setPassword] = useState("secure123");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const signIn = async () => {
    setLoading(true);
    setError("");
    try {
      const user = await mockFirebaseSignIn(email, password, role);
      setUser(user);
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to sign in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden px-4 py-10">
      <Particles />
      <motion.div
        className="absolute left-8 top-10 hidden h-72 w-72 rounded-full border border-cyan-300/20 md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <div className="grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <section className="text-white">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <ShieldCheck size={16} />
              Encrypted federated clinical intelligence
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Trust-Aware Federated Learning with Explainable AI
            </h1>
            <p className="mt-5 max-w-2xl text-base text-cyan-50/75 md:text-lg">
              Secure disease prediction, outbreak forecasting, hospital trust scoring, privacy-preserving model training, and clinical explainability in one command center.
            </p>
          </motion.div>
          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            {["Zero raw data transfer", "SHAP + LIME evidence", "Threat-aware aggregation"].map((item) => (
              <div key={item} className="glass rounded-lg p-4 text-sm text-cyan-50">
                {item}
              </div>
            ))}
          </div>
        </section>

        <Card className="relative overflow-hidden p-6 md:p-8">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
          <div className="mb-7 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Firebase/Auth mock gateway</p>
              <h2 className="text-2xl font-bold">Secure Sign In</h2>
            </div>
            <span className="grid h-12 w-12 place-items-center rounded-md bg-cyan-400/15 text-cyan-300 shadow-glow">
              <Stethoscope />
            </span>
          </div>

          <div className="mb-5 grid grid-cols-2 gap-2 rounded-md bg-muted p-1">
            {["Hospital Admin", "Doctor"].map((item) => (
              <button
                key={item}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition ${role === item ? "bg-cyan-400 text-slate-950" : "text-muted-foreground"}`}
                onClick={() => setRole(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium">
              Email
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={17} />
                <Input className="pl-10" value={email} onChange={(event) => setEmail(event.target.value)} />
              </div>
            </label>
            <label className="block text-sm font-medium">
              Password
              <div className="relative mt-2">
                <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={17} />
                <Input className="pl-10" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
              </div>
            </label>
          </div>

          <div className="my-6 overflow-hidden rounded-lg border border-cyan-300/20 bg-cyan-300/5 p-4">
            <div className="relative mx-auto grid h-28 w-28 place-items-center rounded-full border border-cyan-300/40 text-cyan-300">
              <Fingerprint size={54} />
              <span className="absolute inset-x-2 top-0 h-12 animate-scan rounded-full bg-cyan-300/20 blur-sm" />
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <ScanFace size={14} />
              Biometric scan linked to encrypted role policy
            </div>
          </div>

          {error && <p className="mb-3 text-sm text-rose-400">{error}</p>}
          <Button className="w-full" size="lg" onClick={signIn} disabled={loading}>
            {loading ? "Verifying encrypted access..." : "Secure Sign In"}
          </Button>
          <button className="mt-4 w-full text-center text-sm text-cyan-300">Forgot password?</button>
        </Card>
      </div>
    </main>
  );
}
