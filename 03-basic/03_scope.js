/* globle scope is what {} code out of bresess that is code scope*/ 
/* never use var in js, use let and const instead */
// let a = 10
// const b = 20
// var c = 30

// /* {}  this is a scope */
// console.log(a)
// console.log(b)
// console.log(c)


/* this is a block scope */
if (true) {
    let a = 100
    const b = 200
    var c = 300
    // console.log(a);
}
// +++++++++++++++++++++++++     Nestet Scope  +++++++++++++++++++++++++++

function one() {
    const userName = "abhishek"

    function two() {
        const website = "youtube"
        // console.log(userName);
        
    }
    // console.log(website);
    two()
}
one()


//+++++++++++++++++++++ Also we can do in if else +++++++++++++++++++++++
if (true) {
    const username = "abhishek"
    if (username === "abhishek") {
        const website = " youtube"
    //  console.log(username + website);
     
    }
    // console.log(website);
    
}
// console.log(username);

//++++++++++++++++++++++++++++ one more prectice and two type of function ++++++++++++++++++++++++++++    
function addOne(num1) {
    return num1 + 2
}
console.log(addOne(10))
// this typr call will give error +++++++++++++++++++++++++++++++++++++++++++++++++++ 
addTwo()
const addTwo = function (num) {
    return num + 5
}
