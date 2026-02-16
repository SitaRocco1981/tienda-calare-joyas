import Image from "next/image";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Anuncio from "@/components/Anuncio";

export default function TransferenciaPage() {
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
          Para completar tu pedido, realiza la transferencia con los
          siguientes datos.
        </p>

        {/* CAJA DATOS */}
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-4">
          <p><strong>Nombre:</strong> Calare Joyería</p>
          <p><strong>Banco:</strong> Banco Estado</p>
          <p><strong>Tipo de cuenta:</strong> Cuenta Rut</p>
          <p><strong>Número de cuenta:</strong> 12.345.678-9</p>
          <p><strong>RUT:</strong> 12.345.678-9</p>
          <p><strong>Email:</strong> calare.joyas@gmail.com</p>
        </div>

        {/* MENSAJE FINAL */}
        <p className="mt-10 text-center text-blue-950/80">
          Una vez realizada la transferencia, envíanos el comprobante por correo para confirmar tu pedido 💌
        </p>

        {/* SEPARADOR */}
        <div className="flex justify-center my-16">
          <Image
            src="/assets/lineaCalare.png"
            alt="Separador Calare"
            width={120}
            height={24}
            className="opacity-80"
          />
        </div>

        <p className="text-center text-sm text-blue-950/60">
          Si tienes cualquier duda, escríbenos.  
          Estaremos felices de ayudarte ✨
        </p>
      </section>

      <Footer />
    </div>
  );
}
