var friend = [{
  "name":"Albert Einstein",
  "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Einstein-formal_portrait-35.jpg/220px-Einstein-formal_portrait-35.jpg",
  "scores":[
      5,
      1,
      4,
      1,
      5,
      3,
      5,
      1,
      4,
      1
    ]
},{
  "name":"Dalai Lama",
  "photo":"https://pbs.twimg.com/profile_images/529214699041067008/fqPBAr5s.jpeg",
  "scores":[
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3
    ]
},{
  "name":"George Carlin",
  "photo":"https://static-s.aa-cdn.net/img/ios/432769046/91969537ad557d514d230d7997abf59f?v=1",
  "scores":[
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      3,
      1
    ]
},{
  "name":"Steven Spielberg",
  "photo":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1NjAzNzE1MV5BMl5BanBnXkFtZTYwNTk0ODc0._V1_UX214_CR0,0,214,317_AL_.jpg",
  "scores":[
      5,
      1,
      5,
      1,
      5,
      1,
      2,
      2,
      4,
      4
    ]
},{
  "name":"Elon Musk",
  "photo":"https://robomatter.com/wp-content/uploads/2015/12/Elon_Musk_2015.jpg",
  "scores":[
      5,
      1,
      1,
      1,
      1,
      3,
      5,
      1,
      5,
      3
    ]
}
];



//Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
/*
abilities needed: read and write  from a json file

2. export an array of friend objects
3. provide a way to update friends array

*/
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5
// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.
// Once you've found the current user's most compatible friend, display the result as a modal pop-up.
// The modal should display both the name and picture of the closest match.

module.exports = friend;