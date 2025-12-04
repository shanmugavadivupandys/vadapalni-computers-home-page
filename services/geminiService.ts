import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client only if the key is available, but handle checking in the function
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const sendMessageToGemini = async (history: string[], newMessage: string): Promise<string> => {
  if (!ai) {
    return "I'm sorry, I cannot connect to the server right now. (Missing API Key)";
  }

  try {
    const model = ai.models;
    
    // Construct a prompt that includes context about the store
    const systemPrompt = `
      You are a helpful customer support assistant for "Vadapalani Computers".
      
      Store Details:
      - Name: Vadapalani Computers
      - Tagline: The best computer store in India.
      - Location: Vadapalani, Chennai, Tamil Nadu.
      - Services: Data recovery, Computer repair, CCTV service, Network solutions.
      - Products: Dell/Samsung Desktops & Laptops, Servers, Kaspersky Antivirus, HP Printers, CCTV Cameras.
      - Contact: +91 98848 89977, contact@vadapalanicomputers.com.
      
      Your goal is to answer customer queries politely and professionally based on this information. 
      Keep answers concise.
    `;

    const fullPrompt = `${systemPrompt}\n\nChat History:\n${history.join('\n')}\n\nUser: ${newMessage}\nAssistant:`;

    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
    });

    return response.text || "I'm not sure how to answer that.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Sorry, I'm having trouble processing your request at the moment.";
  }
};