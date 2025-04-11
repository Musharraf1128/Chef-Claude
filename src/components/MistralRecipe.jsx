import ReactMarkdown from 'react-markdown'

export default function MistralRecipe(props) {
    return (
        <section className='suggested-recipe-container' aria-live='polite'>
            <h2>Chef Mistral Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}