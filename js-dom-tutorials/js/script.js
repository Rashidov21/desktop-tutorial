// lesson 1
// DOM - document Object module
// document , window
// document >> html file , js object
// window >> browser window , js object

// console.log("LOG")
// console.error("ERROR")
// console.debug("DEBUG")
// let obj = {
//     name: "ES6",
//     viewLog() {
//         console.log(this.name)
//     }
// }

// console.log(document)
// console.log(window)
// console.log(window.location.href)
// window.location.href = "kun.uz"

// let ul = document.getElementById("list")
// console.log(ul)
// let main = document.getElementsByName("main")
// console.log(main[0]
// let ul = document.getElementsByClassName()
// let li  = document.getElementsByTagName("li")
// console.log(li)

// ES6
// let ul = document.querySelector("ul")
// console.log(ul)
// let ul_s = document.querySelectorAll("ul")
// console.log(ul_s)

// let ul = document.querySelector("#list")
// console.log(ul.childNodes)
// console.log(ul.children.sort((a, b) => a - b))
// console.log(ul.firstChild)
// console.log(ul.lastChild)

// for (let li of ul.children) {
//     console.log(li)
//     console.log(li.textContent)
// }

// let list = document.querySelector("#list-2")
// console.log(list.previousSibling) //#list-1
// console.log(list.nextSibling) //#list-3

// console.log(list.parentElement) // div.container.lists
// console.log(list.parentElement.parentElement) // main


// function checkAnswers(element, text) {
//     if (text.toLowerCase() == 'dog') {
//         element.style.backgroundColor = "lightblue"
//         console.log("Right")
//         for (let elem of element.parentElement.children) {
//             if (elem !== element) {
//                 elem.style.backgroundColor = 'red'
//             }
//         }
//     } else {
//         for (let elem of element.parentElement.children) {
//             if (elem.textContent.toLowerCase() == 'dog') {
//                 elem.style.backgroundColor = 'lightblue'
//             } else {
//                 elem.style.backgroundColor = 'red'
//             }
//         }
//         console.log("Wrong")

//     }
// }

// lesson 2
// tagName , innerHTML , outerHTML, textContent
// let text = document.querySelector(".text")

// console.log(text.tagName) // teg nomi
// console.log(text.textContent) // matnli kontentni
// text.innerHTML = "lorem ipsum dolor" // tagni ichiga html kod joylash <p>***</p>
// text.outerHTML = "<span>lorem ipsum dolor</span>" // tagni ichiga html kod joylash *<span>***</span>*
// text.hidden = true // elementni korinmas qilish
// console.log(text.hidden)
// setInterval(() => text.hidden = !text.hidden, 5000);
// document.createElement(tag nomi) // html element hosil qilish

// task 1
// let names = ["john", "mike", "miguel", "stive"]

// let nameList = document.querySelector("#names")
// for (let i = 0; i < nameList.children.length; i++) {
//     nameList.children[i].textContent = names[i]
// }

// // task 2
// let nums = [1, 9, 4, 3, 7]
// elem = html element
// name = atribut nomi
// elem.hasAttribute(name) – atribut mavjudligini tekshirish.
// elem.getAttribute(name) – atribut qiymatini olish.
// elem.setAttribute(name, value) – artibut nomi va uni qiymatini biriktirish.
// elem.removeAttribute(name) – atributni o'chirish.

// function changeElem() {
//     let box = document.querySelector(".box")
//     let square = document.querySelector(".square")
//     if (box.hasAttribute("name")) {
//         box.removeAttribute("name")
//     } else {
//         box.setAttribute("name", "circle")
//     }
//     let red = Math.round(Math.random() * 255)
//     let green = Math.round(Math.random() * 255)
//     let blue = Math.round(Math.random() * 255)

//     let randomColor = `background-color:rgb(${red},${green},${blue});`
//     square.setAttribute("style", randomColor)

// }
// setInterval(changeElem, 2000)

// console.log(Math.floor(12.8)) // 12
// console.log(Math.ceil(12.1)) // 13
// console.log(Math.round(12.5)) // 13

// console.log(Math.round(Math.random() * 10))

// console.log(Math.round(Math.random() * 25) + 25)

