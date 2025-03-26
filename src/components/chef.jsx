
import ReactMarkdown from 'react-markdown'

export default function Chef(props) {
    return(
        <section className='suggested-recipe-container' aria-live='polite'>
            <h2>Your Chef Recommends:</h2>
            <ReactMarkdown>{props.genRecipe}</ReactMarkdown>
        </section>
    )
}