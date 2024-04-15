
let id1 = document.getElementById ("box-1")

console.log(id1);

const divs = document.getElementsByTagName("div")
console.log(divs)



// const box = document.getElementsByClassName("box")
// console.log(box)

const random = document.querySelector(".box")
console.log(random)

let box2 = document.getElementById("box-2");
box2.innerHTML = "new one"


box2.style.backgroundColor = "red"


// to add new class
box2.classList.add("round")

const box = document.getElementsByClassName("box")
for(let i=0; i<box.length; i++){
    box[i].classList.add("round")
    box[i].style.backgroundColor = "red"
}


// to remove classname
// id1.classList.remove("box")


// to add something somewhere

const newPara = document.createElement("p")
newPara.innerText = "This is New Paragraph"


const container = document.getElementById("container")
container.appendChild(newPara)