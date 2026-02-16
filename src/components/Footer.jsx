import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-500 b text-amber-50 ">
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-12 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image
            src="/assets/logo-calare.png"
            alt="Calare joyería artesanal"
            width={160}
            height={80}
            priority
            className="h-14 lg:h-20 w-auto"
          />
        </div>

        {/* Menú */}
        <nav className="flex flex-wrap justify-center gap-8 text-xl mb-10 font-serif text-amber-50 ">
          <a href="/" className="hover:text-rose-300 transition">Inicio</a>
          <a href="/terminos-y-condiciones" className="hover:text-rose-300 transition">Términos y Condiciones</a>
          <a href="/faq" className="hover:text-rose-300 transition">Preguntas frecuentes</a>
          <a href="mailto:calare.joyas@gmail.com" className="hover:text-rose-300 transition">Contacto</a>
        </nav>

        {/* Instagram */}
           <div className="flex justify-center mb-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-rose-300 hover:opacity-70 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z" />
              <path d="M12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
              <circle cx="17.25" cy="6.75" r="1.25" />
            </svg>
          </a>
        </div>




        {/* Separador */}
        <div className="border-t border-soft/20 mb-4" />

       
        <div className="flex justify-end text-md opacity-60">
          © {new Date().getFullYear()} Calare. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}
