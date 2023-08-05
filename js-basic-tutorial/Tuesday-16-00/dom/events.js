// let notf = document.querySelector("#notification");

// let query = document.forms[0].elements[0];
// document.forms - html dagi barcha form elementlari 
// document.forms[0].elements - form ning barcha maydonlari

// console.log(notf,query)
// console.log(query.value)
// function checkInputValueHandler(){
//     let query = document.querySelector("#query").value;
//     if (query.toLowerCase() == "active"){
//         notf.classList.remove("d-none")
//         notf.classList.add("d-flex")
//     }else{
//         notf.classList.add("d-none")
//     }
// }


// for(let elem of document.forms[0].elements){
//     elem.style.backgroundColor = 'red'
// }


// let card = document.querySelector("#card");

// card.addEventListener("click", (evt) => {
//     console.log(evt) //PointerEvent 
// })
// card.addEventListener("mouseover", (evt) => {
//     // console.log(evt) MouseEvent 
//     // console.log(evt.target) // hodisa ro'y bergan element obyektini
//     evt.target.style.backgroundColor = "pink"
//     console.log(evt.target)
// })
// card.addEventListener("mouseleave", (evt) => {
//     evt.target.style.backgroundColor = "red"
//     console.log(evt.target)
// })

// function setNewText(e){
//     e.target.textContent = "New text !"
// }

// card.addEventListener("click", setNewText)


// Element.addEventListener("event nomi", <funksiya>)

// let card = document.querySelector("#card");

// card.addEventListener("drag", function(evt){
//     // console.dir(evt.target.offsetWidth) // element eni 
//     // console.dir(evt.target.offsetHeight) // element boyi
//     let pageX = evt.pageX;
//     let pageY = evt.pageY;

//     console.log(evt.target.offsetWidth)
//     evt.target.style.left = pageX - evt.target.offsetWidth / 2 + 'px';
//     evt.target.style.top = pageY - evt.target.offsetHeight / 2 + 'px';
      
// })


// function onDragStart(event) {
//     event.dataTransfer.setData('text/plain', event.target.id);
//     event
//     .currentTarget
//     .style
//     .backgroundColor = 'yellow';
//   }

//   function onDrop(event) {
//     const id = event
//       .dataTransfer
//       .getData('text');
//       const draggableElement = document.getElementById(id);
//       const dropzone = event.target;
//       dropzone.appendChild(draggableElement);

//       event.dataTransfer.clearData();
//   }

//   function onDragOver(event) {
//     event.preventDefault();
//   }

// let numbers = document.querySelector("#numbers");
// let input = document.querySelector("#phone_numbers");
// let clear_num = document.querySelector("#clear_num");

// for(let e of numbers.children){
//     e.style.cursor = "pointer"
//     e.addEventListener("mousedown", (evt) =>{
//         evt.target.style.backgroundColor = "yellow";
//         let n  = input.value;
//         n = n + evt.target.textContent;
//         input.value = n;
//     })
//     e.addEventListener("mouseup", (evt) =>{
//         evt.target.style.backgroundColor = ""
//     })
// }

// clear_num.addEventListener("click", (evt) => {
//     let currentData  = input.value;
//     input.value = currentData.split("").splice(0,currentData.length - 1).join("")
    
// })