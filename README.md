# TechFix - Sistema de Assistência Técnica

## Descrição do Projeto

O TechFix é um sistema web desenvolvido para gerenciar uma assistência técnica de computadores.

O objetivo é controlar:

- Ordens de serviço
- Vendas de produtos
- Histórico de atendimentos
- Faturamento da empresa

O projeto utilizará duas APIs:

### Serviços

```http
https://api.franciscosensaulas.com/api/v1/trabalho/serviço
```

### Vendas

```http
https://api.franciscosensaulas.com/api/v1/trabalho/vendas
```

---

# Divisão da Equipe

## Integrante 1 - Módulo de Serviços

Responsável por:

- Criar serviços
- Listar serviços
- Editar serviços
- Excluir serviços
- Filtrar serviços por status

### Estrutura do Serviço

```json
{
  "cliente": "João Silva",
  "telefone": "(47)99999-9999",
  "equipamento": "Notebook Acer Nitro",
  "problema": "Notebook não liga",
  "tecnico": "Rafael",
  "valorServico": 150,
  "status": "Em análise",
  "dataEntrada": "2026-05-29"
}
```

### Status Possíveis

- Em análise
- Aguardando peça
- Em manutenção
- Finalizado
- Cancelado

---

## Integrante 2 - Módulo de Vendas

Responsável por:

- Criar vendas
- Listar vendas
- Editar vendas
- Excluir vendas
- Filtrar vendas

### Estrutura da Venda

```json
{
  "cliente": "João Silva",
  "produto": "SSD Kingston 480GB",
  "quantidade": 1,
  "valorUnitario": 220,
  "formaPagamento": "Pix",
  "status": "Pago"
}
```

### Produtos Utilizados no Projeto

- SSD
- HD
- Memória RAM
- Fonte
- Mouse
- Teclado
- Monitor
- Placa de Rede

---

# Funcionalidades

## Dashboard

A tela inicial deverá apresentar indicadores da empresa.

### Cards

- Serviços em andamento
- Serviços finalizados
- Total de vendas
- Faturamento geral

Exemplo:

```text
Serviços em andamento: 5
Serviços finalizados: 12
Total de vendas: R$ 3.250
Faturamento total: R$ 5.800
```

---

# Tela de Serviços

## Cadastro

Campos:

- Nome do Cliente
- Telefone
- Equipamento
- Problema Relatado
- Técnico Responsável
- Valor do Serviço
- Status
- Data de Entrada

## Listagem

Tabela contendo:

| Cliente | Equipamento | Problema | Status |
|----------|------------|-----------|---------|
| João | Acer Nitro | Não liga | Em análise |
| Carlos | Dell | Tela quebrada | Finalizado |

## Edição

Permitir alterar:

- Status
- Valor
- Técnico responsável
- Problema relatado

## Exclusão

Remover registros com confirmação.

---

# Tela de Vendas

## Cadastro

Campos:

- Cliente
- Produto
- Quantidade
- Valor Unitário
- Forma de Pagamento
- Status

## Listagem

| Cliente | Produto | Valor |
|----------|----------|--------|
| João | SSD Kingston | R$220 |
| Carlos | Mouse Gamer | R$89 |

## Edição

Permitir alterar:

- Quantidade
- Valor
- Forma de pagamento
- Status

## Exclusão

Remover vendas com confirmação.

---

# Fluxo Real do Sistema

Cliente leva um notebook para manutenção.

### Serviço

```text
Cliente: João Silva
Problema: Notebook lento
Serviço: Formatação e instalação de SSD
Valor: R$120
```

### Venda

```text
Produto: SSD Kingston 480GB
Valor: R$220
```

### Resultado

```text
Serviço: R$120
Produto: R$220
Total: R$340
```

---

# Tecnologias Sugeridas

## Front-end

- HTML5
- CSS3
- JavaScript

## Consumo de API

- Fetch API

## Versionamento

- Git
- GitHub

---

# Funcionalidades Extras

Para ganhar destaque na apresentação:

- Pesquisa por cliente
- Filtro por status
- Dashboard com totais automáticos
- Tema Dark/Light
- Layout responsivo
- Mensagens de sucesso e erro
- Validação de formulários

---

# Objetivo Acadêmico

Demonstrar o uso de:

- CRUD completo
- Consumo de API REST
- Manipulação do DOM
- Organização de código JavaScript
- Trabalho em equipe
- Integração entre módulos diferentes
