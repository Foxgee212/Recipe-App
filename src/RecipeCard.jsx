export default function RecipeCard({ recipe }) {
  return (
    <div className="border rounded shadow hover:shadow-lg transition">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover rounded-t"
      />
      <div className="p-4">
        <h2 className="font-bold text-lg">{recipe.strMeal}</h2>
        <p className="text-sm text-gray-600">
          {recipe.strArea} | {recipe.strCategory}
        </p>
        <a
          href={recipe.strSource || recipe.strYoutube}
          target="_blank"
          rel="noreferrer"
          className="text-green-500 mt-2 block"
        >
          View Recipe →
        </a>
      </div>
    </div>
  );
}
