

// GUESSING GAME

let num = 32;
let user = prompt("Enter the number");
while(user!=num){
    user = prompt("Guess Again..")
}
console.log("your guess is correct")




// ABOUT STRINGS
let str = "mindrisers"
console.log(str[0]);

// template literals
// it is string only but is created with backticks

let sent = `This is my sentence`;
// console.log(typeof sent)
let obj = {
    item: "pen",
    price:20,
};
let output = `The cost of ${obj.item} is ${obj.price} rupees`
console.log(output);

// Escape character is also a part of string \n, \t
// and are count as single character
let sttr = "Mindrisers\nCourse"
console.log(sttr);

// String Methods In JS
// toUpperCase , toLowerCase , trim(removes spacesIN FIRST AND AND END like .....AbC....)
// slice , replace, concat, charAt

let stttr = "Rajat";
let Newstttr = stttr.toUpperCase();
console.log(stttr);
console.log(Newstttr);


//Replace Method
let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools");





// you can also concat by plus sign +
let str1 = "mind"
let str2 = "risers"
let res = str1.concat(str2); 
console.log(res);

// STRINGS ARE Immutable while (Array are mutable i.e can change)

// creating the username
let fullName = prompt("Enter Your Name")
let use = "@" + fullName + fullName.length;
console.log(use);


// All Bout Array
// Collection of items
 let marks = [97, 82, 96, 88];
 console.log( "marks are",marks);

// Arrays indices to go in a particular element

let number = [54, 58, 45, 589, 632]
number[2] = 2200
console.log(number)


//Looping over an Array
let math = ["Ironman", "Batman", "Thor","Loki"] ;

for(let idx=0; idx<=math.length; idx++){
    console.log(math[idx]);
}

//using for of loop

let cities = ["Kathmandu", "Chitwan", "Pokhara", "Mustang", "Manang"]
for(let city of cities){
    console.log(city);

}

let students = [85, 97, 44, 37, 76, 60]
let sum = 0;
for(let val of students){
    sum+=val
}
let avg = sum / students.length;
console.log(`The average marks of the class = ${avg} `);

let items = [250, 645, 300, 900, 50];
for(let i = 0; i<items.length; i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items)



// let course = {
//     startTime: 4,

// }
// let tobechanged = "startTime"
// console.log("startTime =", course[tobechanged]);

// course.fee = 12000;
// console.log("fee =", course.fee)


let User = {
    name: "ram",
    phone:
        [{
            number: 655,
            provide:"ntc",
        },
    {
        number: 555,
        provider: "ncell",

    }] ,

        
    tAddress:{
        district: "bhaktapur",
        wardNumber: 5,

    },
    pAddress:{
        district : "kathmandu",
        wardnumber: 5,
        streert: 3,
    },
    

};
console.log(User);
//name ceo website
let brands = [
    {
        name: "Samsung",
        ceo: [{
            name: "ceo",
        }],
        url : "https://www.samsung.com",
        Outlets: ["Bhaktapur", "Kathmandu", "Chitwan"]
    }, {
        name: "LG",
        ceo:[{
            name:[{
                first: "prakash"
            }],
            address: "Gorkha"

        }],
        url : "https://www.lg.com",
        Outlets: ["Bhaktapur", "Kathmandu", "Chitwan", "Pokhara"]

    }, {
        name: "Bosh",
        ceo: " aryal",
        url : "https://www..com",
        Outlets: ["Germany", "Kathmandu", "Chitwan", "Pokhara"]

    }]
    // Samsung converted to iphone
    brands[0].name = "Iphone" // samsung to Iphone
    brands[0].ceo[0].name = "Apple" //ceo to Apple
    brands[0].ceo[0].address = "Ape" // address was added 
    


    brands[1].ceo[0].address = "jhapa", // Gorkha changed to jhapa
    brands[1].ceo[0].name[0].first = "kamal"  // prakash to kamal changed
console.log(brands);

