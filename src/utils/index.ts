export function calcularTotal(): void {
  const quantSingleElement = document.getElementById("quantSingle") as HTMLInputElement;
  const quantCarrosselElement = document.getElementById("quantCarrossel") as HTMLInputElement;

  // Verifica se os elementos foram encontrados antes de acessar seus valores
  const quantSingle: number = parseInt(quantSingleElement?.value ?? "0", 10);
  const quantCarrossel: number = parseInt(quantCarrosselElement?.value ?? "0", 10);

  const semanas_no_mes: number = 4;
  const valorSingle: number = 30 * quantSingle; // Valor por post Single
  const valorCarrossel: number = 80 * quantCarrossel; // Valor por post Carrossel

  const total_semana: number = quantSingle + quantCarrossel;
  const total_mes: number = total_semana * semanas_no_mes; // Total de posts por mês
  const valor: number = valorSingle + valorCarrossel; //  Total Valor single e carrossel
  const total_valor: number = valor * total_semana * semanas_no_mes; // Valor total

  document.getElementById("total_semana")!.textContent = total_semana.toString();
  document.getElementById("total_mes")!.textContent = total_mes.toString();
  document.getElementById("total_valor")!.textContent = total_valor.toString();

  document.getElementById('tabela')!.style.display = 'block';
}
