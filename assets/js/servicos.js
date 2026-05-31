const url = "https://api.franciscosensaulas.com/api/v1/trabalho/orcamentos-detalhados";

const form = document.getElementById("formOrcamento");
const btnSalvar = document.getElementById("btnSalvar");

let idEditando = null;

form.addEventListener("submit", salvarOrcamento);

function salvarOrcamento(event) {
  event.preventDefault();

  const orcamento = {
    descricao: document.getElementById("descricao").value,
    valorEstimado: Number(document.getElementById("valorEstimado").value),
    prazoDias: Number(document.getElementById("prazoDias").value),
    cliente: document.getElementById("cliente").value,
    status: document.getElementById("status").value,
  };

  if (idEditando === null) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orcamento),
    }).then(() => {
      alert("Orçamento cadastrado!");
      limparFormulario();
      listarOrcamentos();
    });
  } else {
    fetch(url + "/" + idEditando, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orcamento),
    }).then(() => {
      alert("Orçamento atualizado!");
      limparFormulario();
      listarOrcamentos();
    });
  }
}

function listarOrcamentos() {
  fetch(url)
    .then((response) => response.json())
    .then((dados) => {
      const tabela = document.getElementById("tabelaOrcamentos");

      tabela.innerHTML = "";

      dados
        .sort((a, b) => {
          if (a.status === "Finalizado" && b.status !== "Finalizado") {
            return 1;
          }
          if (a.status !== "Finalizado" && b.status === "Finalizado") {
            return -1;
          }
          return b.id - a.id;
        })
        .forEach((orcamento) => {
          const classeLinha =
            orcamento.status === "Finalizado" ? "finalizado" : "";

          tabela.innerHTML += `
                <tr class="${classeLinha}">
                    <td>${orcamento.cliente}</td>
                    <td>${orcamento.descricao}</td>
                    <td>R$ ${orcamento.valorEstimado.toFixed(2)}</td>
                    <td>${orcamento.prazoDias} dias</td>
                    <td>${orcamento.status}</td>
                    <td>
                        <button class="btn-editar" onclick="editarOrcamento(${orcamento.id})">
                            Editar
                        </button>
                        <button class="btn-excluir" onclick="excluirOrcamento(${orcamento.id})">
                            Excluir
                        </button>
                    </td>
                </tr>
            `;
        });
    });
}

function editarOrcamento(id) {
  fetch(url + "/" + id)
    .then((response) => response.json())
    .then((orcamento) => {
      document.getElementById("cliente").value = orcamento.cliente;
      document.getElementById("descricao").value = orcamento.descricao;
      document.getElementById("valorEstimado").value = orcamento.valorEstimado;
      document.getElementById("prazoDias").value = orcamento.prazoDias;
      document.getElementById("status").value = orcamento.status;

      idEditando = id;
      btnSalvar.textContent = "Atualizar Orçamento";
    });
}

function excluirOrcamento(id) {
  const confirmar = confirm("Deseja excluir este orçamento?");

  if (confirmar) {
    fetch(url + "/" + id, {
      method: "DELETE",
    }).then(() => {
      alert("Orçamento excluído!");
      listarOrcamentos();
    });
  }
}

function limparFormulario() {
  form.reset();
  idEditando = null;
  btnSalvar.textContent = "Salvar Orçamento";
}

listarOrcamentos();
