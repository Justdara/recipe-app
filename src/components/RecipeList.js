import { useTheme } from "../hooks/useTheme";
import "./RecipeList.css";
import { Link } from "react-router-dom";
import Trashcan from "../assets/trashcan.svg";
import { projFirestore } from "../firebase/config";

export default function RecipeList({ recipes }) {
  const { theme } = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No recipes...</div>;
  }

  const handleClick = (id) => {
    projFirestore.collection("recipes").doc(id).delete();
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${theme}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>cook this</Link>
          <img
            className="delete"
            src={Trashcan}
            alt="delete button"
            onClick={() => handleClick(recipe.id)}
          />
        </div>
      ))}
    </div>
  );
}
