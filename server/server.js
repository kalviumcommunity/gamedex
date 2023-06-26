const express = require('express')
const app = express();
const mongoose = require('mongoose')
const Game = require("./gameModal/gameModal")
app.use(express.json())
const cors = require('cors');
require('dotenv').config()

app.use(cors());

mongoose.set("strictQuery",false);

mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('connected!')
    })
}).catch(err => { 
    console.log(err);
}),

app.get("/data", async (req, resp) =>{
    try {
        const data = await Game.find();
        resp.status(200).json(data);
    } catch (error) {
        console.log(error)
    }
})

app.post("/api/game", async (req, resp) => {
    const { name } = req.body;
    try {
        const game = await Game.create( name )
        resp.json(game)
    } catch (e) {
        resp.status(500).json(e)
    }
})

app.put("/:id", async (req, resp )=>{
    try {
        console.log(req.params.id)
        const updateGames = await Game.findOneAndUpdate(
            {
                _id:req.params.id
            },
            {
                $set: req.body
            }
        );
        resp.send(updateGames);
    } catch (e) {
        resp.status(404).json(e)
    }
})
