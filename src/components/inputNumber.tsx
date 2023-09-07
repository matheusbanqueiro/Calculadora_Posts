"use client";
import React, { useState } from "react";
import { calcularTotal } from "@/utils";
import Button from "./button";

export default function inputNumber() {
  const [quantSingle, setQuantSingle] = useState(0);
  const [quantCarrossel, setQuantCarrossel] = useState(0);
  const [showWarning, setShowWarning] = useState(false); // Novo estado para mostrar a mensagem de erro

  const incrementQuantSingle = () => {
    setQuantSingle(quantSingle + 1);
  };

  const decrementQuantSingle = () => {
    if (quantSingle > 0) {
      setQuantSingle(quantSingle - 1);
    }
  };

  const incrementQuantCarrossel = () => {
    setQuantCarrossel(quantCarrossel + 1);
  };

  const decrementQuantCarrossel = () => {
    if (quantCarrossel > 0) {
      setQuantCarrossel(quantCarrossel - 1);
    }
  };

  const handleCalculateTotal = () => {
    if (quantSingle === 0 && quantCarrossel === 0) {
      setShowWarning(true); // Mostra a mensagem de erro
    } else {
      setShowWarning(false); // Oculta a mensagem de erro
      calcularTotal(); // Faça o cálculo aqui
    }
  };
  return (
    <>
      <div className="mb-6 flex ">
        <div className="w-1/2 flex items-center justify-between mr-4 flex-col ">
          <label htmlFor="quantSingle" className="text-lg text-white mb-2">
            Posts Single
          </label>
          <div className="flex items-center">
            <button
              onClick={decrementQuantSingle}
              className="hover:bg-secondary bg-white text-primary p-2 rounded-full mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 12H4"
                />
              </svg>
            </button>
            <input
              type="number"
              id="quantSingle" // Deve ser "quantSingle" para o campo Single
              min="0"
              value={quantSingle}
              readOnly
              style={{
                appearance: "textfield",
                MozAppearance: "textfield",
              }}
              className="hover:border hover:border-secondary border border-primary w-12 bg-primary text-white px-2 py-1 rounded-lg shadow-md text-center focus:border-secondary focus:ring-2 focus:ring-secondary"
            />
            <button
              onClick={incrementQuantSingle}
              className="hover:bg-secondary bg-white text-primary p-2 rounded-full ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-between flex-col">
          <label htmlFor="quantCarrossel" className="text-lg text-white mb-2">
            Posts Carrossel
          </label>
          <div className="flex items-center">
            <button
              onClick={decrementQuantCarrossel}
              className="hover:bg-secondary bg-white text-primary p-2 rounded-full mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 12H4"
                />
              </svg>
            </button>
            <input
              type="number"
              id="quantCarrossel" // Deve ser "quantCarrossel" para o campo Carrossel
              min="0"
              value={quantCarrossel}
              readOnly
              style={{
                appearance: "textfield",
                MozAppearance: "textfield",
              }}
              className="hover:border hover:border-secondary border border-primary w-12 bg-primary text-white px-2 py-1 rounded-lg shadow-md text-center focus:border-secondary focus:ring-2 focus:ring-secondary"
            />

            <button
              onClick={incrementQuantCarrossel}
              className="hover:bg-secondary bg-white text-primary p-2 rounded-full ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <Button onClick={handleCalculateTotal} />
      </div>
      {showWarning && (
        <div className="fixed inset-0 flex flex-col-reverse md:flex-row items-center justify-center z-50">
          <div className="modal-overlay fixed inset-0 bg-neutral-900 opacity-50"></div>
          <div className="modal-content overflow-auto bg-background_light text-primary w-80 p-6 rounded-lg z-0 absolute">
            <div className="text-center top-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-red-500 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
              <p className="text-2xl font-semibold mt-4">
                Oops! Parece que há um problema.
              </p>
              <p className="text-lg text-primary mt-2">
                Pelo menos um campo deve ter um valor para calcular.
              </p>
            </div>
            <div className="absolute top-0 right-0">
              <div className="cursor-pointer rounded-full bg-red-500 hover:bg-red-600 flex justify-center items-center w-12 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => setShowWarning(false)}
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
