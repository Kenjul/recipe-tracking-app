import React, { useState } from "react";

// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
// TODO: Add the required input and textarea form elements.
// TODO: Add the required submit and change handlers

function RecipeCreate({ createRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData); // creates the recipe
    setFormData({ ...initialFormState }); // resets all the inputs/textareas
  };



  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={formData.content}
                required
              />
            </td>
            <td>
              <input
                placeholder="Cuisine"
                name="cuisine"
                onChange={handleChange}
                value={formData.content}
                required
              />
            </td>
            <td>
              <input
                placeholder="URL"
                name="photo"
                onChange={handleChange}
                value={formData.content}
                required
              />
            </td>
            <td>
              <textarea
                placeholder="Ingredients"
                name="ingredients"
                onChange={handleChange}
                value={formData.content}
                required
              />
            </td>
            <td>
              <textarea
                placeholder="Preparation"
                name="preparation"
                onChange={handleChange}
                value={formData.content}
                required
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
    );
}

export default RecipeCreate;
