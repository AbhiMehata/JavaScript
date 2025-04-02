
const newuser = new Object() /* we can declera object like this
console.log(newuser); */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const hostarUser = {}


hostarUser.name = "Abhishek"
hostarUser.lastName = "Mehata"
hostarUser.IdNumber = 145214
hostarUser.addres = "talwara"
hostarUser.isLoggedIn = true
// console.log(hostarUser);

// console.log(Object.keys(hostarUser)) to chack keys 
// console.log(Object.values(hostarUser))to chack value
// console.log(Object.entries(hostarUser))to get entry form
// console.log(hostarUser.hasOwnProperty('addre')) to chack property has or not 

const jioStar = {
    email: "abh@goohlagmoi.com",
    fullName: {
    mainAddres:{
         village: "Devaliya",
         mohalla: "Brahaman",
       }
    }
}



// console.log(jioStar.fullName.mainAddres.village) to get value by . 
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// how to merge Object (assign)


const obj = {name: "raj", email: "raj@gmail.com", id: "1021flkf"}
const obj1 = {fname: "ajay", femail: "raj@gmail.com", fid: "1021flkf"}

const obj2 = Object.assign ({}, obj, obj1) /* to merge use object.assign  {} this is not nessesary */
const obj3 ={ ...obj, ...obj1}

// console.log(obj2) we can use both method  
// console.log(obj3)
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// from database array to targat element by [].

const user = [
  { 
    id: "1",
    email: "dkjdlkjkjlksdjf"
  },
  { 
    id1: "12",
    email1: "abjufhsdkjh4455555"
  }
]

console.log(user[1].id1);





const sum = {a:1, b:2}
const sum2 = {c:3, d:4}


const sum3 = {...sum, ...sum2}
const sum4 = Object.assign({}, sum, sum2)


// console.log(sum3)
// console.log(sum4)