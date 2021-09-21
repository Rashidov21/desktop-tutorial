let posts = document.getElementById("posts");

function getAlbums(){
    console.dir(posts)
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then(response => response.json())
        .then(data => {
            for(let i = 0; i < data.length; i++){
                let img = document.createElement("img");
                img.src = data[i]["url"]
                console.log(data[i]["url"])
                posts.appendChild(img)
            }
        })
}