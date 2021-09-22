// let posts = document.getElementById("posts");
//
// function getAlbums(){
//     console.dir(posts)
//     fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
//         .then(response => response.json())
//         .then(data => {
//             for(let i = 0; i < data.length; i++){
//                 let img = document.createElement("img");
//                 img.src = data[i]["url"]
//                 console.log(data[i]["url"])
//                 posts.appendChild(img)
//             }
//         })
// }

let nature = ["leaf", "tree", "pagelines", "temperature-low","temperature-high"];
let edu = ["school", "university", "book-open","book-reader","laptop-code"];
let sport = ["swimmer","running","table-tennis","futbol","basketball-ball"];

let btn = document.getElementById("btn");
let icons = document.getElementById("icons");
let e = document.getElementById("edu");
let n = document.getElementById("nature");
let s = document.getElementById("sport");

btn.addEventListener("click", ()=>{
    if(e.checked){
        for(let i = 0; i < 3; i++){
            let rItem = edu[Math.round(Math.random()*edu.length)]
            let icon = document.createElement("i");
            icon.className = `fas fa-${rItem}`;
            icons.appendChild(icon);
        }
    }else{
        console.log("Checkboxes is not checked")
    }
})
