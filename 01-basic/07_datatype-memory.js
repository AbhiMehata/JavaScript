// there are two types of memory
// 1 stack and 2 Heap 
// Usage
// 1 Stack(primitive)
// 2 Heap (Non primitive and Reference)
 

// +++++++++++ Exampal of Stack memory+++++++++++

let firstName = 'Abhishek'
 
let lastName = firstName

lastName = 'ajay'
console.log(lastName)
console.log(firstName);

// +++++++++++ Exampal of Heap memory+++++++++++

let userOne = {
    name: 'Ram', 
    email: 'abhiljdslkfj@gmail.com',
    password: 122335544,
}

let userTwo = userOne
 userTwo.name = "Abhi"   // we can access element by dot ( . )

 console.log(userOne.name);
 console.log(userTwo.name);
 
 
