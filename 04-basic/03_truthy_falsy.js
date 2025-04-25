
/* truthy value is
 "0", 'false', " ", [], {}, function(){}
*/

const userLoggedIn = "aldjflkj"
if (userLoggedIn) {
    console.log("Got user Email");
    
}else {
    console.log("did not get Email");
    
}

/* falsy value 
false, 0, -0, BigInt 0n, "", null, undefined, NaN
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// how to chack empty array

const emptyArray = []

if (emptyArray.length === 0){
console.log("Empty Array")
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// how to chack empty Object

const emptyObject = {}

if (Object.keys(emptyObject).length === 0){
console.log("Empty object")
}