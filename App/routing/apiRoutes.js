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
        friendData.push(req.body);
        res.json(true);
    });

    //GETs all the friendData scores
    app.get("/api/friends/scores", function(req, res) {
        for (var i = 0; i < friendData.length; i++) {
            res.json(friendData[i].scores);
        }
    });

};
