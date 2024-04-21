function getRandomNumber(num){
    // return Math.floor(Math.random() * num)
    let randomNumber = Math.floor(Math.random() * num)
    return randomNumber
}

function getRandomColor(){
    let color = "#";
    let hexCharacters = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]

    for (let i = 0 ; i< 6; i++){
        let randomColor = Math.floor(Math.random() * 16)
        color = color + hexCharacters[randomColor]
    }
    return color
}

let parentBox = document.querySelector(".boxes")
for (let i = 0 ; i <= 500; i ++){
    let box = document.createElement("div")
    box.classList.add("box")

    let h3 = document.createElement("h3")
    h3.innerText = getRandomNumber(500)

    box.append(h3)

    parentBox.append(box)
}

let allBoxes = document.querySelectorAll(".box")
function handleMouseMove(){
    allBoxes.forEach(elm => {
        elm.style.backgroundColor = getRandomColor()
        // elm.children[0].innerText = getRandomNumber(500)
        elm.querySelector("h3").innerText = getRandomNumber(500)
    })
}

parentBox.addEventListener("mousemove",handleMouseMove)