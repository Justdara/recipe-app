import { useTheme } from "../hooks/useTheme";
import "./RecipeList.css";
import { Link } from "react-router-dom";

export default function RecipeList({ recipes }) {
  const { theme } = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No recipes...</div>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${theme}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>cook this</Link>
        </div>
      ))}
    </div>
  );
}
