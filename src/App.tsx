import React, { useState, useMemo } from 'react';
import { 
  Camera, 
  Compass, 
  Palette, 
  Shapes, 
  Brush, 
  ShieldAlert, 
  Copy, 
  Check, 
  Trash2, 
  Search, 
  Sparkles,
  Layers,
  RotateCcw,
  Info,
  Pipette,
  Frame,
  Plus,
  X,
  Package,
  Box,
  LayoutTemplate,
  Cpu,
  Globe,
  HelpCircle,
  ExternalLink,
  Table,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Zap,
  Wand2,
  Loader2
} from 'lucide-react';

/**
 * 完整美學提示詞資料庫 (包含設計師必備的產品/平面/商業 Mockup 乾淨素材分類)
 */
export const promptDatabase = {
  commercialDesign: {
    id: 'commercialDesign',
    name: '產品設計與平面商業 Mockup',
    englishName: 'Product, Graphic & Mockup Design',
    icon: 'Package',
    description: '專為後製合成打造：無文字留白、乾淨包裝、展示台與商業攝影',
    items: [
      { id: 'cm1', label: '極簡白底產品攝影 (Studio Isolate)', prompt: 'clean product photography, isolated on pure solid white background, studio softbox illumination, crisp shadow underneath, ready for graphic mockup composite' },
      { id: 'cm2', label: '極致留白包裝盒 Mockup', prompt: 'blank minimalist packaging box mockup, blank surface with no labels, clean matte paper texture, studio soft shadows, negative space for design placeholder' },
      { id: 'cm3', label: '化妝品磨砂玻璃瓶瓶器', prompt: 'luxury frosted glass cosmetic bottle mockup, blank clean container, subtle subsurface scattering, water droplets, beauty product commercial visual' },
      { id: 'cm4', label: '幾何石膏基座與展示台 (Podium)', prompt: 'geometric plaster podium pedestal, clean aesthetic display stand, architectural casting, soft morning ambient light, blank mockup space' },
      { id: 'cm5', label: '平面海報展示場景 (Poster Mockup)', prompt: 'blank A4 vertical poster mockup hanging on minimal concrete wall, realistic paper cast shadow, clean interior scene, no graphics on poster' },
      { id: 'cm6', label: '極簡名片/文具品牌識別 (Branding)', prompt: 'blank luxury corporate stationery branding mockup, business cards, letterhead, minimal clean layout, embossed paper texture' },
      { id: 'cm7', label: '頂級霧面飲料易開罐/咖啡杯', prompt: 'blank aluminum can and matte coffee cup mockup, no branding, condensation drops, high commercial advertising quality' },
      { id: 'cm8', label: '純白有機棉 T-Shirt 鋪平平拍 (Flat Lay)', prompt: 'blank white heavyweight cotton t-shirt mockup, neat flat lay arrangement, natural fabric folds, neutral studio backdrop' },
      { id: 'cm9', label: '3C 設備螢幕框 (UI Device Mockup)', prompt: 'sleek borderless tablet and smartphone floating in clean space, blank glowing screen mockup, minimal clay render aesthetic' },
      { id: 'cm10', label: '懸浮漂浮動態產品攝影 (Levitating)', prompt: 'levitating floating product composition, dynamic gravity-defying balance, clean isolated environment, sharp studio highlights' },
      { id: 'cm11', label: '大理石與幾何水波紋展示台', prompt: 'luxury polished marble plinth with clean ripple water reflection, crystal clear surface, high-end perfume commercial photography' },
      { id: 'cm12', label: '平視極簡商品目錄型錄 (Lookbook)', prompt: 'minimalist fashion brand lookbook aesthetic, neutral studio set, clean lines, editorial product presentation' },
      { id: 'cm13', label: '粗礪紙袋與牛皮紙盒工藝包裝', prompt: 'blank kraft paper shopping bag and cardboard packaging box mockup, tactile fiber texture, eco-friendly branding mockup' },
      { id: 'cm14', label: '軟管保養品/乳液乾淨瓶身', prompt: 'blank matte cosmetic squeeze tube mockup, pure minimal background, soft gradient rim lighting, high commercial finish' },
      { id: 'cm15', label: 'C4D/Clay 黏土純白原型 (Clay Render)', prompt: '3D clay render of product prototype, pure matte white shader, ambient occlusion, smooth topology, Industrial Design rendering' },
      { id: 'cm16', label: '幾何光影百葉窗剪影投影 (Gobo)', prompt: 'clean aesthetic product placement with subtle window venetian blind shadow projection (gobo), artistic minimal branding' }
    ]
  },
  photography: {
    id: 'photography',
    name: '攝影與鏡頭光影',
    englishName: 'Photography & Lighting',
    icon: 'Camera',
    description: '鏡頭類型、景深、自然與人造光影效果',
    items: [
      { id: 'p1', label: '柔和漫射光', prompt: 'soft diffused studio lighting' },
      { id: 'p2', label: '電影級輪廓光', prompt: 'cinematic rim lighting, dramatic edge highlights' },
      { id: 'p3', label: '倫勃朗經典光影', prompt: 'Rembrandt lighting, classic portrait chiaroscuro' },
      { id: 'p4', label: '黃金時刻暖陽', prompt: 'golden hour lighting, warm ambient glow' },
      { id: 'p5', label: '藍調時刻冷冽光', prompt: 'blue hour atmosphere, cool twilight tones' },
      { id: 'p6', label: '移軸攝影微縮感', prompt: 'tilt-shift photography, miniature model effect, selective focus' },
      { id: 'p7', label: '長曝光動態光軌', prompt: 'long exposure, motion blur, light trails' },
      { id: 'p8', label: '底片雙重曝光', prompt: 'double exposure photography, surreal overlay' },
      { id: 'p9', label: '淺景深與夢幻散景', prompt: 'shallow depth of field, creamy creamy bokeh, f/1.4 aperture' },
      { id: 'p10', label: '85mm 人像黃金焦段', prompt: 'shot on 85mm lens, optical perfection, natural compression' },
      { id: 'p11', label: '廣角微距細節', prompt: 'wide-angle macro photography, extreme close-up details' },
      { id: 'p12', label: '35mm 復古膠卷顆粒', prompt: '35mm vintage film photography, subtle grain, Kodak Portra 400 tones' },
      { id: 'p13', label: '賽博龐克雙色霓虹', prompt: 'cyberpunk dual neon lighting, cyan and magenta contrast' },
      { id: 'p14', label: '電影級體積光/耶穌光', prompt: 'cinematic volumetric lighting, God rays, Tyndall effect' },
      { id: 'p15', label: '低調暗色系光影', prompt: 'low-key lighting, deep shadows, moody atmosphere' },
      { id: 'p16', label: '高調透亮清新光', prompt: 'high-key lighting, bright ethereal airy feel' },
      { id: 'p17', label: '強烈逆光剪影', prompt: 'backlit silhouette, strong high contrast' },
      { id: 'p18', label: '環形閃光燈前衛感', prompt: 'ring light reflection, high fashion gloss, editorial flash' },
    ]
  },
  composition: {
    id: 'composition',
    name: '視角與構圖',
    englishName: 'Angles & Composition',
    icon: 'Compass',
    description: '視覺導引、幾何張力與空間比例',
    items: [
      { id: 'c1', label: '經典三分法', prompt: 'rule of thirds composition, balanced focal point' },
      { id: 'c2', label: '絕對對稱美學', prompt: 'perfect symmetrical composition, geometric equilibrium' },
      { id: 'c3', label: '鳥瞰空拍視角', prompt: 'aerial bird-eye view, drone photography, top-down perspective' },
      { id: 'c4', label: '仰視低角度張力', prompt: 'low angle worm-eye view, imposing perspective, heroic framing' },
      { id: 'c5', label: '荷蘭角傾斜構圖', prompt: 'Dutch angle shot, dynamic tilted perspective, tension' },
      { id: 'c6', label: '透視引導線', prompt: 'strong leading lines, vanishing point perspective' },
      { id: 'c7', label: '負空間/留白美學', prompt: 'minimalist negative space, elegant breathing room' },
      { id: 'c8', label: '畫中畫自然框景', prompt: 'frame within a frame composition, layered foreground' },
      { id: 'c9', label: '等距軸測視角', prompt: 'isometric view, orthographic projection, 3D diorama angle' },
      { id: 'c10', label: '黃金螺旋構圖', prompt: 'golden ratio spiral composition, harmonious proportions' },
      { id: 'c11', label: '極致特寫', prompt: 'extreme close-up shot, intense focal point' },
      { id: 'c12', label: '動態對角線構圖', prompt: 'dynamic diagonal composition, kinetic energy flow' },
    ]
  },
  classicalArt: {
    id: 'classicalArt',
    name: '古典與近代藝術史',
    englishName: 'Classical & Art History',
    icon: 'Palette',
    description: '文藝復興、巴洛克、浮世繪等大師時代風格',
    items: [
      { id: 'ca1', label: '文藝復興古典美學', prompt: 'Italian High Renaissance style, Leonardo da Vinci sfumato, graceful realism' },
      { id: 'ca2', label: '巴洛克戲劇明暗', prompt: 'Baroque style, Caravaggio chiaroscuro, intense dramatic atmosphere' },
      { id: 'ca3', label: '洛可可優雅華麗', prompt: 'Rococo aesthetic, pastel palette, ornate filigree details, Fragonard style' },
      { id: 'ca4', label: '浪漫主義崇高壯闊', prompt: 'Romanticism art style, Caspar David Friedrich sublime mood, sweeping landscapes' },
      { id: 'ca5', label: '印象派自然光斑', prompt: 'Impressionism, Claude Monet dabbed brushwork, plein air luminous color vibrance' },
      { id: 'ca6', label: '後印象派點彩畫派', prompt: 'Pointillism, Georges Seurat dot technique, vibrant optical color mixing' },
      { id: 'ca7', label: '日本江戶浮世繪', prompt: 'Ukiyo-e woodblock print style, Hokusai wave dynamics, clean outlines' },
      { id: 'ca8', label: '新藝術運動自然曲線', prompt: 'Art Nouveau, Alphonse Mucha sinuous organic lines, floral ornamental borders' },
      { id: 'ca9', label: '裝飾藝術幾何奢華', prompt: 'Art Deco style, lavish geometric symmetry, gilded gold leaf luxury' },
      { id: 'ca10', label: '表現主義強烈情感', prompt: 'German Expressionism, Edvard Munch emotional intensity, distorted bold brushstrokes' },
      { id: 'ca11', label: '象徵主義神秘夢境', prompt: 'Symbolism art style, Gustav Klimt patterned gold leaf, esoteric mystical mood' },
      { id: 'ca12', label: '前拉斐爾派細膩自然', prompt: 'Pre-Raphaelite Brotherhood style, vivid botanical realism, ethereal medievalism' },
      { id: 'ca13', label: '荷蘭黃金時代靜物', prompt: 'Dutch Golden Age painting, Vermeer soft window light, rich tactile textures' },
      { id: 'ca14', label: '哥德式大教堂彩繪玻璃', prompt: 'Gothic stained glass art, luminous medieval sacred aesthetic, leaded lines' },
      { id: 'ca15', label: '拜占庭金箔馬賽克', prompt: 'Byzantine gold mosaic style, flat sacred iconography, gilded tesserae' },
      { id: 'ca16', label: '立體派多維碎裂', prompt: 'Cubism style, Pablo Picasso angular fragmentation, multiple perspectives' }
    ]
  },
  modernDesign: {
    id: 'modernDesign',
    name: '現代與當代藝術/設計流派',
    englishName: 'Modern & Design Movements',
    icon: 'Shapes',
    description: '包浩斯、極簡、賽博龐克、孟菲斯與現代視覺',
    items: [
      { id: 'md1', label: '包浩斯功能理性主義', prompt: 'Bauhaus design aesthetic, clean functionalism, primary geometric shapes' },
      { id: 'md2', label: '瑞士國際主義網格', prompt: 'Swiss International Typographic Style, structured asymmetric grid, modern minimalism' },
      { id: 'md3', label: '超現實主義迷幻夢境', prompt: 'Surrealism, Salvador Dali dreamlike juxtaposition, melting metaphysics' },
      { id: 'md4', label: '純粹極簡主義', prompt: 'Contemporary Minimalism, serene simplicity, pristine reduction' },
      { id: 'md5', label: '普普藝術大眾色彩', prompt: 'Pop Art style, Andy Warhol screenprint dots, bold saturated primary colors' },
      { id: 'md6', label: '孟菲斯狂想幾何', prompt: 'Memphis Design movement, 80s quirky geometric patterns, vibrant contrast pastels' },
      { id: 'md7', label: '俄羅斯構成主義', prompt: 'Russian Constructivism, bold red-black palette, diagonal typographic dynamism' },
      { id: 'md8', label: '義大利未來主義', prompt: 'Futurism art, kinetic velocity, speed lines, mechanistic dynamism' },
      { id: 'md9', label: '抽象表現主義潑墨', prompt: 'Abstract Expressionism, Jackson Pollock dynamic drip action painting, emotional raw strokes' },
      { id: 'md10', label: '賽博龐克高科技低生活', prompt: 'Cyberpunk aesthetic, neon-drenched metropolis, holographic rain reflections' },
      { id: 'md11', label: '蒸氣波復古夢幻', prompt: 'Vaporwave aesthetic, 90s aesthetic glitched nostalgia, pastel marble statues, retro sunset' },
      { id: 'md12', label: '太陽龐克生態未來', prompt: 'Solarpunk aesthetic, utopian green architecture, sunlight and blooming lush foliage' },
      { id: 'md13', label: '侘寂不完美日式哲學', prompt: 'Wabi-sabi aesthetic, earthy raw clay textures, weathered organic serenity' },
      { id: 'md14', label: '粗獷主義混凝土美學', prompt: 'Brutalism architectural aesthetic, raw exposed concrete, massive monolithic forms' },
      { id: 'md15', label: '低多邊形立體幾何', prompt: 'Low-poly art style, geometric faceted surfaces, isometric polygon styling' },
      { id: 'md16', label: '歐普藝術視覺錯覺', prompt: 'Op Art, optical illusion patterns, black and white pulsating rhythmic waves' },
      { id: 'md17', label: '酸性設計實驗先鋒', prompt: 'Acid Graphics, chromatic metallic chrome, trippy warped typography, liquid mercury' }
    ]
  },
  materials: {
    id: 'materials',
    name: '插畫媒材與材質工藝',
    englishName: 'Mediums & Textures',
    icon: 'Brush',
    description: '水彩、油畫、陶藝、玻璃、3D渲染等材質觸感',
    items: [
      { id: 'm1', label: '珠光透明水彩暈染', prompt: 'delicate transparent watercolor wash, wet-on-wet pigments, cold-press paper texture' },
      { id: 'm2', label: '厚塗油畫刮刀筆觸', prompt: 'heavy impasto oil painting, thick textural palette knife strokes, tactile paint peaks' },
      { id: 'm3', label: '溫潤陶瓷釉面光澤', prompt: 'ceramic glazed pottery finish, celadon craquelure gloss, tactile clay' },
      { id: 'm4', label: '磨砂半透明玻璃', prompt: 'frosted translucent sea glass, soft internal light refraction, matte blur' },
      { id: 'm5', label: '東方水墨流動意境', prompt: 'traditional Chinese ink wash painting, Sumi-e brush dynamics, poetic atmospheric mist' },
      { id: 'm6', label: '定格黏土捏塑定格', prompt: 'claymation stop-motion aesthetic, sculpted polymer clay with subtle fingerprint textures' },
      { id: 'm7', label: '層次剪紙陰影浮雕', prompt: 'layered paper cut art, 3D papercraft depth, cast paper shadows, clean craft edges' },
      { id: 'm8', label: '溫暖針織毛線紋理', prompt: 'cozy chunky knit wool yarn texture, intricate woven textile weave' },
      { id: 'm9', label: '刺繡絲綢金線工藝', prompt: 'intricate silk embroidery, raised satin stitch threads, shimmering metallic threads' },
      { id: 'm10', label: '孔版印刷復古錯位', prompt: 'Risograph print effect, halftone screen dot patterns, vibrant misregistered overlay inks' },
      { id: 'm11', label: '絲網版畫印刷質感', prompt: 'silkscreen printmaking texture, flat gouache inks, distinct layered color blocks' },
      { id: 'm12', label: '銅版微雕蝕刻細線', prompt: 'copperplate engraving etching, fine cross-hatching linework, vintage botanical print style' },
      { id: 'm13', label: '燙金箔浮雕細節', prompt: 'embossed gold foil stamping, reflective gilded leaf accents, tactile luxury cardstock' },
      { id: 'm14', label: '粉彩柔和蠟筆筆觸', prompt: 'soft pastel chalk drawing, blended velvety dust textures, creamy crayon accents' },
      { id: 'm15', label: '炭筆粗獷素描', prompt: 'raw charcoal sketch, expressive tonal smudges, textured kraft paper' },
      { id: 'm16', label: '金屬拉絲與陽極氧化', prompt: 'brushed anodized metal surface, specular highlights, premium matte alloy' },
      { id: 'm17', label: '彩色玻璃幾何嵌合', prompt: 'tessellated stained glass panels, luminous jewel-toned transmission, black iron solder' },
      { id: 'm18', label: '水晶環氧樹脂封存', prompt: 'crystal clear epoxy resin casting, preserved suspended inclusions, hyper-glossy sheen' },
      { id: 'm19', label: 'Octane 頂級3D渲染', prompt: '3D Octane render, raytraced subsurface scattering, physically based rendering (PBR), Unreal Engine 5' },
      { id: 'm20', label: '向量極簡扁平插畫', prompt: 'clean flat vector illustration, smooth bezier curves, bold graphic silhouette' },
      { id: 'm21', label: '全息彩虹折射光膜', prompt: 'iridescent holographic foil texture, prismatic rainbow color shift' },
      { id: 'm22', label: '古老羊皮紙斑駁質感', prompt: 'aged weathered parchment texture, sepia deckled edges, historical manuscript feel' }
    ]
  },
  negative: {
    id: 'negative',
    name: '負面提示詞與純淨度',
    englishName: 'Negative & Purity Controls',
    icon: 'ShieldAlert',
    description: '去除干擾雜質、背景純化與防崩壞參數',
    items: [
      { id: 'n1', label: '去除人物/無人景觀', prompt: 'human, people, person, crowd, silhouette of person' },
      { id: 'n2', label: '純白極簡無雜物背景', prompt: 'cluttered background, complex patterns, dark shadows, noise' },
      { id: 'n3', label: '去除浮水印與文字亂碼 (Mockup必選)', prompt: 'watermark, text, letters, typography, signature, logo, copyright notice, banner, sticker, label' },
      { id: 'n4', label: '防止肢體崩壞畸形', prompt: 'extra limbs, bad anatomy, deformed fingers, mutated hands, poorly drawn hands, missing limbs' },
      { id: 'n5', label: '防止畫面模糊與低解析度', prompt: 'blurry, low resolution, jpeg artifacts, pixelated, out of focus, low quality' },
      { id: 'n6', label: '乾淨邊緣/防止邊框裁切', prompt: 'cropped, frame, border, split screen, out of frame' },
      { id: 'n7', label: '防止過度曝光死白', prompt: 'overexposed, blown out highlights, extreme glare' },
      { id: 'n8', label: '純淨無噪點雜訊 (合成必選)', prompt: 'grain, noise, dirty background, dust specks, chromatic aberration, scratches' },
      { id: 'n9', label: '去除了無生氣的灰色調', prompt: 'muddy colors, desaturated, washed out, dull lighting' },
      { id: 'n10', label: '去除非寫實塑料假人感', prompt: 'uncanny valley, plastic skin, doll face, cheap 3d render look, airbrushed' },
      { id: 'n11', label: '孤立物體/無環境雜景', prompt: 'complex background, busy room, realistic environment, outdoors, ground texture' }
    ]
  }
};

