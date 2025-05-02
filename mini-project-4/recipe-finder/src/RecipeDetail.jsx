import React, { useEffect, useState } from "react";

function RecipeDetail({ recipe, onClose }) {
  const [detailedRecipe, setDetailedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeById = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`);
        const data = await res.json();
        setDetailedRecipe(data.meals[0]);
      } catch (err) {
        console.error("Failed to fetch recipe details:", err);
      }
    };

    fetchRecipeById();
  }, [recipe]);

  const handleSave = () => {
    const existing = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadySaved = existing.find((item) => item.idMeal === recipe.idMeal);

    if (!isAlreadySaved) {
      const updated = [...existing, recipe];
      localStorage.setItem("favorites", JSON.stringify(updated));
      alert("Recipe saved to favorites!");
    } else {
      alert("Recipe already in favorites!");
    }
  };

  if (!detailedRecipe) return <p className="text-center text-orange-600">Loading recipe...</p>;

  // Extract ingredients
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = detailedRecipe[`strIngredient${i}`];
    const measure = detailedRecipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full relative overflow-y-auto max-h-[80vh]">
        <button onClick={onClose} className="absolute top-2 right-3 text-red-600 font-bold text-lg">&times;</button>
        <h2 className="text-2xl font-bold mb-2 text-orange-800">{detailedRecipe.strMeal}</h2>
        <img src={detailedRecipe.strMealThumb} alt={detailedRecipe.strMeal} className="w-full rounded mb-4" />

        <h3 className="text-xl font-semibold text-gray-800">Ingredients:</h3>
        <ul className="list-disc list-inside mb-4">
          {ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-1">Instructions:</h3>
        <p className="text-gray-700 whitespace-pre-line mb-4">{detailedRecipe.strInstructions}</p>

        <button onClick={handleSave} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
          ❤️ Save to Favorites
        </button>
      </div>
    </div>
  );
}

export default RecipeDetail;
