import React, { useState } from 'react';

export default function inputNumber() {
  const [quantSingle, setQuantSingle] = useState(0);
  const [quantCarrossel, setQuantCarrossel] = useState(0);

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

  return (
    <div>
      <div className="mb-6">
        <div className="w-full flex items-center justify-between">
          <label htmlFor="quantSingle" className="text-lg text-white mb-2">
            Quantidade de Posts Single por Semana:
          </label>
          <div className="flex items-center">
            <button
              onClick={decrementQuantSingle}
              className="bg-white text-primary p-2 rounded-full mr-2"
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
              id="quantSingle"
              min="0"
              value={quantSingle}
              readOnly
              style={{
                appearance: "textfield",
                MozAppearance: "textfield",
              }}
              className="w-12 bg-primary text-white px-2 py-1 rounded-lg shadow-md text-center"
            />

            <button
              onClick={incrementQuantSingle}
              className="bg-white text-primary p-2 rounded-full ml-2"
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
              className="bg-white text-primary p-2 rounded-full mr-2"
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
              id="quantSingle" // Note que aqui está 'quantSingle', você pode corrigir para 'quantCarrossel'
              min="0"
              value={quantCarrossel}
              readOnly
              style={{
                appearance: "textfield",
                MozAppearance: "textfield",
              }}
              className="w-12 bg-primary text-white px-2 py-1 rounded-lg shadow-md text-center"
            />

            <button
              onClick={incrementQuantCarrossel}
              className="bg-white text-primary p-2 rounded-full ml-2"
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
    </div>
  );
}
