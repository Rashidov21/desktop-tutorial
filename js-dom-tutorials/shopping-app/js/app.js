let pink = document.querySelector(".pink-circle");
let yellow = document.querySelector(".yellow-circle");
window.onscroll = function (){
    let windowHeight = window.scrollY;
    if(windowHeight >= 1400){
        pink.style.transition = "all 1s ease";

        pink.style.right = "50px";
        yellow.style.left = "100px";
        // pink.style.display= "block";

    }else{
        pink.style.transition = "all 1s ease";
        pink.style.right = "-500px";

        // pink.style.display= "none"
    }
    if(windowHeight >= 150){
        yellow.style.transition = "all 1s ease";
        yellow.style.left = "100px";
    }else{
        yellow.style.transition = "all 1s ease";
        yellow.style.left = "-500px";
    }
    console.log(windowHeight)
}
let form = document.getElementById("myForm")
console.dir(form)
let count = document.getElementById("count")
let email = document.getElementById("email")
let price = document.getElementById("price")
let error = document.getElementById("error")
// let submit = document.getElementById("submit")
let total = document.getElementById("total")
form.onsubmit = function (){
    if(email.value.includes("@")){
        count = parseInt(count.value)
        price = parseInt(price.value)
        total.innerHTML = `$ ${count*price}`
    }else{
    error.classList.add("red-text")
    error.innerHTML = "Error , email not validated."
    }
}


// console.log(form[0])