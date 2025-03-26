import {useState } from "react";


//components
import IngredientList from "./ingredientList";
import Chef from "./chef";
import getRecipefromMistral from '../aichef'


export default function Main () {

    const [ingredientList, setIngredientList] = useState([]);
    const [recipeShown, setRecipeShown] = useState('');


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
        const airecipe = await getRecipefromMistral(ingredientList);
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

            {ingredientList.length > 0 ? <IngredientList ingredientList={ingredientList} recipeButton={getRecipe}/>: null}
            

            { recipeShown && <Chef genRecipe={recipeShown}/>}
            
        </main>
    )
}