export type CategoryKey = keyof typeof promptDatabase;

// 支援的 AI 引擎與模型版本
export type AIPlatform = 'midjourney' | 'universal'; // universal 為通用自然語言 (DALL-E 3, SD, Flux, Ideogram)

export const midjourneyVersions = [
  { 
    id: 'v8.2', 
    name: 'Midjourney v8.2', 
    shortName: 'V8.2',
    param: '--v 8.2', 
    strength: '極速、高解析、完美文字呈現', 
    suitableFor: '電商海報、UI設計、平面廣告',
    desc: '極速、高解析、完美文字呈現（電商海報、UI設計、平面廣告）' 
  },
  { 
    id: 'v7', 
    name: 'Midjourney v7', 
    shortName: 'V7',
    param: '--v 7', 
    strength: '語義精準、手部結構好、具備草稿模式', 
    suitableFor: '快速概念探索、複雜人物場景',
    desc: '語義精準、手部結構好、具備草稿模式（快速概念探索、複雜人物場景）' 
  },
  { 
    id: 'v6.1', 
    name: 'Midjourney v6.1', 
    shortName: 'V6.1',
    param: '--v 6.1', 
    strength: '電影級光影、高寫實感', 
    suitableFor: '商業攝影、擬真人物、電影美術',
    desc: '電影級光影、高寫實感（商業攝影、擬真人物、電影美術）' 
  },
  { 
    id: 'niji7', 
    name: 'Niji 7 (頂級動漫插畫)', 
    shortName: 'Niji 7',
    param: '--niji 7', 
    strength: '頂級動漫插畫、二次元細節', 
    suitableFor: '輕小說封面、動漫周邊、插畫設計',
    desc: '頂級動漫插畫、二次元細節（輕小說封面、動漫周邊、插畫設計）' 
  },
  { 
    id: 'raw', 
    name: 'Raw Style (真實無濾鏡)', 
    shortName: 'Raw',
    param: '--style raw', 
    strength: '減少演算法濾鏡，純粹相機光學感', 
    suitableFor: '真實光學鏡頭、紀實商業寫真',
    desc: '減少 MJ 預設濾鏡，呈現真實相機拍攝感' 
  },
  { 
    id: 'v6.0', 
    name: 'Midjourney v6.0', 
    shortName: 'V6.0',
    param: '--v 6.0', 
    strength: '相機寫實感與精準語意解析', 
    suitableFor: '自然寫實光影、傳統商業視覺',
    desc: '相機寫實感與精準語意解析' 
  },
  { 
    id: 'niji6', 
    name: 'Niji 6 (二次元經典)', 
    shortName: 'Niji 6',
    param: '--niji 6', 
    strength: '日系動漫與水彩插畫風格', 
    suitableFor: '角色設定集、日漫繪本創作',
    desc: '經典日系二次元與動漫插畫' 
  }
];

