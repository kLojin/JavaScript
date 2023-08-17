/* DATA TYPES*/

// let a;
// a = 10;
// a = 12;
// console.log(typeof a); // number

// let b;
// b = 'Text of a string literal'; //string literal
// console.log(typeof b);

// let c;
// c = false;

// console.log(typeof c); // boolean 

// let d;
// console.log(typeof d); // undefined

// Combine

// let e = 8; // integer
// let f = "6"; // string/string literal /defined with either single or double quotes

// // f = parseInt(f,10) //parseInt is a built-in function/method *10/*16
// console.log(typeof f)
// let g = e + f;
// console.log('Answer' + g + ' is an example of cercion! \' '); //backslash - escaping quote
// console.log(g);
// console.log(typeof g);

// TYPE COERCION
// Convert string to a number
// Convert number to a string
// Convert object to a boolean

// let a = 10;
// console.log(typeof a); // First console.log a datatype of a number

// let b = '7';
// console.log(typeof b); // Second console.log a datatype of a string
// b = Number(b);
// console.log(b);
// console.log(typeof b); // Third conversion of b from a string to a number

// TYPE CONVERSIONS: EXPLICIT AND IMPLICIT
// IMPLICIT TYPE CONVERSION = COERCION (automatically done during code execution)
// EXPLICIT TYPE CONVERSION = TYPE CASTING (done by you the developer)

// Type coercion is implicit whereas type conversion can be either implicit or explicit.

function explicit(){
  let d = 5;
  let e = '6';
  e = parseInt(e, 10);
  let f = d + e;
  console.log("Explicit Answer: " + f);
  console.log(typeof f);
}

function implicit() {
  if (1 === "1") {
    let a = 1; // numbere
    let b = "1"; // string
    let c = a + b;
    console.log("Implicit Answer: " + c);
    console.log(typeof c);
    document.getElementById("true").innerHTML ="This executed properly"
  } else {
    document.getElementById("false").innerHTML =
      "This did not execute because of the strict equality operator.";
    console.log(
      "This did not execute because of the strict equality operator."
    );
  }
}

// explicit();
// implicit();