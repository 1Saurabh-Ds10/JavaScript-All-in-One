/*
-------------------------------------------------------------------------------------------------------------
General Concepts
________________

From JavaScript Notes from Professional.pdf
http://books.goalkicker.com/JavaScriptBook/

--------------------------------------------------------------------------------------------------------------

*/



/*
Bitwise 

JavaScript uses Big Endian to store integers. This will not always match the Endian of the device/OS. When
using typed arrays with bit lengths greater than 8 bits you should check if the environment is Little Endian or Big
Endian before applying bitwise operations

Little-Endian stores most significant bytes from right to left.
Big-Endian stores most significant bytes from left to right.

All bitwise operations operate on 32-bit integers by passing any operands to the internal function ToInt32

Shift left is equivalent to integer multiply by Math.pow(2, n). When doing integer math, shift can significantly
improve the speed of some math operations

The result of a >>> operation is always positive.
The result of a >> is always the same sign as the shifted value.

Right shift on positive numbers is the equivalent of dividing by the Math.pow(2,n) and flooring the result

*/


// Bitwise or
var a;
a = 0b0011 | 0b1010; // a === 0b1011
// truth table
// 1010 | (or)
// 0011
// 1011 (result)

// Bitwise and
a = 0b0011 & 0b1010; // a === 0b0010
// truth table
// 1010 & (and)
// 0011
// 0010 (result)

// Bitwise not
a = ~0b0011; // a === 0b1100
// truth table
// 10 ~(not)
// 01 (result)

// Bitwise xor (exclusive or)
a = 0b1010 ^ 0b0011; // a === 0b1001
// truth table
// 1010 ^ (xor)
// 0011
// 1001 (result)

// Bitwise left shift
a = 0b0001 << 1; // a === 0b0010
a = 0b0001 << 2; // a === 0b0100
a = 0b0001 << 3; // a === 0b1000


// Bitwise right shift >> (Sign-propagating shift) >>> (Zero-fill right shift)
a = 0b1001 >> 1; // a === 0b0100
a = 0b1001 >> 2; // a === 0b0010
a = 0b1001 >> 3; // a === 0b0001

a = 0b1001 >>> 1; // a === 0b0100
a = 0b1001 >>> 2; // a === 0b0010
a = 0b1001 >>> 3; // a === 0b0001


var n = 2;
var a = 5.4;
var result = (a << n) === Math.floor(a) * Math.pow(2,n);
// result is true
a = 5.4 << n; // 20


a = 256.67;
n = 4;
result = (a >> n) === Math.floor( Math.floor(a) / Math.pow(2,n) );
// result is true
a = a >> n; // 16
result = (a >>> n) === Math.floor( Math.floor(a) / Math.pow(2,n) );
// result is true
a = a >>> n; // 16

// Right shift zero fill (>>>) on negative numbers is different. As JavaScript does not convert to unsigned ints when doing bit operations there is no operational equivalent
a = -256.67;
result = (a >>> n) === Math.floor( Math.floor(a) / Math.pow(2,n) );
// result is false











