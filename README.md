# Postgresql + NestJs + TypeScript + Prisma - Netflix

Projeto Netflix, utilizando as tecnologias:

`PostgreSQL`

Banco de dados utilizado para arquivar os Filmes, Gênero e Participantes cadastrados no projeto.

`NestJs com TypeScript`

Com orientação a objetos e Decorators

`Prisma`

Responsável por fazer o CRUD no Banco de Dados

- Rotas e Endpoints

`Filmes`

Na rota `filmes.services`temos o CRUD completo utilizando os endpoints do Prisma e os Decorators do NestJs:

- `createPrisma` incluindo um novo filme;

- `findAllPrisma` listando todas os filmes cadastrados;

- `findOnePrisma(id)` listando um filme cadastrado, retornando pelo Id;
- `updatePrisma(id)` alterando um filme cadastrado, retornando pelo Id;
- `removePrisma(id)`exclui um filme cadastrado pelo Id.

`Gênero`

Em `gênero.services`nossos dados são reduzidos a Id e nome do gênero do filme, onde temos a integração One to Many:

- `createPrisma` incluindo um novo gênero;

- `findAllPrisma` listando todas os gêneros cadastrados;

- `findOnePrisma(id)` listando um gênero cadastrado, retornando pelo Id;
- `updatePrisma(id)` alterando um gênero cadastrado, retornando pelo Id;
- `removePrisma(id)`exclui um gênero cadastrado pelo Id.

`Participante`

Em `participante.services` fazemos a integração One to Many, lenvando em conta que um personagem pode participar de vários filmes, mas em tempos diferentes:

- `createPrisma` incluindo um novo participante;

- `findAllPrisma` listando todas os participante cadastrados;

- `findOnePrisma(id)` listando um participante cadastrado, retornando pelo Id;
- `updatePrisma(id)` alterando um participante cadastrado, retornando pelo Id;
- `removePrisma(id)`exclui um participante cadastrado pelo Id.

Projeto roda através do comando `npm run start:dev`

Caso seja necessário alterar o model do `schema.prisma` devemos rodar os comando abaixo, na respectiva ordem:

1. `npx prisma generate`
2. `npx prisma db push`

E podemos utilizar o `prisma studio` para fazer as alterações no Banco de Dados através da funcionalidade do Prisma Studio, através do comando:

`npx prisma studio`

Que irá gerar uma pasta rodando em localhost:5555 onde conseguimos manipular os dados e os mesmos são inseridos no PostgreSQL.

Projeto elaborado por Mara Soares

Aluna: Blue EdTech

Módulo 4 - Backend
