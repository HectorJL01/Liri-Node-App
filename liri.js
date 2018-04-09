
require("dotenv").config();

var userinput = process.argv[2];
var Twitter = require("twitter");
var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");
// var twitterKeys = keys.twitter (por el momento no lo necesito pero cuando anada Spotify si para diferencias los KEys)
var client = new Twitter(keys.twitter);
var params = {
    screen_name: "hectorhec01",
    count: 5
}

switch (userinput) {
    case 'mytweets':
        myTweets();
        break;
};

// tweets function
function myTweets(){
    client.get("statuses/user_timeline", params, function(error, tweets, response){
        if (!error && response.statusCode == 200){
            fs.appendFile("terminal.log", ("===== Log Entry Begin =====\r\n" + Date () + "\r\n \r\nTERMINAL COMMANDS:\r\n$: " + process.argv + "\r\n \r\nDATA OUTPUT:\r\n"), function (err){
                if (err) throw err;
            })
        }
    })
}
console.log(" ");
