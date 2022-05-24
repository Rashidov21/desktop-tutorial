// let form1 = document.querySelector("form") // agar page  1 ta dan kop form bosa faqat 1-olinadi
// let form2 = document.forms[0] //array sahifadagi birinchi form tegi
// console.log(form2); 

// Form lar 2 ta method ga ega boladi 
// 1- submit toldirilgan formani tasdiqlab Backend ga yuborish 
// 2- reset  toldirilgan formani maydonlarini boshatish sbros

// let form = document.forms[0];
// console.dir(form)
// console.log(form.elements);
// for(let e = 0; e < form.length; e++){
//     form[e].style.color= '#fff'
// }

// function resetMyForm(){
//     return form.reset() // formani maydonlarini tozalash
// }

// pattern="[a-z]" faqat kichik lotin harflari
// pattern="[a-z]{1,15}" faqat kichik lotin harflari kamida  1 ta max 15 ta belgi
// pattern="[0-9]" faqat sonlar
// pattern="[A-Za-z]" har qanaqangi regusterdagi harflar

// maxlength='15'


// form.addEventListener("submit", function(event){
//     event.preventDefault()
//     // console.log(form.elements["email"]) // name="email" lik maydon
//     let email = form.elements["email"].value
//     if(email.includes("@")){
//        return form.submit()        
//     }else{
//         document.querySelector("#error").innerHTML = "Email example = main@gmail.com"
//     }
// })
document.forms[0].addEventListener("submit",function(event){
    event.preventDefault()
    let count = document.forms[0][0].value;
    let color = document.forms[0][1].value;
    let cubes = document.querySelector('.cubes')
    for(let i = 0; i < count; i++){
       let div = document.createElement("div")
       div.style.width = "100px" 
       div.style.height = "100px"
       div.style.margin = "10px 20px"
       div.style.backgroundColor = `${color}`
       cubes.appendChild(div) 
    }
    
})
// let form = document.forms[0];
// form.addEventListener("change", function(event){
//     let height = document.querySelector("#height").value
//     let block = document.querySelector(".float-block")
//     let bg = document.querySelector("#bg").value
//     document.body.style.background = `${bg}`
//     block.style.width = `${height}%`
// })

