"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCarrito } from "@/context/CarritoContext";



const categorias = [
  { label: "Aros", href: "/categorias/aros" },
  { label: "Anillos", href: "/categorias/anillos" },
  { label: "Colgantes", href: "/categorias/colgantes" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openCategorias, setOpenCategorias] = useState(false);

    const { items, setAbierto } = useCarrito(); 
  

  const totalItems = items.reduce(
    (acc, item) => acc + item.cantidad,
    0
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="fixed top-8 left-0 w-full bg-gray-500/70 backdrop-blur z-40 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/assets/logo-calare.png"
            alt="Calaré"
            width={220}
            height={80}
            priority
            className="h-12 sm:h-20 w-auto"
          />
        </Link>

        {/* MENU ESCRITORIO */}
        <ul className="hidden md:flex gap-10 text-xl text-amber-50 font-serif relative">
          <li><Link href="/" className=" hover:text-rose-300">Inicio</Link></li>
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenCategorias(true)}
            onMouseLeave={() => setOpenCategorias(false)}
          >
            <span className="hover:text-rose-300 transition">
              Categorías
            </span>

            <AnimatePresence>
              {openCategorias && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-10 left-0 bg-amber-50 rounded-xl shadow-xl p-4 w-52"
                >
                  <ul className="flex flex-col gap-3">
                    
                    {categorias.map(cat => (
                      <li key={cat.label}>
                        <Link
                          href={cat.href}
                          className="block px-3 py-2 rounded-lg text-blue-950 hover:bg-rose-300 transition"
                        >
                          {cat.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          
          <li><Link href="/faq" className=" hover:text-rose-300">Preguntas frecuentes</Link></li>
          <li><a href="mailto:calare.joyas@gmail.com" className=" hover:text-rose-300">Contacto</a></li>
        </ul>

        {/* ICONOS */}
        <div className="flex items-center gap-5">

          {/* CARRITO (DESKTOP + MOBILE) */}
          <button
            aria-label="Carrito"
            onClick={() => setAbierto(true)}
            className="relative text-amber-50 hover:text-rose-300 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 mt-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835L5.82 9.75m0 0h12.69c.745 0 1.314.68 1.17 1.412l-1.2 6a1.125 1.125 0 01-1.104.888H8.25a1.125 1.125 0 01-1.104-.888l-1.2-6zM5.82 9.75L4.5 4.5m3.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm9 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
              />
            </svg>

            {totalItems > 0 && (
              <span className="mt-4 absolute -top-2 -right-2 bg-gold text-night text-[15px] w-6 h-6 flex items-center justify-center rounded-full font-sans">
                {totalItems}
              </span>
            )}
          </button>

          {/* HAMBURGUESA */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
              className="absolute w-8 h-[3px] bg-amber-50 rounded"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="absolute w-8 h-[3px] bg-amber-50 rounded"
            />
            <motion.span
              animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
              className="absolute w-8 h-[3px] bg-amber-50 rounded"
            />
          </button>
        </div>
      </div>

      {/* MENU MOBILE*/}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-500/70 backdrop-blur-md"
        >
          <ul className="flex flex-col">
            <li className="px-8 py-5  hover:text-rose-300 ">
              <Link href="/" onClick={() => setOpen(false)}>
                Inicio
              </Link>
            </li>
            <li
              onClick={() => setOpenCategorias(!openCategorias)}
              className="px-8 py-5 text-lg font-serif text-amber-50  hover:text-rose-300 transition flex justify-between cursor-pointer"
            >
              Categorías
              <span className={`transition ${openCategorias ? "rotate-180" : ""}`}>
                ▾
              </span>
            </li>

            <AnimatePresence>
              {openCategorias && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden bg-gray-500/80"
                >
                  {categorias.map(cat => (
                    <li key={cat.label} className="pl-12 py-4">
                      <Link
                        href={cat.href}
                        onClick={() => setOpen(false)}
                        className="text-amber-50 font-serif hover:text-rose-300 "
                      >
                        {cat.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>

            <li className="px-8 py-5  hover:text-rose-300 ">
              <Link href="/faq" onClick={() => setOpen(false)}>
                Preguntas frecuentes
              </Link>
            </li>

            <li className="px-8 py-5  hover:text-rose-300">
              <Link href="/#contacto" onClick={() => setOpen(false)}>
                Contacto
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}



