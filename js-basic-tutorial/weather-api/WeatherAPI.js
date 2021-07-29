let query = document.querySelector('.query');
let button = document.querySelector('#btn');
const api_key = '6508c80d1115b29a5bb0e65c0009916d'

let infoImg = document.getElementById('infoImg');
button.addEventListener('click', function(){
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+query.value+'&units=metric&APPID='+api_key)
	.then(response => response.json())
	.then(data => {
		console.log(typeof data)
		if(data){
			document.getElementById('info').style = 'display:block; transition:all 0.3s;';
		}
		let temp = data['main']['temp'];
		let city = data['name']
		let desc = data['weather'][0]['main'];
		let date = new Date()

		document.querySelector('.city').innerHTML = city;
		document.querySelector('.temp').innerHTML = temp;
		document.querySelector('.desc').innerHTML = desc;
		document.querySelector('.date').innerHTML = date.toLocaleDateString('en-US');
		if(desc.toLowerCase() == 'rain'){
			infoImg.src = '../img/rain.png'
		}
		else if(desc.toLowerCase() == 'clouds'){
			infoImg.src = '../img/cloudy.png'
		}else{
			infoImg.src = '../img/sun.png'			
		}


	})
})

