# liri-node-app

## Function
This LIRI app is designed to take two inputs ('search' and 'term') and then provide information based on the query's specifics. Possible outputs are:

*Next concert details for an artist
*Basic information for a track
*Basic information for a movie

No purpose beyond sating curiousity.

## Organization
App is organized into two main .js files that perform the bulk of the heavy lifting with some assistance from node modules, a .env that prevents Spotify credentials from being stolen, and three APIs.

## Directions
From the command line interface users will enter "node " followed by one of three possible search terms:

*concert-this
*spotify-this-track
*movie-this

followed by the specific term they are searching for. Results are logged in the command line interface.

Default terms are built in to each search term if the user does not provide one.

## Screenshots

![Movie With Default (Mr. Nobody)](https://github.com/damicose/liri-node-app/blob/master/assets/movie%20default.jpg?raw=true)

![Movie With Query Input](https://github.com/damicose/liri-node-app/blob/master/assets/movie%20query.jpg?raw=true)

![Track Default (The Sign)](https://github.com/damicose/liri-node-app/blob/master/assets/spotify%20default.jpg?raw=true)

![Track With Query Input](https://github.com/damicose/liri-node-app/blob/master/assets/spotify%20query.jpg?raw=true)

![Concert Default (Cher)](https://github.com/damicose/liri-node-app/blob/master/assets/concert%20default%20(cher).jpg?raw=true)

![Concert With Query Input](https://github.com/damicose/liri-node-app/blob/master/assets/concert%20query.jpg?raw=true)

## Technologies

*Javascript
*Node
    *axios module
    *moment module
    *spotify api module
    *fs module (forthcoming feature)
*APIs
    *Spotify
    *BandsInTown
    *OMDB

## State your role in the app development

Guide for the overall structure of the app was provided by Coding Boot Camp Instructor. All development and coding beyond that were done by yours truly. Except for the parts that don't work--that's their fault.