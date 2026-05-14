"use client";

import { Bell, ShieldAlert } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { securityAlerts } from "@/lib/data";

export function NotificationCenter() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <Button variant="outline" size="icon" aria-label="Notifications" onClick={() => setOpen((value) => !value)}>
        <Bell size={18} />
      </Button>
      <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-rose-400 shadow-glow" />
      {open && (
        <Card className="absolute right-0 top-12 z-50 w-80 p-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-semibold">Notification Center</p>
            <span className="text-xs text-cyan-300">4 live</span>
          </div>
          <div className="space-y-2">
            {securityAlerts.map((alert) => (
              <div key={alert.id} className="rounded-md border bg-background/45 p-3">
                <div className="flex gap-2">
                  <ShieldAlert size={16} className="mt-0.5 text-cyan-300" />
                  <div>
                    <p className="text-sm font-medium">{alert.title}</p>
                    <p className="text-xs text-muted-foreground">{alert.source} · {alert.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
