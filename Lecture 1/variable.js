console.log("Think Plan Excute");

const accountID = 123456
let accountEmail = "sidhant@google.com"
var accountPasswoed = "Google@123"

let accountState; // value is undefind
accountCity = "jaipur" //  wrong way to decleare variable 

// accountID = 123987 // not allowed 
accountEmail = "manish@google.com" // allowed
accountPasswoed = "Pass@321" 

console.table([accountID, accountEmail, accountPasswoed, accountCity, accountState]);

/*

Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

-Automatically
   - accountCity = "jaipur"
-Using var
   - var accountPasswoed = "Google@123"
   - The var keyword was used in all JavaScript code from 1995 to 2015.
   - The var keyword should only be used in code written for older browsers.
   - Variables declared with the var always have Global Scope.
-Using let
   - let accountEmail = "sidhant@google.com"
   - The let and const keywords were added to JavaScript in 2015.
   - Only use let if you can't use const
   - Variables declared with let have Block Scope
   - Variables declared with let cannot be Redeclared in the same scope
-Using const
   - const accountID = 123456
   - variable accountID is declared with the const keyword
   - Always use const if the value should not be changed
   - Always use const if the type should not be changed (Arrays and Objects)
   - Variables defined with const cannot be Reassigned



All JavaScript variables must be identified with unique names.
These unique names are called identifiers.
Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume)
let and const have block scope.
let and const can not be redeclared.
let and const must be declared before use.
*/