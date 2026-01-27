/*
If and else helps us to run code according to conditions, like condition a for different code, for conditions b for different code etc.
*/

// Example-
const isAdmin = true;
const isUser = false;

if (true) isUser = false;

if (isAdmin) console.log("yes loggedIn")
if (isUser) console.log("not a user")
// here we only run a line of code in here but if we have to write multiples lines of code so that we can create a block ex-

if (true) {
    console.log("Hello World")
    console.log("if block runs")
}
console.log("Programme ended!")

// lets use else

if(true){
    console.log("hello world")
}

/*
The if else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.
Condition
An expression that is considered to be either truthy or falsy.

Statement1
Statement that is executed if condition is truthy Can be any statement, including further nested if statements. To execute multiple statements, use a block statement to group those statements. To executes no statements, use an empty statement.

Statement that is executeds if condition is falsy and the else clause exists. Can be any statement, including block statements and further nested if statements.

Description
Multiple if...else statements can be nested to create an else if clause. Note that there is no elseif keyword in JavaScript.

*/

