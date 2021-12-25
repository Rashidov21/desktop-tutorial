// HTTP >> Hyper Text Transfer Protocol
// GET >> ochiq holatda
// POST >> yopiq holatda
// PUT , HEAD ,DELETE

// JSON >> Javascript Object Notation >> {name:"Abdullo", age:12} >> string |text
// let obj = { name: "Abdullo", age: 12 }
// console.log(typeof obj) // object
// let data = JSON.stringify(obj) // json qilish
// console.log(typeof data) // string
// console.log(data) // { name: "Abdullo", age: 12 }
// let d = JSON.parse(data) // js objectga olish
// console.log(typeof d) // object

// API >> Application Programming Intarface
// fetch(url, options)
// let url = "https://free.currconv.com";
// const API_KEY = "0f05a9bb58c9b8bc5e26"
// let from = "";
// let to = "";
// fetch(url + `/api/v7/convert?q=RUB,UZS&compact=ultra&apiKey=${API_KEY}`)
//     .then(response => response.json())
//     .then(data => {
//         // let som = data["results"]["UZS"].currencyName
//         console.log(data)

//     })

// fetch(url + `/api/v7/currencies?apiKey=${API_KEY}`)
//     .then(response => response.json())
//     .then(data => {
//         // let som = data["results"]["UZS"].currencyName
//         console.log(data)

//     })
let from = document.querySelector("#from")
let to = document.querySelector("#to")

function getCurrency(value) {

    value = parseInt(value)
    fetch(`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=RUB&to=UZS&amount=${value}&language=ru`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
                "x-rapidapi-key": "0202709d4emshbe87778ed9b4962p1f76cdjsn4a200e532763"
            }
        })
        .then(response => response.json())
        .then(data => { 
            console.log(data);
            from.innerHTML = `<span>${data.base_currency_name}</span> - <span>${data.amount}</span>`
            to.innerHTML = `<span>${data.rates.UZS.currency_name}</span> - <span>${data.rates.UZS.rate_for_amount}</span>`
        })
        .catch(err => {
            console.error(err);
        });
}
