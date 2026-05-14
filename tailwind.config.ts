import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        }
      },
      boxShadow: {
        glow: "0 0 34px rgba(34, 211, 238, 0.35)",
        "glow-strong": "0 0 60px rgba(14, 165, 233, 0.42)"
      },
      backgroundImage: {
        "holo-grid":
          "linear-gradient(rgba(34,211,238,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.09) 1px, transparent 1px)",
        "aurora":
          "radial-gradient(circle at 15% 10%, rgba(34,211,238,.22), transparent 28%), radial-gradient(circle at 85% 15%, rgba(59,130,246,.2), transparent 30%), linear-gradient(135deg, rgba(2,6,23,1), rgba(8,47,73,.96))"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.03)" }
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(240%)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3.8s ease-in-out infinite",
        scan: "scan 2.2s ease-in-out infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
