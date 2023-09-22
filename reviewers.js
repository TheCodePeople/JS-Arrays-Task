const reviewers = require("./reviewers.json");
console.log("🚀 ~ file: reviewers.js:2 ~ reviewers:", reviewers);

/*********************************************************************** 
- This function receives a reviewer object and should return the name of the reviewer.
***********************************************************************/
function getReviewerName(reviewer) {
  //TODO: ADD YOUR CODE HERE
  return reviewer.reviewerName;
}

// console.log(getReviewerName(reviewers[0]));

/*********************************************************************** 
- Receives a reviewer object and returns the number of reviews that reviewer has done.
************************************************************************/
function numberOfReviews(reviewer) {
  //TODO: ADD YOUR CODE HERE
  return reviewer.books.length;
}
// console.log(numberOfReviews(reviewers[0]));

/***********************************************************************
 - Receives a review title (string) and a reviewer object, 
   and returns true if the reviewer object has a review that matches the given review title. 
   Otherwise, it returns false. 
 - Bonus: uses iteration method .some()
 ***********************************************************************/
function reviewerHasReview(reviewTitle, reviewer) {
  //TODO: ADD YOUR CODE HERE
}
// console.log(reviewerHasReview("Becoming", reviewers[0]));

/**************************************************************
 - Receives a reviewer name (string) and an array of reviewer objects,
   and returns the reviewer object with the same name as the reviewerName provided. 
 - Bonus: uses iteration method .find()
 ****************************************************************/
function getReviewerByName(reviewerName, reviewers) {
  //TODO: ADD YOUR CODE HERE
}
// console.log(getReviewerByName("Michelle Obama", reviewers));

/**************************************************************
- Receives a review title (string) and an array of reviewer objects, 
  and returns the reviewer object that has done a review with the review title provided. 
- Bonus: uses iteration methods .find() and .some()
 ****************************************************************/
function getReviewerByReviewTitle(reviewTitle, reviewers) {
  //TODO: ADD YOUR CODE HERE
}
// console.log(getReviewerByReviewTitle("The Overstory", reviewers));

/**************************************************************
- Receives a query (string) and an array of reviewer objects,
  and returns an array of the reviewer objects that contain the query in their name/description. 
- Hint: uses string method .includes() and iteration method .filter()
 ****************************************************************/
function searchReviewers(query, reviewers) {
  //TODO: ADD YOUR CODE HERE
}
// console.log(searchReviewers("o", reviewers));
