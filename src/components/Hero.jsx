"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">

      {/* Imagen de fondo */}
      <Image
        src="/assets/aros.jpg"
        alt="Fondo joyería"
        fill
        priority
        className="object-cover -z-20"
      />


      <div className="absolute inset-0 bg-slate-950/45 -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen">

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2 mt-4 max-w-3xl mx-auto md:mx-0"
          >
            <h2 className="text-7xl sm:text-8xl md:text-[9rem] lg:text-[11rem] font-serif font-light leading-[0.9] text-amber-50 text-center md:text-left">
              Calare
            </h2>

            <h1 className="text-5xl sm:text-6xl font-serif leading-tight text-amber-50 text-center md:text-left">
              Joyería Artesanal
            </h1>

            <p className="text-xl md:text-2xl text-amber-50 max-w-xl text-center md:text-left">
              Lleva contigo un accesorio único.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-8 justify-center md:justify-start">
              <a href="#productos" className="text-center px-10 py-5 bg-rose-300 text-slate-950 text-sm md:text-base uppercase tracking-widest hover:bg-white/90 transition">
                
                Descubre más
              </a>

              <a href="#marca" className="text-center px-10 py-5 border border-rose-300 text-white text-sm md:text-base uppercase tracking-widest hover:border-white transition">
                Sobre la marca
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
