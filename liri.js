// Per instructions: 

require("dotenv").config();

const keys = require("./keys.js");

// VVV Uncomment when done testing!!!!
// const spotify = new Spotify(keys.spotify);

// Here thar be dragons

const axios = require("axios");

const fs = require("fs");

const moment = require("moment");

const Spotify = require('node-spotify-api');

const LIRI = function() {
  
    this.findConcert = function(artist) {
      const URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  
      axios.get(URL).then(function(response) {
        // parse the response body (string) to a JSON object
        const jsonData = response.data;
        // artistData ends up being the string containing the artist data we will print to the console
        const artistData = [
          "Name: " + jsonData.venue.name,
          "Location: " + jsonData.venue.city + jsonData.venue.country,
          "Date: " + moment(jsonData.datetime)
        ].join("\n\n");
  
console.log(artistData);
      });
    };

    this.findSong = function(song) {
        const URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    
        axios.get(URL).then(function(response) {
          // parse the response body (string) to a JSON object
          const jsonData = response.data;
          // songData ends up being the string containing the show data we will print to the console
          const songData = [
            "Show: " + jsonData.name,
            "Genre(s): " + jsonData.genres.join(", "),
            "Rating: " + jsonData.rating.average,
            "Network: " + jsonData.network.name,
            "Summary: " + jsonData.summary
          ].join("\n\n");
    
console.log(songData);
        });
      };

      this.findMovie = function(movie) {
        const URL = "http://www.omdbapi.com/?t=" + movie + "&plot=short&apikey=trilogy";
    
        axios.get(URL).then(function(response) {
          // parse the response body (string) to a JSON object
          const jsonData = response.data;
          console.log(jsonData);
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

      this.doIT = function(it) {
        const URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    
        axios.get(URL).then(function(response) {
          // parse the response body (string) to a JSON object
          const jsonData = response.data;
          // showData ends up being the string containing the show data we will print to the console
          const showData = [
            "Show: " + jsonData.name,
            "Genre(s): " + jsonData.genres.join(", "),
            "Rating: " + jsonData.rating.average,
            "Network: " + jsonData.network.name,
            "Summary: " + jsonData.summary
          ].join("\n\n");
    
console.log();
        });
      };

  };
  
  module.exports = LIRI;