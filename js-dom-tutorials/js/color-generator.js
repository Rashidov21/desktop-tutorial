function generateColor() {
    let boxes = document.querySelector("#boxes").children // [div.box,div.box....]
    for (let i = 0; i < boxes.length; i++) {
        let red = Math.round(Math.random() * 255)
        let green = Math.round(Math.random() * 255)
        let blue = Math.round(Math.random() * 255)

        boxes[i].style.backgroundColor = `rgb(${red},${green},${blue})`

        boxes[i].children[0].value = `rgb(${red},${green},${blue})`

    }
}

function copyCode(elem) {
    /* Select the text field */
    elem.select();
    elem.setSelectionRange(0, 99999); /* For mobile devices */
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(elem.value);
    /* Alert the copied text */
    alert("Copied the text: " + elem.value);
}