const jwt= require("jsonwebtoken");

const auth= (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1]
    if(token){
        jwt.verify(token,"masai",(err,decode)=>{
            if(decode){
               req.body.userID= decode.userID
               req.body.username= decode.username
                next();
            }
            else{
                res.send({"msg":"You are not authorised"})
            }
        })
    }else{
        res.send({"msg":"You are not authorised"})
    }
}

module.exports ={
    auth
}