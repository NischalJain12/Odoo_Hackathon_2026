import db from '../config/db.js';

export const findUserByEmail = async (email) => {
  const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
};

export const insertUser = async ({ name, email, hashedPassword, role }) => {
  const result = await db.query(
    `INSERT INTO users (name, email, password, role) VALUES ($1,$2,$3,$4)
     RETURNING id, name, email, role`,
    [name, email, hashedPassword, role]
  );
  return result.rows[0];
};