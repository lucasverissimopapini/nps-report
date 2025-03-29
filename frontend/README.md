# NPS Report (Frontend)

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

## Primeiros passos

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abrir [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

Você pode começar a editar a página modificando `app/page.tsx`. A página é atualizada automaticamente à medida que você edita o arquivo.

Esse projeto usa [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para otimizar e carregar automaticamente [Geist](https://vercel.com/font), uma nova família de fontes para a Vercel.

## 🚀 Frameworks Utilizados na Aplicação

### Nextjs

Este é um [Next.js](https://nextjs.org) projeto inicializado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Para saber mais sobre o Next.js, dê uma olhada nos seguintes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - Saiba mais sobre o Next.js
  recursos e API.
- [Learn Next.js](https://nextjs.org/learn) - um tutorial interativo do Next.js.


Esta aplicação utiliza diversas bibliotecas e frameworks para garantir uma experiência fluida, moderna e eficiente. Abaixo estão os principais:

### 🔗 Axios

📌 **O que é?**
Axios é uma biblioteca JavaScript para fazer requisições HTTP. Ele permite buscar e enviar dados para APIs de forma simples e eficiente.

⚡ **Principais recursos:**
- Suporte para Promises
- Interceptadores de requisição e resposta
- Suporte para cancelamento de requisições
- Funciona no navegador e no Node.js

🔧 **Instalação:**
```sh
npm install axios
```

📖 **Documentação:** [Axios](https://axios-http.com/)

---

### 🎨 Tailwind CSS 4

📌 **O que é?**
Tailwind CSS é um framework de estilização baseado em classes utilitárias, que permite criar designs responsivos e modernos rapidamente.

⚡ **Principais recursos:**
- Estilização rápida sem precisar criar arquivos CSS personalizados
- Altamente personalizável
- Suporte para temas escuros e responsividade

🔧 **Instalação:**
```sh
npm install tailwindcss
```

📖 **Documentação:** [Tailwind CSS](https://tailwindcss.com/)

---

### 📊 ApexCharts + React-ApexCharts

📌 **O que é?**
ApexCharts é uma biblioteca para a criação de gráficos interativos e responsivos. O **React-ApexCharts** é um wrapper que permite usar ApexCharts no React.

⚡ **Principais recursos:**
- Gráficos altamente interativos e responsivos
- Suporte para vários tipos de gráficos (linha, barra, pizza, área, etc.)
- Fácil integração com React

🔧 **Instalação:**
```sh
npm install apexcharts react-apexcharts
```

📖 **Documentação:** [ApexCharts](https://apexcharts.com/)

---

### 🎭 Framer Motion

📌 **O que é?**
Framer Motion é uma biblioteca para animações no React, facilitando a criação de transições suaves e interações dinâmicas.

⚡ **Principais recursos:**
- Animações fluidas e fáceis de implementar
- Suporte para gestos e interações
- Ótima performance com React

🔧 **Instalação:**
```sh
npm install framer-motion
```

📖 **Documentação:** [Framer Motion](https://www.framer.com/motion/)

---

## 📁 Estrutura de Pastas do Projeto

Este documento explica a estrutura de pastas do projeto e a finalidade de cada diretório e arquivo.

### 🌳 Estrutura Geral

```
frontend/
│── src/
│   │── app/
│   │   │── favicon.ico
│   │   │── globals.css
│   │   │── layout.tsx
│   │   │── page.tsx
│   │
│   │── components/
│   │   │── Alert/
│   │   │── Dashboard/
│   │   │── Layout/
│   │   │── Pagination/
│   │
│   │── context/
│   │   │── AlertContext.tsx
│   │   │── LoadingContext.tsx
│   │
│   │── models/
│   │   │── DashboardModel.ts
│   │   │── SurveyModels.ts
│   │
│   │── services/
│   │   │── DashboardServices.ts
│   │   │── SurveyServices.ts
│   │
│   │── utils/
│   │   │── axios.ts
```

## 📂 Descrição das Pastas

### 🏠 `app/`
Contém os arquivos principais da aplicação, incluindo a estrutura base e estilos globais.

- `favicon.ico`: Ícone da aplicação.
- `globals.css`: Arquivo de estilos globais.
- `layout.tsx`: Componente de layout que define a estrutura visual da aplicação.
- `page.tsx`: Página principal da aplicação.

### 🎨 `components/`
Contém os componentes reutilizáveis da aplicação.

- `Alert/`: Componentes relacionados a alertas e notificações.
- `Dashboard/`: Componentes do dashboard.
- `Layout/`: Componentes relacionados à estrutura da página.
- `Pagination/`: Componentes para paginação de listas e tabelas.

### 🎭 `context/`
Gerencia o estado global da aplicação utilizando o Context API do React.

- `AlertContext.tsx`: Gerencia alertas globais da aplicação.
- `LoadingContext.tsx`: Gerencia estados de carregamento.

### 🗂 `models/`
Contém os modelos TypeScript utilizados para tipagem dos dados na aplicação.

- `DashboardModel.ts`: Modelos utilizados no dashboard.
- `SurveyModels.ts`: Modelos de dados das pesquisas.

### 🔌 `services/`
Camada responsável por lidar com as requisições à API.

- `DashboardServices.ts`: Serviços para interagir com os dados do dashboard.
- `SurveyServices.ts`: Serviços relacionados às pesquisas.

### 🔧 `utils/`
Contém utilitários e configurações globais.

- `axios.ts`: Configuração do Axios para chamadas HTTP.

---

## 👨‍💻 Author

* **Lucas Papini** - [lucas.verissimo.souza@hotmail.com](mailto:lucas.verissimo.souza@hotmail.com) - 🤖💻