// lesson 3
// createElement
// let ul = document.querySelector(".list")
// let li = document.createElement("li")
// li.className = 'item'
// li.textContent = "apple"
// li.style.cssText = "color:green; padding:10px; list-style:none;"
// ul.prepend(li) // element boshiga qoshiladi
// ul.append(li) // element oxiriga qoshiladi
// ul.before(li) // ul elementidan avval qoshish
// ul.after(li) // ul elementidan keyin qoshish
// li.remove() //  elementni o'chirish
// let orange = document.querySelector('.orange')
// orange.replaceWith(li) // korsatilgan element o'rniga qoshish
// console.log(li)
// let names = ["john", "mike", "sara"]
// for (let name of names) {
//     let li = document.createElement("li")
//     li.textContent = name
//     ul.append(li)
// }
// task 1
// let numbersBlock = document.querySelector(".numbers")
// let iterationCount = Math.round(Math.random() * 7) + 1
// for (let i = 0; i < iterationCount; i++) {
//     let randomNumbers = Math.round(Math.random() * 50) + 1
//     let block = document.createElement('div')
//     block.className = "block"
//     block.textContent = randomNumbers
//     block.setAttribute("onclick", "showNumber(this)")
//     numbersBlock.append(block)
// }
// function showNumber(element) {
//     let numberBlock = document.querySelector(".number")
//     numberBlock.textContent = element.textContent
// }
// let main = document.querySelector(".main")

// // main.className = 'block'
// main.classList = "main block box"
// main.classList.

// function theme(elem) {
//     document.body.classList.toggle("dark")

//     if (elem.children[0].classList.contains("bxs-sun")) {
//         elem.children[0].classList.remove("bxs-sun")
//         elem.children[0].classList.add("bxs-moon")
//     } else {
//         elem.children[0].classList.remove("bxs-moon")
//         elem.children[0].classList.add("bxs-sun")

//     }
// }

// lesson 4
// cssText
let mystyle = `
    background-color: rgb(35, 188, 35);
    color: aliceblue;
    text-align: center;
    font-size: 1.3em;
    padding: 5px;
    cursor: pointer;
`
// let p = document.querySelector("p")
// p.style.cssText = mystyle

// p.style.display = "none"
// p.style.position = "fixed"
// p.style.overflow = "scroll"
// console.log(p.style)
// let colors = ["red", 'green', "yellow"]
// setInterval(() => { p.style.backgroundColor = colors[Math.round(Math.random() * colors.length)] }, 1000)
// function minScroll() {
//     window.scrollTo(0, 0)
// }
// function maxScroll() {
//     let s = window.scrollY
//     console.log(s)
//     window.scrollTo(0, window.scrollY += 500)
// }

// console.log(Event)
// click ,contextmenu ,  keypress , keyup, keydown
// element.addEventListener(event, handler, [options]);
// let elem = document.querySelector('.main')
// elem.addEventListener("contextmenu", () => { console.log("Mouse event.") })

// document.body.addEventListener("click", function () {
//     console.log("Mouse event.")
// })
// window.addEventListener('keydown', function (e) {
//     console.log(this.event) // joriy hodisa obyekti
//     console.log(this.event.key) // joriy hodisa obyekti
//     console.log(e.target) // hodisa ro'y bergan element
// })
// window.addEventListener("keyup", function () {
//     if (this.event.key === 'q' && this.event.ctrlKey) {
//         window.open("https://google.com")
//     }
// })

// lesson 5
// console.log(document.forms) // array
// let form = document.forms[0]

// console.log(form.elements) // elementlari , maydonlari massiv korinishida
// console.log(form.length) // elementlar soni
// console.log(form.action) // action atributi qiymati
// console.log(form.method) // method atributi qiymati

// for (el of form.elements) {
//     el.classList.add("form-control")
// }
// console.log(form.name)
// console.log(form.email)
// form.onsubmit = function (e) {
//     for (let item of e.target.elements) {
//         let p = document.createElement("p")
//         p.innerHTML = item.value
//         document.querySelector('.data').append(p)
//     }
// }

// let form = document.forms[0]
// form.addEventListener("change", function (e) {
//     let block = document.querySelector('.data')
//     block.style.backgroundColor = form.elements[0].value
//     // console.log(form.elements[1].value)
//     block.style.height = `${form.elements[1].value}px`
// })

// lesson 6
// let url = "https://jsonplaceholder.typicode.com/users/"
// let data = fetch(url)
// console.log(data.then())

// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     }).catch()
// fetch(url)
//     .then(result => console.log(result)) // Response obyekti mavjud va http status : 200
//     .catch(error => console.log(error)) // Response obyekti mavjud va http status : 404 yoki boshqa xatolik
//     .finally(final => console.log("The end !"))// Har qanday xolatda ishlayveradi
// window.XMLHttpRequest() >> AJAX > Asynchronous Javascript and XML

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '0202709d4emshbe87778ed9b4962p1f76cdjsn4a200e532763',
//         'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
//     }
// };

// function searchMovie() {
//     let query = document.querySelector("input").value
//     if (query) {
//         let url = `https://imdb8.p.rapidapi.com/auto-complete?q=${query}`
//         fetch(url, options)
//             .then(response => response.json())
//             .then(response => {
//                 let movieList = document.querySelector(".movie-list");
//                 // console.log(response.d)
//                 for (let movie of response.d) {
//                     let div = document.createElement('div')
//                     div.className = "movie"
//                     let title = document.createElement('h3')
//                     title.textContent = movie.l
//                     div.append(title)
//                     let img = document.createElement('img')
//                     img.src = movie.i.imageUrl
//                     div.append(img)
//                     movieList.append(div)
//                 }
//             })
//             .catch(err => console.error(err));
//     } else {
//         alert("Please write something.")
//     }

