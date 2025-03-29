import {useEffect, useRef, useState } from "react";


//components
import IngredientList from "./ingredientList";
import Chef from "./chef";
import getRecipefromGemini from '../aichef'


export default function Main () {

    const [ingredientList, setIngredientList] = useState([]);
    const [recipeShown, setRecipeShown] = useState('');
    const recipeAvaiable = useRef(null);

    //scrolling recipe when its available
    useEffect(() => {
        if(recipeShown.length !== 0 && recipeAvaiable !== null) {
            recipeAvaiable.current.scrollIntoView({behavior : "smooth"})
        }
    },[recipeShown]);


    //add ingredient action
    function AddIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        if(newIngredient) {

        setIngredientList(prevItem => ([
            ...prevItem,
            newIngredient,
        ]));
     }    
    }

    //getting recipe 
    async function getRecipe() {
        const airecipe = await getRecipefromGemini(ingredientList);
        console.log(airecipe);
        setRecipeShown(airecipe)
    }


    return (
        <main>
            <form action={AddIngredient}  className="add-ingredient-form">
                <input 
                    type="text"
                    aria-label="Add ingredient"
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button>+ Add ingredients</button>
            </form>

            {ingredientList.length > 0 ? <IngredientList ingredientList={ingredientList} recipeButton={getRecipe} ref={recipeAvaiable}/>: null}
            

            { recipeShown && <Chef genRecipe={recipeShown}/>}
            
        </main>
    )
}

