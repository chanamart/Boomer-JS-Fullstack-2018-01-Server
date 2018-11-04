# Boomer-JS-Fullstack-2018-01-Server

## Directory structure

The repository root contains auxiliary files like `package.json`, `.gitignore`, etc.

- `config`: the bdd's configuration is stored here
- `src`: the app's code is stored here
  - `db`: the migration's files is stored here (migration/seeders)
  - `locales`: all files needed to Internationalize your api (I18n)
  - `routes`: API endpoints go here, all files extending the RouteBase class will be loaded automatically
  - `models`: the migration's files is stored here (migration/seeders)
  - `middleware`: custom middleware for your application, written koa-style.

## Get started

Clone this repository, remove the `.git` directory, run `git init`, and adjust details in `package.json`.

Before installing, [download and install Node.js](https://nodejs.org/en/download/). **Node.js v10.13.0** or higher will be required.

- **Install package**
  `npm install`
- **Create database**
  `npx sequelize db:create`
- **Migrate database**
  `npx sequelize db:migrate`
- **Fill database**
  `npx sequelize db:seed:all`
- **Run Dev**
  `npm start`
- **Build the Prod**
  `npm run build-prod`
- **Run Prod**
  `npm run prod`