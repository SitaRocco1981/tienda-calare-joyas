"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="marca" className="relative w-full min-h-screen lg:min-h-[75vh]">

      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/assets/about.webp" 
          alt="Proceso artesanal"
          fill
          priority
          className="object-cover object-center md:object-bottom-right"
        />
       
        <div className="absolute inset-0 bg-blue-950/50" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-8 md:px-16">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-amber-50 space-y-6"
          >
            <span className="uppercase tracking-widest text-sm opacity-80 font-serif">
              Sobre la marca
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight max-w-3xl">
              Piezas creadas a mano
            </h2>

            <p className="text-lg md:text-xl opacity-90 max-w-3xl leading-relaxed font-serif">
              Mi nombre es Rocío y llegué a la orfebrería el año 2021.
              Lo que comenzó como curiosidad, con el tiempo se transformó en oficio.
            </p>

            <p className="text-lg md:text-xl opacity-90 max-w-3xl leading-relaxed font-serif">
              Descubrí que trabajar con las manos me obligaba a bajar el ritmo,
              a escuchar los procesos y a aceptar que cada pieza tiene su propio tiempo.
            </p>


            <p className="text-lg md:text-xl opacity-90 max-w-3xl leading-relaxed font-serif">
              Cada joya que sale del taller lleva algo de ese recorrido:
              aprendizaje, paciencia y una manera personal de entender el hacer.
            </p>

            {/*  BOTÓN */}
            <div className="pt-6">
              <Link
                href="/sobre-mi"
                className="inline-block  bg-rose-300  px-8 py-3 font-serif tracking-wide hover:bg-amber-50 text-blue-950 transition"
              >
                LEER MI HISTORIA
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

