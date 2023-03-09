module.exports = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: (process.env.DB_DIALECT || 'mysql'),
    retry: {max: Number(process.env.DB_RETRY_MAX || 3)},
    logging: true,
    pool: {
      evict: Number(process.env.DB_EVICT || 0),
      min: Number(process.env.DB_CONN_MIN || 0),
      max: Number(process.env.DB_CONN_LIMIT || 1),
      handleDisconnects: Boolean(process.env.DB_HANDLE_DISCONNECTS || true)
    }
  }
  