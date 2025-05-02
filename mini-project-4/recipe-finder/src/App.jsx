import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar'; // Import SearchBar component
import RecipeList from './RecipeList'; // Import RecipeList component

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  
  useEffect(() => {
    if (!searchTerm) return;

    const fetchRecipes = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
      setRecipes(data.meals || []);
    };

    fetchRecipes();
  }, [searchTerm]); 

  
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []); // Load favorites once on component mount

  
  const addToFavorites = (recipe) => {
    const updatedFavorites = [...favorites, recipe];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="min-h-screen bg-yellow-50 px-6 py-10 font-sans">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
        🍽️ Recipe Finder
      </h1>
  
      <div className="max-w-2xl mx-auto mb-8">
        <SearchBar setSearchTerm={setSearchTerm} />
      </div>
  
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RecipeList recipes={recipes} addToFavorites={addToFavorites} />
      </div>
  
      <div className="max-w-3xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          ⭐ Your Favorites
        </h2>
        <ul className="bg-white rounded-lg shadow-md p-4 space-y-2">
          {favorites.map((recipe) => (
            <li
              key={recipe.idMeal}
              className="p-2 rounded hover:bg-green-100 transition"
            >
              {recipe.strMeal}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
}

export default App;
