"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Anuncio from "@/components/Anuncio";

export default function TransferenciaPage() {
  const [orderData, setOrderData] = useState(null);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("orderData");
    const items = localStorage.getItem("orderItems");
    if (data) setOrderData(JSON.parse(data));
    if (items) setOrderItems(JSON.parse(items));
  }, []);

  return (
    <div className="bg-amber-50 min-h-screen">
      <Anuncio />
      <Navbar />

      <section className="max-w-3xl mx-auto px-6 pt-52 pb-24 text-blue-950">
        <h1 className="text-4xl font-serif mb-6 text-center">
          Pago por transferencia bancaria
        </h1>

        <p className="text-center text-blue-950/80 mb-12">
          Gracias por tu compra 🤍  
          Para completar tu pedido, realiza la transferencia con los siguientes datos.
        </p>

        {/* Datos bancarios */}
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-4 mb-10">
          <p><strong>Nombre:</strong> Calare Joyería</p>
          <p><strong>Banco:</strong> Banco Estado</p>
          <p><strong>Tipo de cuenta:</strong> Cuenta Rut</p>
          <p><strong>Número de cuenta:</strong> 12.345.678-9</p>
          <p><strong>RUT:</strong> 12.345.678-9</p>
          <p><strong>Email:</strong> calare.joyas@gmail.com</p>
          {/* Mensaje de confirmación */}
          <p className="text-center text-blue-950/80 mb-10 mt-10">
            <strong>Una vez realizada la transferencia, recibirás un correo de confirmación con los detalles de tu compra.  
            Nos pondremos en contacto contigo si surge cualquier duda para que tengas total tranquilidad ✨</strong>
          </p>
        </div>

        {/* Resumen del pedido */}
        {orderData && (
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-serif text-blue-950 mb-4">
              Resumen de tu pedido
            </h2>
            <p><strong>Nombre:</strong> {orderData.nombre} {orderData.apellido}</p>
            <p><strong>Email:</strong> {orderData.correo}</p>
            <p><strong>Teléfono:</strong> {orderData.telefono}</p>
            <p>
              <strong>Dirección:</strong> {orderData.calle} #{orderData.numero}, {orderData.comuna}, {orderData.region}
            </p>
            {orderData.villa && <p><strong>Villa/Población:</strong> {orderData.villa}</p>}
            {orderData.mensaje && <p><strong>Nota:</strong> {orderData.mensaje}</p>}

            <h3 className="text-lg font-serif text-blue-950 mt-6 mb-2">Productos</h3>
            <ul className="space-y-4">
              {orderItems.map((item) => (
                <li key={item.id} className="flex items-center space-x-4 border-b pb-4">
                  <Image
                    src={item.imagenes[0]}
                    alt={item.nombre}
                    width={80}
                    height={80}
                    className="rounded object-cover"
                  />
                  <div>
                    <p className="font-semibold text-blue-950">{item.nombre}</p>
                    <p className="text-blue-950/80">Cantidad: {item.cantidad}</p>
                    <p className="text-blue-950/80">
                      Precio: ${item.precio.toLocaleString("es-CL")}
                    </p>
                    <p className="text-blue-950/80 font-semibold">
                      Total: ${(item.precio * item.cantidad).toLocaleString("es-CL")}
                    </p>


                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
