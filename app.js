const searchMeals = () => {
  const searchText = document.getElementById('search-field').value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
  .then(res => res.json())
  .then(data => disPlayMeals(data.meals))
}

const disPlayMeals = meals => {
  const mealContainer = document.getElementById("meal-container");

  meals.forEach(meal => {
    const mealDiv = document.createElement("div");
    mealDiv.className = "single-result row my-3 p-3";
    mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        
        <div class="card-body">
        <h4 class="card-text">${meal.strMeal}</h4>
    </div>
    
    `;
    mealContainer.appendChild(mealDiv);
  });

   
}
