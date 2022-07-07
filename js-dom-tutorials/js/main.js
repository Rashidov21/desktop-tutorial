

function openClose() {
    let sidebarMenu = document.querySelector(".sidebar-menu")
    sidebarMenu.classList.toggle("show")
}


function openAccardion() {
    let obj = document.querySelector(".accardion")
    obj.classList.toggle("down")

}

function equ() {
    let equal = document.querySelector(".eq")
    let col = document.querySelectorAll('.col')
    setInterval(() => {
        for (let item of col) {
            item.style.backgroundColor = '#232328'
            item.style.height = `${Math.round(Math.random() * 450)}px`
            item.style.backgroundColor = `rgb(${Math.round(Math.random() * 10)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 100)})`
        }
    }, 100)
}
function play_single_sound() {
    document.getElementById('audiotag1').play();
}
function pause_single_sound() {
    document.getElementById('audiotag1').pause();
}
window.addEventListener("keypress", (event) => {

    if (event.key == "e") {
        equ()
    }
    else if (event.key == "m") {
        play_single_sound()
    }
    else if (event.key == "p") {
        pause_single_sound()
    }
})

let equal = document.querySelector(".eq")
console.dir(equal)
// equal.className = "klass nomi1 klass nomi2"
// equal.classList = ["klass nomi 1", "klass nomi 2"]
// equal.classList.add("myClass") klass qoshish
// equal.classList.remove("myClass") klass ochirish
// equal.classList.contains("myClass") klass bor yoki yoqligini tekshirish
// equal.classList.toggle("myClass") klass bor bolsa uni ochiradi bolmasa qoshib qoyadi