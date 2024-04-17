setTimeout(()=>{
    console.log("I am inside TimeOut")

}, 2000)


const greet = (count)=>{
    for(let i =0; i<count; i++){

        console.log("Hello world")
    }
   
}
greet(5);


// CallBack Function : A function that can be passed as a parameter in another function

const calculate = (a,b,operation)=>{
    return operation(a,b)

}
const addition = calculate(45,8, function(number1, number2){
    return number1+number2
})
console.log(addition)



 const a = [6,4,-3,-9,8];
 const find = (num)=>{
    return num<0;

 }
 const res = a.filter(find); // a.find (function)
console.log(res)


// callBack Hell
// function getCheese(call){
//     setTimeout(()=>{
//         const cheese = "🧀";
//         console.log("Here is your cheese 🧀 ")
//         call(cheese);

//     },2000)
// }
// getCheese((cheese)=>{
//     console.log("I got the cheese", cheese)

// })

// Promise

const ticket = new Promise(function(resolve, reject){
    const bording = true;
    if(bording){
        resolve("You are in the flight")
    }else{
        reject("your filght has been cancelled")
    }

})

//then Method when resolve and catch is used for reject
ticket.then((data) => {
    console.log("hwooo",data)
})
.catch((data)=>{
    console.log("oh no", data)
})
// .finally will execute always
.finally(()=>{
    console.log("i will all be executed")
}) 


function getCheese(){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const cheese = "🧀"
       
        resolve(cheese);

    },2000 )
})
}
function makeDough(cheese){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const dough = cheese + "🍛";
        
        resolve(dough);

    },2000 )
})
}
function bakepizza(dough){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const pizza = dough + "🍕";
       
        resolve(pizza);

    },2000 )
})
}
// getCheese().then((cheese)=>{
//     console.log("here is the cheese", cheese)
//     return makeDough(cheese);
// })
// .then((dough)=>{
//     console.log("here is the dough", dough)
//     return bakepizza(dough);
// }).then((pizza)=>{
//     console.log("here is the Pizza", pizza)


// });

async function orderPizza()
{
    try{
    const cheese = await getCheese();
    console.log("You Chesse is here", cheese)
    const dough = await makeDough(cheese)
    console.log('Your dough is ready',dough)
    const pizza = await bakepizza(dough)
    console.log('Pizza is ready',pizza)
    } catch(error ){
        console.log("Error occured") 

    }
}
orderPizza()
















