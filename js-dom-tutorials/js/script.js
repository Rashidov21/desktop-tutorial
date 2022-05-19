let box = document.querySelector("#box");
// console.log(box.className); // bu 1 nom ostida class lar nomi : String()
// console.log(box.classList); // bu array korinishida class lar nomlari

// box.className = "block"
// box.classList.add() // class qoshish
// box.classList.remove() // ochirish
// box.classList.toggle() // bosa ochiradi bomasa qoshadi 
// box.classList.contains() // bor yoki yoqligini tekshiradi
// box.classList.add("border")
// box.classList.remove("red")
// box.classList.toggle("box")
// box.classList.toggle("border")
// console.log(box.classList.contains("box"));
// console.log(box.classList.contains("border"));
function showBorder(){
    box.classList.toggle("border")
}
