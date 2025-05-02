import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import RecipeDetail from "./RecipeDetail";
import RecipeList from "./RecipeList";
import Favorites from "./Favorites";

function Parent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    if (searchTerm.trim() === '') return;

    const fetchRecipes = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await res.json();
        setRecipes(data.meals || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [searchTerm]);

  return (
    <div className="min-h-screen p-6 bg-orange-100">
      <h1 className="text-3xl font-bold mb-4 text-center text-orange-800">
        🍽️ Recipe Finder & Saver
      </h1>

      <SearchBar onSearch={setSearchTerm} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <RecipeList recipes={recipes} onSelect={setSelectedRecipe} />
        <Favorites onSelect={setSelectedRecipe} />
      </div>

      {selectedRecipe && (
        <RecipeDetail
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}

export default Parent;
