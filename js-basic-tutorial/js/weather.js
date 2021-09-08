let cityName = document.getElementById('cityName');
let btn = document.getElementById("btn")
/// info tags
let country = document.getElementById('country');
let city = document.getElementById('city');
let temp = document.getElementById('temp');
let info = document.getElementById('info');
let desc = document.getElementById('desc');

btn.addEventListener("click", () =>{
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value.trim()}&appid=6508c80d1115b29a5bb0e65c0009916d`
  fetch(url)
      .then(response => response.json())
      .then(data => {

        let c = data['sys']['country'];
        let ci = cityName.value.trim();
        let t = data['main']['temp']
        let d = data['weather'][0]['description']
        let i = data['weather'][0]['main']

        // Initializations
        country.innerHTML = `<i class="fas fa-location-arrow"></i>${c}`;
        city.innerHTML = `<i class="fas fa-map"></i>${ci}`;
        temp.innerHTML = `<i class="fas fa-thermometer-quarter"></i>${t}`;
        if(i.toLowerCase() === 'rain'){
          info.innerHTML = `<i class="fas fa-cloud-rain"></i>${i}`;
        }
        if(i.toLowerCase() === 'clouds'){
          info.innerHTML = `<i class="fas fa-cloud"></i>${i}`;
        }
        if(i.toLowerCase() === 'clear'){
          info.innerHTML = `<i class="fas fa-sun"></i>${i}`;
        }
        if(i.toLowerCase() === 'snow'){
          info.innerHTML = `<i class="fas fa-snowflake"></i>${i}`;
        }

        desc.innerHTML = `<i class="fas fa-info"></i>${d}`;
        cityName.value = '';
      })
})
// 6508c80d1115b29a5bb0e65c0009916d
// var input = document.querySelector('.input_text');
// var main = document.querySelector('#name');
// var country = document.querySelector('.country');
// var temp = document.querySelector('.temp');
// var desc = document.querySelector('.desc');
// var clouds = document.querySelector('.clouds');
// var button= document.querySelector('.submit');
//
//
// button.addEventListener('click', function(name){
// fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=6508c80d1115b29a5bb0e65c0009916d')
// .then(response => response.json())
// .then(data => {
// 	console.log(data)
//   var tempValue = data['main']['temp'];
//   var nameValue = data['name'];
//   var descValue = data['weather'][0]['description'];
//   var countryValue = data['sys']['country']
//
//   main.innerHTML = nameValue;
//   desc.innerHTML = "Desc - "+descValue;
//   temp.innerHTML = "Temp - "+tempValue;
//   country.innerHTML = "Country - "+countryValue;
//   input.value ="";
//
// })
//
// .catch(err => alert("Wrong city name!"));
// })