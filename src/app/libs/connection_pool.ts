import { Pool } from "pg";
import dotenv from "dotenv";
const database_connection_pool = new Pool({
  connectionString: process.env.DB_DEV_URL,
  user: process.env.DB_DEV_USER,
  host: process.env.DB_DEV_HOST,
  password: process.env.DB_DEV_PASSWORD,
  database: process.env.DB_DEV_NAME,
  port: Number(process.env.DB_DEV_PORT),
  min: 2,
  max: 10,
  idleTimeoutMillis: 5000,
  connectionTimeoutMillis: 2000,
});
export default database_connection_pool;
