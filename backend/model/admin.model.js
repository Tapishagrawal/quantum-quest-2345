const mongoose = require("mongoose")

const gameSchema = mongoose.Schema({
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
   bag: Boolean,
},{
    versionKey: false
})

const GameModel = mongoose.model("game",gameSchema)

module.exports={
    GameModel
}



// "_id": 1,
//     "title": "League of Legends",
//     "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non nobis, molestiae eum quod qui",
//     "level": "Median",
//     "category": "MOBA",
//     "rating": 3,
//     "discount": 0.5,
//     "price": 79.0,
//     "img": "lol-bg.jpeg",
//     "trailer": "https://www.youtube.com/embed/vzHrjOMfHPY",
//     "active": true