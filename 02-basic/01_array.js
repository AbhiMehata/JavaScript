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


console.log("A ",  myArray);

const myn1 = myArray.slice(1, 3)
console.log(myn1);

console.log("B ",  myArray);




const myn2 = myArray.splice(1, 3)

console.log("C ",  myArray);

console.log(myn2);






