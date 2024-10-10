"use server";

import { Content, GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) throw new Error("Gemini API key is not valid");
const genAI = new GoogleGenerativeAI(apiKey);
let conversationHistory: Content[] = [];

export async function runConversation(query: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    conversationHistory.push({ role: "user", parts: [{ text: query }] });
    const result = await model.generateContent({
      contents: conversationHistory,
    });

    const response = result.response;
    conversationHistory.push({
      role: "model",
      parts: [{ text: response.text() }],
    });
    return conversationHistory;
  } catch (error) {
    console.error(error);
  }
}
