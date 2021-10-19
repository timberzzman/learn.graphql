# Learn.graphql

The purpose of this challenge is to learn GraphQL through the creation of an API. You HAVE TO use TypeScript.

### Features:

- [X] Register
- [X] Create a post
- [X] Read all the posts
- [X] Read a post by It's ID
- [X] Update a post by It's ID
- [X] Delete a post by It's ID
- [X] Create a comment on a post
- [X] Read all the comments from a post
- [X] Read a comment by It's ID
- [X] Update a comment by It's ID
- [X] Delete a comment by It's ID

## Requirements

---

The project use a PostgreSQL as database. You can use your own instance or 
hosting one with docker.

You can follow this tutorial to learn how to do it:

[https://towardsdatascience.com/local-development-set-up-of-postgresql-with-docker-c022632f13ea](https://towardsdatascience.com/local-development-set-up-of-postgresql-with-docker-c022632f13ea)

## Configuration

---

We use prisma as ORM, so we need to initialize the database and made some configuration

In a .env file, you should add the connection url of your postgres instance, with the key "DATABASE_URL". You can find how to do your connection URL [here](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgres).


```
DATABASE_URL=your_connection_url
```

## Installation

---

You can use the Prisma documentation to initiate the project

[https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/using-prisma-migrate-typescript-postgres/](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/using-prisma-migrate-typescript-postgres/)

First, you need to install dependencies with the commands

```
npm install
```

For generating your database, let's call a migration with Prisma

```
npx prisma migrate dev --name init
```

After that, you can launch the project with the command

```
npm run launch
```

You can access with your browser to Apollo Studio on the address [http://localhost:4000](http://localhost:4000) and start writing your graphql request.


## Resources

[GraphQL documentation](https://graphql.org/learn/), you will find here explanation about GraphQL.

[Apollo Server](https://www.apollographql.com/docs/apollo-server/), Apollo Server is a npm package that help you bootstrap a GraphQL Server.

[Prisma](https://www.prisma.io/), A nodeJS and typescript ORM

