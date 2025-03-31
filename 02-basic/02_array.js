const myHeros = ["ajay", "bhagat", "deep"]
const myFevHeros = ["swaminarayan", "nilkanth", "narnarayan",]
// myHeros.push(myFevHeros) /*toAdd any elimant use push*/
// // console.log(myHeros);

// console.log(myHeros[3]);/* toget elimant number*/ 
// console.log(myHeros[3][1]); /*toget array inside array use */

/* how to add to array */
// The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const addmyHeros = myHeros.concat(myFevHeros)

const allmyHeros = [...myHeros, ...myFevHeros] /* to add one or more array */

// console.log(addmyHeros);
// console.log(allmyHeros);


const oneArray = [1,2,3,[4,5,6,[7,8,9,[11,12,14,15]]]]
// console.log(oneArray.flat(Infinity));
// console.log(oneArray.flat(2));

// const secArray = oneArray.flat(1)
// console.log(secArray);

/*isarray */



// console.log(Array.isArray(["abhi"])); /* to ask question use isArray */

/* to convert from string to array */

console.log(Array.from("abhishek"));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// If you want to extract the keys of the object, you can do something like this:

// javascript
// Copy
// console.log(Array.from(Object.keys({name: "abhishek"})));
// This will output:

// javascript
// Copy
// ["name"]
// If you want to convert the values of the object to an array:

// javascript
// Copy
// console.log(Array.from(Object.values({name: "abhishek"})));
// This will output:

// javascript
// Copy
// ["abhishek"]

console.log(Array.from({name: "abhishek"}));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 let score1 = 100
 let score2 = 200
 let score3 = 300


 console.log(Array.of(score1, score2, score3))



