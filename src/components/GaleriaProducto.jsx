"use client";

import { useState } from "react";
import Image from "next/image";

export default function GaleriaProducto({ imagenes, nombre }) {
  const [imagenActiva, setImagenActiva] = useState(imagenes[0]);

  return (
    <div className="flex flex-col gap-4">
      
      {/* Imagen principal */}
      <div className="relative aspect-square rounded-xl overflow-hidden">
        <Image
          src={imagenActiva}
          alt={nombre}
          fill
          className="object-cover"
        />
      </div>

      {/* Miniaturas */}
      <div className="flex gap-3">
        {imagenes.map((img, index) => (
          <button
            key={index}
            onClick={() => setImagenActiva(img)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden border
              ${imagenActiva === img
                ? "border-blue-950"
                : "border-blue-950/30"}
            `}
          >
            <Image
              src={img}
              alt={`${nombre} ${index}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
