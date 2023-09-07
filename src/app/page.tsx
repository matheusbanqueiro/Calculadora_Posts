"use client";
import InputNumber from "../components/inputNumber.tsx";
import { useState } from "react";

export default function Home() {
  const [showTable, setShowTable] = useState(false);

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <div className="bg-primary p-8 rounded-xl shadow-lg w-full max-w-screen-md">
      <h1 className="text-2xl font-bold text-white mb-6">
        Calculadora de Custos
      </h1>
      <InputNumber />

      <div className=" " id="tabela" style={{ display: showTable ? "block" : "none" }}>
        <div className="right-80 absolute">
          <button
            className="cursor-pointer rounded-full shadow-sm bg-red-500 hover:bg-red-600 flex justify-center items-center w-8 h-8"
            onClick={toggleTable}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <table className="w-full bg-primary text-white rounded-xl shadow-2xl">
          <thead>
            <tr className="bg-secondary text-primary rounded-xl">
              <th className="py-2 px-4">Descrição</th>
              <th className="py-2 px-4">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">Posts por semana</td>
              <td className="py-2 px-4 font-semibold" id="total_semana">
                0
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4">Posts por mês</td>
              <td className="py-2 px-4 font-semibold" id="total_mes">
                0
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4">Valor Total</td>
              <td className="py-2 px-4 font-semibold" id="total_valor">
                0
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
