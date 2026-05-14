"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  BarChart3,
  Bot,
  BrainCircuit,
  ChevronLeft,
  LayoutDashboard,
  LockKeyhole,
  Network,
  Radar,
  Search,
  Settings,
  ShieldCheck,
  Siren,
  Stethoscope,
  Menu,
  Moon,
  Sun,
  Info
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Particles } from "@/components/particles";
import { NotificationCenter } from "@/components/notification-center";
import { AiAssistant } from "@/components/ai-assistant";
import { useAppStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/federated-learning", label: "Federated Learning", icon: Network },
  { href: "/disease-prediction", label: "Disease Prediction", icon: Stethoscope },
  { href: "/explainable-ai", label: "Explainable AI", icon: BrainCircuit },
  { href: "/outbreak-intelligence", label: "Outbreak Intelligence", icon: Siren },
  { href: "/trust-management", label: "Trust Management", icon: ShieldCheck },
  { href: "/security-privacy", label: "Security & Privacy", icon: LockKeyhole },
  { href: "/analytics-reports", label: "Analytics & Reports", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/about", label: "About", icon: Info }
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { sidebarCollapsed, toggleSidebar, theme, setTheme } = useAppStore();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="min-h-screen">
      <Particles />
      {mobileOpen && (
        <button
          className="fixed inset-0 z-30 bg-slate-950/70 backdrop-blur-sm lg:hidden"
          aria-label="Close mobile navigation"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 border-r border-cyan-300/20 bg-background/80 backdrop-blur-2xl transition-all duration-300 lg:bg-background/55",
          sidebarCollapsed ? "lg:w-20" : "lg:w-72",
          mobileOpen ? "w-72 translate-x-0" : "w-72 -translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/dashboard" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-cyan-400/15 text-cyan-300 shadow-glow">
              <Activity size={22} />
            </span>
            {(!sidebarCollapsed || mobileOpen) && (
              <span className="text-sm font-bold leading-tight">
                Trust-Aware
                <span className="block text-cyan-300">Health AI</span>
              </span>
            )}
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleSidebar} aria-label="Collapse sidebar">
            <ChevronLeft className={cn("transition", sidebarCollapsed && "rotate-180")} size={18} />
          </Button>
        </div>
        <nav className="space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "group flex h-11 items-center gap-3 rounded-md px-3 text-sm font-medium text-muted-foreground transition hover:bg-cyan-400/10 hover:text-foreground",
                  active && "bg-cyan-400/15 text-cyan-200 shadow-glow"
                )}
              >
                <Icon size={19} />
                {(!sidebarCollapsed || mobileOpen) && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className={cn("transition-all duration-300", sidebarCollapsed ? "lg:pl-20" : "lg:pl-72")}>
        <header className="sticky top-0 z-30 border-b border-cyan-300/15 bg-background/62 backdrop-blur-2xl">
          <div className="flex h-16 items-center gap-3 px-4 md:px-6">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open navigation">
              <Menu size={20} />
            </Button>
            <div className="hidden h-10 flex-1 items-center gap-2 rounded-md border bg-background/45 px-3 md:flex">
              <Search size={17} className="text-muted-foreground" />
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                placeholder="Search patients, hospitals, alerts, reports..."
              />
            </div>
            <Badge className="hidden md:inline-flex">
              <Radar size={13} className="mr-1" />
              Live federation
            </Badge>
            <NotificationCenter />
            <Button
              variant="outline"
              size="icon"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <div className="hidden items-center gap-2 md:flex">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-cyan-400/20 text-cyan-200">
                <Bot size={18} />
              </span>
              <div className="text-xs">
                <p className="font-semibold">Clinical Admin</p>
                <p className="text-muted-foreground">Mock Firebase Auth</p>
              </div>
            </div>
          </div>
        </header>
        <main className="px-4 py-6 md:px-6 lg:px-8">{children}</main>
      </div>
      <AiAssistant />
    </div>
  );
}
