
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMedicalAdvice = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "شما مشاور ارشد کلینیک زیبایی ویولت هستید. تخصص شما در زمینه پوست، مو، لیزر و فیلر است. پاسخ‌های شما باید با لحنی محترمانه، لوکس و دلسوزانه باشد. به کاربران در مورد روتین‌های پوستی، مراقبت‌های قبل و بعد از تزریق ژل و بوتاکس، و خدمات لیزر مشاوره دهید. همیشه تاکید کنید که مشاوره نهایی حضوری الزامی است.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching Gemini response:", error);
    return "متأسفانه در حال حاضر مشکلی در برقراری ارتباط با مشاور هوشمند وجود دارد. لطفاً دقایقی دیگر تلاش کنید.";
  }
};
