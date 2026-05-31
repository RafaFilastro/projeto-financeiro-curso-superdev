const urlOrcamentos = "https://api.franciscosensaulas.com/api/v1/trabalho/orcamentos-detalhados";
const urlVendas = "https://api.franciscosensaulas.com/api/v1/trabalho/vendas";

function carregarDashboard() {
  Promise.all([
    fetch(urlOrcamentos).then((r) => r.json()),
    fetch(urlVendas).then((r) => r.json()),
  ]).then(([orcamentos, vendas]) => {

    // Conta orçamentos em andamento
    const emAndamento = orcamentos.filter((o) => o.status !== "Finalizado").length;

    // Conta orçamentos finalizados
    const finalizados = orcamentos.filter((o) => o.status === "Finalizado").length;

    // Soma o valor total de todas as vendas
    const totalVendas = vendas.reduce((soma, v) => soma + v.valorTotal, 0);

    // Soma os orçamentos finalizados
    const totalOrcamentosFinalizados = orcamentos
      .filter((o) => o.status === "Finalizado")
      .reduce((soma, o) => soma + o.valorEstimado, 0);

    // Faturamento geral = vendas + orçamentos finalizados
    const faturamento = totalVendas + totalOrcamentosFinalizados;

    // Atualiza os cards
    document.getElementById("orcamentosAndamento").textContent = emAndamento;
    document.getElementById("orcamentosFinalizados").textContent = finalizados;
    document.getElementById("totalVendas").textContent = totalVendas.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    document.getElementById("faturamentoGeral").textContent = faturamento.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  }).catch((error) => {
    console.error("Erro ao carregar dashboard: " + error);
    alert("Ocorreu um erro ao carregar o dashboard.");
  });
}

carregarDashboard();