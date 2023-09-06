"use client";
import { calcularTotal } from "@/utils";
import InputNumber from "../components/inputNumber.jsx";

export default function Home() {
  
  return (
    <div className="min-h-screen bg-background_dark flex justify-center items-center p-4">
      <div className="bg-primary p-8 rounded-lg shadow-lg w-full max-w-screen-md">
        <h1 className="text-3xl font-bold text-white mb-6">
          Calculadora de Custos
        </h1>
       <InputNumber/>
        <button
          onClick={() => calcularTotal()}
          className="border border-secondary text-white py-3 px-6 rounded-lg hover:bg-secondary hover:text-primary transition duration-300 ease-in-out"
        >
          Calcular Total
        </button>

        <div className="mt-8 hidden" id="tabela">
          <table className="w-full bg-white text-gray-900 border border-gray-300 rounded-lg">
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
      </div>
    </div>
  );
}
