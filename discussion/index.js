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

// Functions
// lines/blocks of coded that tell our device/application to perform
// certain task when called/invoked
// create complicated tasks to run several lines of code in succession
// they are also used to prevent repeating lines or blocks of code
// that perform the same tasks or function

// Function declarations - defines a function with the specified
// parameters 

/* syntax:
    function functionName(){
        code block (statements)
    }

    function keyword - used to define a javascript functions
    functionName - named to be able to use later in the code
    function block ({}) - statements  which comprise the body of the
                        function. This is where the code to be executed.
    
*/

function printName(){
    console.log('My name is Juan');
};

// call/invoke the name

printName(); // function declarations

// Function Invocation - the code block and statements inside a function
// is not immediately executed when the function is defined. The code
// block and the statements inside a function is executed when the function
// is invoked or called.

// Function declaration vs expression
/*
Function Declaration
    - a function can be created through function declaration by using
    the function keyword and adding a function name

    - declared functions are not executed immediately. They are 'saved' for
    later use, and will be executed later, when invoked or called upon.

    declaredFunction() - can be hoisted, as long as the function
    has been defined.
*/

/* Function Expression

    A function can also be stored in a variable. This is called function
    expression.

    A function expression is an anonymous function assigned
    to the variableFunction

    Anonymous function  - a function without a name
*/

/* Function Scoping

    scope is the accessibility (visibility) of variables within our
    program

    JavaScript variables has 3 types of scope:
    1. local/block scope
    2. global scope
    3. function scope
*/

{
    let localVar = "Dave Lambino"
    console.log(localVar)
}

let globalVar = "Datu";
console.log(globalVar);

function showNames(){
    // function scope variables - defined inside a function
    // and not accessible or visible from outside the function

    var functionVar = "Patrick";
    const functionConst = "Mark";
    let functionLet = "Beltran";

    console.log(functionVar);
    console.log(functionLet);
    console.log(functionConst);
    
}

showNames();

// Using alert() - allows us to show small window at the top of the browser
// page to show  information to our users as oppose console.log() which only
// shows the message on the console.

// alert("<messageInString>")

alert("WARNING! This is an alert.");
function showAlert(){
    alert('Hello');
}

showAlert();

// Using prompt() - it allows us to show small window at the top of the
// browser to gather user input.

let samplePrompt = prompt('Enter your username: ');
console.log("Hello, " + samplePrompt);