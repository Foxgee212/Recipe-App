export default function RecipeCard({ recipe }) {
const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = favorites.some((fav) => fav.idMeal === recipe.idMeal);

    if (!exists) {
      favorites.push(recipe);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert(`${recipe.strMeal} added to favorites!`);
    } else {
      alert(`${recipe.strMeal} is already in favorites.`);
    }
  };

  return (
    <div className="border rounded-lg shadow-md p-4">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full rounded-lg" />
      <h2 className="text-lg font-bold mt-2">{recipe.strMeal}</h2>
      <p className="text-sm text-gray-600">{recipe.strCategory}</p>
      <a
        href={recipe.strSource}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline block mt-2"
      >
        View Recipe
      </a>
      <button
        onClick={addToFavorites}
        className="bg-yellow-400 text-white px-3 py-1 mt-3 rounded hover:bg-yellow-500"
      >
        ⭐ Add to Favorites
      </button>
    </div>
  );
}
;
