
function sumArray(numbers) {
  //TODO: Add your code here


  const sum = numbers.reduce((accumulator, currentValue) =>
  accumulator + currentValue, 0);
  return sum;
}


const numbersArray = [1,2,3,4,5];
const result = sumArray(numbersArray);
console.log(result);



/**************************************************************
 Task 2:
  Create a function findFirstStringStartingWithA that receives an array of strings as a parameter
  and returns the first string that starts with the letter given letter.
**************************************************************/
function findFirstStringStartingWithLetter(letter, strings)  {
  //TODO: Add your code here
  function findFirstStringStartingWithLetter(letter, strings) {
    return strings.find((str) => str.toLowerCase().startsWith(letter));
  }
  console.log(
    findFirstStringStartingWithLetter("h", ["Memory", "Hello", "Happy"])
  );
  

/**************************************************************
 Task 3:
	@@ -26,16 +43,18 @@ function findFirstStringStartingWithLetter(letter, strings) {
**************************************************************/
function isPresentIncluded(presentName, presents) {
  //TODO: Add your code here
  return presents.includes(presentName);
}

console.log(
  isPresentIncluded("Puzzle", [
    "Sparkling Surprise",
    "Enchanted Elegance",
    "Whimsical Wonder",
    "Joyful Jingle",
    "Puzzle",
  ])
);

/**************************************************************
 Task 4:
	@@ -44,21 +63,23 @@ function isPresentIncluded(presentName, presents) {
**************************************************************/
function sortStudentsAlphabetically(students) {
  //TODO: Add your code here
  return students.sort().toString()

}
console.log(
  sortStudentsAlphabetically([
    "Eve",
    "Jasmia",
    "Husnia",
    "Grace",
    "Bob",
    "Charlie",
    "Alice",
    "Dave",
    "Um abbas",
    "Frank",
  ])
);

/**************************************************************
  Task 5:
	@@ -70,14 +91,24 @@ function sortStudentsAlphabetically(students) {
**************************************************************/
function separateOddEven(numbers) {
  //TODO: Add your code here
  const odds = [];
  const evens = [];
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      evens.push(number);
    } else {
      odds.push(number);
    }
  });
  return [odds, evens];
}
console.log(separateOddEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/**************************************************************
 Task 6:
  Create a function that takes two parameters: a code that represents an item, and an array of item codes, then removes the item with the given code from the system.
  -Hint: Use the filter method.
  - e.g 
 const items = [
   { code: '#153', name: 'Ball' },
   { code: '#147', name: 'Scissors' },
	@@ -90,15 +121,19 @@ function separateOddEven(numbers) {
**************************************************************/
function removeItem(code, items) {
  //TODO: Add your code here
  return items.filter((item) => item.code!== code);
}
console.log(
  removeItem("#153", [
    { code: "#153", name: "Ball" },
    { code: "#147", name: "Scissors" },
    { code: "#249", name: "Pillow" },
    { code: "#149", name: "Tissue" },
  ])

  );



/**************************************************************
Task 7:
	@@ -145,14 +180,18 @@ Task 7:
**************************************************************/
function updateGrades(curve, students) {
  //TODO: Add your code here
  return students.map((student) =>
  students.type === "nerd"
  ? {...student, grade : student.grade - curve}
  :{...student, grade : student.grade + curve});
}
console.log(
  updateGrades(10, [
    { firstName: "Jaber", lastName: "jabarbar", grade: 10, type: "regular" },
    { firstName: "Hamza", lastName: "Alhamazi", grade: 12, type: "regular" },
    { firstName: "Jasem", lastName: "Jamasmas", grade: 15, type: "nerd" },
    { firstName: "Kadhim", lastName: "Khadhmia", grade: 5, type: "regular" },
    { firstName: "Um Abbas", lastName: "IDK", grade: 20, type: "nerd" },
    { firstName: "Johny", lastName: "Micle", grade: 10, type: "regular" },
  ])
);