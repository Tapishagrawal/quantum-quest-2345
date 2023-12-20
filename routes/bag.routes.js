const express = require("express");
const { BagModel } = require("../model/bag.model");
const BagRouter = express.Router();
const { auth } = require("../middleware/auth.middleware");


BagRouter.get("/", auth, async (req, res) => {
    try {
        const bagData = await BagModel.find({ userID: req.body.userID });
        res.status(200).json(bagData);
    } catch (error) {
        res.status(400).json({ error: "Internal Server Error" });
    }
})

BagRouter.post("/add", auth, async (req, res) => {
    try {
        const bagItem = new BagModel(req.body);
        await bagItem.save();
        res.status(200).json({ message: "Product added to bag", bagItem });
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'Internal Server Error' });
    }
})

BagRouter.delete("/remove/:id", auth, async (req, res) => {
    const { id } = req.params;
    try {
        const bagItem = await BagModel.findByIdAndDelete({ _id: id });
        res.status(200).json({ message: "Product removed from bag", bagItem })
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'Internal Server Error' });
    }
})

module.exports = BagRouter;