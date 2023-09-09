//setup express
import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is listening on PORT 3000");
});

// middleware to serve static public, and use json to send data
app.use(express.static("public"));
app.use(express.json());

// add enviroment variables
import dotenv from "dotenv";
dotenv.config();

// setup Open AI

import OpenAI from "openai";

const openai = new OpenAI({
  organization: "org-FwPHF7vzYXfQyBsl1ll4tkwX",
  apiKey: process.env.OPENAI_API_KEY
});

// handle POST request
app.post("/completion", async (req, res) => {
  const response = await openai.completions.create({
    model: "text-davinci-003",
    prompt: req.body.message,
    max_tokens: 2028,
  });
  console.log(response);
});
