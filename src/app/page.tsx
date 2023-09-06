"use client";
import { calcularTotal } from "@/utils";

export default function Home() {
  return (
    <>
      <div className="flex flex-col mx-auto p-4 justify-center py-10">
        <h1 className="text-3xl font-bold mb-4 text-white">
          Calculadora de Custos
        </h1>

        <div className="mb-4 flex space-x-4">
          <div className="flex-grow">
            <label form="quantSingle" className="block text-xl text-white mb-2">
              Quantidade de Posts Single por Semana:
            </label>
            <input
              type="number"
              id="quantSingle"
              min="0"
              className="border-none text-white bg-primary w-full md:w-96 px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="flex-grow">
            <label
              form="quantCarrossel"
              className="block text-xl text-white mb-2"
            >
              Quantidade de Posts Carrossel por Semana:
            </label>
            <input
              type="number"
              id="quantCarrossel"
              min="0"
              className="border-none text-white bg-primary w-full md:w-96 px-3 py-2 border rounded-lg"
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => calcularTotal()}
        className="bg-secondary text-background_dark py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition duration-300 ease-in-out"
      >
        Calcular Total
      </button>
      <div className="mt-8 hidden" id="tabela">
        <table className="mt-2 bg-secondary text-primary border border-primary w-full md:w-1/2 mx-auto">
          <thead>
            <tr className="bg-primary text-white">
              <th className="py-2 px-4">Descrição</th>
              <th className="py-2 px-4">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">Total de posts por semana</td>
              <td className="py-2 px-4 font-semibold" id="total_semana">
                0
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4">Total de posts por mês</td>
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
    </>
  );
}
