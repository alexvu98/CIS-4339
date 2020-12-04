const fetch = require("sync-fetch");

const getMovie = fetch('https://swapi.dev/api/films/', {

}).json();

// checks to see if input is valid according to the api
const foundMovie = async (movieName) => {
    for (const [key, value] of Object.entries(getMovie.results)) {
        if(value.title.toLowerCase() === movieName){
            return value;
        }
    }
}

//allows module to be reusable
module.exports = foundMovie; 