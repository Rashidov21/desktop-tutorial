let sidebar = document.querySelector("#sidebar");
let menuBtnOpen = document.querySelector("#menu-open");
let menuBtnClose = document.querySelector("#menu-close");
menuBtnOpen.onclick = function Show(){
    sidebar.style.left = "0px";
    menuBtnOpen.style.display = "none";
    menuBtnClose.style.display = "block";
}
menuBtnClose.onclick = function Close(){
    sidebar.style.left = "-250px";
    menuBtnOpen.style.display = "block";
    menuBtnClose.style.display = "none";
}
// let slides = ['img/air1.jpg','img/air2.jpg','img/air3.jpg'];
// let frame = 0;
// let slide = document.getElementById("slide");
// const next = ()=>{
//     if(frame >= slides.length){
//         frame = 0;
//     }
//     slide.src = slides[frame]
//     frame += 1
//     console.log(frame)
// }
// const prev = ()=>{
//     if(frame <= 0){
//         frame = slides.length;
//     }
//     frame -= 1
//     slide.src = slides[frame]
//     console.log(frame)
//
// }
//
// function Controls(index){
//     index = parseInt(index);
//     slide.src = slides[index]
// }


let slides = ['img/air1.jpg','img/air2.jpg','img/air3.jpg'];
let frame = 0;

let slide = document.getElementById("slide");

function AutoSlider(){
    if(frame >= slides.length){
       frame = 0;
    }
    slide.src = slides[frame];
    frame += 1;
}
window.onload = () =>{
    setInterval(AutoSlider,2000) // 1-param function 2-param interval milliseconds
}

function SlideItems(){
    let items = document.getElementsByClassName('carousel-item');
    let index = 0;
    items[index].className = 'carousel-item active';
    index++;
    console.log(index)

}
window.onload = () =>{
   setInterval( SlideItems, 2000)
}