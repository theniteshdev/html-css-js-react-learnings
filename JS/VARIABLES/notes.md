# Today's Learing | 22 Jan 2026

Hey, github today i learn variables, how to declare a variable using- 'let' 'var' 'const'. I learn Why three methods why not only one methods to create variables.
So, i found the answer- their function is different, purpose is also different.

## What's Purpose of `let` | `var` | `const` ?

### let

Using let we can declare a variable for only local scope. Local scope means a function, or a block ({...}-> this is block). Its only accesable only in their scope.

? What if we try to access from different scope ?
I am trying but there is error called "ReferenceError".

## var

Var is the first method to declare variables in JS. This comes from Its v1 of nodejs and now its working like that, but there is several bugs they are- 1. global variable pollution 2. fear of chage of values of variable from another functions

## const

This is one of the best method to declare a variable, if we use this methods we cannot reassign value to it. If we try is throw error of const assignment is not allowed.

- memory protectiion
- block level
- constant value

---

## How JS CODE runs ?

I learn there are two phase of running JS code, before I write I explain me that JS is interpreted lang, that runs line by line.

Now, phases of JS CODE EXECUTION

1. memory creation phase
2. code execution phase

# #1 memory ceration phase

here JS engine take a overview of whole code and then create a memory spaces for each. What does that spaces have? that spaces have value is- undefined.
Summary- Search for all const let var and funs and assign value to undefined and in case of funs it store its full body .

After that phase 2 comes in GAME

# #2 code exection phase

Code Exection phase is already meaning like code actually executes. While CEP its runs actual code like assign actual values to variables, run function, processing, logics, and many more.

Finnaly its exit with ERROR CODE 0 [no problems]

----

# HOISTING in JS

Hoisting is not concept of actual JS this name given by people.
Hoisting is a behavious of JS where, when we use VAR keyword for declare a variable we can acces it from its declaration, 

But, In case of let or const we cannot acces because TDZ(temporal dead zone) its restrict to access variables before declaration. 
Its comes in 2015(modern JS)

