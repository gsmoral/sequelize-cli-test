module.exports = {
  "development": {
      username: 'postgres',
      password: 'P0stgr3s',
      database: 'database_development',
      host: '127.0.0.1',
      port: 5432,
      dialect: 'postgres'
  },
  "test": {
      username: process.env.CI_DB_USERNAME,
      password: process.env.CI_DB_PASSWORD,
      database: process.env.CI_DB_NAME,
      host: process.env.CI_DB_HOSTNAME,
      port: 5432,
      dialect: 'postgres'
  },
  "production": {
      username: process.env.PROD_DB_USERNAME,
      password: process.env.PROD_DB_PASSWORD,
      database: process.env.PROD_DB_NAME,
      host: process.env.PROD_DB_HOSTNAME,
      port: process.env.PROD_DB_PORT,
      dialect: 'postgres'
  }
};
