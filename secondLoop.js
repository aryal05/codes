// Map in JAVA SCRIPT
//to create a new array
let arr = [2,3,5,8,9]
let nw= arr.map((val)=>{
    return val*val;
});
console.log(nw)


// FILTER mETHOD

let even = [12,4,3,6,5,9,11]
let newEven= even.filter((val)=>{
    return val%2===0;
})
console.log(newEven)



// Reduce Method
let sum = [1,2,5,6]
const output=sum.reduce((res,curr)=>{
// return res+curr;
return res>curr? res: curr;  // for finding largest number in an array
});
console.log(output)


//Filter out marks of student who crossed 90
let student = [45,85,91,93,96,99]
let std = student.filter((val)=>{
    return val>=90;
});
console.log(std)

// take n as user input , use reduce metod to calcu sum of all numbers in array
let n=prompt("enter a number");

let arry=[]
for (let i=1; i<=n; i++){
    arry[i-1]=i;
}
console.log(arry)
let res=arry.reduce((pre, curr)=>{
    return pre*curr;
});
console.log(res)




// const names = ["Ram", "Shyam", "Hari"]
// let fakeIds=[]
// names.forEach ((name, index)=>{
//     let email = `${name.toLowerCase()}@gmail.com.`;
//     let password = `${name}${index}23`
//     fakeIds.push({name,email,password});
// });
// console.log(fakeIds);

const names = ["Ram", "Shyam", "Hari"];

let fakeIds = names.map((name, index) => {
    let email = `${name.toLowerCase()}@gmail.com.`;
    let password = `${name}${index}23`;
    return { name, email, password };
});

console.log(fakeIds);




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

let todo= todos.filter((todo)=>{
    if(todo.status){
        return true;
    }
    
});

todo = todos.filter((element)=>(element.status))

console.log(todo)


// COUNTRY CODE
let countries = [
    {
        "code": "af",
        "cname": "Afghanistan",
        "path": "afghanistan"
    },
    {
        "code": "al",
        "cname": "Albania",
        "path": "albania"
    },
    {
        "code": "dz",
        "cname": "Algeria",
        "path": "algeria"
    },]

    function findCountryCode (countryName){
        let countryCode = null;
        countries.forEach((country)=>{
            if(country.cname === countryName)
            countrycode=country.code

        })
        return countrycode;

    }
    console.log(findCountryCode("Albania"));