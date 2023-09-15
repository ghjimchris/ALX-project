import db from '../config/db.js'

export const AddPatient = async (req, res) => {
    const { first_name, last_name, other_names, gender, dob, height, phone, phone_alt, nok_name, nok_contact
    } = req.body;

    try{
        const results = await db.query
        (`Insert into patients(first_name, last_name, other_names, gender, dob, height, phone, phone_alt,
            nok_name, nok_contact) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning *`, 
            [first_name, last_name, other_names, gender, dob, height, phone, phone_alt, nok_name, nok_contact]);

        if(results.rowCount < 1) return res.status(400).json({ msg: "Patient Record not saved" });

        return res.status(200).json({ msg: "Patient Record Added", patient: results.rows[0] });
    }
    catch(err){
        console.error(err);
        return res.status(500);
    }
};


export const GetAllPatients = async (_, res) => {
    try{
        const results = await db.query
        (`Select * from patients`, []);

        return res.status(200).json({ patients: results.rows });
    }
    catch(err){
        console.error(err);
        return res.status(500);
    }
};


export const GetSinglePatient = async (req, res) => {
    const training_id = parseInt(req.body.training_id || req.query.training_id || req.params.training_id);
    const start_date = req.body.date_registered || req.query.date_registered || req.params.date_registered;
    const status = false;
    const { bulk_results } = req.body;
    if((!training_id) || (!start_date) || (bulk_results)) return res.status(406)

    try{
        const results = await db.query('SELECT * FROM users WHERE id = $1', [1]);

        if(!metadata) return res.status(400).json({ msg: "Bulk Result upload failed" });
        return res.status(200).json({ msg: "Bulk Result upload successful" });
    }
    catch(err){
        console.error(err);
        return res.status(500);
    }
};


export const EditPatient = async (req, res) => {
    const training_id = parseInt(req.body.training_id || req.query.training_id || req.params.training_id);
    const start_date = req.body.date_registered || req.query.date_registered || req.params.date_registered;
    const status = false;
    const { bulk_results } = req.body;
    if((!training_id) || (!start_date) || (bulk_results)) return res.status(406)

    try{
        const results = await db.query('SELECT * FROM users WHERE id = $1', [1]);

        if(!metadata) return res.status(400).json({ msg: "Bulk Result upload failed" });
        return res.status(200).json({ msg: "Bulk Result upload successful" });
    }
    catch(err){
        console.error(err);
        return res.status(500);
    }
};


export const DeletePatient = async (req, res) => {
    const training_id = parseInt(req.body.training_id || req.query.training_id || req.params.training_id);
    const start_date = req.body.date_registered || req.query.date_registered || req.params.date_registered;
    const status = false;
    const { bulk_results } = req.body;
    if((!training_id) || (!start_date) || (bulk_results)) return res.status(406)

    try{
        const results = await db.query('SELECT * FROM users WHERE id = $1', [1]);

        if(!metadata) return res.status(400).json({ msg: "Bulk Result upload failed" });
        return res.status(200).json({ msg: "Bulk Result upload successful" });
    }
    catch(err){
        console.error(err);
        return res.status(500);
    }
};
