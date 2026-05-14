"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: (index % 9) * 0.35,
  size: 2 + (index % 4)
}));

export function Particles() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-aurora bg-holo-grid bg-[length:42px_42px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(2,6,23,.28))]" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-300/70 shadow-glow"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size
          }}
          animate={{ y: [-12, 18, -12], opacity: [0.25, 0.9, 0.25] }}
          transition={{ duration: 5 + (particle.id % 5), repeat: Infinity, delay: particle.delay }}
        />
      ))}
    </div>
  );
}
