"use client";
import React from "react";

type ButtonProps = {
  onClick: () => void; // Especifica o tipo da prop onClick como uma função sem retorno
};

function Button({ onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="border border-secondary text-white py-3 w-full px-6  rounded-lg hover:bg-secondary hover:text-primary transition duration-300 ease-in-out"
    >
      Calcular Total
    </button>
  );
}

export default Button;
