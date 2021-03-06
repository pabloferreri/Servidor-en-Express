const express = require('express');
const app = express();
const path = require('path');

app.listen(3030,() => {
    console.log('Servidor en puerto 3030.');
})

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'./index.html'))
})

app.get('/babbage', (req,res) =>{
    res.sendFile(path.join(__dirname,'./babbage/babbage.html'))
})

app.get('/berners-lee', (req,res) =>{
    res.sendFile(path.join(__dirname,'./berners-lee/berners-lee.html'))
})

app.get('/clarke', (req,res) =>{
    res.sendFile(path.join(__dirname,'./clarke/clarke.html'))
})

app.get('/hamilton', (req,res) =>{
    res.sendFile(path.join(__dirname,'./hamilton/hamilton.html'))
})

app.get('/hopper', (req,res) =>{
    res.sendFile(path.join(__dirname,'./hopper/hopper.html'))
})

app.get('/lovelace', (req,res) =>{
    res.sendFile(path.join(__dirname,'./lovelace/lovelace.html'))
})

app.get('/turing', (req,res) =>{
    res.sendFile(path.join(__dirname,'./turing/turing.html'))
})