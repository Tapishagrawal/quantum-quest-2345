const express = require("express");
const { WishModel } = require("../model/wishlist.model");
const { GameModel } = require("../model/admin.model");
const WishRouter = express.Router();

WishRouter.get("/", async (req,res)=>{
    try {
        const wishlist = await WishModel.find();
        res.json(wishlist);
    } catch (error) {
        res.status(400).json({error: "Internal Server Error"});
    }
})

WishRouter.post("/add",async(req,res)=>{
    const id= req.body.userID;

    try {
        
        const game = await GameModel.findById(id);
       const wishlistitem = new WishModel({game: game._id});
       await wishlistitem.save();

       res.status(200).json({message: "Product added to Wishlist", wishlistitem});

    } catch (error) {
        res.status(400).json({ error: 'Internal Server Error' });
    }
})

WishRouter.delete("/remove/:id", async (res,req)=>{
const wishID = req.params.id;
try {
    const wishlistitem = await WishModel.findByIdAndRemove(wishID);

    res.status(200).json({message: "Product removed from wishlist", wishlistitem})
} catch (error) {
    res.status(400).json({ error: 'Internal Server Error' });
}
})

module.exports = WishRouter;