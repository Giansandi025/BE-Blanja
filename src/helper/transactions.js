const validateTransaction = (req,res,next) => {
    const {email} = req.body;
    let err = [];
    try{
    if(!email || !isNaN(email) || email.length < 4)
        err.push("email must be more than 4 characters");
    
    if(err.length > 0){
        throw new Error(err.toString());
    }
    next();
    } catch (err){
        console.log("catch");
        res.json({err: `${err}`});
        }
    };
    
    module.exports = {validateTransaction};