
// require("dotenv").config();

var userinput = process.argv[2];
// console.log(userinput);

var title = process.argv[3];
// console.log(userinput);

var Twitter = require("twitter");

// var request = require("request");

var fs = require("fs");

var keys = require("./keys.js");
// console.log(keys);

var client = new Twitter(keys);
// console.log(client);

var params = {
    screen_name: "hectorhec01",
    count: 5

}

switch (userinput) {
    case "my-tweets":
        myTweets();
        break;
    case "my-movie":
        myMovie (title);
        break;
    case "my-spotify":
        mySpotify(title);
        break;
}

// tweets function
function myTweets(){
    console.log("Last 5 tweets: ");

    client.get("statuses/user_timeline", params, function(error, tweets, response){
    // console.log(tweets);
    for (i = 0; i < tweets.length; i++) {
        console.log (tweets[i].text);
    
    }

    })
}
function myMovie(moviename) {
    // console.log("My movies: ");

    if (title === undefined) { 
        moviename = "tron";   
    }
    var request = require("request");
    // console.log ("request");
    
    var queryURL = "http://www.omdbapi.com/?t=" + moviename + "&y=&plot=full&tomatoes=true&apikey=trilogy"; 
    request(queryURL, function (error, response, body) {
        // console.log("request");
        if (!error && response.statusCode == 200) {
            var jsonBody = JSON.parse(body);
            console.log(' ');
            console.log("My movies: ");
            console.log('Title: ' + jsonBody.Title);
            console.log('Year: ' + jsonBody.Year);
            console.log('Rating: ' + jsonBody.imdbRating);
            console.log('Country: ' + jsonBody.Country);
            console.log('Language: ' + jsonBody.Language);
            console.log('Plot: ' + jsonBody.Plot);
            console.log('Actors: ' + jsonBody.Actors);
            console.log(' ');

        }
    });
}
// Function for running a Spotify search
// var mySpotify = function(songName) {
//     if (title === undefined) {
//         title = "I Don't Want to Miss a Thing";
//     }
//     spotify.search(                                                 { type: "track", query: songName }, function(error, data) {
//       if (error) {
//         console.log("Error occurred: " + err);
//         return;
//       }
//       var songs = data.tracks.items;
//       var data = [];
//       for (var i = 0; i < songs.length; i++) {
//         data.push({
//           "artist(s)": songs[i].artists.map(getArtistNames),
//           "song name: ": songs[i].name,
//           "preview song: ": songs[i].preview_url,
//           "album: ": songs[i].album.name
//         });

function mySpotify(title) {

// when getting de api, check to install the spotify npm //

    if (title == null) {
        title = "I Don't Want to Miss a Thing";
    }

    var request = require("request");
    var queryURL = "http://www.sssssssssssss" + title + "ssssssssss"; 
    request(queryURL, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            jsonBody = JSON.parse(body);
            console.log(' ');
            console.log("My songs: ")
            console.log('Artist: ' + jsonBody.tracks.items[0].artists[0].name);
            console.log('Song: ' + jsonBody.tracks.items[0].name);
            console.log('Album: ' + jsonBody.tracks.items[0].album.name);
            console.log(' ');
        }
    });
}

