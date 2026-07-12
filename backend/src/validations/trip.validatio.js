export const validateDispatch = ({ vehicle, driver, cargoWeight }) => {
  const errors = [];
  if (vehicle.status === 'Retired') errors.push('Vehicle is retired and cannot be dispatched.');
  if (vehicle.status === 'In Shop') errors.push('Vehicle is under maintenance.');
  if (vehicle.status === 'On Trip') errors.push('Vehicle is already on another trip.');
  if (driver.status === 'Suspended') errors.push('Driver is suspended.');
  if (driver.status === 'On Trip') errors.push('Driver is already on another trip.');
  if (new Date(driver.license_expiry) < new Date()) errors.push('Driver license has expired.');
  if (cargoWeight > vehicle.max_load) errors.push('Cargo weight exceeds vehicle max load capacity.');
  return { valid: errors.length === 0, errors };
};