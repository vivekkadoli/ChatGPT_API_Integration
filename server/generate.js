import openaiClient from './api.js';

const generate = async (queryDescription) => {
  try {
    const response = await openaiClient.completions.create({
      model: 'gpt-3.5-turbo',
      prompt: `Convert the following natural language question into a SQL query:\n\n${queryDescription}.`,
      max_tokens: 1000,
      temperature: 0.7,
    });
    return response.choices[0].text;
  } catch (error) {
    console.error('Error generating response:', error);
    throw error;
  }
}

export default generate;