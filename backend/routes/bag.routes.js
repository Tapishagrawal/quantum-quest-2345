const express = require("express");
const { GameModel } = require("../model/admin.model");
const { BagModel } = require("../model/bag.model");
const BagRouter = express.Router();

BagRouter.get("/get", async (req,res)=>{
    try {
        const baglist = await BagModel.find();
        res.send(baglist);
    } catch (error) {
        res.status(400).json({error: "Internal Server Error"});
    }
})

BagRouter.post("/add",async(req,res)=>{
    const id= req.body.userID;

    try {
        
        const game = await GameModel.findById(id);

       const baglistitem = new BagModel({gameID: game._id});
       await baglistitem.save();

       res.status(200).json({message: "Product added to baglist", baglistitem});

    } catch (error) {
        res.status(400).json({ error: 'Internal Server Error' });
    }
})

BagRouter.delete("/remove/:id", async (res,req)=>{
const bagID = req.params.id;
try {
    const baglistitem = await BagModel.findByIdAndRemove(bagID);

    res.status(200).json({message: "Product removed from baglist", baglistitem})
} catch (error) {
    res.status(400).json({ error: 'Internal Server Error' });
}
})

module.exports = BagRouter;