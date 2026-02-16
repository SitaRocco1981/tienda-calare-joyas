"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/assets/ojito.jpg",
  "/assets/pulsera.jpg",
  "/assets/anillopirita.jpg",
  "/assets/arosflor.jpg",
  "/assets/arostricolores.jpg",
  "/assets/anillos.jpg",
];

export default function Suscribete() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
  e.preventDefault();
  setStatus("loading");

  try {
    const res = await fetch("/api/suscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) throw new Error();

    setStatus("success");
    setEmail("");
  } catch (error) {
    console.error(error);
    setStatus("error");
  }
}


  return (
    <section className="w-full bg-amber-50 py-24">
      <div className="max-w-6xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Texto + formulario */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="uppercase tracking-widest text-sm opacity-70 text-blue-950">
            Suscríbete
          </span>

          <h3 className="text-4xl md:text-5xl font-serif leading-tight text-blue-950">
            Recibe descuentos y novedades
          </h3>

          <p className="text-lg text-blue-950/80 max-w-md">
            Entérate antes que nadie de nuevas piezas, ediciones limitadas y
            beneficios exclusivos.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="w-full px-4 py-3 border border-rose-300 bg-transparent focus:outline-none focus:border-night text-blue-950"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-rose-300 text-blue-900 uppercase text-sm tracking-wide hover:bg-night/90 transition disabled:opacity-50"
            >
              {status === "loading" ? "Enviando..." : "Suscribirme"}
            </button>
          </form>

          {status === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-night space-y-3"
            >
              <p className="text-2xl font-serif text-blue-950">Gracias por suscribirte 💌</p>
              <p className="opacity-70 text-blue-950">
                Te avisaremos cuando haya novedades.
              </p>
            </motion.div>
          )}

          {status === "error" && (
            <p className="text-sm text-red-700">
              Algo salió mal. Intenta nuevamente.
            </p>
          )}
        </motion.div>

        {/* Galería */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {images.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover transition-transform duration-700 hover:scale-105 rounded-xl"
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
