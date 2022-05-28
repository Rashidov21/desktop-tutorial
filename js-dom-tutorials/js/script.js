// AOS.init({
//     duration: 1200,
// });
window.sr = ScrollReveal({ reset: true });
sr.reveal('.grid', {
    duration: 500,
    rotate: { x: 100, y: 100, x: 0 }
});


// window.addEventListener("scroll", (event) => {
//     // console.log(window.scrollX) // qachonki oynada X oqida scroll bosa uni qiymatini chiqaradi
//     // console.log(window.scrollY) // qachonki oynada Y oqida scroll bosa uni qiymatini chiqaradi
//     if (window.scrollY > 0 && window.scrollY < 100) {
//         document.querySelector(".orange").classList.add("shake")
//     }
//     if (window.scrollY > 200 && window.scrollY < 400) {
//         document.querySelector(".red").classList.add("shake")
//     }
//     if (window.scrollY > 600 && window.scrollY < 800) {
//         document.querySelector(".blue").classList.add("shake")
//     }
//     if (window.scrollY > 1000 && window.scrollY < 1200) {
//         document.querySelector(".green").classList.add("shake")
//     }
// })