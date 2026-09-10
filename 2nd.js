// Operators and conditionals

// Arithmatic Operators
let a = 10;
let b = 5;
console.log("Arithmatic Operators:");

console.log("Addition: " + (a + b));    
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));
console.log("Modulus: " + (a % b));
console.log("Exponentiation: " + (a ** b));

// Unary Operators

console.log("Unary Operators:");
let c = 3;
console.log("Pre-Increment: " + (++c));  
console.log("Post-Increment: " + (c++));
console.log(c)
console.log("Pre-Decrement: " + (--c));
console.log("Post-Decrement: " + (c--));


// Conditionals statement
//  if
let age = 25;
if (age >= 18) {
    console.log("You are eligible to vote.");
}


let mode = "dark";
let color ;

if(mode == "dark") {
    color = "black";
}

if(mode == "light") {
    color="white";
}


console.log(color);


// if else


if(mode == "dark" ){
    color = "black";
    console.log(color);
}

else{
    color= "white";
    console.log(color);
}

// else-if statement

if(mode == "dark"){
    color = "black";
    console.log(color);
}

else if(mode == "light"){
    color = "white";
    console.log(color);
}

else if(mode == "blue"){
    color = "blue";
    console.log(color);
}

else{
    color = "red";
    console.log(color);
}


// Ternary Operators
let result = age >= 18 ? "adult" : "minor";
console.log(result);