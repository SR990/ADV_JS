import React from 'react';

const RecipeList = ({ recipes, addToFavorites }) => {
    return (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-orange-600">🍳 Recipes</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <li key={recipe.idMeal} className="bg-white shadow-md rounded-lg p-4">
                <div className="flex flex-col items-center">
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="w-32 h-32 rounded-md object-cover mb-2"
                  />
                  <p className="font-medium text-center">{recipe.strMeal}</p>
                  <button
                    onClick={() => addToFavorites(recipe)}
                    className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                  >
                    Add to Favorites
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
      
};

export default RecipeList;
