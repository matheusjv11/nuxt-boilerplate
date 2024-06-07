# nuxt-boilerplate

### Tecnologias usadas

- Vue 3
- Nuxt 3.6
- Pinia 2.1
- Zod 3.22
- Vuetify 3.3
- Date-fns 2.30

### Intruções para simulação em máquina local

1. Tenha a versão do **Node v18.16** instalada em sua máquina. Versões mais antigas ou mais novas podem levar a erros na instalação de dependências.

2. Clone o projeto na sua máquina local.

3. Rode **npm install** no seu terminal para instalar as dependências do projeto.

4. Rode **npm run dev** executar o servidor local com a aplicação.

5. No terminal indicará a porta na qual a aplicação estará hospeada. Caso não esteja ocupada, será na porta 3000.

### Intruções execução em servidores homologação/produção

O projeto possue dois arquivos **Dockerfile** como forma de facilitar a containerização. Atualmente, o docker-compose aponta para o **Dockerfile-dev**, que rodará a aplicação em modo de homologação. 

### Organização dos arquivos

Com intuito de seguir uma arquitetura mais definida, a pasta **src** conta com uma distribuição semelhante ao Domain Drive Design. Onde encontramos a pasta **shared**, na qual terá definições relevantes para todas as regras de negócios. As demais pastas, irão depender do objetivo do projeto, apenas necessário seguir a seguinte estruturação:

- **use-cases**: Onde ficam as definições e casos de uso que aplicação performa em conjunto com a API de persistência de dados. Nesse modo vão os métodos HTTP que inserem e retornam dados no banco.

- **domain**: Aqui vai a parte mais fundamental das regras de negócios existentes no banco de dados. É no domínio que definimos entidades, regras de repositorio e etc.

- **infra**: Nesse módulo teremos aspectos técnicos que ajudam a performar as regras de negócios, bem como utilitários comuns.

- **presentation**: Lida com a interação com o usuário final. Como esse é um projeto exclusivo de frontend, é aqui que vão os componentes e arquivos de estilos que aparecem para o usuário.

- **store**: Nesse módulo temos objetos do pinia, que controlam e atualizam estados entre mútiplos components. Atualmente, utilizamos esses objetos em sua maioria como forma de armazenar temporariamente os valores inseridos em nosos formulários.

- **validation**: Aqui ficam validações no geral, seja de classes ou comportamentos esperados, de inputs ou variáveis.

No caso desse projeto, temos apenas a **random-users** como um modelo de negócio que a aplicação disponibiliza. As demais pastas fora de **src**, são parte da arquitetura de um projeto nuxt. Para consultar suas responsabilidades, acesse a [documentação do nuxt](https://nuxt.com)
