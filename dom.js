// let  attribute = document.querySelector(".box").hasAttribute("style")
// console.log(attribute);

// let box = document.querySelector(".box").setAttribute('style', "display:in-line")
// console.log(box);

// let designMode = document.designMode= "on"
// console.log(designMode);
const mybody = document.body
mybody.style.backgroundColor = "pink"

const box1 =document.getElementById('box-1')
box1.innerText = "Hey this is modified version.."
box1.style.backgroundColor = "red"
// box1.classList.add( "round")
console.log(box1);

const boxes = document.getElementsByClassName("box")
for(let i = 0; i<boxes.length; i++){
    boxes[i].classList.add("round")
}


const newPara = document.createElement('p')
newPara.innerText = "Hello world";

const container = document.getElementById("container")
container.appendChild(newPara);









