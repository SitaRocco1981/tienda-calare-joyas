"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import Anuncio from "@/components/Anuncio";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GaleriaProducto from "@/components/GaleriaProducto";
import CantidadProducto from "@/components/CantidadProducto";
import BotonAgregarCarrito from "@/components/BotonAgregarCarrito";
import UltimosAgregados from "@/components/UltimosAgregados";
import Suscribete from "@/components/Suscribete";
import { products } from "@/data/products";

export default function ProductoPage() {
  const { slug } = useParams();

  const producto = products.find(
    (p) => p.slug === slug
  );

  if (!producto) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <h1 className="text-2xl font-serif text-blue-950">
          Producto no encontrado
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 min-h-screen">
      <Anuncio />
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 pt-52 pb-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        <GaleriaProducto
          imagenes={producto.imagenes}
          nombre={producto.nombre}
        />

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-serif text-blue-950">
            {producto.nombre}
          </h1>

          <p className="text-2xl text-blue-950">
            ${producto.precio.toLocaleString("es-CL")}
          </p>

          <p className="text-blue-950/80 leading-relaxed">
            {producto.descripcion}
          </p>

          <CantidadProducto />

          <BotonAgregarCarrito
            producto={producto}
            cantidad={1}
          />
        </div>
      </section>


      <UltimosAgregados />
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










