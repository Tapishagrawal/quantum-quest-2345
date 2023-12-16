const jwt = require("jsonwebtoken");
const { BlackListModel } = require("../model/blacklist.model");

const auth = async (req, res, next) => {
  try{
    const token = req.headers.authorization?.split(" ")[1] || null;

    if(token){
      let existingToken = await BlackListModel.find({ blacklist : {$in: token}});

      if(existingToken.length> 0){
        return res.status(400).send({error: "Please Login Again!!"})
      }

      let decode = jwt.verify(token,'masai');
      req.body.userID = decode.userID;
      return next();

    }else{
      res.status(400).send("Please login First...");
    }
  }catch(error){
return res.status(400).send(err);
  }
  
 
};

module.exports = { auth };
