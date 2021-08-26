let sidebar = document.querySelector("#sidebar");
let menuBtnOpen = document.querySelector("#menu-open");
let menuBtnClose = document.querySelector("#menu-close");
menuBtnOpen.onclick = function Show(){
    sidebar.style.left = "0px";
    menuBtnOpen.style.display = "none";
    menuBtnClose.style.display = "block";
}
menuBtnClose.onclick = function Close(){
    sidebar.style.left = "-250px";
    menuBtnOpen.style.display = "block";
    menuBtnClose.style.display = "none";
}