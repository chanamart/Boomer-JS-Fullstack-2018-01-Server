# Boomer-JS-Fullstack-2018-01-Server

## API using koa-smart and sequelize

## Directory structure

The repository root contains auxiliary files like `package.json`, `.gitignore`, etc.

- `config`: the database's configuration is stored here
- `src`: the app's code is stored here
  - `db`: the migration's files are stored here (migration/seeders)
  - `locales`: all files needed to Internationalize your api (I18n)
  - `routes`: API endpoints go here, all files extending the RouteBase class will be loaded automatically
  - `models`: Tables go here, sequelize models that you will be able to use later
  - `middleware`: custom middleware for your application, written koa-style.

## Get started

Before installing, [download and install Node.js](https://nodejs.org/en/download/). **Node.js v10.13.0** or higher will be required.

- **Install package**
  `npm install`
- **Create database**
  `npx sequelize db:create` if env is production `npx sequelize db:create --env production`
- **Migrate database**
  `npx sequelize db:migrate` if env is production `npx sequelize db:migrate --env production`
- **Fill database**
  `npx sequelize db:seed:all` if env is production `npx sequelize db:seed:all --env production`
- **Run Dev**
  `npm start`
- **Build the Prod**
  `npm run build-prod`
- **Run Prod**
  `npm run prod`

## Licence

. Alexandre Martins
. Benoit Sommervogel
. Thomas Lenoel