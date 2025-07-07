
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    // This is a fallback for development; in production, the key should be set.
    console.warn("API_KEY environment variable not set. Using a placeholder. App will not function correctly.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY || "fallback_key_for_initialization_only" });

const systemInstruction = `
You are a friendly and helpful representative for 'Light on Campus', a student success organization.
Your goal is to provide a warm, encouraging, and helpful initial response to user inquiries submitted through the website's contact form.
Acknowledge their message, thank them for reaching out, and assure them that a team member will review their message and get back to them personally as soon as possible.
Keep the tone positive, supportive, and aligned with the organization's mission of helping students thrive. Do not try to answer their question directly.
Your response should be concise, ideally 2-3 sentences. Sign off warmly, for example with "Warmly," or "Best,".
`;

export const generateContactReply = async (userMessage: string): Promise<string> => {
    if (!API_KEY) {
        return Promise.resolve("Thank you for your message! We've received it and a member of our team will get back to you shortly. (This is a mock response as the API key is not configured).");
    }
    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-04-17",
            contents: [{
                role: "user",
                parts: [{ text: `A user sent the following message through the contact form: "${userMessage}"` }]
            }],
            config: {
                systemInstruction: systemInstruction,
            }
        });

        return response.text;
    } catch (error) {
        console.error("Gemini API call failed:", error);
        throw new Error("Failed to generate a response from the AI. Please check your connection or try again later.");
    }
};
