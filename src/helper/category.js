const validateCategory = (req,res,next) => {
    const {name} = req.body;
    let err = [];
    try{
    if(!name || !isNaN(name) || name.length < 3)
        err.push("name must be more than 3 characters");
    
    if(err.length > 0){
        throw new Error(err.toString());
    }
    next();
    } catch (err){
        console.log("catch");
        res.json({err: `${err}`});
        }
    };
    
    module.exports = {validateCategory};