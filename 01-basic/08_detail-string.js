
// const firstName = "abhishek"
// const lastName = " Mehata "
// const password =  12456321

// // ++++++++++ Don't do console like this +++++++++++
// // console.log(firstName + lastName + password);
// // console.table([firstName, lastName , password])


// // ++++++++++ all ways do console like this +++++++++++
// console.log(`Name is ${firstName} Last name is ${lastName} password is ${ password}`); 


// +++++++++++++++ How to Make a Keyword in String and Usage ++++++++++++++++


let gameName = new String (`abhisehk -ram`)

// console.log(gameName[7]);
// console.log(gameName.__proto__); /* to get prototype*/

// console.log(gameName.length); /* to get length*/

// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

// console.log(gameName.charAt(3));  /* to get nidex number by number 1 2 3 4 etc.... */

// console.log(gameName.indexOf(`s`));   /* to get nidex number by character A B C etc.. */

const newstring = gameName.substring( 6) /** to run substring method it is chack 0 to any number if do just one number then it will go to the end of the cherecter*/
console.log(newstring)

// +++++++++++++++++++++++++++++++++++++++++

const ontherNewString = gameName.slice(3,  7) /* we can get in slice negvlue*/
console.log(ontherNewString);

// +++++++++++++++++++++++++++++++++++++++++

// trim
 const newOntherstring = "       abhishek         ";
 console.log(newOntherstring);
 
 console.log(newOntherstring.trim()) /* trim doing delet extra space in the string and trim have trimEnd and trimStart*/

//  +++++++++++++++++++++++++++++++++++++++++++++

// replace 
// method use to replace
// replaceAll 
// it is replace all carectar in one string 

const newName = "https://google.com"
console.log(newName.replace("google", "facebook"));

//  +++++++++++++++++++++++++++++++++++++++++++++

// includes 
// to chack in the string has word or not 

const newNameIn = "https://google.com"
console.log(newNameIn.includes(`facebook`));
console.log(newNameIn.includes(`google`));

//  +++++++++++++++++++++++++++++++++++++++++++++

// split
// we can convert string to arry basiss on space or anythig 

const splitOne = "abhishek ajay ram krishna hanuman ghanashyam"
console.log(splitOne.split` `)

//  +++++++++++++++++++++++++++++++++++++++++++++







