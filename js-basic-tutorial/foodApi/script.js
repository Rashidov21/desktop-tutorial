// const searchBtn = document.getElementById('search-btn');
// const mealList = document.getElementById('meal');
// const mealDetailsContent = document.querySelector('.meal-details-content');
// const recipeCloseBtn = document.getElementById('recipe-close-btn');
//
// // event listeners
// searchBtn.addEventListener('click', getMealList);
// mealList.addEventListener('click', getMealRecipe);
// recipeCloseBtn.addEventListener('click', () => {
//     mealDetailsContent.parentElement.classList.remove('showRecipe');
// });
//
//
// // get meal list that matches with the ingredients
// function getMealList(){
//     let searchInputTxt = document.getElementById('search-input').value.trim();
//     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
//         .then(response => response.json())
//         .then(data => {
//             let html = "";
//             if(data.meals){
//                 data.meals.forEach(meal => {
//                     html += `
//                     <div class = "meal-item" data-id = "${meal.idMeal}">
//                         <div class = "meal-img">
//                             <img src = "${meal.strMealThumb}" alt = "food">
//                         </div>
//                         <div class = "meal-name">
//                             <h3>${meal.strMeal}</h3>
//                             <a href = "#" class = "recipe-btn">Get Recipe</a>
//                         </div>
//                     </div>
//                 `;
//                 });
//                 mealList.classList.remove('notFound');
//             } else{
//                 html = "Sorry, we didn't find any meal!";
//                 mealList.classList.add('notFound');
//             }
//
//             mealList.innerHTML = html;
//         });
// }
//
//
// // get recipe of the meal
// function getMealRecipe(e){
//     e.preventDefault();
//     if(e.target.classList.contains('recipe-btn')){
//         let mealItem = e.target.parentElement.parentElement;
//         fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
//             .then(response => response.json())
//             .then(data => mealRecipeModal(data.meals));
//     }
// }
//
// // create a modal
// function mealRecipeModal(meal){
//     console.log(meal);
//     meal = meal[0];
//     let html = `
//         <h2 class = "recipe-title">${meal.strMeal}</h2>
//         <p class = "recipe-category">${meal.strCategory}</p>
//         <div class = "recipe-instruct">
//             <h3>Instructions:</h3>
//             <p>${meal.strInstructions}</p>
//         </div>
//         <div class = "recipe-meal-img">
//             <img src = "${meal.strMealThumb}" alt = "">
//         </div>
//         <div class = "recipe-link">
//             <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
//         </div>
//     `;
//     mealDetailsContent.innerHTML = html;
//     mealDetailsContent.parentElement.classList.add('showRecipe');
// }
//
// function getRandomMeal(){
//     let url = `https://www.themealdb.com/api/json/v1/1/random.php`;
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data['meals'][0])
//             let d = data['meals'];
//             for(let i = 0; i < d.length; i++){
//                 console.log(d[i])
//             }
//         })
// }
// window.onload = getRandomMeal();
//

fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/classify?locale=en_us", {
    "method": "POST",
    "headers": {
        "content-type": "application/json",
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "0202709d4emshbe87778ed9b4962p1f76cdjsn4a200e532763"
    },
    "body": {
        "plu_code": "",
        "title": "Kroger Vitamin A & D Reduced Fat 2% Milk",
        "upc": ""
    }
})
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
    // .catch(err => {
    //     console.error(err);
    // });

