// Arithmetic Operators
let x = 13;
let y = 5;

let sum = x + y;
console.log('The sum is ' + sum);

let difference = x - y;
console.log(`The difference is ${difference}`);

let remainder = y % x;
console.log(`The product is ${remainder}`);

/*

// Assignment Operator (=)
    -The assignment operator adds the value of the right
    operand to a variable and assigns the result to the variable

*/

let assignNum = 8;

/* 

// Addition Assignment Operator (+=)
    -this operator adds the value of the right operand to a variable 
    and assigns the result to the variable

*/

// assignNum = assignNum + 2;
assignNum += 2;
console.log(`The result of addition assignment operator ${assignNum}`);

assignNum -= 3;
console.log(`The result of subtraction assignment operator ${assignNum}`);

assignNum *= 10;
console.log(`The result of multiplication assignment operator ${assignNum}`);

assignNum /= 2;
console.log(`The result of division assignment operator ${assignNum}`);

/* Increment and Decrement
// operators add or subtract value by 1 and reassigns the value
of the variable where the increment/decrement was applied to
*/

let z = 1;

// the value of 'z' is added by a value of 1 before
// returning the values and storing it in a variable
// increment
let increment = ++z;
console.log(`The result of pre-increment ${increment}`);


// the value of 'z' is returned and stored in the variable increment
// then the value of 'z' is increased by 1
increment = z++;
console.log(`The result of post-increment ${increment}`);

// Type Coercion is the automatic or implicit conversion 
// of one data type to another by the programming language

// Comparison Operators
/* Equality Operators (==) 
    - checks whether the operands are equal or have the same content
    - attempts to convert and compare operands of different
    data types
    - return boolean value
*/ 
let juan = 'juan';
console.log(1 == 1);
console.log(1 == 2);
console.log(1 == '1');
console.log('juan' == 'juan');
console.log('juan' == juan);

/* Strictly Equality Operator (===)
    - checks whether the operands are equal/have the same content
    - also compares the data types of 2 values
*/ 
console.log(1 === 1);
console.log(1 === '1');

/* Inequality Operators

*/
console.log(1 != 1);

/* Strict Inequality Operators

*/
console.log(1 !== 2);

/* Relational Operators */
/* Logical Operators */

let isLegal = true;
let isRegistered = false;

// && AND - returns true if all operands are true otherwise false
let allRequirements = isRegistered && isLegal;
console.log(`The result of logical AND operator is ${allRequirements}`);

// || OR - returns true if one of the operands are true
let someRequirements = isRegistered || isLegal;
console.log(`The result of logical OR operator is ${someRequirements}`);