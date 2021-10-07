// Movies Api
// fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "imdb8.p.rapidapi.com",
//             "x-rapidapi-key": "0202709d4emshbe87778ed9b4962p1f76cdjsn4a200e532763"
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.error(err);
//     });

// Shazam Api

fetch("https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key": "0202709d4emshbe87778ed9b4962p1f76cdjsn4a200e532763"
        }
    })
    .then(response => response.json())
    .then(data => {
        let list = document.getElementById("characterList");
        let track = data.tracks;

        console.log(track[0])
        for (let i = 0; i < track.length; i++) {
            let content = `
            <li class="character">
                <h2>${track[i].title}</h2>
                <h5>${track[i].subtitle}</h5>
                <p>${track[i].hub.displayname} </p>
                <img src="${track[i].images.coverart}"></img>
            </li>
        `
            let li = document.createElement("li");
            li.innerHTML = content
            list.appendChild(li)
        };
    });