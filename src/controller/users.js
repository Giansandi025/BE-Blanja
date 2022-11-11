const {response} = require("./../middleware/common");
const {create, findEmail} = require("./../model/users");
const bcrypt = require("bcryptjs");
const {v4:uuidv4} = require('uuid');
const {generateToken} = require("./../helper/auth")
const email = require("./../middleware/email")


const UsersController = {
    insert:async(req,res,next)=>{
       let {rows:[user]} = await findEmail(req.body.email)
       console.log('role', req.params.role)
       let role = req.params.role

       if(user){
        return response(res, 404,false, "email sudah ada" ,"register gagal")
       }

       let digits = '0123456789';
       let otp = '';
       for (let i = 0; i < 6; i++ ) {
           otp += digits[Math.floor(Math.random() * 10)];
       }

       
       let salt = bcrypt.genSaltSync(10);
       let password = bcrypt.hashSync(req.body.password);
       let data = {
            id:uuidv4(),
            email: req.body.email,
            password ,
            fullname: req.body.fullname,
            role,
            otp
        }
        try{
        const result = await create(data)
        if(result){
        console.log(result)
        let verifUrl = `http://${Host}:${Port}/${req.body.email}/${otp}`
                let sendEmail =  email(data.email,otp,verifUrl,data.fullname)
                if(sendEmail == 'email not sent!'){
                    return response(res, 404, false, null, "register gagal")
                }
                response(res, 200, true,{email:data.email},"register berhasil silahka cek email")
        }
       
     } catch(err){
        console.log(err)
        response(res, 404,false, err, "register gagal")
     }
    },
    login: async (req,res,next)=>{
        console.log('email',req.body.email)
        console.log('password',req.body.password)
        let {rows:[user],
        } = await findEmail(req.body.email)
        if(!user){
         return response(res, 404,false, null, "login gagal email salah")
         }  

         if(user.verified == 0){
            return response(res, 404, false, null," email not verified")
           }
    


        const password = req.body.password
        const validation = bcrypt.compareSync(password,user.password)

        if (!validation) {
         return response(res, 404, false, null, 'login gagal password salah');
       }
   
        delete user.password
        delete user.otp
        delete user.verified
        let payload = {
         email: user.email,
         role: user.role
        };
        user.token = generateToken(payload)
        response(res, 200,true, user, "login berhasil")


 /*      

        response(res, 200, false, "%$^#^#^@^EE^|", "login berhasil") */

    },
    otp: async(req,res,next)=>{
        console.log('email',req.params.email)
        console.log('password',req.params.otp)
        let {rows:[users]} = await findEmail(req.params.email)
        if(!users){
            return response(res, 404, false, null," email not found")
        }
        if(users.otp ==req.params.otp ){
            const result = await verification(req.params.email)
            return response(res, 200, true, result," verification email success")
        }
        return response(res, 404, false, null," wrong otp please check your email")

    }
    
}

exports.UsersController = UsersController