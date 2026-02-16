"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <div className="space-y-20">

      {/* ITEM 1 */}
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="/assets/primerAnillo.jpg"
          alt="Primer anillo"
          width={500}
          height={500}
          className="rounded-lg"
        />

        <div className="font-serif text-blue-950 space-y-4">
          <span className="uppercase tracking-widest text-sm opacity-70">
            El inicio
          </span>
          <h3 className="text-3xl">
            El primer intento
          </h3>
          <p className="text-lg leading-relaxed">
            Este fue uno de los primeros anillos que hice, mi gran desafío fue usar bien el soplete y poder soldar la pieza.
            No era perfecto, pero en su momento me gustó el resultado y me motivó a seguir practicando.
          </p>
        </div>
      </motion.div>

      {/* ITEM 2 */}
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center md:grid-flow-col-dense"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="/assets/anilloCorazon.jpg"
          alt="Anillo artesanal"
          width={500}
          height={500}
          className="rounded-lg md:col-start-2"
        />

        <div className="font-serif text-blue-950 space-y-4 md:col-start-1">
          <span className="uppercase tracking-widest text-sm opacity-70">
            El proceso
          </span>
          <h3 className="text-3xl">
            Aprender haciendo
          </h3>
          <p className="text-lg leading-relaxed">
            Con el tiempo entendí que los errores también forman parte
            del proceso. Cada pieza me enseñó algo nuevo, desde conocer los materiales,
            experimentar con diversas técnicas de orfebrería y conocer sobre los minerales y sus propiedades.
          </p>
        </div>
      </motion.div>

      {/* ITEM 3 */}
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="/assets/anilloCuarzoRosado.jpg"
          alt="Joya artesanal terminada"
          width={500}
          height={500}
          className="rounded-lg"
        />

        <div className="font-serif text-blue-950 space-y-4">
          <span className="uppercase tracking-widest text-sm opacity-70">
            Hoy
          </span>
          <h3 className="text-3xl">
            Piezas con historia
          </h3>
          <p className="text-lg leading-relaxed">
            Hoy diseño y creo joyas una a una y 
            me inspiran las formas orgánicas, los colores y la naturaleza.
          </p>
        </div>
      </motion.div>

    </div>
  );
}

