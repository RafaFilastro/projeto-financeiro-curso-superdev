# TechFix - Sistema de Assistência Técnica

## Integrantes

* Rafael Filastro
* Guilherme

---

# Sobre o Projeto

O TechFix é um sistema web desenvolvido para auxiliar no gerenciamento de uma assistência técnica de computadores.

O sistema permite o cadastro, consulta, atualização e exclusão de orçamentos de serviços, além do gerenciamento de vendas realizadas pela empresa.

O objetivo do projeto é aplicar os conhecimentos adquiridos durante a disciplina, utilizando HTML, CSS, JavaScript e integração com APIs REST.

---

# Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* Fetch API
* APIs REST
* Manipulação do DOM

---

# Funcionalidades do Sistema

## Dashboard

A tela inicial apresenta um painel com informações resumidas do sistema:

* Quantidade de orçamentos em andamento
* Quantidade de orçamentos finalizados
* Total de vendas realizadas
* Faturamento geral

Também possui atalhos rápidos para os módulos:

* Orçamentos
* Vendas

---

# Integrante 1 - Rafael Filastro

## Módulo de Orçamentos

Responsável pelo desenvolvimento completo do módulo de orçamentos.

### API Utilizada

```text
https://api.franciscosensaulas.com/api/v1/trabalho/orcamentos-detalhados
```

### Estrutura da API

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

### Funcionalidades Implementadas

* Cadastro de orçamento
* Listagem de orçamentos
* Edição de orçamento
* Exclusão de orçamento
* Atualização de status
* Ordenação automática dos registros
* Destaque visual para orçamentos finalizados
* Interface responsiva e organizada

### Campos do Orçamento

* Cliente
* Descrição do serviço
* Valor estimado
* Prazo em dias
* Status

### Status Disponíveis

* Em análise
* Aguardando aprovação
* Aprovado
* Finalizado

### Regras Implementadas

* Os orçamentos mais recentes aparecem primeiro.
* Orçamentos finalizados são movidos automaticamente para o final da lista.
* Orçamentos finalizados recebem destaque visual com aparência riscada.

---

# Integrante 2 - Guilherme

## Módulo de Vendas

Responsável pelo desenvolvimento do módulo de vendas.

### API Utilizada

```text
https://api.franciscosensaulas.com/api/v1/trabalho/vendas
```

### Funcionalidades Implementadas

* Cadastro de vendas
* Listagem de vendas
* Edição de vendas
* Exclusão de vendas
* Controle de produtos vendidos

### Campos da Venda

* Produto
* Quantidade
* Valor Total

### Produtos Disponíveis

* SSD
* HD
* Memória RAM
* Fonte
* Mouse
* Teclado
* Monitor
* Placa de Rede

---

# Estrutura do Projeto

```text
TechFix
│
├── index.html
├── orcamentos.html
├── vendas.html
│
├── assets
│   ├── css
│   │   └── style.css
│   │
│   └── js
│       ├── dashboard.js
│       ├── servicos.js
│       └── vendas.js
```

---

# Objetivos de Aprendizagem

Durante o desenvolvimento do projeto foram aplicados os seguintes conceitos:

* Estruturação de páginas HTML
* Estilização com CSS
* Manipulação de elementos com JavaScript
* Eventos de formulário
* Operações CRUD
* Consumo de APIs utilizando Fetch
* Manipulação de JSON
* Organização de informações em tabelas
* Integração entre páginas

---

# Demonstração do Sistema

Fluxo principal da aplicação:

1. Acessar o Dashboard.
2. Visualizar os indicadores gerais.
3. Cadastrar um orçamento.
4. Editar informações do orçamento.
5. Alterar o status do serviço.
6. Finalizar um orçamento.
7. Registrar vendas de produtos.
8. Consultar os registros cadastrados.

---

# Conclusão

O TechFix foi desenvolvido com o objetivo de simular o funcionamento básico de uma assistência técnica, permitindo o gerenciamento de orçamentos e vendas de forma simples, organizada e intuitiva.

O projeto possibilitou a aplicação prática dos conteúdos estudados em sala de aula, especialmente conceitos relacionados ao desenvolvimento web e integração com APIs.
