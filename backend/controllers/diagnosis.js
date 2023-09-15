import db from '../config/db.js'

export const AddDiagnosis = async (req, res) => {
    const patient_id = req.body.patient_id;

    if(Number.isNaN(parseInt(patient_id))) return res.status(400).json({ msg: "Invalid patient"});

    try{
        const results = await db.query('SELECT * FROM patient_routine_diagnosis WHERE pid = $1', [1]);

        if(results.rowCount < 1) return res.status(400).json({ msg: "Patient Diagnosis could not be saved" });
        return res.status(200).json({ msg: "Diagnosis upload successful" });
    }
    catch(err){
        console.error(err);
        return res.status(500);
    }
};

export const GetSingleDiagnosis = async (req, res) => {
    const patient_id = req.body.patient_id || req.query.patient_id;

    if(Number.isNaN(parseInt(patient_id))) return res.status(400).json({ msg: "Invalid Patient"});

    try{
        const patId = parseInt(patient_id);
        const results = await db.query('SELECT * FROM patient_routine_diagnosis WHERE patient_id = $1', [patId]);

        if(results.rowCount < 1) return res.status(200).json({ results: results.rows });
        return res.status(200).json({ results: results.rows });
    }
    catch(err){
        console.error(err);
        return res.status(500);
    }
};

export const GetDiagnoses = async (req, res) => {
    const patient_id = req.body.patient_id || req.query.patient_id;

    if(Number.isNaN(parseInt(patient_id))) return res.status(400).json({ msg: "Invalid Patient"});

    try{
        const patId = parseInt(patient_id);
        const results = await db.query(`SELECT * FROM patient_routine_diagnosis WHERE id = $1`, [patId]);

        if(results.rowCount < 1) return res.status(200).json({ results: results.rows });
        return res.status(200).json({ results: results.rows });
    }
    catch(err){
        console.error(err);
        return res.status(500);
    }
};

export const EditDiagnosis = async (req, res) => {
    const patient_id = req.body.patient_id;

    const newBody = req.body;

    if(Number.isNaN(parseInt(patient_id))) return res.status(400).json({ msg: "Invalid Patient"});

    newBody.patient_id = parseInt(patient_id);

    try{
        const results = await db.query(`Update * FROM patient_routine_diagnosis 
            WHERE id = $1`, [1]);

        if(results.rowCount < 1) return res.status(400).json({ msg: "Diagnosis editing failed" });
        return res.status(200).json({ msg: "Diagnosis editing successful" });
    }
    catch(err){
        console.error(err);
        return res.status(500);
    }
};

export const DeleteDiagnosis = async (req, res) => {
    const patient_id = req.body.patient_id || req.query.patient_id;

    if(Number.isNaN(parseInt(patient_id))) return res.status(400).json({ msg: "Invalid Patient"});

    try{
        const results = await db.query('Delete FROM patient_routine_diagnosis WHERE patient_id = $1', [patient_id]);

        if(results.rowCount < 1) return res.status(400).json({ msg: "Diagnosis delete failed" });
        return res.status(200).json({ msg: "Diagnosis delete successful" });
    }
    catch(err){
        console.error(err);
        return res.status(500);
    }
};