// DOM => Document => HTML => object => Model
let obj = {
    name:"Abdullo",
    age:12,
    cash:{
        price:1520,
    }
}
// console.log(obj.cash.price)

let monofont = document.body.tt;
// let getTag = document.getElementsByTagName('tt') //teg nomi bilan
// let value = document.getElementsByClassName('box')
// let value = document.getElementById('box')
let value;//document.querySelector('.box')
// console.log(value)
// value = document.querySelector('#box')
// console.log(value)
// value = document.querySelector('.box')
// value.className = 'hide'; //class qoshish
// value.classList = 'box text-dark bg-info'; //classlar qoshish
// console.dir(value)


// console.dir(document.body.style)
let slider = {
    slides:[
     'img/nike/nike1.jpg',
     'img/nike/nike2.jpg',
     'img/nike/nike3.jpg',
     'img/nike/nike4.jpg',
     'img/nike/nike5.jpg',
     'img/nike/nike6.jpg',
     ],
    frame:0,
    init:function(){
        document.body.style.backgroundImage = `url('${this.slides[this.frame]}')`
    },
    prev:function(){
        document.body.style.backgroundImage = `url('${this.slides[this.frame--]}')`
    },
    next:function(){
    document.body.style.backgroundImage = `url('${this.slides[this.frame++]}')`
}
}
window.onload = function(){
  slider.init(); 
 //  setInterval(function() {
 //     slider.next()
 // }
 // ,3000 )
}
// let form = document.getElementById('myform');
// if (form.name.value == ''){
//     alert('Ism bosh')
// }

// let box =document.querySelector('.box');

// function MouseOverChangeBg(){
//     box.style = 'background:#333;'
// }
// function MouseOutChangeBg(){
//     box.style = 'background:#888;'
// }
// function MouseMove(){
//     document.body.style = 'background:#888;'
// }
// function BodyScroll(){
//     document.body.innerHTML = 'Body Scroll function is worked'
// }

// function keyCodeEvent(event) {
//   var x = event.keyCode;
//   document.getElementById("demo").innerHTML = "The Unicode value is: " + x;
// }