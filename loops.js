
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
    check: function(){
        return ( student.paid || student.hasScholoarship) ? "can give exam" :  "cannot give";
    }


};
console.log(student.check());

let clients =[ {
    name: "krish",
    email: "ris@",
    password: "1111",
},
   {
    name: "prasanth",
    email: "prashta@",
    password: "2211",
},]

for (let i = 0; i < clients.length; i++) {
    let client = clients[i];
    console.log(`Client ${i + 1}:`);
    console.log(`Name: ${client.name}`);
    console.log(`Email: ${client.email}`);
    console.log(`Password: ${client.password}`);
    
}

let client1 = {
    name: "krish",
    email: "ris@",
    password: "1111",
},
   client2= {
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

let dbUsers =[ {
    name: "krish",
    email: "ris@",
    password: "1111",
},
    {
    name: "prasanth",
    email: "prashta@",
    password: "2211",
},];

function getIn(email, password){
for (let user of dbUsers){
    if(user.email===email && user.password===password){
        return true;
    }
}
return false;
}
if(getIn("prashta@", "2211")){
    console.log("Access successful")
}else{
    console.log("Something went wrong")
}













// let { paid, hasScholoarship, intern } = student
   

// // for finding even numbers 


for (num = 1; num <= 10; num++) {
    if (num % 2 === 0)
        console.log("num= ", num);
}


 
