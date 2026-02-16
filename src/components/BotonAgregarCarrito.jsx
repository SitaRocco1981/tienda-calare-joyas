"use client";

import { useCarrito } from "@/context/CarritoContext";

export default function BotonAgregarCarrito({ producto }) {
  const { agregarAlCarrito, items } = useCarrito();

  const yaEnCarrito = items.some(
    (item) => item.id === producto.id
  );

  return (
    <div className="mt-6">
      <button
        onClick={() => agregarAlCarrito(producto)}
        disabled={yaEnCarrito}
        className={`px-8 py-4 uppercase tracking-wide transition
          ${
            yaEnCarrito
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-950 text-amber-50 hover:bg-rose-300"
          }`}
      >
        {yaEnCarrito ? "Producto Agregado" : "Agregar al carrito"}
      </button>

      <p className="text-sm text-blue-950/70 mt-4 max-w-sm">
        Producto artesanal.  
        Para más de una unidad, escríbenos a{" "}
        <a
          href="mailto:calare.joyas@gmail.com"
          className="underline hover:text-rose-300 transition"
        >
          calare.joyas@gmail.com
        </a>
      </p>
    </div>
  );
}

