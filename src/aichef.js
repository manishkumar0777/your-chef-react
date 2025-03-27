
// import { HfInference } from '@huggingface/inference'

import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = "You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page"

const API_KEY = import.meta.env.VITE_API_KEY;

const ai = new GoogleGenerativeAI(API_KEY);

export default async function getRecipefromGemini(ingredientsArr) {
    const ingredientString = ingredientsArr.join(", ");

    try {

        const model  = ai.getGenerativeModel({model : "gemini-2.0-flash"});
        const response = await model.generateContent([
            SYSTEM_PROMPT,
            `I have ${ingredientString}. Please give me a recipe you'd recommend I make!`
        ]
           )
        return response.response.text();
    } catch (error) {
        console.error(error);
        return "failed To Generate the Recipe"
    }
    
}


