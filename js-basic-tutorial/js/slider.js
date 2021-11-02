// let slider = {
// 	// images in array
// 	slides:[
// 		'img/nike/nike1.jpg',
// 		'img/nike/nike2.jpg',
// 		'img/nike/nike3.jpg',
// 		'img/nike/nike4.jpg',
// 		'img/nike/nike5.jpg',
// 		'img/nike/nike6.jpg',
// 		],
// SELECT FROM * mytable WHERE id = 5

// 	// the first image (index = 0 and => ++)
// 	frame:0, 
// 	set: function(image) { // set the image 
// 		document.querySelector(".slide").style.backgroundImage = "url("+image+")"
// 		}, 
	 
// 	init: function() { // start slide index = 0 
// 		this.set(this.slides[this.frame]); 
// 	}, 
// 	left: function() { // TO LEFT 	 
// 	this.frame--; 
// 	if(this.frame < 0) {this.frame = this.slides.length-1; 
// 		this.set(this.slides[this.frame])}
// 	},
// 	right: function() { // TO RIGHT 
// 		this.frame++; 
// 		if(this.frame == this.slides.length) this.frame = 0; 
// 			this.set(this.slides[this.frame])
// 	} 
// };	 
// window.onload = function() {  
// 	slider.init(); 
// 	setInterval(function() {
// 		slider.right()
// 	}
// 	,3000 )
// };

// function show() {
	
// 	document.querySelector('.menu').style.display = 'block';

// };
// function hide() {
	
// 	document.querySelector('.menu').style.display = 'none';

// };




// Date and Time manupilation 

let clock;

function DisplayTime() { 
	let d = new Date(); 
	let h = d.getHours();
	let m = d.getMinutes(); 
	let s = d.getSeconds();
	let injectTime = `
		<span>${h}</span>
		<span>${m}</span>
		<span>${s}</span>
	`
	document.querySelector(".time").innerHTML = injectTime; 
}

function TimeStart(){
	clock = setInterval("DisplayTime();",1000)
}
function TimeStop(){
	clock = clearInterval(clock)
}
console.log(document.images[0].src) // get images  source


