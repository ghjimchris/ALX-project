
import pkg from 'jsonwebtoken';
const { verify } = pkg;

import pkgValidator from 'validator';
const { isJWT } = pkgValidator;

const { JWT_SECRET } = process.env;

export const AllowAll = (req, res, next) => {
  console.log("Allowing all")
  next();
}


export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization || req.query.token || req.cookies.token;

    let clearedToken = '';

    if (token.startsWith('Bearer ')) {
      clearedToken = token.slice(7); // Remove 'Bearer ' (7 characters)
      req.token = clearedToken; // Store the cleaned token in the request object

    } else {
      clearedToken = token;
    }
  
    if (!clearedToken || clearedToken === "" || !isJWT(clearedToken)) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    verify(clearedToken, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }

      req.user = decoded;
      next();
    });
}


export const verifyAdmin = (req, res, next) => {
    // Get the token from the request headers, query, or cookies
    console.log({ REQUEST: req })
    const token = req.headers.authorization || req.query.token || req.cookies.token;

    let clearedToken = '';

    if (token.startsWith('Bearer ')) {
      clearedToken = token.slice(7); // Remove 'Bearer ' (7 characters)
      req.token = clearedToken; // Store the cleaned token in the request object

    } else {
      clearedToken = token;
    }
  
    if (!clearedToken || clearedToken === "" || !isJWT(clearedToken)) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    // Verify the token
    verify(clearedToken, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
  
      const { role } = decoded;

      if(role.toLowerCase() === "admin"){
        req.user = decoded;
        next();
      }

      return res.status(401).json({ message: 'Permission Denied' });
    });
}

// CREATE EXTENSION IF NOT EXISTS pgcrypto;
/**
 * 
create table if not exists system_settings(
    id serial,
    name varchar(50),
    status varchar(50)
);


create table if not exists system_users(
    id serial,
    first_name varchar(50),
    last_name varchar(50),
    email varchar(100),
    phone varchar(15),
    password varchar(100),
    allow_login boolean default true,
    role_id int default 1,
    created_at timestamp DEFAULT now()
);


create table if not exists system_roles(
    id serial,
    name varchar(30),
    created_at timestamp DEFAULT now()
);


create table if not exists patients(
    id serial,
    first_name varchar(50),
    last_name varchar(50),
    other_names varchar(100),
    gender char,
    dob date,
    height decimal,
    phone varchar(15),
    phone_alt varchar(15),
    nok_name varchar(100),
    nok_contact varchar(100),
    created_at timestamp DEFAULT now()
);


create table if not exists patient_routine_diagnosis(
    id serial,
    patient_id int,
    blood_sugar int,
    blood_pressure_systolic int,
    blood_pressure_diastolic int,
    temperature decimal,
    weight decimal,
    created_at timestamp DEFAULT now()
);


 */