import { useState } from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientList from './IngredientList'

export default function App() {

    const [ingredients, setIngredients] = useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )
    const [recipeShown, setRecipeShown] = useState(false)
    
    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

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
        
           {ingredients.length > 0 && 
                <IngredientList 
                    ingredients={ingredients}
                    toggleRecipeShown={toggleRecipeShown}
                />
            }

            {recipeShown && <ClaudeRecipe />}

        </main>
    )
}