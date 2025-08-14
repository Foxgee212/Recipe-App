import RecipeCard from "./RecipeCard";

export default function Favorites(){
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return(
        <div className="max-w-4xl mx-auto  p-4">
            <h1 className=" text-2xl font-bold mb-4 text-center">⭐ Favorites Recipes</h1>
            {favorites.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {favorites.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            ) : (
                <p className="text-center">No favorite recipes found.</p>
            )}

        </div>
    )
};