/**************************************************************
 Task 8 (logArray): 
   Create a function logArray that receives an array as a parameter and logs each item in the array.
**************************************************************/
// function logArray(arr) {
//   arr.forEach((value,index) => {
//     console.log(value);
//   });
// }
// logArray([1, 2, 3, 4, 5]);

/**************************************************************
   Task 9 (logArrayWithIndex): 
     Create a function logArrayWithIndex that receives an array as a parameter and logs each item in the array along with its index.
  **************************************************************/
// function logArrayWithIndex(arr) {
//   arr.forEach((value,index)=>{
//     console.log(value,index)
//   });
// }
// logArrayWithIndex(["apple", "banana", "orange"]);

/**************************************************************
   Task 10 (logEvenNumbers): 
     Create a function logEvenNumbers that receives an array of numbers as a parameter and logs only the even numbers in the array.
  **************************************************************/
// function logEvenNumbers(arr) {
//   return  console.log(arr.filter((value,index)=> value %2===0))
// }
//  logEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/**************************************************************
   Task 11 (logArrayBackwards): 
     Create a function logArrayBackwards that receives an array as a parameter and logs each item in the array in reverse order.
  **************************************************************/
// function logArrayBackwards(arr) {
//   const rev=arr.reverse()
//   console.log(rev);
// }

// logArrayBackwards(["one", "two", "three", "four"]);

/**************************************************************
   Task 12 (logLastItem): 
     Create a function logLastItem that receives an array as a parameter and logs the last item in the array.
  **************************************************************/
// function logLastItem(arr) {
//   let last=arr.length-1
//   console.log(arr[last]);
// }
// logLastItem(["a", "b", "c", "d"]);

/**************************************************************
   Task 13 (logArrayInChunks): 
     Create a function logArrayInChunks that receives an array and a chunk size as parameters and logs the items in the array in chunks of the specified size.
  **************************************************************/
function logArrayInChunks(arr, chunkSize) {
  for (let i=0;i<arr.length;i=i+chunkSize){
  const chunk=arr.slice(i,i+chunkSize)
  console.log(chunk);
  }
}
logArrayInChunks([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);


