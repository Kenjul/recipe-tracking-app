import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

// TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
// TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

function App() {
  const [recipes, setRecipes] = useState(RecipeData); //RecipeData = [{object},{object}]
  const createRecipe = (recipeObj) => setRecipes([...recipes, recipeObj]);
  const deleteRecipe = (food) => {
    setRecipes(recipes.filter((recipe) => recipe !== food)); //filters out the food that matches the recipe and keeps the other recipes still in tact
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
