"use client";

import { useState } from "react";

export default function CantidadProducto() {
  const [cantidad, setCantidad] = useState(1);

  return (
    <div className="flex items-center gap-4">
      <span className="text-blue-950">
        Cantidad
      </span>

      <div className="flex items-center border border-blue-950">
        <button
          onClick={() => setCantidad(Math.max(1, cantidad - 1))}
          className="px-4 py-2 text-lg font-semibold
    text-blue-950
    hover:bg-rose-300
    transition
    cursor-pointer"
        >
          −
        </button>

        <input
          type="number"
          value={cantidad}
          readOnly
          className="
            w-14 text-center bg-transparent text-blue-950
            appearance-none
          "
        />

        <button
          onClick={() => setCantidad(cantidad + 1)}
          className="px-4 py-2 text-lg font-semibold
    text-blue-950
    hover:bg-rose-300
    transition
    cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
}
