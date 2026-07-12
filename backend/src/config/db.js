import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  database: process.env.DB_NAME,
});

pool.on('connect', () => console.log('Database connected successfully.'));
pool.on('error', (err) => console.error('Unexpected database error:', err));

export default {
  query: (text, params) => pool.query(text, params),
  pool,
};