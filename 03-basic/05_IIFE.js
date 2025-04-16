//++++++++++++++++++++++++++++++Immediately Invoked Function Expression(IIFE) ++++++++++++++++++++++++++++++
 
/* IIFE Save globel polution () */

(function one() {
    // named IIFE
    console.log( `DB CONNECTED` );
}) ()
/* This is not IIFE */

function one() {
    console.log( `DB CONNECTED` );
}
one();
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* after use iife put Coma ; */ 
( () => {
    //normale IFFE
    console.log(`DB CONNECTED ABHI`);
} )();
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
( (name) => {
    console.log(`DB CONNECTED ABHI ${name}`);
    
} )("abhishek")