import db from '../config/db.js';

export const findAllVehicles = async () => {
  const result = await db.query('SELECT * FROM vehicles ORDER BY id');
  return result.rows;
};

export const insertVehicle = async (v) => {
  const result = await db.query(
    `INSERT INTO vehicles (reg_no, name, type, max_load, odometer, acquisition_cost)
     VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
    [v.regNo, v.name, v.type, v.maxLoad, v.odometer || 0, v.acquisitionCost]
  );
  return result.rows[0];
};