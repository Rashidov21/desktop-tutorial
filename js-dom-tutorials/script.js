// window.onscroll = () =>{
//     let h = window.scrollY
//     if(Math.round(h) >= 2000){
//         document.querySelector(".box").style.display = "block";
//     }else{
//         document.querySelector(".box").style.display = "none";
//     }
// }
M.AutoInit();
let v = (10 > 20) ? "v=true" : "v=false"
console.log(v)
let s = document.getElementById("select");
s.onchange = ()=>{
    let val = s.value;
    console.log(val)
    if(val === "triangle"){
        document.querySelector(".triangle").style.display = "block"
    }else{
        document.querySelector(".triangle").style.display = "none"
    }
    if(val === "rect"){
        document.querySelector(".rect").style.display = "block"
    }else{
        document.querySelector(".rect").style.display = "none"
    }
    if(val === "circle"){
        document.querySelector(".circle").style.display = "block"
    }else{
        document.querySelector(".circle").style.display = "none"
    }
}

// let local = window.localStorage;
// localStorage.setItem("apple", "iphone 13 pro max") // yozish
// let getVal  = localStorage.getItem("apple") // olish
// console.log(getVal)
// localStorage.removeItem("apple") // ochirish
//localStorage.clear() // umuman tozalab tashlash

// localStorage.setItem("theme", "dark")
window.onload = ()=>{
    document.body.className = localStorage.getItem("theme")
}