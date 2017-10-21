var friends = require('../data/friends.js');

//Your apiRoutes.js file should contain two routes:
//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// ROUTING

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    var newUser = req.body;
    var bestMatch = findBestMatch(friends, newUser);
    friends.push(newUser);
    res.json(bestMatch);
  });

  function findBestMatch(userData, newUser) {
    var diffTotals = []

    for (var i = 0; i < userData.length; i++) {
      var totalDiff = 0

      for (var j = 0; j < userData[i].scores.length; j++) {
        var score1 = parseInt(userData[i].scores[j])
        var userScore = parseInt(newUser.scores[j])

        if (!(score1 === userScore)) {
          totalDiff += Math.abs(score1 - userScore)
        }
      }

      var friend = {
        name: userData[i].name,
        photo: userData[i].photo,
        total: totalDiff
      };

      diffTotals.push(friend)
    }

    var newBestFriend = diffTotals.reduce( function(bestMatch, friend, index){
      if (index === 0) { bestMatch = friend }
      if (friend.total < bestMatch.total) {
        bestMatch = friend
      }
      return bestMatch
    }, {} )

    return newBestFriend
  }

};


