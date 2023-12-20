const mongoose = require("mongoose")

const wishSchema = mongoose.Schema({
   title: String,
   description: String,
   level: String,
   category: String,
   rating: Number,
   discount: Number,
   price: Number,
   img: String,
   trailer: String,
   active: String,
   userID: String,
   library: Boolean,
   bag: Boolean
},{versionKey:false});

const WishModel = mongoose.model("wishlist",wishSchema)

module.exports={
  WishModel
}