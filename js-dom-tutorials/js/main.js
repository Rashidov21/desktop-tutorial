

function openClose() {
    let sidebarMenu = document.querySelector(".sidebar-menu")
    sidebarMenu.classList.toggle("show")
}


function openAccardion() {
    let obj = document.querySelector(".accardion")
    obj.classList.toggle("down")
}

window.onload = function () {
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