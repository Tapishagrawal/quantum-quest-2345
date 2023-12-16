const express = require("express")
const {GameModel} = require("../model/admin.model")
const jwt = require("jsonwebtoken")

const gameRouter =  express.Router()



gameRouter.post("/add", async(req,res)=>{
    try{
        const game = new GameModel(req.body)
        await game.save()
        res.status(200).send({"msg":"A new game has been added"})
    }
    catch(err){
       res.status(400).send({"error":err})
    }
})

gameRouter.get("/", async(req,res) => {
    try{
        const games=await GameModel.find()
        res.status(200).send(games)
    }
    catch(err){
        res.status(400).send({"error":err})
    }
})

gameRouter.patch("/update/:gameID", async(req,res) => {
    const {gameID} = req.params
    try{
        
            await GameModel.findByIdAndUpdate({_id:gameID},req.body) 
            res.status(200).send({"msg":`Game with ID:${gameID} has been updated`})
       
    }
    catch(err){
        res.status(400).send({"error":err})
    }
})
 
gameRouter.delete("/delete/:gameID", async(req,res) => {
    const {gameID} = req.params
    try{
        
            await GameModel.findByIdAndDelete({_id:gameID}) 
            res.status(200).send({"msg":`Game with ID:${gameID} has been deleted`})
       
    }
    catch(err){
        res.status(400).send({"error":err})
    }
})


module.exports={
    gameRouter
}