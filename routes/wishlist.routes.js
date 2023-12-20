const express = require("express");
const { WishModel } = require("../model/wishlist.model");
const { auth } = require("../middleware/auth.middleware");
const WishRouter = express.Router();


WishRouter.get("/", auth, async (req, res) => {
    try {
        const wishlist = await WishModel.find({ userID: req.body.userID });
        res.status(200).json(wishlist);
    } catch (error) {
        res.status(400).json({ error: "Internal Server Error" });
    }
})

WishRouter.post("/add", auth, async (req, res) => {
    try {
        const wishlistitem = new WishModel(req.body);
        await wishlistitem.save();
        res.status(200).json({ message: "Product added to Wishlist", wishlistitem });
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'Internal Server Error' });
    }
})

WishRouter.delete("/remove/:id", auth, async (req, res) => {
    const { id } = req.params;
    try {
        const wishlistitem = await WishModel.findByIdAndDelete({ _id: id });
        res.status(200).json({ message: "Product removed from wishlist", wishlistitem })
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'Internal Server Error' });
    }
})

module.exports = WishRouter;