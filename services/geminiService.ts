
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSommelierAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `Bạn là một chuyên gia về rượu truyền thống Việt Nam, đại diện cho thương hiệu "Rượu Cô Đào".
        Thương hiệu có 3 dòng sản phẩm chính:
        1. 30 độ (Thanh Tao): Nhẹ nhàng, êm dịu, hợp cho tiệc nhẹ.
        2. 40 độ (Đậm Đà): Dùng cho nấu ăn.
        3. 50 độ (Hào Kiệt): Mạnh mẽ, rực cháy, dùng để ngâm dược liệu.
        
        Nhiệm vụ của bạn:
        - Tư vấn cho khách hàng chọn loại rượu phù hợp dựa trên sở thích, giới tính, mục đích sử dụng (tiệc tùng, quà biếu, uống hằng ngày).
        - Trả lời bằng giọng văn lịch sự, tinh tế, am hiểu văn hóa ẩm thực Việt Nam.
        - Giới thiệu khéo léo về quy trình nấu rượu thủ công, men thuốc bắc và gạo nếp cái hoa vàng của Rượu Cô Đào.
        - Khuyến cáo uống rượu có trách nhiệm.`,
        temperature: 0.8,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Xin lỗi, tôi đang bận thưởng rượu một chút. Bạn vui lòng thử lại sau nhé!";
  }
};
