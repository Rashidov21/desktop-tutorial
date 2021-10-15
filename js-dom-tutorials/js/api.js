// let url = "https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=6508c80d1115b29a5bb0e65c0009916d";
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//     console.log(data)
// })

//
// function getWeather(){
//     let cityName = document.getElementById("city");
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=6508c80d1115b29a5bb0e65c0009916d`)
//     .then(response => response.json())
//     .then(data => {
//     console.log(data)
//     let count = document.getElementById("country");
//     let city = document.getElementById("c");
//     let temp = document.getElementById("temp");
//
//     count.innerHTML = data.sys.country;
//     city.innerHTML = data.name;
//     temp.innerHTML = data.main.temp;
//
// })
// }

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) => {
//         console.log(json)
//         let dataList = document.getElementById("list")
//         for(let i = 0; i < json.length; i++){
//             let li = document.createElement("li")
//             li.innerHTML = json[i].title
//             dataList.appendChild(li)
//         }
//     });
fetch("https://imdb8.p.rapidapi.com/auto-complete?q=ironman", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "0202709d4emshbe87778ed9b4962p1f76cdjsn4a200e532763"
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
