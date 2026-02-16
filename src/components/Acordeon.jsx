"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Acordeon({ titulo, children }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="border-b border-blue-950/20 py-4">
      <button
        onClick={() => setAbierto(!abierto)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="font-serif text-xl text-blue-950">
          {titulo}
        </h3>

        <span
          className={`text-2xl transition-transform ${
            abierto ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <AnimatePresence>
        {abierto && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 text-blue-950/80 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
