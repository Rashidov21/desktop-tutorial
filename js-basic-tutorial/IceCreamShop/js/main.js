
let addBtn = document.querySelectorAll('.btn');

let count = 0;

function plus(){
	count += 1;
	document.querySelector('.item-count').innerHTML = count;
}

let price = 1.65;
function getTotalPrice(){
	let iceCreams = document.querySelector('#iceCount').value;
	let total = iceCreams * price;
	
	let str = '';
	str += total;

	document.querySelector('#total').innerHTML = '$ '+str.slice(0,4);
	document.querySelector('#totalAll').innerHTML = '$ '+str.slice(0,4);
}