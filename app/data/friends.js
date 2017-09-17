// ===============================================================================
// DATA
// Below data will hold all of the users.
// Initially we just set it equal to a "dummy" user.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArr = [
  {
    "name": "Ahmed",
    "photo": "https://pixabay.com/en/man-person-face-glasse-choice-159771/",
    "scores": [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArr;