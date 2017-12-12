//LOAD Data
var friendData = require("../data/friends");


//Routing
module.exports = function(app) {


    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });


    app.post("/api/friends", function(req, res) {
        friendData.push(req.body);

        res.json(true);
        console.log("Look here!!!" + JSON.stringify(req.body));
    });

};
