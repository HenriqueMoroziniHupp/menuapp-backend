# backend

## Build Setup

Install [Docker Compose](https://docs.docker.com/compose/install/).

```bash
# Create container with MySQL
$ docker compose up -d

# Create database structure
$ node ace migration:run

# install dependencies
$ npm install

# server with changes watcher
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

## TODO
[] Passar slug (opcional) na rota de criação de categoria e produto, isso será utilizado apenas se o usuário logado for superadmin. Isso deverá permitir que superadmin consiga fazer POST, PUT e DELETE no tenant atual. 

## Regras de negócio

Superadmin deverá ter permissão para alterar TUDO
Superadmin poderá criar e editar dados de qualquer cliente

Cliente deverá ter permissão apenas de criar e alterar seus próprios dados

