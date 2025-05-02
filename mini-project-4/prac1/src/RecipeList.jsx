function RecipeList({ recipes, addFavourite }) {
    if (recipes.length === 0) {
      return <p>No recipes found. Try searching for something else.</p>;
    }
  
    return (
        <div className="recipes p-6 bg-yellow-50 min-h-screen">
          <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">🍽️ Recipes</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
              <li key={recipe.idMeal} className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all duration-300">
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="w-full h-48 object-cover rounded-xl mb-3"
                />
                <p className="text-lg font-semibold text-gray-800 mb-2">{recipe.strMeal}</p>
                <button
                  onClick={() => addFavourite(recipe)}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm"
                >
                  Add to Favourite 💖
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
      
  }
  
  export default RecipeList;
  