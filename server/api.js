// import { Configuration, OpenAIApi } from "openai";
// import dotenv  from "dotenv";
// dotenv.config();

// const openaiApiKey = process.env.OPENAI_API_KEY;

// if (!openaiApiKey) {
//   throw new Error("OPENAI_API_KEY is not defined in .env file");
// //process.exit(1);
// }

// const configuration = new Configuration({
//   apiKey: openaiApiKey,
// });

// const openai = new OpenAIApi(configuration);

// export default openai;

import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  throw new Error("OPENAI_API_KEY is not defined in .env file");
}

const openai = new OpenAI({
  apiKey: openaiApiKey,
});

export default openai;