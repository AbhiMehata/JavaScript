// comperison = <,>,<=,>=,==, ===, !=,!==
// control_flow if statement 

// in if condition shoud be true then execute
const IsuserLoggedIn = true

// if (IsuserLoggedIn) {
    
//     console.log("Logged In");
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const temperatuer = 40

// if (temperatuer > 50 ) {
    
//     console.log("temperatuer is less than 50 ");
// }else{
    
//     console.log("temperatuer is greter than 50 ");
// }
// console.log("Executed"); /* out of condetion it will be Execute any how */ 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const score = 200 /* this is block scoop */
// if (score > 100) {
    
//     const power = "fly"
//     console.log(`User Power: ${power}`)
// }
// console.log(`User Power: ${power}`)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* shorthand notes */ 
const balance = 1000 

// if (balance > 2000) console.log ("test is fail") , console.log(" test is pass") /* don't write this type of code */ 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// nesting in if condition ** multipe condition checking with else if
const balance1 = 500
// if (balance1 < 400) {
    //     console.log("less than 400");
    
// }else if (balance1 < 300) {
//             console.log("less than 300");


//         }else if ( balance1 < 200){
    //             console.log("less than 100");
    
    //         }else{
        
    //             console.log("Enough Balance 500");
    // }
    
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    /* we can use two condition at the same time with use && hindi (or) */
    //  this code to run have to all condition true 
    const userLogin = true
    const debitcard = true
    
    // if (userLogin && debitcard && 2==2) {
    //     console.log("all informetion is true");
        
    // }
    
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    /* we can use two condition to run code evenif one code is true with || in hindi (ya) */
    //  to run this code just one condition shoud be true
    const loggedInFromgoogle = false
    const loggedInFromEmail = true
    const loggedInFromYahoo = true

    // if (loggedInFromEmail || loggedInFromYahoo || loggedInFromgoogle) {
        
    //     console.log("loggedIn user");
        
    // }
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // NUllish Coalescing Operator (??) null , undefined 
      /* after (??)  this opretor have value in number 10 it will give whatever first value */
    let val1;
    val1 = 5 ?? 10
    val1 = null ?? 15 
    val1 = undefined ?? 15
    val1 = null ?? 10 ?? 20

    console.log(val1)

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // Terniary Operator

    // condition ? true : false
    // exampl
    const coffePrice = 200
    coffePrice >= 120 ? console.log("less than 120") : console.log("more than 120");
    


