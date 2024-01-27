// Task-4
// What will be the result of the following codes:

// var a = isNaN(‘11’);

// var a = isNaN(2-10);

// Explain your answers.


var a = isNaN('11');

console.log(a);  //Output: false. Beacause 11 is a number, isNaN returns true when the value is not a number otherwise it returns false. Here interesting part is 11 stored in a single cotation, but after all isNaN consider 11 as a number.

var a = isNaN(2-10);

console.log(a); //Output: false. Beacause (2-10) = -8, where -8 is a number, isNaN returns true when the value is not a number otherwise it returns false.


var a = isNaN(A);

console.log(a); //Output: Error. A is undefined. Because a string must be in a single cotation or in a double cotation.


var a = isNaN('A');

console.log(a); //Output: true. Beacause A is not a number, it's a string. A string can be stored in single cotation.


var a = isNaN("B");

console.log(a); //Output: true. Beacause B is not a number, it's a string. A string can be stored in a double cotation.



//isNaN is a boolean data types. It returns true if the value is NaN (Not a Number), otherwise false.
//isNaN() method returns true if a value is Not-a-Number.