import React, { useState, useEffect } from 'react';
import Search from './Search';
import RecipeList from './RecipeList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [selectedFavourite, setSelectedFavourite] = useState(null);

  const fetchRecipes = async () => {
    if (!searchTerm) return;

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (err) {
      setError('Failed to fetch recipes');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipes();
  }, [searchTerm]);

  const addFavourite = (recipe) => {
    const updatedFavourites = [...favourites, recipe];
    setFavourites(updatedFavourites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  };

  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(savedFavourites);
  }, []);

  return (
    <div className="App">
      <Search setSearchTerm={setSearchTerm} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <RecipeList recipes={recipes} addFavourite={addFavourite} />
      <br />
      <br />
      <h2 className="text-2xl font-semibold mt-6">⭐️ Favourites</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
        {favourites.map((recipe) => (
          <li
            key={recipe.idMeal}
            onClick={() => setSelectedFavourite(recipe)}
            className="cursor-pointer border p-2 rounded-lg hover:shadow-lg transition"
          >
            <p>{recipe.strMeal}</p>
          </li>
        ))}
      </ul>

      {selectedFavourite && (
  <div className="mt-6 p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-xl max-w-3xl mx-auto">
    <h3 className="text-3xl font-semibold text-white mb-4 text-center">{selectedFavourite.strMeal}</h3>
    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
      <img
        src={selectedFavourite.strMealThumb}
        alt={selectedFavourite.strMeal}
        className="rounded-lg shadow-lg max-w-xs"
      />
      <div className="text-white text-lg flex-1">
        <p className="mb-2"><strong className="text-xl">Category:</strong> {selectedFavourite.strCategory}</p>
        <p className="mb-4"><strong className="text-xl">Area:</strong> {selectedFavourite.strArea}</p>
        <p className="mt-2"><strong className="text-xl">Instructions:</strong></p>
        <p className="mt-2">{selectedFavourite.strInstructions}</p>
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default App;
