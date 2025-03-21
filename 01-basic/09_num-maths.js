const score = 200
// console.log(score)


const balance =  new Number (10);
// console.log(balance);

// console.log(balance.toString()); /* to get string value in number method */
// console.log(typeof balance);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* toFixed*/
// console.log(balance.toFixed(2)); /* toFixed make decimal what we want like 100.00000   */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*toprecision*/

const newNumber = 140.1647

// console.log(newNumber.toPrecision(6));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* toLOcaleString */

const hundreds = 1000000000

// console.log(hundreds.toLocaleString('en-IN')); /* toLOcaleString it is indian stander */
// console.log( `this usa ${hundreds.toLocaleString()}`); /* toLOcaleString  it is usa stander*/

// ++++++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); /* abs does neg to positive */

// console.log(Math.round(7.2)); /* it gives round up value */ 

// console.log(Math.ceil(6.2)); /* it gives always higher value */

// console.log(Math.floor(6.6)); /* it gives always lower value */
 
// console.log(Math.sqrt(25)); /* it does always squer value */

// console.log(Math.min(1,5,6,8,)); /* to get min value */

// console.log(Math.max(1,5,6,8,95)); /* to get max value */


// console.log(Math.random());
// console.log((Math.random() *10) + 1);
// console.log(Math.ceil(Math.random() *10) +1);

const min = 10
const max = 20
// console.log(Math.floor(Math.random() * (max - min + 1))+min)


const min1 = 15
const max1 = 25

console.log(Math.floor(Math.random() * (max1 - min1 + 1)) + min1)

// console.log((Math.random()*10) + 1);

// console.log(Math.floor(Math.random()*10) +1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random()*(max - min + 1)) + min);
















