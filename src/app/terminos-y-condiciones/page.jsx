"use client";

import Anuncio from "@/components/Anuncio";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TerminosPage() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <Anuncio />
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 pt-52 pb-24 text-blue-950">
        {/* TÍTULO */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-serif mb-12"
        >
          Términos y Condiciones
        </motion.h1>

        {/* CONTENIDO */}
        <div className="space-y-10 leading-relaxed text-blue-950/90">
          
          <div>
            <h2 className="font-serif text-2xl mb-3">
              1. Información general
            </h2>
            <p>
              Calare es una marca de joyería artesanal. Todas las piezas son
              confeccionadas a mano, por lo que cada joya es única y puede
              presentar ligeras variaciones respecto a las imágenes mostradas
              en el sitio web.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-3">
              2. Productos
            </h2>
            <p>
              Las joyas disponibles corresponden a piezas únicas o a series
              limitadas. En caso de requerir más de una unidad del mismo diseño,
              el cliente deberá contactarse directamente por correo electrónico
              para coordinar un pedido especial.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-3">
              3. Precios y pagos
            </h2>
            <p>
              Todos los precios están expresados en pesos chilenos (CLP).
              Actualmente, los pagos se realizan mediante transferencia
              bancaria. Los datos para el pago serán entregados al momento de
              confirmar la compra.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-3">
              4. Envíos
            </h2>
            <p>
              Realizamos envíos a todo Chile mediante servicios de courier. Los
              plazos y costos de envío serán informados al momento de la compra
              y pueden variar según la ubicación del destinatario.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-3">
              5. Cambios y devoluciones
            </h2>
            <p>
              Debido a la naturaleza artesanal y personalizada de las joyas, no
              se aceptan devoluciones por cambio de opinión. En caso de que el
              producto presente un defecto de fabricación, el cliente deberá
              contactarse dentro de un plazo máximo de 48 horas desde la
              recepción del pedido.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-3">
              6. Cuidado de las joyas
            </h2>
            <p>
              Para preservar la durabilidad de las piezas, se recomienda evitar
              el contacto con agua, perfumes y cremas, no dormir ni bañarse con
              las joyas puestas y guardarlas por separado.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-3">
              7. Propiedad intelectual
            </h2>
            <p>
              Todos los diseños, imágenes y contenidos de este sitio son
              propiedad de Calare y no pueden ser utilizados sin autorización
              previa.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-3">
              8. Modificaciones
            </h2>
            <p>
              Calare se reserva el derecho de modificar estos términos y
              condiciones en cualquier momento. Las modificaciones entrarán en
              vigencia desde su publicación en el sitio web.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
