"use client";

import { CarritoProvider } from "@/context/CarritoContext";
import CarritoDrawer from "@/components/CarritoDrawer";

export default function Providers({ children }) {
  return (
    <CarritoProvider>
      {children}
      <CarritoDrawer />
    </CarritoProvider>
  );
}
