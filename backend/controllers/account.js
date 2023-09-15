
import bcrypt from 'bcryptjs';
import crypto from 'node:crypto';
// import * as JWT from 'jsonwebtoken';
import pkg from 'jsonwebtoken';
const { sign } = pkg;


import pkgValidator from 'validator';
const { trim, escape } = pkgValidator;

import db from '../config/db.js'

const { JWT_SECRET } = process.env;
const HASH_TIMES = 12;


export const Register = async (req, res) => {
    const EML = escape(trim(req.body.email));
    const PASSWORD = escape(trim(req.body.password));
    const confirm_password = escape(trim(req.body.confirm_password));

    if(PASSWORD !== confirm_password){
        return res.status(400).json({ msg: "Passwords do not match"})
    }

    const hash = await bcrypt.hash(PASSWORD, HASH_TIMES);
    const EMAIL = EML.toLowerCase();

    const newBody = req.body;
    newBody.email = EMAIL;
    newBody.password = hash;

    const { first_name, last_name, email, phone, password } = newBody;

    try{
        const results = await db.query
        (`Insert into system_users (first_name, last_name, email, phone, password) 
            values ($1, $2, $3, $4, $5) returning *`, [first_name, last_name, email, phone, password ]);

        if(results.rowCount < 1) return res.status(400).json({ msg: "Registration Failed" });
        return res.status(200).json({ msg: "Registration Successful" });
    }
    catch(err){
        console.error(err);
        return res.status(500);
    }
};


export const Login = async (req, res) => {
    const EMAIL = escape(req.body.email);
    const password = escape(req.body.password);
    const receivedEmail = EMAIL.toLowerCase();

    try{
        // const results = await db.query
        const results = await db.query
        (`SELECT su.id as user_id, su.first_name, su.last_name, su.email, su.phone, 
            su.password as resetter, allow_login, sl.id as role_id, sl.name as role 
            FROM system_users su join system_roles sl on su.role_id = sl.id
            WHERE su.email = $1`, [receivedEmail]);

        const { rows, rowCount } = results;

        if(rowCount < 1) return res.status(400).json({ msg: "Email / Password Invalid" });

        const [{ user_id, email, phone, resetter, allow_login, role, role_id }] = rows;

        const match = await bcrypt.compare(password, resetter);
 
        if(!match) return res.status(400).json({ msg: "Email / Password Invalid" });
        if(!allow_login) return res.status(400).json({ msg: "Contact Superior for Permission" });

        const payload = {
            userId: user_id, role, role_id,
            email, phone, allow_login
        };

        const token = sign(payload, JWT_SECRET, { expiresIn: '15m' });

        return res.status(200).json({ msg: "Login Successful", token: token });
    }
    catch(err){
        console.error(err);
        return res.status(500);
    }
};

/**
 * create table system_settings
 * 
create table if not exists system_settings(
    id serial,
    name varchar(50),
    status boolean
);
 */