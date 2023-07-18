/**************************************************************
 Task 1: 
   Create a function sumArray that receives an array of numbers as a parameter and returns the sum of all the numbers in the array.
   Hint: Use the .reduce() method
**************************************************************/
function sumArray(numbers) {
  //TODO: Add your code here
let result=numbers.reduce((sum,value)=>{return sum+value});
return result;
}

console.log("Task-1 :\nSummation Of [4, 3, 2, 5, -10] = "+sumArray([4, 3, 2, 5, -10]));
console.log("**************************************************************");
console.log("**************************************************************");
/**************************************************************
 Task 2:
  Create a function findFirstStringStartingWithA that receives an array of strings as a parameter
  and returns the first string that starts with the letter given letter.
  
  Hint: Use the .find() and .startsWith() methods
**************************************************************/
function findFirstStringStartingWithLetter(letter, strings) {
  //TODO: Add your code here
  let result = strings.find( (s)=>  (s.toLowerCase()).startsWith(letter.toLowerCase())  ==true );
  return result;
}
console.log("Task-2 :\nThe First Item In [\"Memory\", \"Hello\", \"Happy\"] That Start With (h) : " +
  findFirstStringStartingWithLetter("h", ["Memory", "hello", "Happy"])
);
console.log("**************************************************************");
console.log("**************************************************************");
/**************************************************************
 Task 3:
  Create a function isPresentIncluded that receives an array of presents as a parameter and uses the includes method to check 
  if a present is included in the array.
  
  Hint: Use the .map() and .includes() methods
**************************************************************/
function isPresentIncluded(presentName, presents) {
  //TODO: Add your code here
  console.log("Task-3 :\n");
  if(presents.includes(presentName)==true)
  console.log(`The ((( ${presentName}  )))  Item is Available`);
  else
  console.log(`The ((( ${presentName} )))  Item is Not Available`);

}

console.log( 
  isPresentIncluded("puzzle", [
    "Sparkling Surprise",
    "Enchanted Elegance",
    "Whimsical Wonder",
    "Joyful Jingle",
    "Puzzle",
  ])
);
console.log("**************************************************************");
console.log("**************************************************************");
/**************************************************************
 Task 4:
  Create a function sortStudentsAlphabetically that receives an array of students name as a parameter 
  and uses the sort method to sort the strings in alphabetical order.

  Hint: Use the .sort() method
**************************************************************/
function mySort(a,b)
{
  if(a>b)return true;
  if(b>a)return false;
}
function sortStudentsAlphabetically(students) {
  //TODO: Add your code here
  students.sort(mySort);
  // console.log(students);
  return students;
}

console.log("Task-4 :\nItems Afer Sorting : "+
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
console.log("**************************************************************");
console.log("**************************************************************");
/**************************************************************
  Task 5:
   Create a function that takes an array of numbers as input, separates the odd and even numbers, and returns two new arrays.
   - Hint: Use the forEach method.
   - const [odds, evens] = separateOddEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
   - console.log(odds); // Output: [1, 3, 5, 7, 9]
   - console.log(evens); // Output: [2, 4, 6, 8, 10]

   Hint: Use the .forEach() and .push() methods
**************************************************************/
var array_odd=[];
var array_even=[];
function separateOddEven(numbers) {
  //TODO: Add your code here
  
  numbers.forEach(splitEvenAndOdd);
  var array_result=[array_even,array_odd];
 return array_result;
}
function splitEvenAndOdd(e)
{
if(e%2 ==0)
{
  array_even.push(e)
return;
}
 else 
 if(e%2 !=0)
 {
   array_odd.push(e);
return;
 }
}
console.log("Task-5 :\n");
console.log("Even Elements : "+separateOddEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])[0]);
console.log("Odd Elements : "+separateOddEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])[1]);
console.log("**************************************************************");
console.log("**************************************************************");
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

  Hint: Use the .filter and .startsWith method
**************************************************************/
let index;
let items= [
  { code: "#153", name: "Ball" },
  { code: "#147", name: "Scissors" },
  { code: "#249", name: "Pillow" },
  { code: "#149", name: "Tissue" },
];
function removeItem(code, items) {
  //TODO: Add your code here
  return items.filter(function(e){
    if(e.code==code)
    {
      index=items.indexOf(e);
      return true;
    }
  });
}
console.log("Task-6\n");
console.log("Items Filtered :\n\n");
console.log(
removeItem("#149",items));
//now remove item from items
items.splice(index,1);
console.log("index : "+index);
console.log("After Remove Filtered Item :\n");
console.log(items);

console.log("**************************************************************");
console.log("**************************************************************");
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

   Hint: Use the .map method and separator operator
**************************************************************/
function updateGrades(curve, students) {
  //TODO: Add your code here
  students.map(function(o){
    if(o.type=="regular")
    return o.grade+=curve;
  });
  return students;
}
console.log("Task-7\nAfter Update Grades\n");
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

