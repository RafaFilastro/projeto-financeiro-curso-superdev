const url = "https://api.franciscosensaulas.com/api/v1/trabalho/vendas";

const form = document.getElementById("formVenda");
const btnSalvar = document.getElementById("btnSalvar");

let idEditando = null;

form.addEventListener("submit", salvarVenda);

function salvarVenda(event) {
  event.preventDefault();

  const venda = {
    produto: document.getElementById("produto").value,
    quantidade: Number(document.getElementById("quantidade").value),
    valorTotal: Number(document.getElementById("valorTotal").value),
  };

  if (!venda.produto) {
    alert("Selecione um produto.");
    return;
  }

  if (idEditando === null) {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(venda),
    }).then((response) => {
      if (response.status === 201) {
        alert("Venda cadastrada!");
        limparFormulario();
        listarVendas();
      } else {
        alert("Não foi possível cadastrar a venda.");
      }
    });
  } else {
    fetch(url + "/" + idEditando, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(venda),
    }).then((response) => {
      if (response.status === 204) {
        alert("Venda atualizada!");
        limparFormulario();
        listarVendas();
      } else {
        alert("Não foi possível atualizar a venda.");
      }
    });
  }
}

function listarVendas() {
  fetch(url)
    .then((response) => response.json())
    .then((dados) => {
      const tabela = document.getElementById("tabelaVendas");
      tabela.innerHTML = "";

      dados.forEach((venda) => {
        const valorFormatado = venda.valorTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        tabela.innerHTML += `
          <tr>
            <td>${venda.produto}</td>
            <td>${venda.quantidade}</td>
            <td>${valorFormatado}</td>
            <td>
              <button class="btn-editar" onclick="editarVenda(${venda.id})">Editar</button>
              <button class="btn-excluir" onclick="excluirVenda(${venda.id})">Excluir</button>
            </td>
          </tr>
        `;
      });
    });
}

function editarVenda(id) {
  fetch(url + "/" + id)
    .then((response) => response.json())
    .then((venda) => {
      document.getElementById("produto").value = venda.produto;
      document.getElementById("quantidade").value = venda.quantidade;
      document.getElementById("valorTotal").value = venda.valorTotal;

      idEditando = id;
      btnSalvar.textContent = "Atualizar Venda";
    });
}

function excluirVenda(id) {
  const confirmar = confirm("Deseja excluir esta venda?");
  if (confirmar) {
    fetch(url + "/" + id, { method: "DELETE" }).then((response) => {
      if (response.status === 204) {
        alert("Venda excluída!");
        listarVendas();
      } else {
        alert("Não foi possível excluir a venda.");
      }
    });
  }
}

function limparFormulario() {
  form.reset();
  idEditando = null;
  btnSalvar.textContent = "Salvar Venda";
}

listarVendas();