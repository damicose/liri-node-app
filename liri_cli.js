// Borrowing basic structure from Section 11 Activities 11-14

const LIRI = require("./liri");

const liri = new LIRI();

let search = process.argv[2];

let term = process.argv.slice(3).join(" ");

if (!term && search === "movie-this") {
    term = "Mr. Nobody";
    liri.findMovie(term);
  }
  else if (!term && search === "spotify-this-song") {
      term = "the sign ace of base";
    //   Added artist to query otherwise it pulls a Harry Styles song :|
      liri.findSong(term);
  }
  else if (!term && search === "concert-this") {
    term = "cher";
  //   Added artist to query otherwise it pulls a Harry Styles song :|
    liri.findConcert(term);
}
else if ((search === "do-what-it-says")) {
    console.log("Indecision may or may not be my problem. ...");
    fs.readFile("random.txt", "utf8", function(error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
          return console.log(error);
        }

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");
      
        search = (dataArr[0]);
        term = (dataArr[1]);
      
      });
}

else if (search === "concert-this") {
    console.log("Searching for Concerts");
    liri.findConcert(term);
  } else if (search === "spotify-this-song") {
    console.log("Searching for Songs");
    liri.findSong(term);
  } else if (search === "movie-this") {
      console.log("Searching for Movies");
      liri.findMovie(term);
  } 

  