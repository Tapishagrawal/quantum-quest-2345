const express = require("express")
const {GameModel} = require("../model/admin.model")
const jwt = require("jsonwebtoken")

const categoryRouter =  express.Router()



categoryRouter.get("/", async(req,res) => {
    try{
        const games=await GameModel.find()
        res.status(200).send(games)
    }
    catch(err){
        res.status(400).send({"error":err})
    }
})

module.exports={
    categoryRouter
}





// const {category} = req.query
//        let data;
//        if(category){
//         data = await GameModel.find({ category })
//        }
//        else{
//         data = await GameModel.find()
//        }
//        return res.status(200).send({games: data})