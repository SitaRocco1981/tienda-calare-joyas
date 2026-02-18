"use client"; 
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Anuncio from "@/components/Anuncio";
import Navbar from "@/components/NavBar";
import Suscribete from "@/components/Suscribete";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export default function AnillosPage() {
  const aros = products.filter(
    (producto) => producto.categoria === "anillos"
  );

  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const visibleProducts = aros.slice(0, visibleCount);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 10); 
      setLoading(false);
    }, 800); 
  };

  return (
    <div className="bg-amber-50 min-h-screen pt-24">
      <Anuncio />
      <Navbar />

      <section className="pt-24 pb-10 text-center">
        <span className="uppercase tracking-widest text-sm text-blue-950/60">
          CATEGORÍAS
        </span>

        <h1 className="mt-3 text-4xl md:text-5xl text-blue-950 font-serif">
          Anillos
        </h1>

        <div className="flex justify-center my-4">
          <Image
            src="/assets/lineaCalare.png"
            alt="Separador"
            width={120}
            height={24}
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {visibleProducts.map((producto) => (
            <div key={producto.id} className="text-center group">
              <div className="relative aspect-square overflow-hidden rounded-xl mb-4">
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <h3 className="text-blue-950 font-serif text-lg">
                {producto.nombre}
              </h3>

              <p className="text-blue-950/80 mb-3">
                ${producto.precio.toLocaleString("es-CL")}
              </p>

              <Link
                href={`/productos/${producto.slug}`}
                className="inline-block px-5 py-2 bg-rose-300 text-blue-900 hover:bg-amber-50 hover:border-blue-950 transition"
              >
                Ver más
              </Link>
            </div>
          ))}

          {/* Skeletons */}
          {loading &&
            Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-300 rounded-xl aspect-square mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              </div>
            ))}
        </div>

        {/* Botón cargar más */}
        {!loading && visibleCount < aros.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-blue-950 text-white rounded-lg hover:bg-blue-800 transition shadow-md"
            >
              Cargar más ({visibleCount} de {aros.length})
            </button>
          </div>
        )}
      </section>

      <div className="flex justify-center my-4">
        <Image
          src="/assets/lineaCalare.png"
          alt="Separador"
          width={120}
          height={24}
        />
      </div>

      <Suscribete />
      <Footer />
    </div>
  );
}