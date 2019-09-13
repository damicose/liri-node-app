require("dotenv").config();

const keys = require("./keys.js");

// Here thar be dragons~~

const axios = require("axios");

const moment = require("moment");

const Spotify = require('node-spotify-api');

const LIRI = function () {

    this.findConcert = function (artist) {
        const URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

        axios.get(URL).then(function (response) {
            // parse the response body (string) to a JSON object
            const jsonData = response.data;
            // For testing
            // console.log(jsonData[0]);

            // artistData ends up being the string containing the artist data we will print to the console
            const artistData = [
                "Name: " + jsonData[0].venue.name,
                "Location: " + jsonData[0].venue.city + ", " + jsonData[0].venue.country,
                "Date: " + moment(jsonData[0].datetime).format("MMMM Do YYYY")
            ].join("\n\n");

            console.log(artistData);
        });
    };

    this.findSong = function (song) {
        const spotify = new Spotify(keys.spotify);

        spotify.search({ type: 'track', query: song, limit: 1}, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }

const jsonData = data.tracks.items[0];

            const songData = [
                "Artist(s): " + jsonData.artists[0].name,
                "Track Title: " + jsonData.name,
                "Preview Link: " + jsonData.preview_url,
                "Album: " + jsonData.album.name
            ].join("\n\n");

            console.log(songData);
        });
        };

    this.findMovie = function (movie) {
        const URL = "http://www.omdbapi.com/?t=" + movie + "&plot=short&apikey=trilogy";

        axios.get(URL).then(function (response) {
            // parse the response body (string) to a JSON object
            const jsonData = response.data;
            //   For testing
            // console.log(jsonData);
            // movieData ends up being the string containing the show data we will print to the console
            const movieData = [
                "Title: " + jsonData.Title,
                "Year of Release: " + jsonData.Year,
                "IMDB Rating: " + jsonData.Ratings[0].Value,
                "Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value,
                "Country of Production: " + jsonData.Country,
                "Language(s): " + jsonData.Language,
                "Plot Summary: " + jsonData.Plot,
                "Actors: " + jsonData.Actors
            ].join("\n\n");

            console.log(movieData);
        });
    };

    // this.doIt = function () {
    //     // Rejiggered from Section 10 Activity 12
    //     fs.readFile("random.txt", "utf8", function(error, data) {

    //         // If the code experiences any errors it will log the error to the console.
    //         if (error) {
    //           return console.log(error);
    //         }

    //         // Then split it by commas (to make it more readable)
    //         var dataArr = data.split(",");
          
    //         // We will then re-display the content as an array for later use. sike
    //         search = (dataArr[0]);
    //         term = (dataArr[1]);
          
    //       });
    // };

};

module.exports = LIRI;