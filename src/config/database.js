module.exports =
{
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PSWD,
    "port": process.env.DB_PUERTO,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "test": {
    "username": process.env.DB_USER,
    "port": process.env.PUERTO,
    "password": process.env.DB_PSWD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PSWD,
    "port": process.env.PUERTO,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  }
}
