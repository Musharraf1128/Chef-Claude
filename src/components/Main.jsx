import { useState, useEffect, useRef } from 'react'
import MistralRecipe from './MistralRecipe'
import IngredientList from './IngredientList'
import { getRecipeFromMistral } from '../ai'

export default function App() {

    const [ingredients, setIngredients] = useState(["all kind of spices", "tomato", "onoin", "eggs", "olive oil"])
    const [recipe, setRecipe] = useState("")
    const recipeSection = useRef(null)

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown) 
    }

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

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
                    ref={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <MistralRecipe recipe={recipe} />}

        </main>
    )
}