// }

// window.addEventListener("keypress", function (e) {
//     if (e.key == 'Enter') {
//         searchMovie()
//     }
// })




// function translate() {
//     let query = document.querySelector("input").value
//     const encodedParams = new URLSearchParams();
//     encodedParams.append("q", `${query}`);
//     encodedParams.append("target", "ru");
//     encodedParams.append("source", "en");

//     const options = {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/x-www-form-urlencoded',
//             'Accept-Encoding': 'application/gzip',
//             'X-RapidAPI-Key': '0202709d4emshbe87778ed9b4962p1f76cdjsn4a200e532763',
//             'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
//         },
//         body: encodedParams
//     };


//     fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
//         .then(response => response.json())
//         .then(response => {
//             let movieList = document.querySelector(".movie-list")
//             movieList.textContent = response.data.translations[0].translatedText


//         })
//         .catch(err => console.error(err));
// }

// window.addEventListener("keypress", function (e) {
//     if (e.key == 'Enter') {
//         console.log('aaa')
//         translate()
//     }
// })

// lesson 6

// localStorage , sessionStorage 
let storage = localStorage // yoki sessionStorage
// storage.getItem() // kalit bo'yicha elementni olish 
// storage.setItem() // kalit va qiymat orqali element yozish 
// storage.removeItem() // kalit orqali elementi o'chirish 
// storage.clear() // xotirani butunlay tozalash

// function addProduct(productList, name, imageUrl, price) {
//     productList.push(
//         {
//             name: name,
//             image: imageUrl,
//             price: price
//         }
//     );
//     return productList;
// }

// fetch("./js/db.json")
//     .then(res => res.json())
//     .then(data => {
//         // console.log(data)
//         // addProduct(data.products, "Kalach", './src/image.png', 5.3)
//         // for (let item of data.products) {
//         //     let tr = document.createElement("tr")
//         //     let td0 = document.createElement("td")
//         //     let td1 = document.createElement("td")
//         //     let td2 = document.createElement("td")
//         //     let td3 = document.createElement("td")
//         //     let td4 = document.createElement("td")
//         //     let td5 = document.createElement("td")
//         //     td0.innerText = data.products.indexOf(item)
//         //     tr.append(td0)
//         //     td1.innerText = item.name
//         //     tr.append(td1)
//         //     let img = document.createElement("img")
//         //     img.src = item.image
//         //     img.width = "100"
//         //     td2.append(img)
//         //     tr.append(td2)
//         //     td3.innerText = item.qty
//         //     tr.append(td3)
//         //     td4.innerText = item.price
//         //     tr.append(td4)
//         //     td5.innerText = item.price * item.qty
//         //     tr.append(td5)

//         //     document.querySelector("tbody").append(tr)
//         // }
//         localStorage.setItem("products", data.products)
//     })
// JSON.stringify(js object) >>> js obyektlarni  json qberadi
// JSON.parse(json) >>> jsonni js obyekt qberadi

// let pr = JSON.stringify(
//     {
//         qty: 2,
//         price: 105
//     }
// )
// localStorage.setItem("product", pr)
// console.log(localStorage.getItem("product"))
// console.log(
//     JSON.parse(localStorage.getItem("product"))
// )

// let pro = JSON.parse(localStorage.getItem("product"))
// let qty = document.querySelector('.qty')
// let price = document.querySelector('.price')

// qty.innerHTML = pro.qty
// price.innerHTML = pro.price * pro.qty

// task 1 
// Butun sonlardan iborat massiv qabul qiladigan va butun son qabul qiladigan function
// yozing, butun son miqdori qadar massiv elementlarini takrorlab ans nomli alohida massiv
// ko'rinishiga keltiring

// Input: nums = [1,2,1] , 3
// Output: [1,2,1,1,2,1,1,2,1]

// task 2 * 
// Massivdagi elementlar tipini aniqlovchi  va qaysi tipdagi elementlar ozchilikni tashkil qilsa
// o'sha elementlarni o'chirib yuboradigan function yozing

// task  3 
// '2006-10-25 14:30:59'
// '2006-10-25T14:30:59'
// '2006-10-25 14:30' >> yil oy kun soat minut 
// '2006-10-25T14:30'
// '2006-10-25T14:30Z'
// '2006-10-25T14:30+02:00'
// '2006-10-25' >> yil , oy , kun

// task 1 
// Function yozing function matn qabul qiladi va matn telefon raqami bo'lishi shart 
// raqam ko'rsatilgan +998 93 333 33 33 ko'rinishida bo'lsa massivga yozing aks holda 
// "Raqamni to'gri kiriting" matnini chiqaring 
