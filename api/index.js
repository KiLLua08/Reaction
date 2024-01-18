import express from "express";

const app = express()
const port = 4004

app.listen(port , ()=> {
    console.log('listenning to port : 4004');
})