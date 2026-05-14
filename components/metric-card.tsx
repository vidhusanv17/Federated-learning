"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";

export function MetricCard({
  label,
  value,
  suffix = "",
  delta
}: {
  label: string;
  value: number;
  suffix?: string;
  delta: number;
}) {
  const positive = delta >= 0;
  return (
    <motion.div whileHover={{ y: -4, scale: 1.01 }} transition={{ type: "spring", stiffness: 260 }}>
      <Card className="h-full">
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm text-muted-foreground">{label}</p>
            <span className={`flex items-center gap-1 text-xs ${positive ? "text-emerald-400" : "text-rose-400"}`}>
              {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              {Math.abs(delta)}%
            </span>
          </div>
          <div className="mt-4 text-3xl font-bold tracking-tight">
            {Number.isInteger(value) ? formatNumber(value) : value}
            {suffix}
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-sky-500"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(value % 100 || 84, 100)}%` }}
              transition={{ duration: 1.2 }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
