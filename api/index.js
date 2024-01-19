import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import routes from "./routes/user.route.js";

dotenv.config()

const app = express()
const port = 4004
//leagueoflegends123 rayen08yako
app.listen(port , ()=> {
    console.log('listenning to port : 4004');
})

mongoose.connect(process.env.MONGO_URL)
.then(() =>console.log('connected to the database'))
.catch((err) => console.error(err))

app.use('/api/user', routes);