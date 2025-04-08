import { useState } from 'react'

export default function App() {

    const [ingredients, setIngredients] = useState([])

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
        <main>
            <form action={addIngredient} className='add-ingredient-form'>
                <input 
                    type='text'
                    placeholder='e.g. oregano'
                    aria-label=''
                    name='ingredient'                    
                />
                <button>Add Ingredients</button>
            </form>
        
        {ingredientsListItems.length > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                {ingredientsListItems.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
            </section>}
        </main>
    )
}