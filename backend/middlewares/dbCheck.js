import db from '../config/db.js'

export const checkEnabledRegistration = async (_, __, next) => {
    try{
        const { rows } = await db.query
        (`select status from system_settings`, []);

        const [{ status }] = rows;

        if(status === false) return res.status(400).json({ msg: "Registration Not available at this time" });
        next()
    }
    catch(err){
        console.error(err);
        return res.status(500);
    }
}