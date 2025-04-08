/* ... this is rest opratino */

// function calculateCartPrice(...num1){
//    return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 600,));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* after three ...all value will goes in one parameter */
// function calculateCartPrice(val1,val2,...num1){
   
//     return val1,val2,num1
   
// }

// console.log(calculateCartPrice(200, 400, 500, 600,800,900));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// how to use object in function 

const usere = {
    username: "abhi",
    price: 99,
    typeofpay: "visa"
}

function hendelObject(anyObject){
   
console.log((`username is ${anyObject.username} and price is ${anyObject.price}`))
};
// hendelObject(usere)
hendelObject({
    username: "abhi",
    price: 199
})
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// use of array in function

const myArray = [200,300,400,600]

function array(getArray){
    return getArray[2]
}
// console.log(array(myArray))
/* we can use derect array */ 
console.log(array([200,100,5400,700]))
