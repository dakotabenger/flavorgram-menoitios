import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect,useHistory } from "react-router-dom";
import { addRecipe } from "../../store/post";
import * as sessionActions from "../../store/post";
import "./createrecipe.css";
import ImageGen from "../ImagePost/ImageGen";

function CreateRecipe() {
  const [dish_name, setDish_Name] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user.id)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId,
      dish_name,
      ingredients,
      instructions,
      photoUrl,
    };
    console.log("PAYLOAD", payload)
    const createdRecipe = dispatch(addRecipe(payload));

    if (createdRecipe) history.push('/');
  };

  const handleCancel = () => {
    history.push("/")
  };

  return (
    <>
      <h1 className="pagename">Create a New Recipe</h1>
      <section>
        <form onSubmit={handleSubmit}>
          <div className="form_container">
            <ImageGen />
            <h2>Title</h2>
            <input onChange={(e) => {setDish_Name(e.target.value)}}type="text" className="title" />
            <h2>Ingredients</h2>
            <textarea onChange={(e) => {setIngredients(e.target.value)}} type="text" className="ingredients" />
            <h2>Instructions</h2>
            <textarea onChange={(e) => {setInstructions(e.target.value)}} type="text" className="instructions" />
            <h2>Photo Url</h2>
            <input onChange={(e) => {setPhotoUrl(e.target.value)}} type="text" className="photourl" />
            <button type="submit" className="submit_button">
              Create Recipe
            </button>
            <button
              type="button"
              className="cancel_button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default CreateRecipe;
