"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function UltimosAgregados() {
  
  const ultimos = products.slice(-4);

  return (
    <section
      id="productos"
      className="w-full bg-amber-50 py-24 px-8 md:px-16 scroll-mt-32"
    >
      {/* Título */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-blue-950">
          TE PODRÍA INTERESAR
        </h2>
      </div>

      {/* Grid productos */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {ultimos.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="group"
          >
            <Link href={`/productos/${product.slug}`}>
              {/* Imagen */}
              <div className="relative w-full aspect-square overflow-hidden mb-4">
                <Image
                  src={product.imagen}
                  alt={product.nombre}
                  fill
                  className="
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-[1.03]
                    rounded-xl
                  "
                />
              </div>

              {/* Texto */}
              <div className="space-y-1">
                <h3 className="text-xl font-serif text-blue-950">
                  {product.nombre}
                </h3>
                <p className="text-2xl text-blue-950">
                  ${product.precio.toLocaleString("es-CL")}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
