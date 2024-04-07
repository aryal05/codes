
let gameNumber = 52;
let userNumber = prompt("Enter The Game Number")
if (userNumber != gameNumber) {
    userNumber = prompt("Number is incorrect, Guess Again")
};

console.log("You Won The Game")







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

// Ternary Operators is a special operator
let Age = 26;
let output = Age >= 25 ? "adult" : "not adult";
console.log(output);



let student = {
    name: "rajat",
    paid: true,
    hasScholoarship: false,
    intern: true,
    check: function () {
        return (student.paid || student.hasScholoarship) ? "can give exam" : "cannot give";
    }


};
console.log(student.check());



let client1 = {
    name: "krish",
    email: "ris@",
    password: "1111",
},
    client2 = {
        name: "prasanth",
        email: "prashta@",
        password: "2211",
    };
function login(client, email, password) {
    return client.email === email && client.password === password;

    // if(client.email == email && client.password == password ){
    //     console.log("Access Granted");
    // }else{
    //     console.log("Failed");
    // }
}

if (login(client1, "ris@", "1111")) {
    console.log("Access granted for client 1.");
} else {
    console.log("Access denied for client 1.");
}


if (login(client2, "prashta@", "2211")) {
    console.log("Access granted for client 2.");
} else {
    console.log("Access denied for client 2.");
}



let todos = [{
    title: "html",
    status: true,
    cratedBy: "252-102-12"


},
{
    title: "css",
    status: true,
    ratedBy: "2502-102-12"

},
{
    title: "js",
    status: true,
    ratedBy: "222-102-12"



},

];

for (let i = 0; i < todos.length; i++) {

    let status = todos[i].status;
    console.log(`Todo ${i + 1} status: ${status ? 'Complete' : 'Incomplete'}`);

}

let dbUsers = [{
    userName: "krish",
    email: "ris@",
    password: "1111",
},
{
    userName: "prasanth",
    email: "prashta@",
    password: "2211",
},];

function getIn(email, password, userName) {
    for (let i = 0; i < dbUsers.length; i++) {
        let verify = dbUsers[i]
        if (
            (verify.email === email && verify.password === password) || (
                verify.userName === userName && verify.password === password
            )
        ) {
            console.log("Access granted")
            return;
        }

    }
    console.log("Access Error")
}
getIn("ris@", "1111", "krish")






// let { paid, hasScholoarship, intern } = student


// // for finding even numbers 


for (num = 1; num <= 10; num++) {
    if (num % 2 === 0)
        console.log("num= ", num);
}

// // find multification 
// function multiplyByFive(number) {
//     let result = 0;
//     for (let i = 0; i < 5; i++) {
//         result += number;
//     }
//     console.log(result)
// }
// multiplyByFive();


findMultiplication({
    number: 10,
    startFrom: 5,
    endAt: 10,
})

function findMultiplication(input) {
    let { number, startFrom, endAt } = input
    for (let i = startFrom; i <= endAt; i++) {
        let result = number * i;
        console.log(`${number}* ${i}= ${result}`);

    }

}
findMultiplication({
    number: 10,
    startFrom: 5,
    end: 10,
});




let order = [
    {
        name: "Ram",
        address:"kausaltar", 
        cartItems: [{
            product: "watch", price: 1000
        },],
    }, {

        name: "Hari",
        address:"kausaltar", 
        cartItems: [{
            product: "mouse", price: 2000

        },],
    },
    {


        name: "Shyam",
        address:"kausaltar", 
        cartItems: [{
            product: "mouse", price: 2000
        },
        { product: "monitor", price: 20000 },
        
        ],
    }
]

for (let i = 0; i < order.length; i++) {

    let person = order[i];
    let item=`${person.name} has ordered:`

    for (let j = 0; j < person.cartItems.length; j++) {

        let items = person.cartItems[j]
        item+= ` ${items.product} : Rs ${items.price}`
        
    }
    item += `\nAddress: ${person.address}\n`;
    console.log(item)


}



// for each loop

let info = ["ram", "krish", "kartik"]
info.forEach((character) =>{
    console.log("index:", character)
})


let odos = [{
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

let completedtodos = [];

odos.forEach(function(todos){
    if(todos.status===true){
        completedtodos.push(todos)
    }
    console.log(completedtodos)
}


)

let arr = ["pune", "delhi", "mumbai"];
arr.forEach((out, index, arr) =>{
    console.log(out,index, arr);
     
} 

    
);


// Highher order function : take another function as parameter 
// inside them or they return another function as output


let digits = [1,2,3,4,5]
digits.forEach((digit)=>{
    console.log(digit*digit )
})


//SOME MORE ARRAY METHODS
//EXAMPLES: Map,

//MAP
let digit = [7,8,9,10,11,12];
let newar = digit.map((val)=>{
    return val ;
});