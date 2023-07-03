// task 1 
// 10 bilan 35 orasida tasodifiy 5 ta sonlardan iborat string hosil qiling

// let rNum = Math.round(Math.random() * 25) + 10
// console.log(rNum)
// let fiveNums = ""
// for(let i = 0; i<5;i++){
//     let rNum = Math.round(Math.random() * 25) + 10
//     fiveNums = fiveNums + rNum 
// }
// console.log(fiveNums)


// task 2 
// user ismini kiritganda ismida necha marta a harfi ishtirok etganini topuvcho dastur tizing
// console.log("assa"[2]) // s
// console.log("assa"[i]) // s
// let s = "javascript"
// let count = 0;
// for(let i = 0; i <= s.length; i++){
//     if(s[i] == 'a'){
//         count++
//     }
// }
// console.log(count)

// task 3
// n soni berilgan (30 > n > 0) 0 dan n gacha bo'lgan sonlarni orasida probellar bilan chiqaring
// agar son toq bo'lsa bitta probel bilan uni keyingi son orasini belgilaysiz agar juft bo'lsa 2 ta probel bilan. misol : 1 2  3 4  5
// let n = 12;
// let result = "";
// if(30 > n && n > 0){
//     for(let i =0; i<n;i++){
//         if(i % 2 == 0){
//             // juft 
//             result = result + `${i}  `
//         }else{
//             // toq 
//             result = result + `${i} `
//         }
//     }
// }else{
//     alert("Try again")
// }
// console.log(result)


function changeBgColor(elem){
    // console.log(elem) // a
    // console.log(elem.parentElement) // li
    if(elem.textContent == "-"){
        elem.parentElement.style.backgroundColor = 'rgb(127,158,185)'
        elem.textContent = "+"

    }else{
        elem.parentElement.style.backgroundColor = 'red'
        elem.textContent = "-"
    }
   
} 

function sidebarShowHide(){
    let sidebar = document.querySelector(".bar");
    sidebar.classList.toggle("active")
}