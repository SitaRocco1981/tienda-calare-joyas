"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Anuncio from "@/components/Anuncio";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import chileData from "@/data/comunas.json";
import { useCarrito } from "@/context/CarritoContext";

export default function CheckoutPage() {
  const { vaciarCarrito } = useCarrito();
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "+569",
    pais: "Chile",
    region: "",
    comuna: "",
    calle: "",
    numero: "",
    villa: "",
    mensaje: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Guardar datos en localStorage (para TransferenciaPage)
      localStorage.setItem("orderData", JSON.stringify(formData));

      const cart = localStorage.getItem("cart");
      let orderItems = [];
      if (cart) {
        localStorage.setItem("orderItems", cart);
        orderItems = JSON.parse(cart);
      }

      // Calcular total
      const total = orderItems.reduce(
        (acc, item) => acc + item.precio * item.cantidad,
        0
      );

      // Enviar a Google Sheets vía API Route
      const res = await fetch("/api/addOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderData: formData,
          orderItems,
          total,
        }),
      });

      if (!res.ok) throw new Error("Error al guardar en Google Sheets");

      // Vaciar carrito
      localStorage.removeItem("cart");
      vaciarCarrito();

      setStatus("success");
      setTimeout(() => router.push("/transferencia"), 2000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const selectedRegion = chileData.regiones.find(
    (r) => r.region === formData.region
  );

  return (
    <div className="bg-amber-50 min-h-screen flex flex-col">
      <Anuncio />
      <Navbar />

      <section className="max-w-4xl mx-auto mt-56 mb-8 px-6 text-left md:text-center">
        <h1 className="text-4xl font-serif text-blue-950 mb-4">Finaliza tu compra</h1>
        <p className="text-blue-950 leading-relaxed text-xl">
          Ingresa tus datos de contacto y envío para completar tu pedido.
          Usaremos esta información únicamente para gestionar tu compra y entrega.
          Tus datos serán tratados de forma segura y no se compartirán con terceros.
        </p>
      </section>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl mx-auto mb-12"
      >
        <h2 className="text-2xl font-serif text-blue-950 mb-6">Datos de envío</h2>

        {/* Campos obligatorios */}
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre}
          onChange={handleChange} className="w-full border border-blue-950 rounded p-2 mb-4 text-blue-950" required />
        <input type="text" name="apellido" placeholder="Apellido" value={formData.apellido}
          onChange={handleChange} className="w-full border border-blue-950 rounded p-2 mb-4 text-blue-950" required />
        <input type="email" name="correo" placeholder="Correo electrónico" value={formData.correo}
          onChange={handleChange} className="w-full border border-blue-950 rounded p-2 mb-4 text-blue-950" required />
        <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono}
          onChange={handleChange} className="w-full border border-blue-950 rounded p-2 mb-4 text-blue-950" required />
        <input type="text" name="pais" placeholder="País" value={formData.pais}
          onChange={handleChange} className="w-full border border-blue-950 rounded p-2 mb-4 text-blue-950" required />

        {/* Región */}
        <select
          name="region"
          value={formData.region}
          onChange={handleChange}
          className="w-full border border-blue-950 rounded p-2 mb-4 text-blue-950"
          required
        >
          <option value="">Selecciona una región</option>
          {chileData.regiones.map((r) => (
            <option key={r.region} value={r.region}>{r.region}</option>
          ))}
        </select>

        {/* Comuna */}
        <select
          name="comuna"
          value={formData.comuna}
          onChange={handleChange}
          className="w-full border border-blue-950 rounded p-2 mb-4 text-blue-950"
          required
          disabled={!formData.region}
        >
          <option value="">Selecciona una comuna</option>
          {selectedRegion &&
            selectedRegion.comunas.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
        </select>

        <input type="text" name="calle" placeholder="Calle" value={formData.calle}
          onChange={handleChange} className="w-full border border-blue-950 rounded p-2 mb-4 text-blue-950" required />
        <input type="text" name="numero" placeholder="Número de casa o depto." value={formData.numero}
          onChange={handleChange} className="w-full border border-blue-950 rounded p-2 mb-4 text-blue-950" required />

        {/* Opcionales */}
        <input type="text" name="villa" placeholder="Villa o población (opcional)" value={formData.villa}
          onChange={handleChange} className="w-full border border-blue-950 rounded p-2 mb-4 text-blue-950" />
        <textarea name="mensaje" placeholder="Nota opcional para tu pedido" value={formData.mensaje}
          onChange={handleChange} className="w-full border border-blue-950 rounded p-2 mb-4 text-blue-950" />

        <button type="submit"
          className="w-full bg-blue-950 text-white py-2  hover:bg-blue-800 transition cursor-pointer">
          Confirmar pedido
        </button>

        {status === "success" && (
          <p className="mt-4 text-green-600 text-center">
            ✅ Pedido confirmado. Redirigiendo a transferencia...
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 text-center">
            ❌ Ocurrió un error, intenta nuevamente.
          </p>
        )}
      </form>

      <Footer />
    </div>
  );
}