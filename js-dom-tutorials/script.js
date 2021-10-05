let body = document.body;
// body.style.backgroundColor = "red";
// console.log(body.style)
// body.style.backgroundImage = "url('img/air3.jpg')"
// let index = 0;
// function setRandomImage(){
//     let images = ["img/air1.jpg","img/air2.jpg","img/air3.jpg"];
//     let n = Math.round(Math.random() * images.length)
//     body.style.backgroundImage = `url("${images[n]}")`
//
// }
// window.setInterval(setRandomImage,2000)

// body.style
// console.log(body.className) // str
// console.log(body.classList) // array

let box = document.querySelector(".box");
// console.log(box)
// console.log(box.attributes[1].nodeValue)
box.attributes[1].nodeValue = "myBox2"
// for(let item of box.attributes){
//     console.log(item)
// }
function changeSize(){
    // box.style.width = "300px";
    // box.classList = "box rotate"
    console.log(window.pageYOffset)
    console.log(window.pageXOffset)
    // window.scrollBy(0,4000)
    window.scrollTo(0,4000)

}
window.onload = function(){
    // body.scrollWidth + 1000
    console.log(window.pageYOffset)
    console.log(window.pageXOffset)
}