function calcularTotal() {
    const quantSingle =
      parseInt(document.getElementById("quantSingle").value) || 0;
    const quantCarrossel =
      parseInt(document.getElementById("quantCarrossel").value) || 0;

    const semanas_no_mes = 4;
    const valorSingle = 30 * quantSingle; // Valor por post Single
    const valorCarrossel = 80 * quantCarrossel; // Valor por post Carrossel

    const total_semana = quantSingle + quantCarrossel;
    const total_mes = total_semana * semanas_no_mes; // Total de posts por mês
    const valor = valorSingle + valorCarrossel; //  Total Valor single e carrossel
    const total_valor = valor * total_semana * semanas_no_mes; // Valor total

    document.getElementById("total_semana").textContent = total_semana;
    document.getElementById("total_mes").textContent = total_mes;
    document.getElementById("total_valor").textContent = total_valor;

    document.getElementById('tabela').style.display = 'block';
}