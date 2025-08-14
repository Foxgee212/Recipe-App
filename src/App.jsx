import { useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

export default function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async () => {
    if (!search) return;
    setLoading(true);
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      setRecipes(res.data.meals || []);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">🍲 Recipe Finder</h1>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 flex-1 rounded"
        />
        <button type="submit" className="bg-green-500 text-white px-4 rounded">
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p className="text-center">Loading recipes...</p>}

      {/* Recipes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>

      {!loading && recipes.length === 0 && (
        <p className="text-center">No recipes found. Try another search!</p>
      )}
    </div>
  );
}
