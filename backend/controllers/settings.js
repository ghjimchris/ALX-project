import db from '../config/db.js'


export const ToggleRegister = async (_, res) => {
    try{
        const { rows } = await db.query('Update system_settings set status = not status where name = $1 returning status', ['Registration']);
        const [{ status }] = rows;

        if(status === false) return res.status(200).json({ msg: "Registration Not Allowed" });
        return res.status(200).json({ msg: "Registration Allowed", toggleStatus: status });
    }
    catch(err){
        console.error(err);
        return res.status(500);
    }
};


export const AllowRegister = async (_, res) => {
    try{
        const { rows } = await db.query('Update system_settings set status = true where name = $1 returning status', ['Registration']);
        const [{ status }] = rows;

        if(status === false) return res.status(400).json({ msg: "Registration Not Started" });
        return res.status(200).json({ msg: "Registration Allowed" });
    }
    catch(err){
        console.error(err);
        return res.status(500);
    }
};

export const PreventRegister = async (_, res) => {
    try{
        const { rows } = await db.query('Update system_settings set status = false where name = $1 returning status', ['Registration']);
        const [{ status }] = rows;

        if(status === true) return res.status(400).json({ msg: "Registration Not Stopped" });
        return res.status(200).json({ msg: "Registration Stopped" });
    }
    catch(err){
        console.error(err);
        return res.status(500);
    }
};

export const CheckStatus = async (_, res) => {

    try{
        const { rows: [{ status }] } = await db.query('SELECT status FROM system_settings WHERE name = $1', ['Registration']);

        return res.status(200).json({ status, msg: `Status ${status ? 'Enabled' : 'Disabled'}` });
    }
    catch(err){
        console.error(err);
        return res.status(500);
    }
};

export const DisableUserLogin = async (req, res) => {
    const user_id = req.body.user_id;
    const auth_user = req.user.userId;

    if(user_id === auth_user) return res.status(400).json({ msg: "Please contact superiors to disable login"});
    
    try{
        const results = await db.query('Update system_users set allow_login = false WHERE id = $1', [user_id]);

        if(results.rowCount < 0) return res.status(400).json({ msg: "User Disabling Error" });
        return res.status(200).json({ msg: "Registration Successful" });
    }
    catch(err){
        console.error(err);
        return res.status(500);
    }
};