var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var country = document.querySelector('.country');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=6508c80d1115b29a5bb0e65c0009916d')
.then(response => response.json())
.then(data => {
	console.log(data)
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var countryValue = data['sys']['country']

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  country.innerHTML = "Country - "+countryValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})