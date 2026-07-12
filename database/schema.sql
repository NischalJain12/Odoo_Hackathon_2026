CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(30) NOT NULL CHECK (role IN ('fleet_manager','dispatcher','safety_officer','financial_analyst')),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE vehicles (
  id SERIAL PRIMARY KEY,
  reg_no VARCHAR(20) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  type VARCHAR(50) NOT NULL,
  max_load NUMERIC NOT NULL,
  odometer NUMERIC DEFAULT 0,
  acquisition_cost NUMERIC NOT NULL,
  status VARCHAR(20) DEFAULT 'Available' CHECK (status IN ('Available','On Trip','In Shop','Retired')),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE drivers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  license_no VARCHAR(50) UNIQUE NOT NULL,
  license_category VARCHAR(20) NOT NULL,
  license_expiry DATE NOT NULL,
  contact VARCHAR(20),
  safety_score NUMERIC DEFAULT 100,
  status VARCHAR(20) DEFAULT 'Available' CHECK (status IN ('Available','On Trip','Off Duty','Suspended')),
  created_at TIMESTAMP DEFAULT NOW()
);