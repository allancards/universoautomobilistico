const express = require("express");
const server = express();

server.use(express.static("public"))


server.get("/",(req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
});

server.get("/modal.html",(req, res)=>{
    res.sendFile(__dirname + "/views/modal.html");
});

server.get("/hystory.html",(req, res)=>{
    res.sendFile(__dirname + "/views/hystory.html");
});

server.get("/modal_moto.html",(req, res)=>{
    res.sendFile(__dirname + "/views/modal_moto.html");
});



server.listen(3030,() =>{console.log("servidor rodando!! ")});