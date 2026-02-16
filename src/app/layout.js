
import "./globals.css";
import { Instrument_Serif, Ysabeau } from "next/font/google";
import { CarritoProvider } from "@/context/CarritoContext";
import Providers from "@/components/Providers";
 

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument",
});

const ysabeau = Ysabeau({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ysabeau",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${instrument.variable} ${ysabeau.variable}`}>
        <Providers>
          {children}
          
        </Providers>
        
      </body>
    </html>
  );
}

