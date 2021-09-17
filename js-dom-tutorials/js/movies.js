let img = document.getElementById("movieImg");
let imagesBlock = document.getElementById("images");
let movieName = document.getElementById("movieName");


movieName.addEventListener("keydown",(e) =>{
    if(e.which === 13){
        getMoviePosters(movieName.value)
    }
})

function getMoviePosters(query){
    fetch( `https://imdb8.p.rapidapi.com/auto-complete?q=${query}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": ""
        }
    })
        .then(response => response.json())
        .then(data => {
            for(let movie of data["d"]){
                let div = document.createElement("div");
                let img = document.createElement("img");
                img.src = movie["i"]["imageUrl"]
                img.style.width = '300px';
                img.style.height = 'auto';
                div.innerHTML = `
                <a onclick='download()' href="${movie["i"]["imageUrl"]}">
                    <img src="${movie['i']['imageUrl']}">
                </a>`
                imagesBlock.appendChild(div)
            }
            // console.log(data["d"][0]["i"])
            // img.src = data["d"][0]["i"]["imageUrl"]
        })
        .catch(err => {
            console.error(err);
        });

}


// JSON placeholder bilan api fetch sorov tekshirish
// let url = "https://jsonplaceholder.typicode.com/posts";
// let posts = document.getElementById("posts");
// fetch(url).then(response => response.json()).then(data => {
//     for(let post of data){
//         let p = document.createElement("li");
//             p.innerHTML = `<h3>${post.id}</h3><p>${post.title}</p>`;
//             posts.appendChild(p);
//     }
// })