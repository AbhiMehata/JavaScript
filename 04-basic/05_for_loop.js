// For Loop 
for (let i = 0; i < 10; i++) {
    const element = i
    // console.log(element);

}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// with if condition

for (let i = 0; i < 10; i++) {
    const element = i
    if (element == 6) {
        // console.log("condition mache");

    }
    // console.log(element);
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// loop in loop 

for (let i = 0; i <= 10; i++) {
    // console.log(`outter loop value ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);

        //  console.log(i+ " * " +j + " = " + i*j);

    }
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  how to table print 
for (let i = 2; i <= 5; i++) {
    // console.log(`outer loop ${i}`);
    // console.log("this is new tabel");

    for (let j = 1; j <= 10; j++) {

        // console.log(`${i} * ${j} = ${i * j}`);
    }

}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const myArray = ["abhi", "vakil", "deep"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);

}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// break and continue  to stop and run where we want


for (let i = 0; i <= 20; i++) {
    
    if (i == 10) {
        // console.log(`Stoped `);
        break /* for control flow stop  */ 
    }
    // console.log(i);
    
    
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// continue

for (let i = 0; i <= 20; i++) {

    if (i == 10) {
        console.log(`Stoped `);
        continue /* for control flow stop  */ 
    }
    console.log(i);
    
    
}
