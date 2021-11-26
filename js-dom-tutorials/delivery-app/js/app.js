let blobs = document.querySelectorAll("svg");
// for (let i = 0; i < blobs.length; i++) {
//     blobs[i].style.width = `${Math.round(Math.random() * 500)}px`;
//     blobs[i].style.height = "auto";
//     blobs[i].style.top = `${Math.round(Math.random() * 500)}px`;
//     blobs[i].style.left = `${Math.round(Math.random() * 500)}px`;
// }
let downloadBtn = document.querySelector("#downloadBtn");

downloadBtn.onmouseover = function downloadBtnAnimation() {
    anime({
        targets: downloadBtn,
        scale: 1.1,
        background: "yellow"
    });
}
downloadBtn.onmouseleave = function downloadBtnAnimation() {
    anime({
        targets: downloadBtn,
        scale: 1,
        background: ''
    });
}
let d = new Date();
let year = d.getFullYear()
document.getElementById("year").innerHTML = year;

window.onscroll = function() {
    let height = window.scrollY;
    console.log(height)
    if (height > 100) {
        document.querySelector("#orangeright").style.transition = "all 1s";
        document.querySelector("#orangeright").style.left = "-800px";
    } else {
        document.querySelector("#orangeright").style.transition = "all 1s";
        document.querySelector("#orangeright").style.left = "-8000px";
    }
    if (height > 500) {
        document.querySelector("#orangeleft").style.transition = "all 1s";
        document.querySelector("#orangeleft").style.right = "-800px";
    } else {
        document.querySelector("#orangeleft").style.transition = "all 1s";
        document.querySelector("#orangeleft").style.right = "-8000px";
    }
}