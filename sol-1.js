/*
Conditional statements in JavaScript allow us to control the flow of your code based on conditions.The primary conditional statements in JavaScript are if, else if, and else.Here's the syntax and some examples:


1). if statement:
The if statement is used to execute a block of code if a specified  condition evaluates to true.
*/

let x = 10;

if (x > 5) {
    console.log("x is greater than 5");
}

/*
2). else if statement:
The else if statement allows you to check additional conditions if the previous if condition is false.
*/

let y = 3;

if (y > 5) {
    console.log("y is greater than 5");
} else if (y > 0) {
    console.log("y is positive but not greater than 5");
} else {
    console.log("y is non-positive");
}

/*
3). else statement:
The else statement is used to provide a default or fallback action if none of the preceding conditions is true.
*/

let z = -2;

if (z > 0) {
    console.log("z is positive");
} else if (z === 0) {
    console.log("z is zero");
} else {
    console.log("z is negative");
}

// In the examples above:

// - For the first example, since x is indeed greater than 5, the code inside the if block is executed, and "x is greater than 5" is logged to the console.
// - For the second example, y is not greater than 5, but it is positive.Therefore, the code inside the else if block is executed, and "y is positive but not greater than 5" is logged.
// - For the third example, z is negative, so the code inside the else block is executed, and "z is negative" is logged.