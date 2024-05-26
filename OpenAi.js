const openai = require('openai');
const {Configuration, OpenAIApi} = openai;
require('dotenv').config()

const config = new Configuration({
    apiKey: process.env.Open_Ai_Secret
})
const openAiApi = new OpenAIApi(config)

async function useApi(storyPrompt){
 const result =  await openAiApi.createCompletion({
    model:'text-davinci-003',
    prompt: storyPrompt,
    max_tokens: 2500,
    temperature: 1.092,
 })
 return result.data.choices[0]
   // console.log(result.data.choices[0])
}


module.exports = useApi
// const response = openAiApi.listEngines().then(res => res ) 
