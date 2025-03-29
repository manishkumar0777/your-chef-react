

export default function IngredientList(props) {

    const newingredientList = props.ingredientList.map((item) => {
        return <li>{item}</li>
    });
    return (

        <section className="ingredient-and-button-contianer">
            <h1>Ingredients on hand:</h1>
            <ul className="ingredients-list" aria-live="polite">
                {newingredientList}
            </ul>
            {props.ingredientList.length > 2 && <div className="get-recipe-container">
                <div ref={props.ref}>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients</p>
                </div>
                <button onClick={props.recipeButton}>Get a recipe</button>
            </div>}
        </section>

    )
}