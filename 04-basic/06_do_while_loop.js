// this is while loops

let index = 0
while (index <= 10) {
    // console.log(`value of index is ${index}`);
    index = index + 2
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Array while loop

const myArry = ["abhi", "ajay", "ram", "raghu"]

let arr = 0

while (arr < myArry.length) {
    console.log(`value of myArry is ${myArry[arr]}`);
    arr = arr + 1
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// do_while loop

let score = 0

do {
    console.log(`score is ${score}`);
    score ++
} while (score <= 10);