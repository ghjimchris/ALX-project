
const Validation = (schema, reqDataSource) => async (req, res, next) => {
    if(!schema) throw new Error('No schema used');
    if(!reqDataSource) throw new Error('Select resource type from request');
    const RequestData = req[reqDataSource];

    try{
        await schema.validate(RequestData);
        return next();
    } catch (err){
        return res.status(400).json({ msg : err.errors })
        // return res.status(400).json({ msg: err.errors })
    }
}

export default Validation;