# Database Schema

## users
| Column | Type | Notes |
|---|---|---|
| id | SERIAL PK | |
| name | VARCHAR(100) | |
| email | VARCHAR(100) | UNIQUE |
| password | VARCHAR(255) | bcrypt hashed |
| role | VARCHAR(30) | fleet_manager / dispatcher / safety_officer / financial_analyst |

## vehicles
| Column | Type | Notes |
|---|---|---|
| reg_no | VARCHAR(20) | UNIQUE |
| status | VARCHAR(20) | Available / On Trip / In Shop / Retired |
| max_load | NUMERIC | used in cargo validation |

## drivers
| Column | Type | Notes |
|---|---|---|
| license_expiry | DATE | checked on every dispatch |
| status | VARCHAR(20) | Available / On Trip / Off Duty / Suspended |

## Business rule → validation mapping
| Rule | Enforced in |
|---|---|
| Cargo ≤ max_load | `validations/trip.validation.js` |
| Expired license blocked | `validations/trip.validation.js` |
| Suspended driver blocked | `validations/trip.validation.js` |