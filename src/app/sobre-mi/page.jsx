import Image from "next/image";
import Anuncio from "@/components/Anuncio";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import Link from "next/link";

export const metadata = {
  title: "Sobre mí | Calare",
  description:
    "Conoce la historia detrás de Calare, una marca de joyería creada a mano, pieza por pieza.",
};

export default function SobreMiPage() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <Anuncio />
      <Navbar />

      {/* HERO */}
      <section className="relative w-full h-[80vh] flex items-center">
        <Image
          src="/assets/HerramientasJoyera.jpg" 
          alt="Proceso artesanal de joyería"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/50" />

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-amber-50">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Calare joyas,
            <br /> tu accesorio único
          </h1>

         
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="max-w-5xl mx-auto px-8 py-24 space-y-24">
        {/* TEXTO INTRO */}
        <div className="space-y-6 text-blue-950 font-serif">
          <p className="text-xl leading-relaxed">
            Llegué a la orfebrería el año 2021 por curiosidad, necesidad de reinventarme después de estar años trabajando en una oficina y porque
            siempre, de alguna u otra forma, me confeccionaba algo parecido a una joya, ya sea de tela, mostacillas o tejidas, desde niña que me llamaban la atención.
          </p>

          <p className="text-xl leading-relaxed">
            Aprendí observando, equivocándome y volviendo a intentar.
            Descubrí que trabajar con las manos me obligaba a bajar el ritmo
            y a aceptar que cada pieza tiene su propio tiempo.
          </p>
        </div>

       
        <Timeline />

      
      </section>

      <Footer />
    </div>
  );
}
