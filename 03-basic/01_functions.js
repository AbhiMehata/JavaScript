
                    /*  ()called paramiter */
function familyName    () {
    console.log("abhi");
    console.log("ajay");
    console.log("sister");
    console.log("father");
    console.log("mother");
}
/* raferance is familyName this is() execute */
// familyName()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addTwoNumber(number1, number2) {
    console.log(number1 + number2);
}
// addTwoNumber(4, 5)
// const result = addTwoNumber(4, 5) /* we can store as a veriable */
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// /* how to print result */

function addTwoNumber(number1, number2) {
    let result = number1 + number2
    return  result  /* after result type code will not run */
}
const result = addTwoNumber(4, 5)
// console.log("Result: ",result) /* result value */
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// onthor way to writ function 
function addNum(num1, num2) {
    // let sum = num1 + num2
    return num1 + num2
    console.log("abhishek");
}
const sum = addNum(5,5)
// console.log("girls and boys are ", sum)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// singl parameter use 

function loggedIn(username) {
    return `${username} just logged in`
}
// console.log(loggedIn(""));
// console.log(loggedIn("abhi")); /* this log return undifined  */

// to avoide undefined 


function loggedIn(username = "Abhi") /* we can write defoult "Abhi" value */ {
    /* we can write to ways undefined in console */ 
    if (!username) /* (username ===undefined) */{
        console.log("2 minuts befor ");
        
    }
    return `${username} just logged in`
}
console.log(loggedIn());

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++