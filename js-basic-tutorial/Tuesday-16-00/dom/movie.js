let movieContent = document.querySelector(".content")
fetch('./dom/data.json').then(response => {
    return response.json();
  }).then(data => {
    let id = 0
    for(movie of data){
        // html elementlar hosil qilib olamiz 
        let div = document.createElement("div");
        let p = document.createElement("p")
        let h4 = document.createElement("h4")
        let a = document.createElement("a")

        // elementlar uchun class berib olamiz 
        div.className = "movie"
        h4.className = "movie-title"
        p.className = "movie-description"
        a.className = "movie-link"
        
        // movielarni id si boyicha alohida qilib olamiz 
        movie = movie[`${id}`]
        id = id + 1        
        
        // elementlarga har bir movie malumotlarini joylab chiqamiz 
        h4.textContent = movie.name
        a.href = movie.links[0]
        a.append(h4)
        p.textContent = movie.details

        div.append(a)
        div.append(p)

        movieContent.append(div)

    }
  }).catch(err => {

  });