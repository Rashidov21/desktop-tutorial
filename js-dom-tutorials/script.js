let btn = document.querySelector("button")
let box = document.querySelector(".box")
let w = box.style.width;
box.style.transition = "all 0.3s"
w = Number(w)


btn.addEventListener("click", e => {
        w += 20
        box.style.width = `${w}px`
    })
    // btn.onclick = function() {
    //         box.className = "circle"
    //     }
    // onclick, contextmenu
    // onmousedown, onmouseup
    // onmousemove, onmouseout, onmouseover

// onkeydown, onkeyup, onkeypress

// DOMContentLoaded, onload >> window.onload

// onfocus, onblur


let bar = document.querySelector(".sidebar");
let openCloseBtn = document.querySelector("#openclose");

function openClose() {
    bar.classList.toggle("open")
}

openCloseBtn.addEventListener("click", openClose);
// openCloseBtn.addEventListener("click", (evt) => {
//     console.log(evt)
// })

window.addEventListener("keydown", function(e) {
    // console.dir(e)
    // console.log(e.which) // belgi kodi
    // console.log(e.keyCode) // belgi kodi
    // console.log(e.key) // BELGINI OZI
});