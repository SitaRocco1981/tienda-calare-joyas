"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCarrito } from "@/context/CarritoContext";
import { useRouter } from "next/navigation"; 


export default function CarritoDrawer() {
  const { items, abierto, setAbierto, quitarDelCarrito } = useCarrito();
  const router = useRouter(); 
  

  const calcularTotal = () => {
    return items.reduce((total, item) => {
      const precioNumerico = item.precio; 
      return total + precioNumerico * item.cantidad;
    }, 0);
  };

  return (
    <AnimatePresence>
      {abierto && (
        <>
          {/* OVERLAY */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setAbierto(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* DRAWER */}
          <motion.aside
            className="fixed top-0 right-0 w-full sm:w-[420px] h-full bg-amber-50 z-50 p-6 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-serif text-blue-950">
                Carrito
              </h2>
              <button
                onClick={() => setAbierto(false)}
                className="text-blue-950 text-xl"
              >
                ✕
              </button>
            </div>

            {/* CONTENIDO */}
            {items.length === 0 ? (
              <p className="text-blue-950/70">
                Tu carrito está vacío
              </p>
            ) : (
              <div className="flex-1 flex flex-col gap-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 items-center"
                  >
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                      <Image
                        src={item.imagenes[0]}
                        alt={item.nombre}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="font-serif text-blue-950">
                        {item.nombre}
                      </p>

                      {/* Mostrar precio formateado */}
                      <p className="text-blue-950/80">
                        ${item.precio.toLocaleString("es-CL")}
                      </p>

                      <button
                        onClick={() => quitarDelCarrito(item.id)}
                        className="text-sm text-rose-400 hover:underline mt-1"
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TOTAL + BOTÓN */}
            {items.length > 0 && (
              <div className="mt-6 border-t pt-4">
                <p className="text-lg font-serif text-blue-950 flex justify-between">
                  <span>Total</span>
                  <span>
                    ${calcularTotal().toLocaleString("es-CL")}
                  </span>
                </p>

                <button
                  onClick={() => {
                    setAbierto(false);         
                    router.push("/transferencia"); 
                   
                  }}
                  className="mt-4 w-full bg-blue-950 text-amber-50 py-3 font-serif hover:opacity-90 transition"
                >
                  Comprar
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}





