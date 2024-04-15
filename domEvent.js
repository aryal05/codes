function myFunction(){
    console.log("i was clicked")
}

const mouseOver = ()=>{
    console.log("mouseover")
}



// Event Listeners


const box1 = document.getElementById('box-1')
box1.addEventListener('click', () =>{
    console.log("Clicked")
});

const nameInput = document.getElementById('nameInput')
nameInput.addEventListener('keypress', (e)=>{
    console.log("nameInput", e.key)
})

const boxes = document.getElementsByClassName("box")
for(let i =0; i<boxes.length; i++){
    boxes[i].classList.add("round")
}
console.log(boxes)


function hide(){
    const para = document.getElementById('para');

    if(para.style.display !== "none"){
        para.style.display = "none";
    } else {
        para.style.display = "block";
    }
}

const btn = document.getElementById("btn");
btn.addEventListener("click", hide);





