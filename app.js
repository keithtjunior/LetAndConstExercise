// var PI = 3.14;
// PI = 42; // stop me from doing this!

const PI = 3.14;
//PI = 42;

/*
- What is the difference between ***var*** and ***let***?
    When var is used to create a variable, the variable can be reassigned and redeclared. Var will also hoist the variable declaration to the top of the scope it's defined in. When created with global scope, a var variable will attach itself to the browser's window object. Let variables are block-scoped and only exist within the code block they were defined in. They are not hoisted and can not be redeclared. Global let variables are not attached to the browser's window object. 
- What is the difference between **var** and ***const***?
    Unlike variables created with var, variables created with const can not be redeclared or reassigned. They are also block-scoped, unlike var. 
- What is the difference between **let** and **const**?
    Variables created with const can not be reassigned, unlike let.
- What is hoisting?
    When a variable is created with the var keyword, its declaration is hoisted to the top of the scope it was defined in regardless of where it was initially assigned a value. 
*/