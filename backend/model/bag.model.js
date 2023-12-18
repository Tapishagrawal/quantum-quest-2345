const mongoose = require("mongoose")

const bagSchema = mongoose.Schema({
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
   library:Boolean,
   bag:Boolean
});

const BagModel = mongoose.model("Baglist",bagSchema)

module.exports={
    BagModel
}