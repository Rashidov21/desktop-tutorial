// let form = document.forms // sahifadagi hamma form teglarini array qilib olish
// console.log(form); // HTMLCollection >> Array

// console.log(form[0]); // 1-forma
// console.log(form[1]); // 2-forma

// form[0].addEventListener("change", function(event){
//     let box = document.querySelector(".form-box");
//     let color = document.getElementById('color').value
//     let range = document.getElementById('range').value
//     box.style.backgroundColor = `${color}`
//     box.style.width = `${range}%`
// })
/* <div class="form-box"></div>
<center>  
        <p><input type="color" id="color"></p>
        <p><input type="number" id="range" value="0"></p>
        <button onclick="showBlocks()">Get Blocks</button>
</center> */
// function showBlocks(){
//     let box = document.querySelector('.form-box')

//     if(box.children){
//       box.innerHTML = ""
//     }

//     let color = document.getElementById('color').value
//     let num = document.getElementById('range').value

//     for(let i = 0; i < num; i++){
//         let div = document.createElement("div")
//         div.style.width = "100px"
//         div.style.height = "100px"
//         div.style.backgroundColor = `${color}`
//         box.appendChild(div)
//     }
// }