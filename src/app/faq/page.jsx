"use client";

import Anuncio from "@/components/Anuncio";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Acordeon from "@/components/Acordeon";
import Image from "next/image";


export default function FAQPage() {
  return (
    <>
      <Anuncio />
      <Navbar />

      {/* FONDO */}
      <section className="bg-amber-50 min-h-screen pt-52 pb-24">
        <div className="max-w-4xl mx-auto px-6 text-blue-950">
          
          {/* TÍTULO */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-serif mb-12"
          >
            Preguntas Frecuentes
          </motion.h1>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <Acordeon titulo="¿Las joyas son hechas a mano?">
              Sí, todas las piezas confeccionadas a mano, por lo que cada joya
              es única y puede presentar ligeras variaciones.
            </Acordeon>

            <Acordeon titulo="¿Puedo pedir más de una pieza del mismo diseño?">
              Las piezas se realizan principalmente al detalle.  
              Si necesitas más de una unidad, puedes contactarnos por correo.
            </Acordeon>

            <Acordeon titulo="¿Realizan envíos a todo Chile?">
              Sí, realizamos envíos a todo Chile mediante servicios de courier.
            </Acordeon>
          </motion.div>

          {/* CUIDADO */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-serif mt-20 mb-6"
          >
            Cuidado de las joyas
          </motion.h2>

          <Acordeon titulo="¿Cómo debo cuidar mis joyas?">
            <ul className="list-disc pl-5 space-y-2">
              <li>Evita el contacto con agua, perfumes y cremas.</li>
              <li>No dormir ni bañarse con las joyas.</li>
              <li>Guarda cada pieza por separado.</li>
              <li>Limpia con un paño seco y suave.</li>
            </ul>
          </Acordeon>

          {/* MEDIDAS */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-3xl font-serif mt-20 mb-6"
          >
            Medida de anillos
          </motion.h2>

          <Acordeon titulo="¿Cómo sé cuál es mi talla?">
            Te recomendamos medir el diámetro interno de un anillo que ya uses
            y compararlo con nuestra tabla de tallas.
            <div className="flex justify-center">
    <Image
      src="/assets/medidasanillos.png"
      alt="Tabla medida de anillos"
      width={600}
      height={300}
      priority
      className="
         w-full
  max-w-xs
  sm:max-w-md
  md:max-w-lg
  lg:max-w-xl
  h-auto
  rounded-lg
  shadow-sm
      "
    />
  </div>
          </Acordeon>

        </div>
      </section>

      <Footer />
    </>
  );
}

