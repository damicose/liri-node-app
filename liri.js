// Per instructions: 

require("dotenv").config();

const keys = require("./keys.js");

const spotify = new Spotify(keys.spotify);

// Here thar be dragons

const axios = require("axios");

const fs = require("fs");

