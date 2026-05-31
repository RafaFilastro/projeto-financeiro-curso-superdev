# TechFix - Sistema de Assistência Técnica

## Descrição do Projeto

O TechFix é um sistema web desenvolvido para auxiliar no gerenciamento de uma assistência técnica de computadores.

O objetivo do sistema é permitir o cadastro e controle de orçamentos de serviços realizados pela empresa, além do gerenciamento dos pagamentos efetuados pelos clientes.

O projeto foi dividido em módulos, permitindo que cada integrante da equipe desenvolvesse uma parte específica do sistema.

---

# Tecnologias Utilizadas

* HTML
* CSS
* JavaScript
* Fetch API
* API REST

---

# Integrante 1 - Módulo de Orçamentos

Responsável pelo desenvolvimento do módulo de orçamentos.

## API Utilizada

```text
https://api.franciscosensaulas.com/api/v1/trabalho/orcamentos-detalhados
```

## Estrutura da API

```json
[
  {
    "id": 0,
    "descricao": "string",
    "valorEstimado": 0,
    "prazoDias": 0,
    "cliente": "string",
    "status": "string"
  }
]
```

## Funcionalidades Desenvolvidas

* Cadastro de orçamento
* Listagem de orçamentos
* Edição de orçamento
* Exclusão de orçamento
* Atualização de status
* Ordenação automática dos orçamentos
* Destaque visual para orçamentos finalizados
* Interface responsiva simples

## Campos do Orçamento

* Cliente
* Descrição do serviço
* Valor estimado
* Prazo em dias
* Status

## Status Disponíveis

* Em análise
* Aguardando aprovação
* Aprovado
* Finalizado

---

# Integrante 2 - Módulo de Pagamentos

Responsável pelo desenvolvimento do módulo de pagamentos.

## API Utilizada

```text
https://api.franciscosensaulas.com/api/v1/trabalho/pagamentos
```

## Estrutura da API

```json
[
  {
    "id": 0,
    "metodoPagamento": "string",
    "valor": 0,
    "transacaoId": 0
  }
]
```

## Funcionalidades Esperadas

* Cadastro de pagamento
* Listagem de pagamentos
* Edição de pagamento
* Exclusão de pagamento
* Consulta de pagamentos realizados

## Campos do Pagamento

* Método de pagamento
* Valor
* Identificador da transação

## Métodos de Pagamento

Exemplos:

* Dinheiro
* PIX
* Cartão de Crédito
* Cartão de Débito
* Transferência Bancária

---

# Objetivo Acadêmico

Este projeto foi desenvolvido para praticar conceitos estudados em sala de aula, incluindo:

* Estruturação de páginas HTML
* Estilização com CSS
* Manipulação do DOM
* Eventos JavaScript
* Consumo de APIs utilizando Fetch
* Operações CRUD
* Organização de dados em tabelas
* Integração entre front-end e APIs REST

---

# Conclusão

O sistema TechFix busca simular o funcionamento básico de uma assistência técnica, permitindo o controle de orçamentos e pagamentos de forma simples e organizada.

O projeto foi dividido em módulos para facilitar o desenvolvimento em equipe e aplicar os conhecimentos adquiridos durante a disciplina.
