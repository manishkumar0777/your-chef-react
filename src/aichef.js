
import { HfInference } from '@huggingface/inference'
import dotenv from 'dotenv'
dotenv.config();

const SYSTEM_PROMPT = "You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page"

const API_KEY = process.env.API_KEY

const hf = new HfInference(API_KEY);

export default async function getRecipefromMistral(ingredientsArr) {
    const ingredientString = ingredientsArr.join(", ");

    try {
        const response = await hf.chatCompletion({
            model : "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages : [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content;
    } catch (error) {
        console.error(error);
    }
    
}


