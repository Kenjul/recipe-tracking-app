import React from "react";

function Recipe({ recipe, deleteRecipe }) {
  if (recipe) {
    const { name, cuisine, photo, ingredients, preparation } = recipe;

    return (
      <>
        <td>{name}</td>
        <td>{cuisine}</td>
        <td>
          <img src={photo} />
        </td>
        <td className="content_td">
          <p>{ingredients}</p>
        </td>
        <td className="content_td">
          <p>{preparation}</p>
        </td>
        <td>
          <button name="delete" onClick={() => deleteRecipe(recipe)}>
            Delete
          </button>
        </td>
      </>
    );
  }
}

export default Recipe;
