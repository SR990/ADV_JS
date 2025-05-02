import React, { useEffect, useState } from "react";

function Favorites({ onSelect }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const handleClick = (recipe) => {
    onSelect(recipe);
  };

  const handleRemove = (id) => {
    const updated = favorites.filter((item) => item.idMeal !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-yellow-800">⭐ Favorite Recipes</h2>

      {favorites.length === 0 && <p className="text-gray-600">No favorites yet.</p>}

      <ul className="space-y-4">
        {favorites.map((item) => (
          <li
            key={item.idMeal}
            className="flex items-center justify-between bg-white p-2 rounded shadow hover:bg-yellow-50 transition cursor-pointer"
          >
            <div onClick={() => handleClick(item)} className="flex items-center space-x-3">
              <img src={item.strMealThumb} alt={item.strMeal} className="w-12 h-12 rounded" />
              <span className="text-gray-800 font-medium">{item.strMeal}</span>
            </div>
            <button
              onClick={() => handleRemove(item.idMeal)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
