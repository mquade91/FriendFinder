//LOAD Data
var friendData = require("../data/friends");


//Routing
module.exports = function(app) {

    //GETs all the friendData
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    //POST to make a new friendData
    app.post("/api/friends", function(req, res) {

        var parseBody = req.body;
        for (var i = 0; i < parseBody.scores.length; i++) {
            parseBody.scores[i] = parseInt(parseBody.scores[i]);
        }
        //logic for finding best friend return best match loop through friends then through scores
        //function absolute value!
        friendData.push(parseBody);
        res.json(true);
        for (let i = 0; i < friendData.length; i++) {
            console.log(friendData[i].scores);
        }

    });

    //GETs all the friendData scores
    app.get("/api/friends/scores", function(req, res) {

        //for loop to GET all the scores form each friend
        for (var i = 0; i < friendData.length; i++) {
            res.json(friendData[i].scores);
        }
    });

};
