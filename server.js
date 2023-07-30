// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path  = require('path');

// declare static path
let staticpath = path.join(__dirname, "public");

//initailizing express.js

const app = express();

// middleware
app.use(express.static(staticpath));

//home____
//home route
app.get("/", (req, res) => {
        res.sendFile(path.join(staticpath, "home.html"));
    })

// signup route
app.get('/signup', (reg, res) => {
    res.sendFile(path.join(staticpath, "signup.html"));
    })
// 404 route
app.get('/404', (reg, res) => {
    res.sendFile(path.join(staticpath, "404.html"));

})
app.use((reg, res) => {
    res.redirect('/404');

})
app.listen(3000, () => {
    console.log('listening on port 3000......');
})