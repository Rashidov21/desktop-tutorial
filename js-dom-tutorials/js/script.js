// let menu = document.querySelector("#menu") // ul

// createElement 
// let li = document.createElement("li")
// li.innerHTML = `<b>Hello world</b>`
// console.log(li.innerHTML) // <b>Hello world</b>
// console.log(li.innerText) // Hello world
// console.log(li.textContent) // Hello world

// appendChild
// li.innerHTML = `<a href="#">Portfolio</a>` 
// menu.appendChild(li)
// innerHTML >> <p> shu yer </p> 
// outerHTML >> <p></p> 

//nextElementSibling aka uka teglarda keyingi tegni olish
//nextSibling aka uka teglarda keyingi tegni contentini olish
// console.log(menu.children[0].textContent) // Home
// console.log(menu.children[0].nextElementSibling) // li : About
// console.log(menu.children[0].nextElementSibling.textContent) //  About

// MODAL CLOSE 
// function closeModal(){
//     document.querySelector(".close").parentElement.style.display = 'none'
// }

// let names = ["Mike", "John", "David","Isaaq", "Miguel"];

// let list = document.createElement("ul");
// for(let name of names){
//     let li = document.createElement("li")
//     li.innerHTML = `<b>${name}</b>`
//     list.appendChild(li)
    
// }
// let container = document.querySelector(".container")
// container.appendChild(list) 

// let languages = ['JS', 'TypeScript', 'Elm', 'Dart','Scala'];

// let langEl = document.querySelector('#language')

// let fragment = new DocumentFragment();
// languages.forEach((language) => {
//     let li = document.createElement('li');
//     li.innerHTML = language;
//     fragment.appendChild(li);
// })

// langEl.appendChild(fragment);
// let menu = document.querySelector("#menu") // ul
// let li = document.createElement("li")
// li.textContent = "Service"
// menu.insertBefore(li,menu.lastElementChild)
// let s = "Python".split("").reverse().join("")
// console.log(s)

/* <div class="box">
<p>Start</p>
<br>
<p>Middle</p>
<br>
<p>End</p>
</div> */

// let box =document.querySelector(".box")
// let title = document.createElement("h2")
// title.innerText = "insertAdjecentElement"
// box.insertAdjacentElement("beforebegin",title) // tegdan oldin
// box.insertAdjacentElement("afterBegin",title) // ichini oldiga
// box.insertAdjacentElement("beforeEnd",title) // ichini oxiriga
// box.insertAdjacentElement("afterEnd",title) // tegdan keyin

//<input type="text" id="letter" onkeyup="lettersShow()">
//<ol id="letters"></ol>

// let list = document.querySelector("#letters")
// function lettersShow(){
//     let inputVal = document.querySelector("#letter").value
//     let lastLetter = inputVal.split("")[inputVal.length - 1]
//     let li = document.createElement("li")
//     li.innerText = lastLetter
//     list.appendChild(li)
// }