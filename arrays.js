/**************************************************************
 Task 1:
   Create a function sumArray that receives an array of numbers as a parameter and returns the sum of all the numbers in the array.
**************************************************************/
function sumArray(numbers) {
  //TODO: Add your code here
  return numbers.reduce((acc, curr) => acc + curr, 0);

}
// console.log(sumArray([4, 3, 2, 5, -10]));

/**************************************************************
 Task 2:
  Create a function findFirstStringStartingWithA that receives an array of strings as a parameter
  and returns the first string that starts with the letter given letter.
**************************************************************/
function findFirstStringStartingWithLetter(letter, strings) {
  //TODO: Add your code here
  return strings.find((string) => string[0].toLowerCase() === letter.toLowerCase());
}
// console.log(
//   findFirstStringStartingWithLetter("h", ["Memory", "Hello", "Happy"])
// );

/**************************************************************
 Task 3:
  Create a function isPresentIncluded that receives an array of presents as a parameter and uses the includes method to check
  if a present is included in the array.
**************************************************************/
function isPresentIncluded(presentName, presents) {
  //TODO: Add your code here
  return presents.includes(presentName);
}
// console.log(
//   isPresentIncluded("puzzle", [
//     "Sparkling Surprise",
//     "Enchanted Elegance",
//     "Whimsical Wonder",
//     "Joyful Jingle",
//     "Puzzle",
//   ])
// );

/**************************************************************
 Task 4:
  Create a function sortStudentsAlphabetically that receives an array of students name as a parameter
  and uses the sort method to sort the strings in alphabetical order.
**************************************************************/
function sortStudentsAlphabetically(students) {
  //TODO: Add your code here
  return students.sort();
}
// console.log(
//   sortStudentsAlphabetically([
//     "Eve",
//     "Jasmia",
//     "Husnia",
//     "Grace",
//     "Bob",
//     "Charlie",
//     "Alice",
//     "Dave",
//     "Um abbas",
//     "Frank",
//   ])
// );

/**************************************************************
  Task 5:
   Create a function that takes an array of numbers as input, separates the odd and even numbers, and returns two new arrays.
   - Hint: Use the forEach method.
   - const [odds, evens] = separateOddEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
   - console.log(odds); // Output: [1, 3, 5, 7, 9]
   - console.log(evens); // Output: [2, 4, 6, 8, 10]
**************************************************************/
function separateOddEven(numbers) {
  //TODO: Add your code here
  let odds = [];
  let evens = [];
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      evens.push(number);
    } else {
      odds.push(number);
    }
  }
  );
  return [odds, evens];
}
// console.log(separateOddEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/**************************************************************
 Task 6:
  Create a function that takes two parameters: a code that represents an item, and an array of item codes, then removes the item with the given code from the system.
  - Hint: Use the filter method.
  - e.g
 const items = [
   { code: '#153', name: 'Ball' },
   { code: '#147', name: 'Scissors' },
   { code: '#249', name: 'Pillow' },
   { code: '#149', name: 'Tissue' }
    ];

  const updatedItems = removeItem('#153', items);
  console.log(updatedItems); // Output: [{ code: "#147", name: "Scissors" }, { code: "#249", name: "Pillow" }, { code: "#149", name: "Tissue" },];
**************************************************************/
function removeItem(code, items) {
  //TODO: Add your code here
  return items.filter((item) => item.code !== code);
}
// console.log(
//   removeItem("#153", [
//     { code: "#153", name: "Ball" },
//     { code: "#147", name: "Scissors" },
//     { code: "#249", name: "Pillow" },
//     { code: "#149", name: "Tissue" },
//   ])
// );

/**************************************************************
Task 7:
   Write a function that takes an array of objects representing students, with properties like firstName, lastName, grade, and
    type (nerd or regular), and a curve which represents the amount of the curve. The function should return a new array with
     updated grades, with nerds receiving a negative curve and regular students receiving a positive curve.
   - Hint: Use the map method.
   - e.g
  const students = [
    { firstName: "Jaber", lastName: "jabarbar", grade: 10, type: "regular" },
    { firstName: "Hamza", lastName: "Alhamazi", grade: 12, type: "regular" },
    { firstName: "Jasem", lastName: "Jamasmas", grade: 15, type: "nerd" },
    { firstName: "Kadhim", lastName: "Khadhmia", grade: 5, type: "regular" },
    { firstName: "Um Abbas", lastName: "IDK", grade: 20, type: "nerd" },
    { firstName: "Johny", lastName: "Micle", grade: 10, type: "regular" },
    ];
  const updatedGrades = updateGrades(students, 10);
  console.log(updatedGrades);

  Output:
   [
     {
       firstName: "Jaber",
       lastName: "jabarbar",
       grade: 20,
       type: "regular",
     },
     {
       firstName: "Hamza",
       lastName: "Alhamazi",
       grade: 22,
       type: "regular",
     },
     { firstName: "Jasem", lastName: "Jamasmas", grade: 5, type: "nerd" },
     {
       firstName: "Kadhim",
       lastName: "Khadhmia",
       grade: 15,
       type: "regular",
     },
     { firstName: "Um Abbas", lastName: "Winston", grade: 10, type: "nerd" },
     { firstName: "Johny", lastName: "Micle", grade: 20, type: "regular" },
   ];
**************************************************************/
function updateGrades(curve, students) {
  //TODO: Add your code here
  return students.map((student) => {
    if (student.type === "nerd") {
      return { ...student, grade: student.grade - curve };
    } else {
      return { ...student, grade: student.grade + curve };
    }
  }
  );
}
// console.log(
//   updateGrades(10, [
//     { firstName: "Jaber", lastName: "jabarbar", grade: 10, type: "regular" },
//     { firstName: "Hamza", lastName: "Alhamazi", grade: 12, type: "regular" },
//     { firstName: "Jasem", lastName: "Jamasmas", grade: 15, type: "nerd" },
//     { firstName: "Kadhim", lastName: "Khadhmia", grade: 5, type: "regular" },
//     { firstName: "Um Abbas", lastName: "IDK", grade: 20, type: "nerd" },
//     { firstName: "Johny", lastName: "Micle", grade: 10, type: "regular" },
//   ])
// );
