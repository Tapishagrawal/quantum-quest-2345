
const express = require("express")
const bcrypt = require("bcrypt")
const userRouter = express.Router()



userRouter.post("/register", async(req,res) => {
    const {username, email, password} = req.body
    try{
        bcrypt.hash(pass, 5, async(err, hash)=>{
            if(err){
                res.status(200).send({"error":err})
            }
            else{
                const user = new UserModel({username,email,pass:hash})
                await user.save()
                res.status(200).send({"msg":"A new user has been registered"})
            }
        });
      
      }
      catch(err){
       res.status(400).send({"error":err})
      }
})

