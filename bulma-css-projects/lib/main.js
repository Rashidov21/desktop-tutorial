let box = document.querySelectorAll(".box")

function onHover(evt) {
    evt.className = "img"
    anime({
        targets: '.img',
        scale: 1.2,
        borderRadius: "10px",
        direction: "alternate"
    });
}
// anime({
//     targets: box,
//     keyframes: [{
//         translateX: function() {
//             return anime.random(0, 370)
//         },
//         translateY: function() {
//             return anime.random(0, 370)
//         },
//         borderRadius: function() {
//             return anime.random(0, 50)
//         },
//         left: function() {
//             return anime.random(0, 670)
//         },
//         top: function() {
//             return anime.random(0, 370)
//         },
//     }],
//     width: function() {
//         return anime.random(20, 180)
//     },
//     height: function() {
//         return anime.random(20, 180)
//     },
//     backgroundColor: function() {
//         colors = ["#003f5c", "#444e86", "#dd5182", "#ffa600", "#ff6e54"];
//         return `${colors[Math.round(Math.random()*colors.length)]}`
//     },
//     loop: 1,
//     direction: "linear",
//     duration: 3000,
//     easing: "easeInOutQuad"
// });