// var a;
// let b;
// const PLAYER='Player1';

var a='Jon'; //data type of string
var b=40; //data type of number
var c=a+ ' ' +b; //data type of string concatenated through coercion

const pi=3.14;
// pi=10; > redeclaring and re-initialization of a const variable with a new value is inapplicable(error)

let x=9;
x=10;
x=11;
x=12;

let d=c+' '+(x+b);


console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(pi);
console.log(x);

// RULE FOR NAMING CONVENTIONS
//1. We can use letter, dollar & underscore
let letter;
let _Player;
let $Player;

//2. We cannot use special characters & space
//3. We cannot use keyword var var
//4. Case sensitive d is different from D

//Should be descriptive
let firstName;
let lastName;

//camelCase, snake_case, kebab-case, PascalCase
let camelCase='camelCase';
let snake_case='snake_case';
let PascalCase='PascalCase';

let test1, test2;
test1=1;
test2=2;
console.log(test1+test2);