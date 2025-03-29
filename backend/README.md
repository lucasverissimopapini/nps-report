# NPS Report (Backend)

## Descrição

A aplicação tem como objetivo coletar e analisar o Net Promoter Score (NPS) com base nas respostas dos clientes. Através de uma interface intuitiva, os usuários poderão visualizar relatórios detalhados sobre a satisfação e lealdade dos clientes, identificando áreas de melhoria e oportunidades de crescimento. A solução permite a coleta automatizada de feedback, processamento dos dados em tempo real e geração de insights estratégicos para a tomada de decisão.

### Este backend foi desenvolvido utilizando **NestJS** e requer **Node.js 18+** para funcionar corretamente. Ele utiliza o **PrismaJS** para gerenciar a conexão com o banco de dados **PostgreSQL**.

## Configuração do projeto

```bash
$ npm install
```

## Compilar e executar o projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Executar testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Implantação

Quando você estiver pronto para implantar seu aplicativo NestJS na produção, há algumas etapas importantes que podem ser seguidas para garantir que ele seja executado da forma mais eficiente possível. Consulte a [documentação de implantação] (https://docs.nestjs.com/deployment) para obter mais informações.

Se estiver procurando uma plataforma baseada em nuvem para implantar seu aplicativo NestJS, confira [Mau](https://mau.nestjs.com), nossa plataforma oficial para implantar aplicativos NestJS no AWS. O Mau torna a implantação direta e rápida, exigindo apenas algumas etapas simples:

```bash
$ npm install -g mau
$ mau deploy
```

Com o Mau, você pode implantar seu aplicativo com apenas alguns cliques, permitindo que você se concentre na criação de recursos em vez de gerenciar a infraestrutura.

## 🔐 Segurança

Para reforçar a segurança da API, é necessário enviar um **Bearer Token** no header das requisições. Sem este token, as chamadas serão bloqueadas.

🔑 **Token Fixo:** `6b73f2c77cb2cca1135b3c4aa5a049ff`

Exemplo de requisição com o token:

```bash
curl -X GET "http://localhost:3001/api/exemplo" \
     -H "Authorization: Bearer 6b73f2c77cb2cca1135b3c4aa5a049ff"
```

## 🚪 Porta e Prefixo da API

A API roda na porta **`3001`** e todas as rotas possuem o prefixo:

```
/api
```

Exemplo de rota completa:

```
http://localhost:3001/api/users
```

## 📂 Estrutura de Pastas

📌 Aqui está a estrutura de pastas que o projeto segue:

```bash
  |-- src
    |-- core
        |-- [+] guards
        |-- [+] interceptors
        |-- [+] interfaces
        |-- [+] layouts
        |-- [+] config
    |-- modules
        |-- autenticacao
            |-- dto
                |-- create-account.dto.ts
            |-- interfaces
                |-- autenticacao.interface.ts
            |-- autenticacao.controller.ts
            |-- autenticacao.controller.spec.ts
            |-- autenticacao.service.ts
            |-- autenticacao.service.spec.ts
            |-- autenticacao.module.ts
    |-- shared
        |-- [+] validators
        |-- [+] pipes
        |-- [+] directives
        |-- [+] interfaces
        |-- [+] services
        |-- [+] enums
|-- app.service.ts
|-- app.controller.ts
|-- app.module.ts
|-- main.ts
```

### **CORE**:

A pasta core normalmente contém componentes fundamentais e reutilizáveis que são essenciais para o funcionamento do aplicativo.

- **Guards**: Aqui você colocaria os guards do NestJS, que são usados para proteger rotas e endpoints.
- **Interceptors**: Esta pasta seria usada para armazenar interceptors, que são responsáveis por interceptar e possivelmente modificar a requisição ou a resposta dentro do pipeline do NestJS.
- **Interfaces**: Contém interfaces que definem a estrutura dos dados usados no aplicativo.
- **Layouts**: Se você estiver utilizando layouts compartilhados em sua aplicação, eles podem ser colocados aqui.
- **Config**: Esta pasta pode conter arquivos de configuração compartilhados ou utilitários de configuração.

### **MODULES**:

A pasta modules normalmente contém módulos específicos da aplicação que encapsulam funcionalidades relacionadas.

- Cada módulo é autocontido e pode conter controladores, serviços, módulos, e outros arquivos necessários para essa funcionalidade específica.
- No exemplo fornecido, há um módulo chamado autenticacao, que provavelmente lida com a autenticação de usuários.
- Dentro deste módulo, existem arquivos como controladores (autenticacao.controller.ts), serviços (autenticacao.service.ts), DTOs (create-account.dto.ts), e outros relacionados à autenticação.

### **SHARED**:

A pasta shared é destinada a armazenar funcionalidades, utilitários e lógica de negócios compartilhados entre diferentes partes do aplicativo.

- **Validators**: Contém validadores personalizados que podem ser reutilizados em vários lugares do aplicativo.
- **Pipes**: Aqui você pode armazenar pipes reutilizáveis para validar e transformar dados nas rotas.
- **Directives**: Se você estiver usando diretivas personalizadas, elas podem ser armazenadas aqui.
- **Interfaces**: Interfaces compartilhadas que são usadas em vários módulos do aplicativo.
- **Services**: Serviços compartilhados que fornecem funcionalidades comuns para diferentes partes do aplicativo.
- **Enums**: Enums que são utilizados em várias partes do aplicativo.

Essa estrutura ajuda a manter o código organizado, facilita a reutilização e promove a escalabilidade do projeto. Cada pasta tem sua função específica e ajuda na manutenção e no desenvolvimento do aplicativo.

## Padrões do Projeto

1. Retorno em rotas de listagens:
   ```ts
   {
       status: 000, // Numérico - HTTP Status Codes
       message: 'Alguma mensagem',
       suggestion: 'Alguma mensagem',
       code: 4001001,
       data: [],
       total_register: 'Quantidade total dos registros filtrados', // Numérico
       total_pages: 'Quantidade total de páginas disponíveis', // Numérico
       size: 'Quantidade de registros retornados na página', // Numérico
       page: 'Página atual', // Numérico
   }
   ```
2. Usar Prisma Transactions nos métodos - Create (Quando consultas em demais tabelas precisam ser realizadas), Update e Delete;

3. Usar e ter sempre os enums, replicando existências do banco de dados;

## 🗄️ Padronização do Banco de Dados

### 📌 Guia de Padronização de Nomenclatura para Banco de Dados

### Convenção Básica para Nomenclatura de Objetos de Banco de Dados

Os objetos do banco de dados devem seguir os seguintes critérios:

- Uso exclusivo de caracteres alfanuméricos;
- Utilização obrigatória de letras minúsculas;
- Para nomes compostos, utilizar underscore (`_`) como separador entre palavras;
- Uso de palavras no singular;
- Proibido o uso de acentuação e caracteres especiais (@, #, $, %, &, etc.);
- Evitar preposições, artigos e conectivos (o, a, de, etc.);
- O uso de acrônimos, abreviações e siglas é permitido e recomendado;
- Acrônimos devem seguir convenções nacionais, como CEP, CPF, etc.

### Formatação de Nomenclatura

**Formação 1:** `[prefixo de tipo de objeto] + _ + [substantivo com valor semântico]`

- Exemplo: `tb_municipio`

**Formação 2:** `[substantivo com valor semântico] + _ + [sufixo de tipo de objeto]`

- Exemplo: `responsavel_legal_seq`

## Regras Específicas

- Uso obrigatório de prefixo ou sufixo para classificação do objeto;
- Permitido uso de números, desde que não iniciem a denominação do objeto;
- Evitar nomes extensos (máximo de 30 caracteres);
- Abreviação permitida, desde que mantenha clareza semântica;
- Obrigatório documentar tabelas e colunas com descrição de seus propósitos.

---

## Padrão de Nomenclatura por Tipo de Objeto

### Nomenclatura de Tabelas

| Objeto                   | Descrição                     | Prefixo | Exemplo               |
| ------------------------ | ----------------------------- | ------- | --------------------- |
| Tabela principal         | Tabela principal do sistema   | `tb`    | `tb_usuario`          |
| Tabela de relacionamento | Tabela auxiliar para relações | `tr`    | `tr_empresa_usuario`  |
| Tabela de histórico      | Armazena logs de alterações   | `th`    | `th_movimentacao`     |
| View                     | Visão de dados                | `vw`    | `vw_relatorio_venda`  |
| Trigger                  | Gatilho de ações              | `tg`    | `tg_status_documento` |

### Nomenclatura de Constantes

| Tipo              | Sigla / Prefixo | Exemplo                 |
| ----------------- | --------------- | ----------------------- |
| Chave primária    | `pk`            | `pk_tb_usuario`         |
| Chave estrangeira | `fk`            | `fk_residuos_movimento` |

### Nomenclatura de Campos das Tabelas

| Sigla / Prefixo | Nome Completo | Descrição                                | Exemplos           |
| --------------- | ------------- | ---------------------------------------- | ------------------ |
| `id`            | Identificador | Identificador único da tabela            | `id`, `id_empresa` |
| `nm`            | Nome          | Nome significativo                       | `nm_razao_social`  |
| `sg`            | Sigla         | Representa uma sigla                     | `sg_uf`            |
| `tp`            | Tipo          | Representa categoria ou enum             | `tp_transacao`     |
| `vl`            | Valor         | Representa valores monetários            | `vl_preco`         |
| `nu`            | Número        | Representa números identificadores       | `nu_cnpj`          |
| `dt`            | Data          | Representa data ou timestamp             | `dt_lancamento`    |
| `cod`           | Código        | Representa uma chave candidata           | `cod_residuo`      |
| `ds`            | Descrição     | Representa descrições textuais           | `ds_observacao`    |
| `qt`            | Quantidade    | Representa quantidades diversas          | `qt_peso`          |
| `st`            | Status        | Representa condições booleanas ou status | `st_finalizado`    |

---

Este guia deve ser seguido para garantir consistência e clareza na estruturação do banco de dados, facilitando a manutenção e compreensão dos dados armazenados.

## ⚠️ Tratativa de Erros e Código HTTP

Foi implementado um sistema robusto para capturar erros nos blocos `catch`, evitando falhas inesperadas na aplicação. Além disso, um **dicionário de códigos HTTP** foi criado para fornecer mensagens mais amigáveis e sugestões para o cliente quando ocorrerem erros.

## 📜 Documentação da API

A documentação completa das rotas, requisições e retornos pode ser acessada através do **Swagger**, disponível no endpoint:

```
/doc-swagger
```

## ✅ Validação com Class Validator

A aplicação utiliza a biblioteca **class-validator** para validar os dados recebidos. Aqui estão alguns exemplos de uso:

```ts
import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 20)
  name: string;

  @IsEmail()
  email: string;
}
```

🔹 **`@IsString()`** → Garante que o campo seja uma string.
🔹 **`@Length(min, max)`** → Define um tamanho mínimo e máximo para o campo.
🔹 **`@IsEmail()`** → Valida se o campo contém um e-mail válido.

## ✍️ Autor

👤 **Lucas Papini**
📧 Email: [lucas.verissimo.souza@hotmail.com](mailto:lucas.verissimo.souza@hotmail.com)
