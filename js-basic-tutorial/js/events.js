let btn = document.querySelector('button');

function show() {
	document.querySelector('.block').style = 'display:block;';
	console.log('work')
	// body...
}

btn.addEventListener('click', show)

let body = document.body;
function bgImage () {
	body.style.backgroundImage = "url('img/cloudy.png')"
}


// addEventListener(eventName, actions=>funtions)

let input = document.querySelector('#inp');
input.onfocus = function (){
	let d = new Date();
	document.createElement('li').innerHTML = 'Item 1'
}

// window.onload = function (){
// 	document.body.className = 'animation'
// }

// window.onmousemove = function (){
// 	document.body.className = 'animation'
// }
// window.onkeypress = function (){
// 	document.body.className = 'animation'
// }
// window.onkeydown = function (){
// 	document.body.className = 'animation'
// }

// window.onkeyup = function (){
// 	document.body.className = 'animation'
// }
// window.onscroll = function (){
// 	document.body.className = 'animation'
// }
// let form = document.querySelector('form');

// form.onchange = function () {
// 	document.body.className = 'animation'
// }
// window.onmousemove = function (){
// 	// document.body.className = 'animation'
// 	let cordx = event.clientX;
// 	let cordy = event.clientY;
// 	document.body.innerHTML = `clientX = ${cordx} clientY = ${cordy}`

// }

// window.onscroll = function (){
// 	let screenY = window.scrollY;
// 	console.log(screenY)
// 	if (screenY > 600){
// 		window.addEventListener('scroll', bgImage)
// 	}
// }