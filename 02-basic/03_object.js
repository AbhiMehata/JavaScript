/* there are two typs of objects and we can decealer type
 constucter = singlton  +++++ object.create ,,,, const newuser = new Object()

  literal =

  */

/* how to declered symbol */

const mySym = Symbol("key1")

 const jsUser = {
    /* all velue in backend are work as a string till we declered  */
    "fullname": "Abhishek Mehata",
    name: "abhishek",
    lastName: "mehata",
    age: 30,
    addres: "banswara",
    email: "abhi@1234.gmail.com",
    phone: 125787585545,
    isLoggedIn: false,
    mySym: "key1", /* symbol not declear like this */
    [mySym]: "key1", /* symbol declear like this */
    lastLoggedIN: ["monday", "tuesday"]

 }
 //  console.log(jsUser)
 //  console.log(jsUser.addres)
//  console.log(jsUser["email"]) /* two ways to get object value */
//  console.log(jsUser["fullname"])

/* how to chanage value just put = */ 
jsUser.addres = "talwara"
// +++++++++++++++++++++++++++++++++++++++++++++++++
// velue freez
// Object.freeze(jsUser) /* anythin not run after freeze */
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// add function 
jsUser.greeting = function(){
console.log("hello good morning");

}
console.log(jsUser.greeting());
/* HOW to velue rafer */
// use this
jsUser.greeting1 = function(){
console.log(`hello good morning: ${this.name}`);

}
console.log(jsUser.greeting1());



