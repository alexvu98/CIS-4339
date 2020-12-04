const express = require("express");
const request = require("request");
const foundMovie = require('./movieData')

const app = express();

app.use(express.static('resources'))
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('index');
})

app.get("/register", (req, res) => {
    res.render('registration.ejs');
})

//logic to pass the api data on to results page
app.get('/movieInfo', (req, res) => {
    let movieName = req.query.movieName.toLocaleLowerCase();
    foundMovie(movieName).then((movie) => {
        let movieResults = movie; 
        res.render('result', {movieResults: movieResults})
    }).catch((error) => {
        console.log(error);
    })
})

app.listen(8080, () => {
    console.log('http://localhost:8080/')
})

