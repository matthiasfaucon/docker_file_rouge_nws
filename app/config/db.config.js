module.exports = {
    HOST: "db",
    USER: "root",
    PASSWORD: "root",
    DB: "testdb",
    PORT: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };