/*
-------------------------------------------------------------------------------------------------------------
General Concepts
________________

From JavaScript Notes from Professional.pdf
http://books.goalkicker.com/JavaScriptBook/

--------------------------------------------------------------------------------------------------------------

*/


/*
Variables

*/
var myInteger = 12; // 32-bit number (from -2,147,483,648 to 2,147,483,647)
var myLong = 9310141419482; // 64-bit number (from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
var myFloat = 5.5; // 32-bit floating-point number (decimal)
var myDouble = 9310141419482.22; // 64-bit floating-point number

null == undefined; // true
null === undefined; // false

typeof null === 'object' // true


/*
window.isNaN()

(instead of this, use: Number.isNaN())

*/
isNaN(NaN); // true
isNaN(1); // false: 1 is a number
isNaN(-2e-4); // false: -2e-4 is a number (-0.0002) in scientific notation
isNaN(Infinity); // false: Infinity is a number
isNaN(true); // false: converted to 1, which is a number
isNaN(false); // false: converted to 0, which is a number
isNaN(null); // false: converted to 0, which is a number
isNaN(""); // false: converted to 0, which is a number
isNaN(" "); // false: converted to 0, which is a number
isNaN("45.3"); // false: string representing a number, converted to 45.3
isNaN("1.2e3"); // false: string representing a number, converted to 1.2e3
isNaN("Infinity"); // false: string representing a number, converted to Infinity
isNaN(new Date); // false: Date object, converted to milliseconds since epoch
isNaN("10$"); // true : conversion fails, the dollar sign is not a digit
isNaN("hello"); // true : conversion fails, no digits at all
isNaN(undefined); // true : converted to NaN
isNaN(); // true : converted to NaN (implicitly undefined)
isNaN(function () { }); // true : conversion fails
isNaN({}); // true : conversion fails
isNaN([1, 2]); // true : converted to "1, 2", which can't be converted to a number
isNaN([]) // false: converted to 0, which is a number
isNaN([34]) // false: converted to '34' and then 34, which is a number


/*
Number.isNaN()

Number.isNaN(), indeed, doesn't try to
convert the value to a number before testing. This also means that only values of the type number, that are
also NaN, return true (which basically means only Number.isNaN(NaN))
*/

// The one and only
Number.isNaN(NaN); // true
// Numbers
Number.isNaN(1); // false
Number.isNaN(-2e-4); // false
Number.isNaN(Infinity); // false
// Values not of type number
Number.isNaN(true); // false
Number.isNaN(false); // false
Number.isNaN(null); // false
Number.isNaN(""); // false
Number.isNaN(" "); // false
Number.isNaN("45.3"); // false
Number.isNaN("1.2e3"); // false
Number.isNaN("Infinity"); // false
Number.isNaN(new Date); // false
Number.isNaN("10$"); // false
Number.isNaN("hello"); // false
Number.isNaN(undefined); // false
Number.isNaN(); // false
Number.isNaN(function () { }); // false
Number.isNaN({}); // false
Number.isNaN([]); // false
Number.isNaN([1]); // false
Number.isNaN([1, 2]); // false
Number.isNaN([true]); // false


/*
NaN

NaN stands for "Not a Number." When a mathematical function or operation in JavaScript cannot return a specific
number, it returns the value NaN instead.

It is a property of the global object, and a reference to Number.NaN

*/

window.hasOwnProperty('NaN'); // true

typeof NaN; // 'number'

// to check for NaN, use Number.isNaN()
NaN == NaN // false
NaN === NaN // false


/*
undefined & null

undefined is a global value that represents the absence of an assigned value
null is an object that indicates that a variable has been explicitly assigned "no value"

undefined is also a property of the global window object.

Setting a variable to undefined means the variable effectively does not exist. Some processes, such as JSON
serialization, may strip undefined properties from objects. In contrast, null properties indicate will be preserved so
you can explicitly convey the concept of an "empty" property.
*/

typeof undefined === "undefined"  // true
typeof null === "object"  // true


let foo;
console.log('is undefined?', foo === undefined); // is undefined? true

let foo = { a: 'a' };
console.log('is undefined?', foo.b === undefined); // is undefined? true

function foo() { return; }
console.log('is undefined?', foo() === undefined); // is undefined? true

function foo(param) {
  console.log('is undefined?', param === undefined);
}
foo('a');  // is undefined? false
foo();  // is undefined? true


window.hasOwnProperty('undefined'); // true



/*
Infinity and -Infinity

Infinity is a property of the global object (therefore a global variable) that represents mathematical infinity. It is a
reference to Number.POSITIVE_INFINITY

It is greater than any other value, and you can get it by dividing by 0 or by evaluating the expression of a number
that's so big that overflows. This actually means there is no division by 0 errors in JavaScript, there is Infinity!
There is also -Infinity which is mathematical negative infinity (Number.NEGATIVE_INFINITY), and it's lower than any other value.


*/
- (Infinity); // -Infinity

Infinity > 123192310293; // true
-Infinity < -123192310293; // true
1 / 0; // Infinity
Math.pow(123123123, 9123192391023); // Infinity
Number.MAX_VALUE * 2; // Infinity
23 / Infinity; // 0
-Infinity; // -Infinity
-Infinity === Number.NEGATIVE_INFINITY; // true
-0; // -0 , yes there is a negative 0 in the language
0 === -0; // true
1 / -0; // -Infinity
1 / 0 === 1 / -0; // false
Infinity + Infinity; // Infinity
var a = 0, b = -0;
a === b; // true
1 / a === 1 / b; // false


/*
Number constants

In many cases the various operators in JavaScript will break with values outside the range of
(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)

Note that Number.EPSILON represents the different between one and the smallest Number greater than one, and
thus the smallest possible difference between two different Number values. One reason to use this is due to the
nature of how numbers are stored by JavaScript see Check the equality of two numbers
*/

Number.MAX_VALUE; // 1.7976931348623157e+308
Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MIN_VALUE; // 5e-324
Number.MIN_SAFE_INTEGER; // -9007199254740991
Number.EPSILON; // 0.0000000000000002220446049250313
Number.POSITIVE_INFINITY; // Infinity
Number.NEGATIVE_INFINITY; // -Infinity
Number.NaN; // NaN

"a" + 1  // NaN
"b" * 3  // NaN
"cde" - "e"  // NaN
[1, 2, 3] * 2  // NaN


/*
Generally, Math functions that are given non-numeric arguments will return NaN.
The square root of a negative number returns NaN, because Math.sqrt does not support imaginary or complex
numbers.
*/
Math.floor("a")  // NaN
Math.sqrt(-1)  // NaN


[2] * [3] // 6



/*
typeof


*/

typeof "String" // "string"
typeof Date(2011, 01, 01)  // "string"
typeof 42 // "number"
typeof true // "boolean"
typeof {}  // "object"
typeof []  // "object"
typeof null  // "object"
typeof /aaa/  // "object"
typeof Error() // "object"
typeof function () { }  // "function"

var var1;
typeof var1  // "undefined"


/*
instanceof

To find whether an object was constructed by a certain constructor or one inheriting from it

instanceof also catches instances of subclasses

primitive values are not considered instances of any class

*/

2 instanceof Number  //false
'abc' instanceof String  //false
true instanceof Boolean  //false
Symbol() instanceof Symbol  //false

[] instanceof Array  // true


/*
instanceof also catches instances of subclasses

.constructor property does not catch instances of subclasses
*/

console.log([] instanceof Object, [] instanceof Array)   // true true
console.log([].constructor === Object, [].constructor === Array)   // false true


/*
Get an exact 'type' of an object

use: Object.prototype.toString.call()

*/

Object.prototype.toString.call("String") // "[object String]"
Object.prototype.toString.call(42)  // "[object Number]"
Object.prototype.toString.call(true)  // "[object Boolean]"
Object.prototype.toString.call(Object())  // "[object Object]"
Object.prototype.toString.call({})  // "[object Object]"
Object.prototype.toString.call(function () { })  // "[object Function]"
Object.prototype.toString.call(new Date(2015, 10, 21))  // "[object Date]"
Object.prototype.toString.call(new RegExp())  // "[object RegExp]"
Object.prototype.toString.call(/foo/)  // "[object RegExp]"
Object.prototype.toString.call([])  // "[object Array]"
Object.prototype.toString.call(null)  // "[object Null]"
Object.prototype.toString.call(undefined)  // "[object Undefined]"
Object.prototype.toString.call(Error())  // "[object Error]"


/*
Modulus (%)

This operator returns the remainder left over when one operand is divided by a second operand. When the first
operand is a negative value, the return value will always be negative, and vice versa for positive values.
*/
console.log(42 % 10);   // 2
console.log(42 % -10);  // 2
console.log(-42 % 10);   // -2
console.log(-42 % -10);  // -2
console.log(-40 % 10);   // -0
console.log(40 % 10);   // 0


// modulus to obtain the fractional part of a number

var myNum = 10 / 4; // 2.5
var fraction = myNum % 1;  // 0.5
myNum = -20 / 7; // -2.857142857142857
fraction = myNum % 1;  // -0.857142857142857


/*

Math.round(), Math.ceil(), Math.floor(), Math.trunc()

Math.ceil() will round the value up

Math.floor() will round the value down
flooring a negative number will round it away from zero.

*/

Math.round(2.3)  // 2
Math.round(2.7)  // 3
Math.round(2.5)  // 3

Math.round(-2.7)  // -3

// Note how -2.5 is rounded to -2. This is because half-way values are always rounded up, that is they're rounded to the integer with the next higher value
Math.round(-2.5)  // -2 


Math.ceil(2.3)    // 3
Math.ceil(2.7)    // 3

Math.floor(2.3)   // 2
Math.floor(2.7)   // 2

Math.floor(-1.1)  // -2
Math.ceil(-1.1)  // -1

Math.trunc(2.3); // 2 (floor)
Math.trunc(-2.3); // -2 (ceil)
Math.trunc(2147483648.1); // 2147483648 (floor)
Math.trunc(-2147483649.1); // -2147483649 (ceil)
Math.trunc(NaN); // NaN


// To round to 2 decimal places
var myNum = 2 / 3; // 0.6666666666666666
var multiplier = 100;
var a = Math.round(myNum * multiplier) / multiplier; // 0.67
var b = Math.ceil(myNum * multiplier) / multiplier; // 0.67
var c = Math.floor(myNum * multiplier) / multiplier; // 0.66


// value is the value to round
// places if positive the number of decimal places to round to
// places if negative the number of digits to round to
function roundTo(value, places) {
  var power = Math.pow(10, places);
  return Math.round(value * power) / power;
}
var myNum = 10000 / 3; // 3333.3333333333335
roundTo(myNum, 2); // 3333.33
roundTo(myNum, 0); // 3333
roundTo(myNum, -2); // 3300



/*
Exponentiation (Math.pow() or **)

*/

var a = 2,
  b = 3,
  c = Math.pow(a, b); // 8

let a = 2,
  b = 3,
  c = a ** b;  // 8

// Math.pow to find the nth root of a number

// Finding the nth roots is the inverse of raising to the nth power. For example 2 to the power of 5 is 32. The 5th root of 32 is 2
Math.pow(v, 1 / n); // where v is any positive real number
// and n is any positive integer
var a = 16;
var b = Math.pow(a, 1 / 2); // return the square root of 16 = 4
var c = Math.pow(a, 1 / 3); // return the cubed root of 16 = 2.5198420997897464
var d = Math.pow(a, 1 / 4); // return the 4th root of 16 = 2


/* 
Math.random()

Math.random() returns a random number between 0 (inclusive) and 1 (exclusive)

*/


// to get a number from an arbitrary range (not [0,1)) use this function to get a random number between min (inclusive) and max (exclusive): interval of [min, max)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min; // may not be integer
}



// to get an integer from an arbitrary range (not [0,1)) use this function to get a random number between min (inclusive) and max (exclusive): interval of [min, max) 
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;  // integer
}


// to get an integer from an arbitrary range (not [0,1)) use this function to get a random number between min (inclusive) and max (inclusive): interval of [min, max] 
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



/*
Concatination / addition - '+'

Both operands are converted to primitive types. Then, if either one is a string, they're both converted to strings and
concatenated. Otherwise, they're both converted to numbers and added.

*/

null + null; // 0
null + undefined; // NaN
null + {}; // "null[object Object]"
null + ''; // "null"

"123" + 1; // "1231" (not 124)

true + 1; // 2
false + 5; // 5
null + 1; // 1
undefined + 1; // NaN

true + "1"; // "true1"
false + "bar"; // "falsebar"


/* 
@@iterator object 

entries, values, keys

*/

const numbers = [1, 2, 3, 4, 5];

let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 4
console.log(iterator.next().value); // 5

for (const n of iterator) {
  console.log(n);
}


let aEntries = numbers.entries(); // retrieve iterator of key/value
console.log(aEntries.next().value); // [0, 1] - position 0, value 1
console.log(aEntries.next().value); // [1, 2] - position 1, value 2
console.log(aEntries.next().value); // [2, 3] - position 2, value 3

const aKeys = numbers.keys(); // retrieve iterator of keys
console.log(aKeys.next()); // {value: 0, done: false }
console.log(aKeys.next()); // {value: 1, done: false }
console.log(aKeys.next()); // {value: 2, done: false }

const aValues = numbers.values();
console.log(aValues.next()); // {value: 1, done: false }
console.log(aValues.next()); // {value: 2, done: false }
console.log(aValues.next()); // {value: 3, done: false }

/*
Console log
*/
let greet = "Hello", who = "World";
console.log("%s, %s!", greet, who); // with placeholder

console.table();


/*
Canvas example:

Canvas is for Raster based images
*/
var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;
var ctx = canvas.getContext('2d');
ctx.font = '20px';
ctx.fillText("Hello World", 50, 50);

document.body.appendChild(canvas);


/*
SVG - Scalable Vector Graphics

*/
var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.width = 500;
svg.height = 500;
var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '0');
text.setAttribute('y', '50');
text.style.fontFamily = 'Times New Roman';
text.style.fontSize = '20';
text.textContent = 'Hello World'
svg.appendChild(text);
document.body.appendChild(svg);



