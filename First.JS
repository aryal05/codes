// Variables in Java Script
// let, const and var

// Let variable cannot be re-declared but can be updated
// let name = "Robert Albert";
// console.log(name);
// let age = 14;
// age = 5;
// age = 8;
// console.log(age);

// const cannot be redeclared or updated
// const PI = 3.14;
// console.log(PI);

// Data Types in JS

// Primitive(7 different primitive) and Non- premitive(Object)

// Object is the collection of values

/* name = String
   Age = Number
   is pass = Boolean
 collection of this of a student is Object(Collection of Values)*/
 

 const student= {
    fullName : "Rajat Aryal",
    age : 19,
    Gpa : 3.95,
    isPass: true
 };


console.log(student)
 


// const product = {
//     Title : "Parker Jotter Standard CT Ball Pen",
//     rating : 5,
//     price : 270,
//     offer : 10,
// };
// const profile = {
//     userName : "Rajat Aryal",
//     post: 95,
//     following: 20,
//     followers:523,
//     isFollow: true,
   
// };



// //Operators and Conditional Statements
//  // plus , minus, division, multiplication..
 let a = 5;
 let b = 97;
 console.log("a = ", a, "& b = ", b);
 console.log("a + b =",a + b);
 console.log("a - b =", a - b);
 console.log("a * b =", a * b);

//  // Arithmetic Operators
//  /* modulus = %
//     Exponentiation = **
//      */

    // Unary operator
    // Increament = ++
    // Decrement = --

    // a = a + 1; is also a++

    // Assignment Operators
    // =, +=, -=, *=, %=, **=
    //+= is like a+=1 which is a = a+1
    // which is same for all

    let c = 8;
    let d = 7;
    c += 5;
    console.log("c =", c);

    // comparison operators
    /*Equal to ==
    Equal to & type === it even sees the data type like string 
    cannot be equal to a number.
    Not equal to !=
    Not equal to &type !==*/
    
    let E = 45;
    let f = 45;
    console.log("E != f = ", E != f);

// Logical Operator...........
// logical AND && if both conditions are true it gives ture
// Logical OR || even if one condition is true it gives true
// Logical NOT ! it will print oposite if it is true it gives false

// AND Operator
// let a = 10;
// let b = 8;
let cond1 = a > b;
let cond2 = a === 10;
console.log("cond1 && cond2 = ", cond1 && cond2);

// Conditional Statements examples

// if statement
// let age = 20;

// if(age > 18){
//     console.log("can vote");
// }
let mode = "Dark"
let color;
if(mode=== "Dark"){
    color = "Black";
}
if(mode==="light")
{
    color = "Wite";
}


// if-else statement

 let vibe = "Green"
 let light;
 if(vibe === "pink"){
    light = "green"
 }else{
    light = "red"
 }
console.log(light)
let yr = 16;
if(yr >= 18){
    console.log("vote")

}else{
    console.log("Cannot Vote")
}

let num = 51;

if(num%2=== 0){
    console.log("Even")
}else{
    console.log("Odd")
}
// // Syntax = Rules...


// Else-if Statement
let age = 15;
if(age>=25){
    console.log("Can Enrol")
}else if (age <=28){
console.log("Cannot Enrol")
}{
    console.log("Nun")
}


// Ternary Operators is a special operator
let Age = 26;
let output = Age >= 25 ? "adult" : "not adult";
console.log(output);


let number = prompt("Enter a number:");

if(number %5 ===0){
    console.log(number, "is multiple of 5");
}else{
    console.log(number, "is not a multiple of 5");
}

let score = 80;
let grade;

if(score>=90 && score <=100){
    grade = "A"
}
else if(score>=70 && score<=80){
    grade = "B"

}
else{5
    grade = "C"
}
console.log(grade)

let NUMBER = prompt("Enter a number")
if(NUMBER<=20){
    console.log("senior")
}
else if(NUMBER ===30){
    console.log("Junior")

}
else{
    console.log("Super")
} 
// LOOPS IN JAVA SCRIPT 
for
(let i = 1; i<=50; i++){
    console.log("Rajat Aryal");
}
let sum = 0;
for
(let i = 1; i<=6; i++){
    sum = sum + i;

}
console.log("sum = ", sum);


// While loops
// let i =1;
// while(i<=6){
//     console.log(i)
//     // i++
// }

// // do while loop
let i =1;
do{
    console.log("JINGLE")
    i++ 
}
while(i<=6);

// for -of loop
let size = 0;
 let str = "ADVENTURES"
 for(let i of str){
    console.log("i = ", i);
    size++;
 }
 console.log("string size =", size)

// // for in loop it returns keys

let cottage = {
    dish: "MoMos",
    hotel :  6000,
};
for (let i in cottage){
    console.log(i, "value=", cottage[i]);
}


// // for finding even numbers 

for(num = 1; num<=100; num++){
    if( num %2=== 0 )
    console.log("num= ", num);
}
// let gamenumber = 36;
// let usernumber = prompt("Guess the game number: ");
// while (usernumber !=gamenumber){
//    usernumber= prompt("You entered the wrong number, Guess again");

// }
// console.log("wow you entered the right number");




