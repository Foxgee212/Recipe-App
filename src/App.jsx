import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import Favorites from "./Favorites";

export default function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      setRecipes(res.data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes(search);
  };

  useEffect(() => {
    fetchRecipes("chicken");
  }, []);

  return (
    <div>
      {/* Navigation */}
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <Link to="/" className="font-bold">🍽 Recipe Finder</Link>
        <Link to="/favorites" className="hover:underline">⭐ Favorites</Link>
      </nav>

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="max-w-4xl mx-auto p-4">
              <form onSubmit={handleSearch} className="flex gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Search for recipes..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 p-2 border rounded"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Search
                </button>
              </form>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {recipes.length > 0 ? (
                  recipes.map((recipe) => (
                    <RecipeCard key={recipe.idMeal} recipe={recipe} />
                  ))
                ) : (
                  <p className="col-span-full text-center text-gray-500">
                    No recipes found.
                  </p>
                )}
              </div>
            </div>
          }
        />

        {/* Favorites Page */}
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}
