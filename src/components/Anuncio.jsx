"use client";

import { motion } from "framer-motion";

const message = "Envíos gratis por compras desde $100.000";

export default function Anuncio() {
  return (
    <div className="fixed top-0 left-0 w-full h-8 overflow-hidden bg-amber-50 text-slate-950 text-lg z-50 font-serif">
      <motion.div
        className="flex items-center whitespace-nowrap min-w-full"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-6 px-8"
          >
            <span className="tracking-wide">{message}</span>
            <span className="opacity-50">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
