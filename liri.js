
require("dotenv").config();

var client = new twitter(keys.twitter);
var a = process.argv[2];
var Twitter = require("twitter");
var request = require("request");
var fs = require("fs");
var keys = require("LIRI/keys.js/.twitter");
// var twitterKeys = keys.twitter (por el momento no lo necesito pero cuando anada Spotify si para diferencias los KEys)
var client = new Twitter(keys.twitter);
var params = {
    screen_name: "hectorhec01",
    count: 5
}

switch (action) {
    case 'mytweets':
        myTweets();
        break;
}
