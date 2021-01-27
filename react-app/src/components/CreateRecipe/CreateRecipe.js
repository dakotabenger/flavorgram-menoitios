import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addRecipe } from '../../store/post';
import './createrecipe.css'

function CreateRecipe() {
    const [dish_name, setDish_Name] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');

    const dispatch = useDispatch();



    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
        dish_name,
        ingredients,
        instructions,
        photoUrl
        };

        let createdRecipe = await dispatch(addRecipe(payload))

        if (createdRecipe) return <Redirect to="/" />;
    };

    const handleCancel = () => {
        return <Redirect to="/" />;
    };


    return(
        <>
        <h1 className="pagename">Create a New Recipe</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <div className="form_container">
                        <h2>Title</h2>
                        <input type="text" className="title"/>
                        <h2>Ingredients</h2>
                        <textarea type="text" className="ingredients"/>
                        <h2>Instructions</h2>
                        <textarea type="text" className="instructions"/>
                        <h2>Photo Url</h2>
                        <input type="text" className="photourl"/>
                        <button type="submit" className="submit_button">Create Recipe</button>
                        <button type="button" className="cancel_button" onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default CreateRecipe
