const user = {
    userName: "abhishek",
    addrese: "banswara",
    course: "learning english",
    price: 999,
    loggedIn: true,
    welcomeMessage: function (){
        console.log(` ${this.userName}, welcome in class`) 
        console.log(this); /* this refer corrant countan */
    }
}
// user.welcomeMessage()
// user.userName = "ajay"
// user.welcomeMessage()

// console.log(this); /* this is globle give empty objact */

//++++++++++++++++++++++ Arrow Function +++++++++++++++++++++++++++++++++++++

// function one (){
//     let username = "ramnarayan"
//     console.log(this.username)
// }
// one()
/* ++++++++++++++++++++++++++++++++++++++ */
//const a = function one (){
    //     let username = "ramnarayan"
    //     console.log(this.username)
    // }
    // a()

    /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

    /* arrow function with const varable*/

    const b = () => {
        let user = "abhi"
        console.log(this);
        
    }
    // b()

    /* arrow function 2 explicitly when use return kye word */                                              /* when ever use {}this breases need return kye word */
//  const addTwo = (num1, num2) => {
// return num1 + num2
//     }
//  console.log(   addTwo(2,3))

/* arrow function 3 implicit return it is */
//  const addTwo1 = (num1, num2) => ( num1 + num2)
//  const addTwo2 = (num1, num2) =>  num1 + num2

 const addTwo1 = (num1, num2) => ({name: "aj mehata"})
 console.log(addTwo1());
 

    
    
