"use client";
import React, { useState } from "react";
import { calcularTotal } from "@/utils";

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
      <div className="mb-6">
        <div className="w-full flex items-center justify-between">
          <label htmlFor="quantSingle" className="text-lg text-white mb-2">
            Quantidade de Posts Single por Semana:
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
              className="hover:border hover:border-secondary w-12 bg-primary text-white px-2 py-1 rounded-lg shadow-md text-center focus:border-secondary focus:ring-2 focus:ring-secondary"
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
      </div>

      <div className="mb-6">
        <div className="w-full flex items-center justify-between">
          <label htmlFor="quantCarrossel" className="text-lg text-white mb-2">
            Quantidade de Posts Carrossel por Semana:
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
              className="hover:border hover:border-secondary w-12 bg-primary text-white px-2 py-1 rounded-lg shadow-md text-center focus:border-secondary focus:ring-2 focus:ring-secondary"
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
        <div className="mb-6">
          <button
            onClick={handleCalculateTotal}
            className="border border-secondary text-white py-3 px-6 rounded-lg hover:bg-secondary hover:text-primary transition duration-300 ease-in-out"
          >
            Calcular Total
          </button>
        </div>
        {showWarning && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal-overlay fixed inset-0 bg-neutral-900 opacity-50"></div>
            <div className="modal-content overflow-auto bg-background_dark text-white w-96 p-6 rounded-lg shadow-lg shadow-primary z-0">
              <div className="text-center">
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
                <p className="text-lg text-white mt-2">
                  Pelo menos um campo deve ter um valor para calcular.
                </p>
                <button
                  onClick={() => setShowWarning(false)}
                  className="bg-red-500 hover:bg-red-600 text-white text-lg font-semibold px-4 py-2 mt-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
