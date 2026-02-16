import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import Anuncio from "@/components/Anuncio";
import UltimosAgregados from "@/components/UltimosAgregados";
import About from "@/components/About";
import Suscribete from "@/components/Suscribete";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Anuncio />
    < Navbar />
    <Hero />
    <UltimosAgregados />
    <About />
    <Suscribete />
    < Footer />
    </>
  );
}
