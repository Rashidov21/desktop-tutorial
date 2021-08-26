let add = document.getElementById("add")
let body = document.body;
// let section = document.getElementById('section');

// let originalStyle = section.style;
// function circle(){
//     section.style = 'background-color:red; '+
//     'border-radius:100px; transition:all 0.3s;';
//     // document.getElementById('img').src = './img/cloudy.png'
//     // body.style = 'background-image:url("https://static.istories.media/uploaded/images/4213ed314d12497aa5f6f69741f2cf4a-1920x960px_1x.webp");';
// }
// function square(){
//     section.style = originalStyle;
// }
let section = document.getElementById('section');
function changeClassName(){
    section.classList = 'transitions margins red-color'
    console.log()
    console.log(typeof section.classList)
}

let modal = document.getElementById("modal")
// let closeBtn = document.getElementById("close")
function Show(){
    modal.style = "display:block;"
    modal.classList = 'transitions margins red-color'
}