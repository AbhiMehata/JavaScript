/*Array Dicleration */
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const myHeros1 = ["ram", "hanuman", "bhim"]
const myArray1 =[0, 1, 2, 3, 4, 5]
const array1 = new Array(1, 2, 3, 4, 5)
// console.log(myNewarry[3]) /*to get index use [] this breckat */
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const myHeros = ["ram", "hanuman", "bhim"]
const myArray =[0, 1, 2, 3, 4, 5]
const array = new Array(1, 2, 3, 4, 5)

// Array method 
// push 

myArray.push(6) /* .push is only add array in last */
myArray.pop()  /*.pop only remove last array */
myArray.unshift(9)  /*.unshift add array first  */
myArray.shift()  /*.shift remove array first  */

console.log(myArray.includes(10)); /* to chack array exist */ 
console.log(myArray.indexOf(3)); /* to chack array index */

const newarray = myArray.join() /* .join make array to string */


// slice & splice add and remove some contant
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1. splice()

// The splice() method is used to add, remove, or replace elements in an array. It modifies the original array and can change its length.

// Syntax:

// javascript
// Copy
// array.splice(start, deleteCount, item1, item2, ...)

// Parameters:
// start: The index at which to start changing the array.

// deleteCount: The number of elements to remove (optional).

// item1, item2, ...: The elements to add to the array (optional).

// Example:

// javascript
// Copy
// let fruits = ["Apple", "Banana", "Cherry", "Date"];
// fruits.splice(2, 1, "Orange", "Grapes"); // Starts at index 2, removes 1 item, and adds "Orange" and "Grapes".
// console.log(fruits);  // Output: ["Apple", "Banana", "Orange", "Grapes", "Date"]
// Here, splice():

// Removes the item at index 2 ("Cherry"),

// Adds "Orange" and "Grapes" at the same position.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. slice()
// The slice() method is used to create a shallow copy of a portion of an array. It does not modify the original array and returns a new array.

// Syntax:

// javascript
// Copy
// array.slice(start, end)
// Parameters:

// start: The index at which to begin the extraction (inclusive).

// end: The index at which to end the extraction (exclusive, optional).

// Example:

// javascript
// Copy
// let fruits = ["Apple", "Banana", "Cherry", "Date"];
// let newFruits = fruits.slice(1, 3); // Creates a new array from index 1 to 3 (exclusive).
// console.log(newFruits);  // Output: ["Banana", "Cherry"]
// Here, slice():

// Creates a new array starting from index 1 and ending just before index 3.

// The original fruits array is not modified.



