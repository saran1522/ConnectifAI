"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!apiKey) throw new Error("Gemini API key is not valid");
const genAI = new GoogleGenerativeAI(apiKey);
const conversationHistory = [];

export async function runConversation(query: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  conversationHistory.push({ role: "user", parts: [{ text: query }] });
  const result = await model.generateContent({
    contents: conversationHistory,
  });

  const response = result.response;
  const text = response.text();
  conversationHistory.push({
    role: "model",
    parts: [{ text: response.text() }],
  });
  return conversationHistory;
}
