# NPS Report

## Objetivo

A aplicação tem como objetivo coletar e analisar o Net Promoter Score (NPS) com base nas respostas dos clientes. Através de uma interface intuitiva, os usuários poderão visualizar relatórios detalhados sobre a satisfação e lealdade dos clientes, identificando áreas de melhoria e oportunidades de crescimento. A solução permite a coleta automatizada de feedback, processamento dos dados em tempo real e geração de insights estratégicos para a tomada de decisão.

---

# Estrutura

**1. Tela de Cadastro da Pesquisa**

- Permite a criação de novas pesquisas de NPS, onde o usuário pode definir perguntas e critérios de avaliação.

- Possibilita o envio das pesquisas para os clientes, garantindo a coleta de feedbacks em tempo real.

- Exibe um histórico das pesquisas cadastradas, facilitando o gerenciamento e acompanhamento das respostas.

**2. Tela de Dashboard**
**Apresenta um painel visual com gráficos e métricas sobre os resultados das pesquisas de NPS.**

- Exibe o cálculo do NPS, segmentação de clientes (Promotores, Neutros e Detratores) e tendências ao longo do tempo.

- Permite analisar os dados para identificar padrões e oportunidades de melhoria na experiência do cliente.

## Cálculo do Net Promoter Score (NPS)

1. **Classificação dos Respondentes:**

   - Os respondentes da pesquisa são categorizados em três grupos com base na nota (nu_rating) atribuída:
     - **Promotores:** Respondentes que deram uma nota igual ou superior a 4.
     - **Detratores:** Respondentes que deram uma nota igual ou inferior a 2.
     - **Neutros:** Respondentes que deram uma nota intermediária entre essas duas classificações. Esses não influenciam diretamente no cálculo do NPS.

2. **Agregação de Dados:**

   - Para cada produto, são calculados:
     - O total de promotores (nu_promotor).
     - O total de detratores (nu_detrator).
     - O total geral de respostas (nu_count_total).

3. **Cálculo das Percentagens:**

   - Percentual de promotores:

     Pct_Promotor = (nu_promotor \* 100) / (nu_count_total)

   - Percentual de detratores:

     Pct_Detrator = (nu_detrator \* 100) / (nu_count_total)

4. **Fórmula do NPS:**

   - O NPS é calculado subtraindo o percentual de detratores do percentual de promotores:NPS = Pct_Promotor - Pct_Detrator

5. **Ordenação:**

   - Os produtos são listados em ordem decrescente do NPS para priorizar aqueles com maior índice de satisfação.

---

**3. Tela Home**
**Funciona como a página inicial da aplicação, oferecendo um resumo das pesquisas ativas e principais métricas.**

- Direciona os usuários para diferentes funcionalidades, como o cadastro de novas pesquisas e a visualização do dashboard.

---

# Intalação de Sistema

## 🐘 Instalação do Banco de Dados PostgreSQL com Docker

Este documento orienta a instalação e configuração do banco de dados PostgreSQL utilizando Docker e Docker Compose.

## ✅ Requisitos

Antes de começar, certifique-se de ter os seguintes pré-requisitos instalados:

- [🐳 Docker](https://www.docker.com/get-started)
- [📦 Docker Compose](https://docs.docker.com/compose/install/)

## 🚀 Passos para Instalação

1. **Acesse a pasta correta**

   ```sh
   cd /database
   ```

2. **Verifique se você já tem um PostgreSQL rodando na sua máquina local** ⚠️

   - Caso tenha, **pare o serviço** para evitar conflitos de porta:
     - **Windows:** Pare o serviço PostgreSQL no Gerenciador de Tarefas ou execute:
       ```sh
       net stop postgresql
       ```
     - **Linux/macOS:** Use o comando:
       ```sh
       sudo systemctl stop postgresql
       ```

3. **Suba o banco de dados utilizando o Docker Compose**

   ```sh
   docker-compose up -d
   ```

   Isso iniciará o PostgreSQL em um container no Docker.

4. **Verifique se o container está rodando** 🏃‍♂️

   ```sh
   docker ps
   ```

   Você deverá ver um container chamado `nps_db` em execução.

5. **Acesse o banco de dados** 🔗

   ```sh
   docker exec -it nps_db psql -U admin -d nps
   ```

6. **Para parar o banco de dados** 🛑
   ```sh
   docker-compose down
   ```

## 📌 Persistência de Dados

Os dados do banco são armazenados no volume `postgres_data`, garantindo que os dados não sejam perdidos ao reiniciar o container.

---

# Backend

O backend terá a instrução de instalção dentro da pasta **backend** **`/backend`**

# Frontend
O frontend terá a instrução de instalção dentro da pasta **frontend** **`/frontend`**
