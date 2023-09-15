import pkg from 'pg';
const { Pool } = pkg;

import { configDotenv } from 'dotenv'
configDotenv()

const { DB_USER } = process.env;

if(!DB_USER || DB_USER == "") throw new Error("Cannot get env values"); 

const dbPool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PWD,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

export default dbPool;