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
    var body = req.body;

    var bestMatch = getDifferences(friends, body);

    res.json(bestMatch);
  });

  // function getDifferences(userData, newUser) {
  //   var diffTotals = []
  //   for (var i = 0; i < userData.length; i++) {
  //     var totalDiff = 0

  //     for (var j = 0; j < userData[i].scores.length; j++) {
  //       var score1 = parseInt(userData[i].scores[j])
  //       var userScore = parseInt(newUser.scores[j])

  //       if (!(score1 === userScore)) {
  //         totalDiff += Math.abs(score1 - userScore)
  //         console.log(totalDiff);
  //       }
  //     }
  //     var friend = {
  //       name: userData[i].name,
  //       photo: userData[i].photo,
  //       total: totalDiff
  //     };

  //     diffTotals.push(friend)
  //   }
  //   return diffTotals
  // }


  // Check to find users best friend match 


  //check scores of posted user 
  //versus the score of all the other users 

  //keep track of current score 

  //if current score less then new score

  //change current score to new score

  //if nothing lower then current score 

  //show that current score user to the client

  // How to persist new verisions of friends.
//   friends.push(body);
//   res.json(friends);
// });


// clear out the form
// app.post("/api/clear", function(){
//   //empty out the arrays of data
//   friend = [];
//   console.log(friend);
// })
}