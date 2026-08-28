import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const photographyTags = [
  { id: 'p1', label: '柔和漫射光', prompt: 'soft diffused studio lighting', category: 'photography' },
  { id: 'p2', label: '電影級輪廓光', prompt: 'cinematic rim lighting, dramatic edge highlights', category: 'photography' },
  { id: 'p3', label: '倫勃朗經典光影', prompt: 'Rembrandt lighting, classic portrait chiaroscuro', category: 'photography' },
  { id: 'p4', label: '黃金時刻暖陽', prompt: 'golden hour lighting, warm ambient glow', category: 'photography' },
  { id: 'p5', label: '藍調時刻冷冽光', prompt: 'blue hour atmosphere, cool twilight tones', category: 'photography' },
  { id: 'p6', label: '移軸攝影微縮感', prompt: 'tilt-shift photography, miniature model effect, selective focus', category: 'photography' },
  { id: 'p7', label: '長曝光動態光軌', prompt: 'long exposure, motion blur, light trails', category: 'photography' },
  { id: 'p8', label: '底片雙重曝光', prompt: 'double exposure photography, surreal overlay', category: 'photography' },
  { id: 'p9', label: '淺景深與夢幻散景', prompt: 'shallow depth of field, creamy creamy bokeh, f/1.4 aperture', category: 'photography' },
  { id: 'p10', label: '85mm 人像黃金焦段', prompt: 'shot on 85mm lens, optical perfection, natural compression', category: 'photography' },
  { id: 'p11', label: '廣角微距細節', prompt: 'wide-angle macro photography, extreme close-up details', category: 'photography' },
  { id: 'p12', label: '35mm 復古膠卷顆粒', prompt: '35mm vintage film photography, subtle grain, Kodak Portra 400 tones', category: 'photography' },
  { id: 'p13', label: '賽博龐克雙色霓虹', prompt: 'cyberpunk dual neon lighting, cyan and magenta contrast', category: 'photography' },
  { id: 'p14', label: '電影級體積光/耶穌光', prompt: 'cinematic volumetric lighting, God rays, Tyndall effect', category: 'photography' },
  { id: 'p15', label: '低調暗色系光影', prompt: 'low-key lighting, deep shadows, moody atmosphere', category: 'photography' },
  { id: 'p16', label: '高調透亮清新光', prompt: 'high-key lighting, bright ethereal airy feel', category: 'photography' },
  { id: 'p17', label: '強烈逆光剪影', prompt: 'backlit silhouette, strong high contrast', category: 'photography' },
  { id: 'p18', label: '環形閃光燈前衛感', prompt: 'ring light reflection, high fashion gloss, editorial flash', category: 'photography' },
  { id: 'cm1', label: '極簡白底產品攝影', prompt: 'clean product photography, isolated on pure solid white background, studio softbox illumination', category: 'commercialDesign' },
  { id: 'cm16', label: '幾何光影百葉窗剪影投影', prompt: 'clean aesthetic product placement with subtle window venetian blind shadow projection (gobo)', category: 'commercialDesign' }
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoint: Suggest keywords based on Subject Prompt
  app.post("/api/suggest-keywords", async (req, res) => {
    try {
      const { subject } = req.body;
      const subjectText = (subject || "").trim();

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback recommendations if API key is not configured
        const defaultSuggestions = photographyTags.slice(0, 3).map((t, idx) => ({
          id: t.id,
          label: t.label,
          prompt: t.prompt,
          reason: idx === 0 
            ? '為商業主體營造柔和無生硬陰影的高級棚拍質感'
            : idx === 1 
            ? '強化被攝物邊緣輪廓，增強視覺立體張力'
            : '虛化背景雜訊，使主視覺焦點更加鮮明突出'
        }));
        return res.json({ suggestions: defaultSuggestions });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const prompt = `You are an expert photography lighting director and Midjourney prompt specialist.
Analyze the user's Subject Prompt: "${subjectText || 'aesthetic product or scene'}".
Select exactly 3 MOST RELEVANT photography or lighting tags from the database below to dramatically improve the realism, optical beauty, and visual mood of this subject:

Available Tags Database:
${JSON.stringify(photographyTags, null, 2)}

Requirements:
- Pick the 3 best fitting tags based on the subject matter (e.g. portrait, glass, metal, landscape, product, interior, mood).
- Write a short, persuasive explanation (in Traditional Chinese 繁體中文, ~15-25 words) for each tag explaining how it improves the image.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              suggestions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING, description: "The exact matching id from available tags (e.g. p1, p2, p9, etc.)" },
                    label: { type: Type.STRING, description: "The label of the tag" },
                    prompt: { type: Type.STRING, description: "The prompt of the tag" },
                    reason: { type: Type.STRING, description: "Concise reason in Traditional Chinese why this improves the subject's visual quality" }
                  },
                  required: ["id", "label", "prompt", "reason"]
                }
              }
            },
            required: ["suggestions"]
          }
        }
      });

      const responseText = response.text || "{}";
      const parsed = JSON.parse(responseText);

      const suggestions = (parsed.suggestions || []).slice(0, 3).map((s: any) => {
        const found = photographyTags.find(t => t.id === s.id) || photographyTags.find(t => t.label === s.label);
        return {
          id: found ? found.id : s.id,
          label: found ? found.label : s.label,
          prompt: found ? found.prompt : s.prompt,
          reason: s.reason || "增強畫面光影與質感層次"
        };
      });

      return res.json({ suggestions });
    } catch (error: any) {
      console.error("Error in /api/suggest-keywords:", error);
      const fallback = photographyTags.slice(0, 3).map((t, idx) => ({
        id: t.id,
        label: t.label,
        prompt: t.prompt,
        reason: idx === 0 
          ? '為商業主體營造柔和無生硬陰影的高級棚拍質感'
          : idx === 1 
          ? '強化被攝物邊緣輪廓，增強視覺立體張力'
          : '虛化背景雜訊，使主視覺焦點更加鮮明突出'
      }));
      return res.json({ suggestions: fallback });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
