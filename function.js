function world() {
    console.log('printing the world');
}
world();

function print(parameter) {
    console.log('param');
}

print('this is me')  // this line of code(this is me) is called argument

let printMe = function () {
    console.log('print me here');
}
printMe();


function sum(a, b) {
    // return a+b; or
    let addition = a + b;
    return addition;


}


let user1 = {
    fName: "kings",
    lName: "lions",

}
let user2 = {
    fName: "Amit",
    lName: "khan",

}
function name(usernames) {
    return `${usernames.fName} ${usernames.lName} `

}
console.log(name(user1))


const triple = (input) => {
    return input * 8
}
triple(12)

const difference = (num1, num2) => num1 - num2


console.log(difference(15, 10));

let users = ["ram", "shyam", "dynamic"]
console.log(users[0])








// DEFAULT PARAMETERS

function cal(a, b = 0) {
    return (5 * (a + b));
}

//rest parameter  
// function defination can only have one rest parameter 
// and it should be at the end and we use it like ...y

function collectThings(x, ...y) {
    console.log(x);
    console.log(y);

}
//object destructuring research
//Arrow Functions
const add = (x, y) => {
    return x + y;
}



// Nested function

function outer() {
    console.log('outer')
    function inner() {
        console.log('ínner')

    }
    inner();
}

// Scope of function

let todos = [{
    title: "html",
    status: true,


},
{
    title: "css",
    status: true,

},
{
    title: "js",
    status: true,

},

];
// if(todos[0].status===true){
//     console.log('Html is completed');
// }else{
//     console.log('not true')
// }
// if(todos[1].status===true){
//     console.log('css is completed');
// }else{
//     console.log('not true')
// }
// if(todos[2].status===true){
//     console.log('js is completed');
// }else{
//     console.log('not true')
// }

function todosCompleted(todos) {
    if (todos.status === true) {
        console.log(`${todos.title} is completed`)
    } else {
        console.log(`${todos.title} is not completed`)
    }
}

todosCompleted(todos[0])
todosCompleted(todos[1])
todosCompleted(todos[2])




{
    const person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
    };

    // Destructuring assignment within block scope
    const { firstName, lastName, age } = person;

    console.log(firstName); // John
    console.log(lastName);  // Doe
    console.log('age=', age);       // 30
}

// Variables `firstName`, `lastName`, `age` are not accessible here




// Ternary Operators is a special operator
let Age = 26;
let output = Age >= 25 ? "adult" : "not adult";
console.log(output);





let student = {
    name: "rajat",
    paid: true,
    hasScholoarship: false,
    intern: true,

}
let { paid, hasScholoarship, intern } = student
    (student.paid || student.hasScholoarship) ? console.log("can give exam") : console.log("cannot give");




// if(paid || hasScholoarship ){
//     console.log("can give exam")


// }else{
//     console.log("Nothing is true")
// }




// LOOPS IN JAVA SCRIPT 
for
    (let i = 1; i <= 50; i++) {
    console.log("Rajat Aryal");
}
let summ = 0;
for
    (let i = 1; i <= 6; i++) {
    sum = summ + i;

}
console.log("summ = ", summ);


// While loops
// let i =1;
// while(i<=6){
//     console.log(i)
//     // i++
// }

// // do while loop
let i = 1;
do {
    console.log("JINGLE")
    i++
}
while (i <= 6);

// for -of loop   not used for object
let size = 0;
let str = "ADVENTURES"
for (let i of str) {
    console.log("i = ", i);
    size++;
}
console.log("string size =", size)

// // for in loop it returns keys used for object and string
let cottage = {
    dish: "MoMos",
    hotel: 6000,
};
for (let i in cottage) {
    console.log(i, "value=", cottage[i]);
}


// // for finding even numbers 


for (num = 1; num <= 10; num++) {
    if (num % 2 === 0)
        console.log("num= ", num);
}
// Random number game
let gameNumber = 52;
let userNumber = prompt("Enter The Game Number")
if (userNumber != gameNumber) {
    userNumber = prompt("Number is incorrect, Guess Again")
}

console.log("You Won The Game")






//About Closure
//Nested Function is a closure

