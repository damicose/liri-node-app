// Borrowing basic structure from Section 11 Activities 11-14

// const inquirer = require("inquirer");
const LIRI = require("./liri");

const liri = new LIRI();

let search = process.argv[2];

let term = process.argv.slice(3).join(" ");

if (search === "concert-this") {
    console.log("Searching for Concerts");
    liri.findConcert(term);
  } else if (search === "spotify-this-song") {
    console.log("Searching for Songs");
    liri.findSong(term);
  } else if (search === "movie-this") {
      console.log("Searching for Movies");
      liri.findMovie(term);
  } else if (search === "do-what-it-says") {
      console.log("Indecision may or may not be my problem. ...");
      liri.doIt();
  }

//   Add else/if for defaulting to Mr. Nobody (?)
  