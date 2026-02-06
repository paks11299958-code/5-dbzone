
import { GoogleGenAI } from "@google/genai";

export async function getConsultantResponse(prompt: string, history: {role: string, content: string}[]) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          role: "user",
          parts: [{ text: `당신은 DBZone의 오라클 전문가 컨설턴트(Oracle Certified Master)입니다.
            IT 매니저와 DBA들을 대상으로 전문적이고 권위 있는 어조로 한국어로 응답하세요.
            문맥: DBZone은 RAC, Data Guard, 성능 튜닝, 클라우드 마이그레이션 전문 기업입니다.
            답변은 기술적으로 정확하면서도 간결하게 작성하세요.` 
          }]
        },
        ...history.map(h => ({
          role: h.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: h.content }]
        })),
        {
          role: "user",
          parts: [{ text: prompt }]
        }
      ],
      config: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 800,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Consultant Error:", error);
    return "죄송합니다. 서비스 연결에 문제가 발생했습니다. 1-800-DB-ZONE-0으로 연락 주시기 바랍니다.";
  }
}