// 預設精選色票組合 (Preset Aesthetic Hex Palettes)
export const presetPalettes = [
  {
    name: '極簡莫蘭迪 (Morandi)',
    colors: ['#8E9775', '#E28E95', '#B8C0C2', '#EAD8C0', '#505658']
  },
  {
    name: '商業奢華黑白金 (Luxury Gold)',
    colors: ['#18181B', '#E5E5E5', '#D4AF37', '#71717A', '#FFFFFF']
  },
  {
    name: '新東京霓虹 (Cyber Neon)',
    colors: ['#0D0221', '#0F084B', '#26408B', '#A6CFD5', '#C2E7D9']
  },
  {
    name: '復古暖調大地 (Warm Terra)',
    colors: ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51']
  },
  {
    name: '包浩斯三原色 (Bauhaus)',
    colors: ['#E63946', '#1D3557', '#F1FAEE', '#FFB703', '#111111']
  },
  {
    name: '京都枯山水 (Wabi-Sabi)',
    colors: ['#3A302A', '#7A6B5D', '#C4B29E', '#DDD3C4', '#201A17']
  }
];

export default function AestheticPromptMaster() {
  // State: Platform Engine (Midjourney vs Universal Natural Language)
  const [activeEngine, setActiveEngine] = useState<AIPlatform>('midjourney');
  const [selectedMJVersion, setSelectedMJVersion] = useState('v8.2');
  const [showVersionTable, setShowVersionTable] = useState(true);

  // State: Categories & Prompts
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('commercialDesign');
  const [selectedPromptIds, setSelectedPromptIds] = useState<Set<string>>(new Set(['cm1', 'cm4']));
  const [subjectText, setSubjectText] = useState('');
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [imageWeight, setImageWeight] = useState('1.0');
  const [stylizeValue, setStylizeValue] = useState('150');
  const [chaosValue, setChaosValue] = useState('0');
  const [customNegative, setCustomNegative] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  // --- 專業 Mockup 乾淨合成模式開關 ---
  const [mockupPureMode, setMockupPureMode] = useState(true);

  // --- 指定參考構圖（而非風格）---
  const [enableCompositionRef, setEnableCompositionRef] = useState(false);
  const [compositionImageUrl, setCompositionImageUrl] = useState('');
  const [compositionStrength, setCompositionStrength] = useState<'strict' | 'medium' | 'loose'>('strict');
  const [compositionGuidanceType, setCompositionGuidanceType] = useState<'structural_layout' | 'grid_perspective' | 'silhouettes_framing'>('structural_layout');

  // --- 指定顏色色感 (Hex Code) ---
  const [enableColorPalette, setEnableColorPalette] = useState(false);
  const [customHexColors, setCustomHexColors] = useState<string[]>(['#18181B', '#F4F4F5', '#A1A1AA']);
  const [newColorInput, setNewColorInput] = useState('#D4AF37');
  const [colorGradingIntensity, setColorGradingIntensity] = useState<'dominant' | 'accent' | 'atmospheric'>('dominant');

  // --- AI 推薦標籤 (Suggest Keywords) ---
  interface KeywordSuggestion {
    id: string;
    label: string;
    prompt: string;
    reason: string;
  }
  const [isSuggestingKeywords, setIsSuggestingKeywords] = useState(false);
  const [keywordSuggestions, setKeywordSuggestions] = useState<KeywordSuggestion[] | null>(null);
  const [suggestError, setSuggestError] = useState<string | null>(null);

  const handleSuggestKeywords = async () => {
    setIsSuggestingKeywords(true);
    setSuggestError(null);
    try {
      const res = await fetch('/api/suggest-keywords', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject: subjectText || 'minimalist aesthetic photography' })
      });
      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }
      const data = await res.json();
      if (data.suggestions && Array.isArray(data.suggestions)) {
        setKeywordSuggestions(data.suggestions);
      }
    } catch (err: any) {
      console.error('Failed to suggest keywords:', err);
      setSuggestError('無法取得 AI 建議，請稍後再試。');
    } finally {
      setIsSuggestingKeywords(false);
    }
  };

  const handleApplyAllSuggestions = () => {
    if (!keywordSuggestions) return;
    setSelectedPromptIds(prev => {
      const next = new Set(prev);
      keywordSuggestions.forEach(item => next.add(item.id));
      return next;
    });
  };

  // Toggle prompt selection
  const togglePrompt = (id: string) => {
    setSelectedPromptIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Add custom hex color
  const handleAddHexColor = (colorHex: string) => {
    const formatted = colorHex.trim().startsWith('#') ? colorHex.trim() : `#${colorHex.trim()}`;
    if (/^#[0-9A-Fa-f]{6}$/.test(formatted) || /^#[0-9A-Fa-f]{3}$/.test(formatted)) {
      if (!customHexColors.includes(formatted.toUpperCase()) && customHexColors.length < 8) {
        setCustomHexColors(prev => [...prev, formatted.toUpperCase()]);
      }
    }
  };

  // Remove hex color
  const handleRemoveHexColor = (index: number) => {
    setCustomHexColors(prev => prev.filter((_, i) => i !== index));
  };

  // Clear all selections
  const handleClearAll = () => {
    setSelectedPromptIds(new Set());
    setSubjectText('');
    setCustomNegative('');
    setEnableCompositionRef(false);
    setCompositionImageUrl('');
    setEnableColorPalette(false);
  };

  // Google Search Helper for Art Styles & Design Keywords
  const handleGoogleSearchStyle = (e: React.MouseEvent, item: { label: string; prompt: string }) => {
    e.stopPropagation();
    const cleanLabel = item.label.replace(/\(.*?\)/g, '').trim();
    const mainKeyword = item.prompt.split(',')[0].trim();
    const query = `${cleanLabel} ${mainKeyword} art style design`;
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(searchUrl, '_blank', 'noopener,noreferrer');
  };

  // Find all prompt items by ID
  const allDatabaseItems = useMemo(() => {
    const items: Array<{ id: string; label: string; prompt: string; categoryId: CategoryKey; isNegative: boolean }> = [];
    Object.entries(promptDatabase).forEach(([catKey, category]) => {
      category.items.forEach(item => {
        items.push({
          ...item,
          categoryId: catKey as CategoryKey,
          isNegative: catKey === 'negative'
        });
      });
    });
    return items;
  }, []);

  // Filtered items based on active category and search
  const currentCategoryData = promptDatabase[selectedCategory];
  const displayedItems = useMemo(() => {
    let items = currentCategoryData.items.map(item => ({
      ...item,
      categoryId: selectedCategory,
      isNegative: selectedCategory === 'negative'
    }));

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      return allDatabaseItems.filter(item => 
        item.label.toLowerCase().includes(query) || 
        item.prompt.toLowerCase().includes(query)
      );
    }
    return items;
  }, [selectedCategory, searchQuery, allDatabaseItems, currentCategoryData]);

  // Real-time Prompt Combination Engine (Midjourney vs Universal Natural Language)
  const { finalPrompt, positiveCount, negativeCount } = useMemo(() => {
    const positiveTokens: string[] = [];
    const negativeTokens: string[] = [];
    let pCount = 0;
    let nCount = 0;

    // 1. Composition reference image
    let compPrefix = '';
    if (enableCompositionRef && compositionImageUrl.trim()) {
      compPrefix = `${compositionImageUrl.trim()} `;
      
      const compInstruction = 
        compositionGuidanceType === 'structural_layout'
          ? 'exact structural layout reference, strict geometric placement and horizon alignment only, disregard original artistic style and textures'
          : compositionGuidanceType === 'grid_perspective'
          ? 'composition and perspective lines blueprint reference only, maintain camera angle, isolate composition from style'
          : 'framing and negative space silhouette arrangement reference only, completely original art style';
      
      const compWeightNote = 
        compositionStrength === 'strict'
          ? 'strict spatial composition matching'
          : compositionStrength === 'medium'
          ? 'balanced compositional guideline'
          : 'loose compositional layout';

      positiveTokens.push(`[Composition Blueprint: ${compInstruction}, ${compWeightNote}]`);
      pCount++;
    }

    // 2. Base Subject Text
    if (subjectText.trim()) {
      positiveTokens.push(subjectText.trim());
    }

    // 3. Selected Prompts Separation (Positive vs Negative)
    allDatabaseItems.forEach(item => {
      if (selectedPromptIds.has(item.id)) {
        if (item.isNegative) {
          negativeTokens.push(item.prompt);
          nCount++;
        } else {
          positiveTokens.push(item.prompt);
          pCount++;
        }
      }
    });

    // 4. Mockup Pure Compositing Safeguards
    if (mockupPureMode) {
      positiveTokens.push('blank mockup ready for graphic design composite, ultra-clean surfaces, sharp photorealistic commercial asset');
      negativeTokens.push('text, letters, typography, words, watermark, logos, stickers, printed labels, blurry edges, dirty texture, noise');
      pCount++;
      nCount++;
    }

    // 5. Color Palette Hex Reference
    if (enableColorPalette && customHexColors.length > 0) {
      const hexListStr = customHexColors.join(', ');
      let colorInstruction = '';
      if (colorGradingIntensity === 'dominant') {
        colorInstruction = `strictly dominated by color palette (${hexListStr}), precise hex color grading, harmonious chromatic spectrum`;
      } else if (colorGradingIntensity === 'accent') {
        colorInstruction = `curated color accents in (${hexListStr}), unified color tone`;
      } else {
        colorInstruction = `subtle atmospheric lighting and ambient mood calibrated to (${hexListStr})`;
      }
      positiveTokens.push(colorInstruction);
      pCount++;
    }

    // 6. Custom Negative input
    if (customNegative.trim()) {
      negativeTokens.push(customNegative.trim());
      nCount++;
    }

    // 7. If composition reference is on, automatically guard style transfer in negative prompt
    if (enableCompositionRef && compositionImageUrl.trim()) {
      negativeTokens.push('copying style of reference image, original colors of reference image, style transfer');
    }

    // ===== Output Generation: Midjourney vs Universal Natural Language =====
    if (activeEngine === 'midjourney') {
      // Midjourney Flag Syntax Engine
      let result = compPrefix + positiveTokens.join(', ');

      // Aspect Ratio
      if (aspectRatio && aspectRatio !== 'default') {
        result += ` --ar ${aspectRatio}`;
      }

      // MJ Model Version or Niji
      const currentVerObj = midjourneyVersions.find(v => v.id === selectedMJVersion);
      if (currentVerObj) {
        result += ` ${currentVerObj.param}`;
      }

      // Image Weight
      if (imageWeight && imageWeight !== '1.0') {
        result += ` --iw ${imageWeight}`;
      }

      // Character / Composition Isolation Weight
      if (enableCompositionRef && compositionImageUrl.trim()) {
        result += ` --cw 0`;
      }

      // Stylize
      if (stylizeValue && stylizeValue !== '100') {
        result += ` --s ${stylizeValue}`;
      }

      // Chaos
      if (chaosValue && chaosValue !== '0') {
        result += ` --c ${chaosValue}`;
      }

      // Negative Prompt (--no)
      if (negativeTokens.length > 0) {
        result += ` --no ${negativeTokens.join(', ')}`;
      }

      return {
        finalPrompt: result.trim(),
        positiveCount: pCount,
        negativeCount: nCount
      };
    } else {
      // Universal Natural Language Engine (for DALL·E 3, Stable Diffusion, Flux, Ideogram, Imagen)
      const sentences: string[] = [];

      if (positiveTokens.length > 0) {
        sentences.push(`A high quality visual of ${positiveTokens.join(', ')}.`);
      }

      // Framing & Format description
      if (aspectRatio) {
        sentences.push(`Framed in a ${aspectRatio} aspect ratio format.`);
      }

      // Negative avoidance translated to natural language
      if (negativeTokens.length > 0) {
        sentences.push(`Ensure the image is completely free of ${negativeTokens.join(', ')}.`);
      }

      return {
        finalPrompt: sentences.join(' ').trim(),
        positiveCount: pCount,
        negativeCount: nCount
      };
    }
  }, [
    activeEngine,
    selectedMJVersion,
    subjectText, 
    selectedPromptIds, 
    customNegative, 
    aspectRatio, 
    imageWeight, 
    stylizeValue, 
    chaosValue, 
    allDatabaseItems,
    mockupPureMode,
    enableCompositionRef,
    compositionImageUrl,
    compositionStrength,
    compositionGuidanceType,
    enableColorPalette,
    customHexColors,
    colorGradingIntensity
  ]);

  // Copy to clipboard
  const handleCopy = async () => {
    if (!finalPrompt) return;
    try {
      await navigator.clipboard.writeText(finalPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = finalPrompt;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const selectedCount = selectedPromptIds.size;

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F5] font-sans text-[#18181B] antialiased selection:bg-[#18181B] selection:text-white">
      {/* Clean Minimalism Header */}
      <header className="h-16 flex items-center justify-between px-8 bg-white border-b border-[#E4E4E7] sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#18181B] rounded-lg flex items-center justify-center shadow-sm">
            <div className="w-3.5 h-3.5 border-2 border-white rotate-45"></div>
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-[#18181B] flex items-center gap-2">
              提示詞窮救星 <span className="font-semibold text-xs tracking-normal text-gray-500 font-mono">PROMPT Helper</span>
              <span className="text-[10px] font-mono text-gray-500 uppercase font-semibold bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded">
                MJ • UNIVERSAL AI
              </span>
            </h1>
          </div>
        </div>

        {/* Engine Switcher & Fast Actions */}
        <div className="flex items-center gap-3">
          {/* Prompt Syntax Engine Mode Switch (MJ vs Universal) */}
          <div className="flex bg-[#F4F4F5] p-0.5 rounded-lg border border-[#E4E4E7]">
            <button
              onClick={() => setActiveEngine('midjourney')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition ${
                activeEngine === 'midjourney'
                  ? 'bg-[#18181B] text-white shadow-xs'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Midjourney / Niji</span>
            </button>
            <button
              onClick={() => setActiveEngine('universal')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition ${
                activeEngine === 'universal'
                  ? 'bg-[#18181B] text-white shadow-xs'
                  : 'text-gray-500 hover:text-black'
              }`}
              title="通用自然語言模式（適用於 DALL·E 3, SD, Flux, Ideogram, Imagen）"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>通用自然語言 (DALL-E/Flux)</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-48">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="搜尋關鍵字..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F4F4F5] border-none rounded-md pl-8 pr-3 py-1.5 text-xs text-[#18181B] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#18181B]"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-black"
              >
                ×
              </button>
            )}
          </div>

          <button 
            onClick={handleCopy}
            disabled={!finalPrompt}
            className="bg-[#18181B] hover:bg-black disabled:opacity-40 text-white px-4 py-2 rounded-md text-xs font-semibold tracking-wide transition flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                COPIED!
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                GENERATE PROMPT
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main Container Layout */}
      <div className="flex flex-1 overflow-hidden pb-28">
        {/* Sidebar: Categories Navigation */}
        <aside className="w-64 bg-white border-r border-[#E4E4E7] flex flex-col shrink-0 justify-between">
          <nav className="p-4 space-y-1 overflow-y-auto">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-2">
              Database Categories
            </div>

            {(Object.keys(promptDatabase) as CategoryKey[]).map((key, idx) => {
              const cat = promptDatabase[key];
              const isActive = selectedCategory === key && !searchQuery;
              const activeInCat = cat.items.filter(item => selectedPromptIds.has(item.id)).length;
              const isCommercial = key === 'commercialDesign';

              return (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedCategory(key);
                    setSearchQuery('');
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-all text-left ${
                    isActive
                      ? 'bg-[#F4F4F5] text-[#18181B] font-semibold'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-[#18181B]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className={`text-xs ${isActive ? 'text-[#18181B]' : 'text-gray-400'}`}>
                      {idx + 1}.
                    </span>
                    <span className="truncate flex items-center gap-1.5">
                      {cat.name}
                      {isCommercial && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {activeInCat > 0 && (
                      <span className="text-[10px] font-bold bg-[#18181B] text-white px-1.5 py-0.5 rounded-full">
                        {activeInCat}
                      </span>
                    )}
                    <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">
                      {cat.items.length}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Sidebar Bottom Status & Mockup Composite Safeguard */}
          <div className="p-4 border-t border-[#E4E4E7] space-y-2.5">
            {/* Mockup Pure Mode Toggle */}
            <div className="bg-[#F4F4F5] p-3 rounded-lg border border-[#E4E4E7]">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  <LayoutTemplate className="w-3.5 h-3.5 text-[#18181B]" />
                  <span className="text-xs font-bold text-[#18181B]">乾淨 Mockup 合成防護</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={mockupPureMode}
                    onChange={(e) => setMockupPureMode(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-7 h-4 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-600"></div>
                </label>
              </div>
              <p className="text-[10px] text-gray-500 leading-tight">
                {mockupPureMode ? '已啟用：自動排除雜訊文字/標籤，保留無印留白方便後製' : '已關閉：允許自然場景雜質'}
              </p>
            </div>

            <div className="bg-blue-50 p-2.5 rounded-lg border border-blue-100/80">
              <div className="flex items-start gap-1.5">
                <Info className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" />
                <p className="text-[10px] text-blue-800 font-medium leading-relaxed">
                  {activeEngine === 'midjourney'
                    ? '當前使用 Midjourney 參數模式（支援 --v 6.1 / --niji 6 / --ar / --no 等旗標）。'
                    : '當前使用通用自然語言模式（已轉化為 DALL·E 3 / Flux / SD 讀得懂的完整語意句型）。'}
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8 overflow-y-auto space-y-6">
          {/* Main Title & Section Header */}
          <div className="flex items-end justify-between border-b border-[#E4E4E7] pb-4">
            <div>
              <h2 className="text-2xl font-bold text-[#18181B] tracking-tight flex items-center gap-2">
                {searchQuery ? `搜尋結果: "${searchQuery}"` : currentCategoryData.name}
                {!searchQuery && (
                  <span className="text-sm font-normal text-gray-400">
                    {currentCategoryData.englishName}
                  </span>
                )}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {searchQuery ? `在整個資料庫中找到 ${displayedItems.length} 個匹配項目` : currentCategoryData.description}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleClearAll}
                className="text-xs text-gray-500 hover:text-black px-2.5 py-1.5 rounded hover:bg-white border border-transparent hover:border-[#E4E4E7] transition flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                重設所有選擇 ({selectedCount})
              </button>
            </div>
          </div>

          {/* Model Engine & MJ Version Selector Bar */}
          <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 shadow-xs space-y-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#F4F4F5] border border-[#E4E4E7] flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4 text-[#18181B]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                      AI 模型引擎與算圖核心版本 (AI Model Engine)
                    </span>
                    {activeEngine === 'midjourney' ? (
                      <span className="text-[10px] font-mono bg-[#18181B] text-white px-2 py-0.5 rounded font-semibold">
                        {midjourneyVersions.find(v => v.id === selectedMJVersion)?.param}
                      </span>
                    ) : (
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded border border-emerald-200">
                        Universal Prompt
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    {activeEngine === 'midjourney'
                      ? midjourneyVersions.find(v => v.id === selectedMJVersion)?.desc
                      : '已轉換為通用語意長句結構，完美適配 DALL·E 3、FLUX.1、Stable Diffusion 與 Ideogram。'}
                  </p>
                </div>
              </div>

              {/* Controls: Quick Comparison Table Toggle & Dropdown */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowVersionTable(!showVersionTable)}
                  className={`text-xs font-semibold px-3 py-2 rounded-lg border transition flex items-center gap-1.5 cursor-pointer ${
                    showVersionTable
                      ? 'bg-[#18181B] text-white border-[#18181B]'
                      : 'bg-[#F4F4F5] hover:bg-gray-200/70 border-[#E4E4E7] text-[#18181B]'
                  }`}
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>💡 快速版本對比表</span>
                  {showVersionTable ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                <select
                  value={activeEngine === 'universal' ? 'universal' : selectedMJVersion}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === 'universal') {
                      setActiveEngine('universal');
                    } else {
                      setActiveEngine('midjourney');
                      setSelectedMJVersion(val);
                    }
                  }}
                  className="bg-[#F4F4F5] hover:bg-gray-200/70 border border-[#E4E4E7] rounded-lg px-3 py-2 text-xs font-semibold text-[#18181B] focus:outline-none focus:ring-1 focus:ring-[#18181B] cursor-pointer transition w-full md:w-auto"
                >
                  <optgroup label="Midjourney 旗艦版本 (Photorealistic & Graphic)">
                    <option value="v8.2">V8.2 (--v 8.2) - 極速、高解析、完美文字呈現</option>
                    <option value="v7">V7 (--v 7) - 語義精準、手部結構好、草稿模式</option>
                    <option value="v6.1">V6.1 (--v 6.1) - 電影級光影、高寫實感</option>
                    <option value="raw">Raw Style (--style raw) - 真實無濾鏡直出</option>
                    <option value="v6.0">V6.0 (--v 6.0) - 相機真實感</option>
                  </optgroup>
                  <optgroup label="Niji 二次元 / 動漫插畫系列">
                    <option value="niji7">Niji 7 (--niji 7) - 頂級動漫插畫、二次元細節</option>
                    <option value="niji6">Niji 6 (--niji 6) - 經典日系動漫水彩風</option>
                  </optgroup>
                  <optgroup label="通用自然語言模式 (Universal AI Prompt)">
                    <option value="universal">通用模式 (DALL-E 3 / FLUX.1 / SD / Ideogram)</option>
                  </optgroup>
                </select>
              </div>
            </div>

            {/* 💡 快速版本對比表 (Quick Version Comparison Table) */}
            {showVersionTable && (
              <div className="pt-2 border-t border-[#E4E4E7]/80">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#F4F4F5] text-gray-700 font-semibold border-b border-[#E4E4E7]">
                        <th className="py-2.5 px-3 rounded-l-lg">版本</th>
                        <th className="py-2.5 px-3">核心強項</th>
                        <th className="py-2.5 px-3">適合場景</th>
                        <th className="py-2.5 px-3">切換參數</th>
                        <th className="py-2.5 px-3 text-right rounded-r-lg">狀態 / 操作</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E4E4E7]">
                      {[
                        {
                          id: 'v8.2',
                          version: 'V8.2',
                          strength: '極速、高解析、完美文字呈現',
                          scene: '電商海報、UI設計、平面廣告',
                          param: '--v 8.2',
                          tag: '旗艦最新'
                        },
                        {
                          id: 'v7',
                          version: 'V7',
                          strength: '語義精準、手部結構好、具備草稿模式',
                          scene: '快速概念探索、複雜人物場景',
                          param: '--v 7',
                          tag: '精準語意'
                        },
                        {
                          id: 'v6.1',
                          version: 'V6.1',
                          strength: '電影級光影、高寫實感',
                          scene: '商業攝影、擬真人物、電影美術',
                          param: '--v 6.1',
                          tag: '高寫實光影'
                        },
                        {
                          id: 'niji7',
                          version: 'Niji 7',
                          strength: '頂級動漫插畫、二次元細節',
                          scene: '輕小說封面、動漫周邊、插畫設計',
                          param: '--niji 7',
                          tag: '二次元首選'
                        }
                      ].map((item) => {
                        const isCurrent = activeEngine === 'midjourney' && selectedMJVersion === item.id;
                        return (
                          <tr
                            key={item.id}
                            onClick={() => {
                              setActiveEngine('midjourney');
                              setSelectedMJVersion(item.id);
                            }}
                            className={`cursor-pointer transition ${
                              isCurrent
                                ? 'bg-[#18181B]/5 font-medium'
                                : 'hover:bg-gray-50'
                            }`}
                          >
                            <td className="py-2.5 px-3">
                              <div className="flex items-center gap-1.5">
                                <span className="font-bold text-[#18181B]">{item.version}</span>
                                <span className="text-[10px] bg-gray-200 text-gray-700 px-1.5 py-0.2 rounded font-normal">
                                  {item.tag}
                                </span>
                              </div>
                            </td>
                            <td className="py-2.5 px-3 text-gray-800">{item.strength}</td>
                            <td className="py-2.5 px-3 text-gray-600">{item.scene}</td>
                            <td className="py-2.5 px-3">
                              <code className="font-mono text-[11px] bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded text-[#18181B] font-semibold">
                                {item.param}
                              </code>
                            </td>
                            <td className="py-2.5 px-3 text-right">
                              {isCurrent ? (
                                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-black bg-white border border-[#18181B] px-2 py-0.5 rounded-md shadow-2xs">
                                  <Check className="w-3 h-3 stroke-[3]" />
                                  已選用
                                </span>
                              ) : (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveEngine('midjourney');
                                    setSelectedMJVersion(item.id);
                                  }}
                                  className="text-[11px] text-gray-500 hover:text-black hover:bg-gray-200/60 px-2 py-0.5 rounded transition"
                                >
                                  切換
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Subject & Parameter Inputs Card */}
          <div className="bg-white border border-[#E4E4E7] rounded-xl p-5 shadow-xs space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                    主體描述 (Subject Prompt)
                  </label>
                  <span className="hidden sm:inline text-[11px] text-gray-400">自訂畫面核心產品、瓶器形狀、或空間特徵</span>
                </div>
                
                {/* AI Suggest Keywords Button */}
                <button
                  type="button"
                  onClick={handleSuggestKeywords}
                  disabled={isSuggestingKeywords}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-[#18181B] hover:bg-black text-white shadow-2xs transition cursor-pointer disabled:opacity-60"
                  title="由 AI 分析當前主體，從資料庫推薦 3 個最契合的攝影與光影標籤"
                >
                  {isSuggestingKeywords ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-purple-400" />
                      <span>AI 分析主體中...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                      <span>AI 推薦光影/攝影標籤 (Suggest Keywords)</span>
                    </>
                  )}
                </button>
              </div>

              <input
                type="text"
                value={subjectText}
                onChange={(e) => setSubjectText(e.target.value)}
                placeholder="例如：a luxury frosted glass cosmetic bottle on a clean podium, water droplets..."
                className="w-full bg-[#F4F4F5] border border-transparent focus:border-[#18181B] rounded-lg px-4 py-2.5 text-sm text-[#18181B] placeholder-gray-400 focus:outline-none transition"
              />

              {/* AI Keyword Suggestions Panel */}
              {keywordSuggestions && keywordSuggestions.length > 0 && (
                <div className="mt-3 bg-[#F4F4F5] border border-[#E4E4E7] rounded-xl p-3.5 space-y-2.5">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-[#18181B] text-white flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-yellow-300" />
                      </div>
                      <span className="text-xs font-bold text-[#18181B]">
                        AI 依據主體推薦的 3 個光影/攝影標籤 (Suggested Tags)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleApplyAllSuggestions}
                        className="text-[11px] font-bold text-[#18181B] hover:bg-gray-200 bg-white border border-[#E4E4E7] px-2.5 py-1 rounded-md shadow-2xs transition cursor-pointer flex items-center gap-1"
                      >
                        <Check className="w-3 h-3 stroke-[2.5]" />
                        一鍵加入全部 3 個
                      </button>
                      <button
                        type="button"
                        onClick={() => setKeywordSuggestions(null)}
                        className="text-gray-400 hover:text-gray-700 p-1 rounded transition cursor-pointer"
                        title="關閉建議"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
                    {keywordSuggestions.map((item) => {
                      const isSelected = selectedPromptIds.has(item.id);
                      return (
                        <div
                          key={item.id}
                          onClick={() => togglePrompt(item.id)}
                          className={`p-3 rounded-lg border text-left cursor-pointer transition flex flex-col justify-between gap-2 ${
                            isSelected
                              ? 'bg-white border-[#18181B] ring-1 ring-[#18181B] shadow-2xs'
                              : 'bg-white hover:border-gray-400 border-[#E4E4E7]'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between gap-1 mb-1.5">
                              <span className="text-xs font-bold text-gray-900 line-clamp-1">{item.label}</span>
                              {isSelected ? (
                                <span className="text-[10px] bg-[#18181B] text-white font-bold px-1.5 py-0.5 rounded shrink-0 flex items-center gap-0.5">
                                  <Check className="w-2.5 h-2.5 stroke-[3]" /> 已加入
                                </span>
                              ) : (
                                <span className="text-[10px] bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-1.5 py-0.5 rounded shrink-0 flex items-center gap-0.5">
                                  <Plus className="w-2.5 h-2.5" /> 加入
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
                              {item.reason}
                            </p>
                          </div>
                          <code className="text-[10px] text-gray-700 font-mono bg-gray-100 px-1.5 py-0.5 rounded block truncate">
                            {item.prompt}
                          </code>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {suggestError && (
                <div className="mt-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg p-2 flex items-center justify-between">
                  <span>{suggestError}</span>
                  <button onClick={() => setSuggestError(null)} className="text-red-400 hover:text-red-600 cursor-pointer">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>

            {/* Parameter Adjustment Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-3 border-t border-[#E4E4E7]">
              <div>
                <label className="text-xs text-gray-500 block mb-1">畫面比例 (--ar / Ratio)</label>
                <select
                  value={aspectRatio}
                  onChange={(e) => setAspectRatio(e.target.value)}
                  className="w-full bg-[#F4F4F5] border-none rounded px-2.5 py-1.5 text-xs text-[#18181B] font-mono focus:ring-1 focus:ring-[#18181B]"
                >
                  <option value="16:9">16:9 (橫向寬幅 / 螢幕)</option>
                  <option value="4:5">4:5 (商業海報 / 社群)</option>
                  <option value="1:1">1:1 (產品電商方圖)</option>
                  <option value="3:4">3:4 (直式商品圖)</option>
                  <option value="9:16">9:16 (手機直式滿版)</option>
                  <option value="3:2">3:2 (35mm 相機經典)</option>
                  <option value="21:9">21:9 (電影超寬旗艦)</option>
                </select>
              </div>

              {activeEngine === 'midjourney' ? (
                <>
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>風格化 (--s)</span>
                      <span className="font-mono text-[#18181B] font-semibold">{stylizeValue}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="50"
                      value={stylizeValue}
                      onChange={(e) => setStylizeValue(e.target.value)}
                      className="w-full accent-[#18181B] h-1.5 bg-[#E4E4E7] rounded-lg cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>多樣性 (--c)</span>
                      <span className="font-mono text-[#18181B] font-semibold">{chaosValue}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="5"
                      value={chaosValue}
                      onChange={(e) => setChaosValue(e.target.value)}
                      className="w-full accent-[#18181B] h-1.5 bg-[#E4E4E7] rounded-lg cursor-pointer"
                    />
                  </div>
                </>
              ) : (
                <div className="md:col-span-2 flex items-center bg-[#F4F4F5] rounded-lg px-3 py-2 text-xs text-gray-500">
                  <HelpCircle className="w-3.5 h-3.5 text-gray-400 mr-1.5 shrink-0" />
                  通用模式會自動將所有選取之美學細節融合為語意句型，無需手動調整 MJ 數值參數。
                </div>
              )}

              <div>
                <label className="text-xs text-gray-500 block mb-1">額外排除詞 (--no)</label>
                <input
                  type="text"
                  value={customNegative}
                  onChange={(e) => setCustomNegative(e.target.value)}
                  placeholder="如: human, complex shadow"
                  className="w-full bg-[#F4F4F5] border-none rounded px-3 py-1.5 text-xs text-[#18181B] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#18181B]"
                />
              </div>
            </div>
          </div>

          {/* 雙核心擴充面板：1. 指定構圖參考 (非風格) ＋ 2. 指定色感 (HEX色票) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* 1. 指定參考構圖 (Composition Structure Reference) */}
            <div className={`bg-white border rounded-xl p-4 transition-all ${
              enableCompositionRef ? 'border-[#18181B] shadow-xs' : 'border-[#E4E4E7]'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                    enableCompositionRef ? 'bg-[#18181B] text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <Frame className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#18181B] uppercase tracking-wider">
                      指定參考構圖 (非風格)
                    </h3>
                    <p className="text-[11px] text-gray-400">鎖定空間版面與透視，排除原圖風格干擾</p>
                  </div>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enableCompositionRef}
                    onChange={(e) => setEnableCompositionRef(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#18181B]"></div>
                </label>
              </div>

              {enableCompositionRef ? (
                <div className="space-y-3 pt-2 border-t border-[#E4E4E7]">
                  <div>
                    <label className="text-[11px] font-medium text-gray-600 block mb-1">
                      參考構圖圖片 URL (Image URL)
                    </label>
                    <input
                      type="url"
                      value={compositionImageUrl}
                      onChange={(e) => setCompositionImageUrl(e.target.value)}
                      placeholder="https://example.com/layout-reference.jpg"
                      className="w-full bg-[#F4F4F5] border-none rounded px-3 py-1.5 text-xs text-[#18181B] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#18181B] font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] text-gray-500 block mb-1">構圖鎖定類型</label>
                      <select
                        value={compositionGuidanceType}
                        onChange={(e: any) => setCompositionGuidanceType(e.target.value)}
                        className="w-full bg-[#F4F4F5] border-none rounded px-2.5 py-1.5 text-xs text-[#18181B] focus:ring-1 focus:ring-[#18181B]"
                      >
                        <option value="structural_layout">📐 幾何結構與水平線 (Layout)</option>
                        <option value="grid_perspective">🧭 透視消失點與相機角度 (Perspective)</option>
                        <option value="silhouettes_framing">🖼️ 剪影框景與負空間 (Framing)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] text-gray-500 block mb-1">構圖強度約束</label>
                      <select
                        value={compositionStrength}
                        onChange={(e: any) => setCompositionStrength(e.target.value)}
                        className="w-full bg-[#F4F4F5] border-none rounded px-2.5 py-1.5 text-xs text-[#18181B] focus:ring-1 focus:ring-[#18181B]"
                      >
                        <option value="strict">嚴格匹配 (Strict Matching)</option>
                        <option value="medium">平衡參考 (Balanced Guide)</option>
                        <option value="loose">彈性借鑒 (Loose Layout)</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-2 rounded text-[11px] text-gray-500 flex items-center justify-between font-mono">
                    <span>自動參數: --cw 0 (移除風格套用)</span>
                    <span className="text-emerald-600 font-semibold">Style Isolated ✓</span>
                  </div>
                </div>
              ) : (
                <div className="py-3 text-center text-xs text-gray-400 border-t border-[#E4E4E7]">
                  開啟後可輸入圖片網址，AI 會借用其鏡頭機位與構圖排版，但保留全新風格。
                </div>
              )}
            </div>

            {/* 2. 指定色感色票 (HEX Code Color Palette) */}
            <div className={`bg-white border rounded-xl p-4 transition-all ${
              enableColorPalette ? 'border-[#18181B] shadow-xs' : 'border-[#E4E4E7]'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                    enableColorPalette ? 'bg-[#18181B] text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <Pipette className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#18181B] uppercase tracking-wider">
                      指定色彩色感 (HEX Code)
                    </h3>
                    <p className="text-[11px] text-gray-400">精準控制色相比例、環境色調與整體色彩美學</p>
                  </div>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enableColorPalette}
                    onChange={(e) => setEnableColorPalette(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#18181B]"></div>
                </label>
              </div>

              {enableColorPalette ? (
                <div className="space-y-3 pt-2 border-t border-[#E4E4E7]">
                  {/* Current Active Color Swatches */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-medium text-gray-600">當前色票 (最多 8 色)</span>
                      <span className="text-[10px] text-gray-400 font-mono">{customHexColors.length} Colors</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {customHexColors.map((color, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 bg-[#F4F4F5] border border-[#E4E4E7] rounded-md px-2 py-1 text-xs font-mono group"
                        >
                          <span 
                            className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0 shadow-xs" 
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-[#18181B] font-semibold">{color}</span>
                          <button
                            onClick={() => handleRemoveHexColor(idx)}
                            className="text-gray-400 hover:text-red-500 transition ml-0.5"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}

                      {/* Add Color Input */}
                      {customHexColors.length < 8 && (
                        <div className="flex items-center gap-1">
                          <input
                            type="color"
                            value={newColorInput}
                            onChange={(e) => setNewColorInput(e.target.value)}
                            className="w-7 h-7 rounded border-none cursor-pointer bg-transparent p-0"
                          />
                          <button
                            onClick={() => handleAddHexColor(newColorInput)}
                            className="flex items-center gap-1 bg-[#18181B] text-white px-2 py-1 rounded text-xs hover:bg-black transition"
                          >
                            <Plus className="w-3 h-3" />
                            <span>加入</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Preset Quick Palettes */}
                  <div>
                    <span className="text-[11px] text-gray-500 block mb-1">設計師精選色票組合:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {presetPalettes.map((preset, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={() => setCustomHexColors(preset.colors)}
                          className="flex items-center gap-1.5 bg-[#F4F4F5] hover:bg-gray-200 border border-[#E4E4E7] rounded px-2 py-1 text-[10px] text-gray-700 font-medium transition cursor-pointer"
                        >
                          <div className="flex -space-x-1">
                            {preset.colors.slice(0, 3).map((c, i) => (
                              <span
                                key={i}
                                className="w-2.5 h-2.5 rounded-full border border-white"
                                style={{ backgroundColor: c }}
                              />
                            ))}
                          </div>
                          <span>{preset.name.split(' ')[0]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Influence Mode */}
                  <div>
                    <label className="text-[11px] text-gray-500 block mb-1">色彩套用強度</label>
                    <div className="grid grid-cols-3 gap-1.5">
                      <button
                        onClick={() => setColorGradingIntensity('dominant')}
                        className={`px-2 py-1 text-[11px] rounded border transition ${
                          colorGradingIntensity === 'dominant'
                            ? 'bg-[#18181B] text-white border-[#18181B] font-semibold'
                            : 'bg-[#F4F4F5] text-gray-600 border-transparent hover:bg-gray-200'
                        }`}
                      >
                        主導基調 (Dominant)
                      </button>
                      <button
                        onClick={() => setColorGradingIntensity('accent')}
                        className={`px-2 py-1 text-[11px] rounded border transition ${
                          colorGradingIntensity === 'accent'
                            ? 'bg-[#18181B] text-white border-[#18181B] font-semibold'
                            : 'bg-[#F4F4F5] text-gray-600 border-transparent hover:bg-gray-200'
                        }`}
                      >
                        局部點綴 (Accents)
                      </button>
                      <button
                        onClick={() => setColorGradingIntensity('atmospheric')}
                        className={`px-2 py-1 text-[11px] rounded border transition ${
                          colorGradingIntensity === 'atmospheric'
                            ? 'bg-[#18181B] text-white border-[#18181B] font-semibold'
                            : 'bg-[#F4F4F5] text-gray-600 border-transparent hover:bg-gray-200'
                        }`}
                      >
                        環境氛圍 (Ambient)
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-3 text-center text-xs text-gray-400 border-t border-[#E4E4E7]">
                  開啟後可自由自訂色票 HEX 代碼或選用經典配色，精準將色彩融入生成結果。
                </div>
              )}
            </div>
          </div>

          {/* Tags Grid - Clean Minimalist Cards */}
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
              Available Aesthetic Tags ({displayedItems.length})
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
              {displayedItems.map((item) => {
                const isSelected = selectedPromptIds.has(item.id);
                const isNegative = item.isNegative;

                return (
                  <div
                    key={item.id}
                    onClick={() => togglePrompt(item.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        togglePrompt(item.id);
                      }
                    }}
                    className={`flex flex-col items-start p-3.5 rounded-xl border text-left transition-all relative cursor-pointer select-none group ${
                      isSelected
                        ? isNegative
                          ? 'bg-[#27272A] text-white border-[#27272A] ring-2 ring-red-500/50 shadow-sm'
                          : 'bg-[#18181B] text-white border-[#18181B] shadow-sm'
                        : 'bg-white hover:border-gray-400 border-[#E4E4E7] text-[#18181B]'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1.5">
                      <span className={`text-[10px] uppercase font-mono tracking-wider truncate pr-1 ${
                        isSelected ? 'text-gray-300 opacity-80' : 'text-gray-400'
                      }`}>
                        {item.prompt.split(',')[0]}
                      </span>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {/* Info / Google Search Button */}
                        <button
                          type="button"
                          onClick={(e) => handleGoogleSearchStyle(e, item)}
                          title={`在 Google 搜尋「${item.label}」藝術風格範例與解析`}
                          className={`w-5 h-5 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-white/20 hover:bg-white/35 text-white'
                              : 'bg-gray-100 hover:bg-[#18181B] hover:text-white text-gray-500 opacity-80 group-hover:opacity-100'
                          }`}
                        >
                          <Info className="w-3 h-3 stroke-[2.5]" />
                        </button>

                        {/* Selection Check Indicator */}
                        {isSelected && (
                          <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                            isNegative ? 'bg-red-500 text-white' : 'bg-white text-black'
                          }`}>
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <span className="font-semibold text-sm leading-snug pr-2">
                      {item.label}
                    </span>

                    <p className={`text-[11px] mt-1 line-clamp-1 font-mono ${
                      isSelected ? 'text-gray-400' : 'text-gray-400'
                    }`}>
                      {item.prompt}
                    </p>
                  </div>
                );
              })}
            </div>

            {displayedItems.length === 0 && (
              <div className="text-center py-16 bg-white rounded-xl border border-[#E4E4E7] text-gray-400">
                <Search className="w-8 h-8 mx-auto mb-2 opacity-30" />
                <p className="text-sm">未找到相關關鍵字</p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Bottom Output Bar: Clean Minimalism Dark Footer */}
      <footer className="fixed bottom-0 left-0 right-0 h-24 bg-[#014600] text-white flex items-center px-8 z-40 border-t border-black/20 shadow-2xl">
        <div className="flex-1 pr-12">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${activeEngine === 'midjourney' ? 'bg-indigo-400' : 'bg-emerald-400'} animate-pulse`}></span>
              {activeEngine === 'midjourney' ? `MIDJOURNEY OUTPUT (${selectedMJVersion.toUpperCase()})` : 'UNIVERSAL AI NATURAL LANGUAGE OUTPUT'}
            </span>
            <span className="text-[10px] text-gray-400 font-mono">
              ({positiveCount} positive, {negativeCount} negative)
            </span>
          </div>
          <div className="font-mono text-xs md:text-sm leading-snug line-clamp-2 text-[#A1A1AA] select-all">
            {finalPrompt ? (
              <span style={{ fontFamily: 'Huninn, sans-serif', fontWeight: 'bold', fontSize: '15px', lineHeight: '25.25px', textAlign: 'left', fontStyle: 'normal' }}>{finalPrompt}</span>
            ) : (
              <span className="text-gray-400 italic" style={{ fontFamily: 'Huninn, sans-serif', fontWeight: 'bold', fontSize: '15px', lineHeight: '25.25px', textAlign: 'left', fontStyle: 'normal' }}>
                尚未選取提示詞，請點選上方標籤或輸入主體描述以即時合成 Prompt...
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={handleCopy}
            disabled={!finalPrompt}
            className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-100 disabled:opacity-40 text-black rounded-lg font-bold text-xs tracking-wider transition cursor-pointer"
          >
            <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY PROMPT'}</span>
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>

          <button 
            onClick={handleClearAll}
            title="清空全部"
            className="p-2.5 border border-gray-700 hover:border-gray-500 rounded-lg text-gray-400 hover:text-white transition cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}
