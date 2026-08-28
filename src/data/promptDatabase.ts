export interface SubCategory {
  id: string;
  name: string;
  englishName: string;
  color: string;
  desc?: string;
}

export interface PromptItem {
  id: string;
  subCategory?: string;
  label: string;
  prompt: string;
  categoryId?: CategoryKey;
  isNegative?: boolean;
}

export interface CategoryData {
  id: string;
  name: string;
  englishName: string;
  icon: string;
  description: string;
  subCategories?: SubCategory[];
  items: PromptItem[];
}

export type CategoryKey = 
  | 'commercialDesign'
  | 'photography'
  | 'composition'
  | 'classicalArt'
  | 'modernDesign'
  | 'materials'
  | 'negative';

export type AIPlatform = 'midjourney' | 'universal';

/**
 * 完整美學提示詞資料庫 (所有超過 10 個標籤的分類均具備結構化子分類)
 */
export const promptDatabase: Record<CategoryKey, CategoryData> = {
  commercialDesign: {
    id: 'commercialDesign',
    name: '產品設計與平面商業 Mockup',
    englishName: 'Product, Graphic & Mockup Design',
    icon: 'Package',
    description: '專為後製合成打造：無文字留白、乾淨包裝、展示台與商業攝影',
    subCategories: [
      { id: 'plinths', name: '展示台與幾何基座', englishName: 'Plinths & Display Stages', color: 'emerald', desc: '幾何石膏、大理石水波紋、懸浮展示台' },
      { id: 'branding', name: '品牌識別與海報型錄', englishName: 'Branding, Posters & Editorial', color: 'blue', desc: '純白背景、極簡名片、海報與型錄' },
      { id: 'packaging', name: '產品包裝與瓶器容器', englishName: 'Packaging & Vessels', color: 'amber', desc: '磨砂瓶、包裝盒、易開罐、T-Shirt、軟管' },
      { id: 'render_optics', name: '3D原型與百葉窗光影', englishName: '3D Clay & Gobo Shadows', color: 'purple', desc: '黏土模型、UI螢幕框、百葉窗幾何投影' }
    ],
    items: [
      { id: 'cm1', subCategory: 'branding', label: '極簡白底產品攝影 (Studio Isolate)', prompt: 'clean product photography, isolated on pure solid white background, studio softbox illumination, crisp shadow underneath, ready for graphic mockup composite' },
      { id: 'cm2', subCategory: 'packaging', label: '極致留白包裝盒 Mockup', prompt: 'blank minimalist packaging box mockup, blank surface with no labels, clean matte paper texture, studio soft shadows, negative space for design placeholder' },
      { id: 'cm3', subCategory: 'packaging', label: '化妝品磨砂玻璃瓶瓶器', prompt: 'luxury frosted glass cosmetic bottle mockup, blank clean container, subtle subsurface scattering, water droplets, beauty product commercial visual' },
      { id: 'cm4', subCategory: 'plinths', label: '幾何石膏基座與展示台 (Podium)', prompt: 'geometric plaster podium pedestal, clean aesthetic display stand, architectural casting, soft morning ambient light, blank mockup space' },
      { id: 'cm5', subCategory: 'branding', label: '平面海報展示場景 (Poster Mockup)', prompt: 'blank A4 vertical poster mockup hanging on minimal concrete wall, realistic paper cast shadow, clean interior scene, no graphics on poster' },
      { id: 'cm6', subCategory: 'branding', label: '極簡名片/文具品牌識別 (Branding)', prompt: 'blank luxury corporate stationery branding mockup, business cards, letterhead, minimal clean layout, embossed paper texture' },
      { id: 'cm7', subCategory: 'packaging', label: '頂級霧面飲料易開罐/咖啡杯', prompt: 'blank aluminum can and matte coffee cup mockup, no branding, condensation drops, high commercial advertising quality' },
      { id: 'cm8', subCategory: 'packaging', label: '純白有機棉 T-Shirt 鋪平平拍 (Flat Lay)', prompt: 'blank white heavyweight cotton t-shirt mockup, neat flat lay arrangement, natural fabric folds, neutral studio backdrop' },
      { id: 'cm9', subCategory: 'render_optics', label: '3C 設備螢幕框 (UI Device Mockup)', prompt: 'sleek borderless tablet and smartphone floating in clean space, blank glowing screen mockup, minimal clay render aesthetic' },
      { id: 'cm10', subCategory: 'plinths', label: '懸浮漂浮動態產品攝影 (Levitating)', prompt: 'levitating floating product composition, dynamic gravity-defying balance, clean isolated environment, sharp studio highlights' },
      { id: 'cm11', subCategory: 'plinths', label: '大理石與幾何水波紋展示台', prompt: 'luxury polished marble plinth with clean ripple water reflection, crystal clear surface, high-end perfume commercial photography' },
      { id: 'cm12', subCategory: 'branding', label: '平視極簡商品目錄型錄 (Lookbook)', prompt: 'minimalist fashion brand lookbook aesthetic, neutral studio set, clean lines, editorial product presentation' },
      { id: 'cm13', subCategory: 'packaging', label: '粗礪紙袋與牛皮紙盒工藝包裝', prompt: 'blank kraft paper shopping bag and cardboard packaging box mockup, tactile fiber texture, eco-friendly branding mockup' },
      { id: 'cm14', subCategory: 'packaging', label: '軟管保養品/乳液乾淨瓶身', prompt: 'blank matte cosmetic squeeze tube mockup, pure minimal background, soft gradient rim lighting, high commercial finish' },
      { id: 'cm15', subCategory: 'render_optics', label: 'C4D/Clay 黏土純白原型 (Clay Render)', prompt: '3D clay render of product prototype, pure matte white shader, ambient occlusion, smooth topology, Industrial Design rendering' },
      { id: 'cm16', subCategory: 'render_optics', label: '幾何光影百葉窗剪影投影 (Gobo)', prompt: 'clean aesthetic product placement with subtle window venetian blind shadow projection (gobo), artistic minimal branding' }
    ]
  },
  photography: {
    id: 'photography',
    name: '攝影器材與鏡頭語言',
    englishName: 'Photography, Lenses & Masters',
    icon: 'Camera',
    description: '當代攝影大師風格、電影級鏡頭語言、景深與光影調校',
    subCategories: [
      { id: 'masters', name: '當代攝影大師風格', englishName: 'Contemporary Masters', color: 'indigo', desc: 'Annie Leibovitz、Peter Lindbergh、森山大道等大師語彙' },
      { id: 'lenses', name: '鏡頭焦段與光學', englishName: 'Lenses & Optics', color: 'amber', desc: '85mm 淺景深、24mm 廣角、變形寬銀幕、移軸與黑柔' },
      { id: 'lighting', name: '光影調校與氛圍', englishName: 'Lighting & Atmospheres', color: 'emerald', desc: '柔光箱、丁達爾耶穌光、黃金時刻暖陽、賽博霓虹' }
    ],
    items: [
      // 1. 當代攝影大師風格 (Masters)
      { id: 'p_photog1', subCategory: 'masters', label: 'Annie Leibovitz 戲劇電影感人像', prompt: 'in the style of Annie Leibovitz, dramatic cinematic lighting, rich textured environment, painterly environmental portrait, intimate storytelling' },
      { id: 'p_photog2', subCategory: 'masters', label: 'Peter Lindbergh 純粹黑白極簡人像', prompt: 'in the style of Peter Lindbergh, raw unvarnished black and white photography, timeless monochrome, emotional natural beauty, high contrast silver gelatin print' },
      { id: 'p_photog3', subCategory: 'masters', label: 'Gregory Crewdson 詭譎郊區電影光影', prompt: 'in the style of Gregory Crewdson, cinematic suburban twilight, elaborate staging, surreal eerie atmosphere, large format photography, evocative moody narrative' },
      { id: 'p_photog4', subCategory: 'masters', label: 'Steve McCurry 濃郁人文纪實色彩', prompt: 'in the style of Steve McCurry, vibrant saturated Kodachrome colors, piercing soulful eyes, National Geographic documentary portraiture, dramatic warm lighting' },
      { id: 'p_photog5', subCategory: 'masters', label: 'Tim Walker 奇幻時尚童話夢境', prompt: 'in the style of Tim Walker, whimsical avant-garde fashion photography, theatrical oversized props, fairy-tale surrealism, pastel color palette' },
      { id: 'p_photog6', subCategory: 'masters', label: '川內倫子 (Rinko Kawauchi) 空靈日常微光', prompt: 'in the style of Rinko Kawauchi, ethereal Japanese aesthetic, overexposed soft translucent light, square 6x6 format, tranquil poetic everyday micro-moments' },
      { id: 'p_photog7', subCategory: 'masters', label: '森山大道 (Daido Moriyama) 粗顆粒街頭晃動', prompt: 'in the style of Daido Moriyama, rough grainy black and white (Are, Bure, Boke), blurry motion, gritty high contrast snapshot, urban street photography' },
      { id: 'p_photog8', subCategory: 'masters', label: 'Nan Goldin 原始私密紀實光影', prompt: 'in the style of Nan Goldin, raw snapshot aesthetic, candid direct flash, saturated moody neon interior, emotional cinematic intimacy' },

      // 2. 鏡頭焦段與光學 (Lenses & Optics)
      { id: 'p_lens1', subCategory: 'lenses', label: '變形寬銀幕電影鏡頭 (Anamorphic)', prompt: 'shot on anamorphic lens, 2.39:1 widescreen cinematic ratio, horizontal blue streak flare, oval optical bokeh, shallow depth of field' },
      { id: 'p_lens2', subCategory: 'lenses', label: '85mm f/1.2 頂級人像極淺景深', prompt: 'shot on 85mm f/1.2 prime lens, razor sharp eye focus, creamy dreamy background falloff, three-dimensional subject isolation' },
      { id: 'p_lens3', subCategory: 'lenses', label: '24mm 電影級超廣角透視張力', prompt: 'shot on 24mm wide angle cinema lens, dramatic expansive perspective, sweeping leading lines, deep environmental depth' },
      { id: 'p_lens4', subCategory: 'lenses', label: '100mm 1:1 微距光學細節', prompt: 'shot on 100mm macro lens, 1:1 reproduction ratio, microscopic textural clarity, razor thin focal plane, crystalline precision' },
      { id: 'p_lens5', subCategory: 'lenses', label: '移軸鏡頭微縮模型效果 (Tilt-Shift)', prompt: 'tilt-shift lens photography, miniature diorama effect, selective sharp slice of focus, blurred top and bottom margins' },
      { id: 'p_lens6', subCategory: 'lenses', label: '魚眼鏡頭極致球形畸變 (Fisheye)', prompt: 'fisheye lens distortion, 180-degree spherical field of view, dramatic curved horizon, dynamic bubble perspective' },
      { id: 'p_lens7', subCategory: 'lenses', label: '復古電影柔焦鏡/黑柔濾鏡 (Black Pro-Mist)', prompt: 'shot with 1/4 Black Pro-Mist filter, bloomed organic highlights, lowered digital contrast, dreamy soft vintage glow' },
      { id: 'p_lens8', subCategory: 'lenses', label: '望遠長焦壓縮感 (200mm Telephoto)', prompt: 'shot on 200mm telephoto lens, intense background compression, layered graphic depth, flattened spatial perspective' },

      // 3. 光影調校與氛圍 (Lighting & Atmospheres)
      { id: 'p1', subCategory: 'lighting', label: '柔和漫射柔光箱', prompt: 'soft diffused studio lighting, gentle gradient shadows, wrap-around illumination' },
      { id: 'p2', subCategory: 'lighting', label: '電影級輪廓光/邊緣光', prompt: 'cinematic rim lighting, dramatic edge highlights, separating backlight' },
      { id: 'p3', subCategory: 'lighting', label: '倫勃朗經典三角光', prompt: 'Rembrandt lighting, classic portrait chiaroscuro, luminous cheek triangle' },
      { id: 'p4', subCategory: 'lighting', label: '黃金時刻落日暖陽', prompt: 'golden hour lighting, warm ambient low-angled sunlight, glowing atmospheric haze' },
      { id: 'p5', subCategory: 'lighting', label: '藍調時刻冷冽微光', prompt: 'blue hour atmosphere, cool twilight ambient tones, tranquil melancholic mood' },
      { id: 'p7', subCategory: 'lighting', label: '慢門長曝光動態光軌', prompt: 'long exposure photography, smooth silky motion blur, luminous kinetic light trails' },
      { id: 'p8', subCategory: 'lighting', label: '底片雙重曝光疊影', prompt: 'double exposure photography, surreal silhouette blended overlay' },
      { id: 'p12', subCategory: 'lighting', label: '35mm 復古膠卷顆粒 (Kodak Portra)', prompt: '35mm vintage film photography, authentic organic grain, Kodak Portra 400 warm skin tones' },
      { id: 'p13', subCategory: 'lighting', label: '賽博龐克雙色霓虹對比', prompt: 'cyberpunk dual neon lighting, high-contrast cyan and magenta split illumination' },
      { id: 'p14', subCategory: 'lighting', label: '電影級丁達爾體積光/耶穌光', prompt: 'cinematic volumetric lighting, dusty sunbeams, atmospheric God rays, Tyndall effect' },
      { id: 'p15', subCategory: 'lighting', label: '低調暗部光影 (Low-Key Moody)', prompt: 'low-key lighting, deep rich shadows, mysterious chiaroscuro mood' },
      { id: 'p16', subCategory: 'lighting', label: '高調透亮清新光 (High-Key Ethereal)', prompt: 'high-key lighting, bright airy ethereal aesthetic, soft glowing highlights' },
      { id: 'p17', subCategory: 'lighting', label: '逆光強烈剪影張力', prompt: 'backlit silhouette, strong high contrast graphic outline, golden edge glow' },
      { id: 'p18', subCategory: 'lighting', label: '前衛直閃/環形閃光燈 (Direct Flash)', prompt: 'direct on-camera flash, hard shadow edge, 90s party snapshot, high-fashion gloss' }
    ]
  },
  composition: {
    id: 'composition',
    name: '視角與構圖',
    englishName: 'Angles & Composition',
    icon: 'Compass',
    description: '視覺導引、幾何張力與空間比例',
    subCategories: [
      { id: 'perspective', name: '機位視角與空間透視', englishName: 'Camera Angles & Perspective', color: 'cyan', desc: '鳥瞰、仰視、荷蘭角、等距軸測與極致特寫' },
      { id: 'geometry', name: '幾何構圖與比例導引', englishName: 'Geometry & Visual Flow', color: 'indigo', desc: '三分法、絕對對稱、黃金螺旋、引導線、負空間留白' }
    ],
    items: [
      { id: 'c1', subCategory: 'geometry', label: '經典三分法', prompt: 'rule of thirds composition, balanced focal point' },
      { id: 'c2', subCategory: 'geometry', label: '絕對對稱美學', prompt: 'perfect symmetrical composition, geometric equilibrium' },
      { id: 'c3', subCategory: 'perspective', label: '鳥瞰空拍視角', prompt: 'aerial bird-eye view, drone photography, top-down perspective' },
      { id: 'c4', subCategory: 'perspective', label: '仰視低角度張力', prompt: 'low angle worm-eye view, imposing perspective, heroic framing' },
      { id: 'c5', subCategory: 'perspective', label: '荷蘭角傾斜構圖', prompt: 'Dutch angle shot, dynamic tilted perspective, tension' },
      { id: 'c6', subCategory: 'geometry', label: '透視引導線', prompt: 'strong leading lines, vanishing point perspective' },
      { id: 'c7', subCategory: 'geometry', label: '負空間/留白美學', prompt: 'minimalist negative space, elegant breathing room' },
      { id: 'c8', subCategory: 'geometry', label: '畫中畫自然框景', prompt: 'frame within a frame composition, layered foreground' },
      { id: 'c9', subCategory: 'perspective', label: '等距軸測視角', prompt: 'isometric view, orthographic projection, 3D diorama angle' },
      { id: 'c10', subCategory: 'geometry', label: '黃金螺旋構圖', prompt: 'golden ratio spiral composition, harmonious proportions' },
      { id: 'c11', subCategory: 'perspective', label: '極致特寫', prompt: 'extreme close-up shot, intense focal point' },
      { id: 'c12', subCategory: 'geometry', label: '動態對角線構圖', prompt: 'dynamic diagonal composition, kinetic energy flow' }
    ]
  },
  classicalArt: {
    id: 'classicalArt',
    name: '古典與近代藝術大師',
    englishName: 'Classical & Art History',
    icon: 'Palette',
    description: '文藝復興、巴洛克、畢卡索立體派、達利超寫實等大師時代風格',
    subCategories: [
      { id: 'masters_avant', name: '近代先鋒與立體超寫實', englishName: 'Modern Avant-Garde', color: 'rose', desc: '畢卡索立體派、達利超寫實夢境、表現主義與象徵主義' },
      { id: 'renaissance_classic', name: '文藝復興與古典莊嚴', englishName: 'Renaissance to Baroque', color: 'amber', desc: '達文西暈塗、巴洛克戲劇明暗、洛可可、荷蘭黃金時代' },
      { id: 'impression_east', name: '印象點彩與東方風雅', englishName: 'Impressionism & East Art', color: 'teal', desc: '莫內印象派、秀拉點彩、日本浮世繪、慕夏新藝術' }
    ],
    items: [
      { id: 'ca16', subCategory: 'masters_avant', label: '畢卡索立體派幾何碎裂 (Picasso)', prompt: 'Cubism style, in the style of Pablo Picasso, fractured geometric planes, multiple viewpoints, angular abstracted forms, iconic cubist portraiture' },
      { id: 'ca17', subCategory: 'masters_avant', label: '達利超寫實主義與融化夢境 (Dali)', prompt: 'Surrealism, in the style of Salvador Dali, hyper-realistic uncanny dreamscapes, melting clocks, bizarre desert juxtaposition, metaphysical symbolism, razor-sharp illusionism' },
      { id: 'ca1', subCategory: 'renaissance_classic', label: '文藝復興古典美學', prompt: 'Italian High Renaissance style, Leonardo da Vinci sfumato, graceful realism' },
      { id: 'ca2', subCategory: 'renaissance_classic', label: '巴洛克戲劇明暗', prompt: 'Baroque style, Caravaggio chiaroscuro, intense dramatic atmosphere' },
      { id: 'ca3', subCategory: 'renaissance_classic', label: '洛可可優雅華麗', prompt: 'Rococo aesthetic, pastel palette, ornate filigree details, Fragonard style' },
      { id: 'ca4', subCategory: 'renaissance_classic', label: '浪漫主義崇高壯闊', prompt: 'Romanticism art style, Caspar David Friedrich sublime mood, sweeping landscapes' },
      { id: 'ca5', subCategory: 'impression_east', label: '印象派自然光斑', prompt: 'Impressionism, Claude Monet dabbed brushwork, plein air luminous color vibrance' },
      { id: 'ca6', subCategory: 'impression_east', label: '後印象派點彩畫派', prompt: 'Pointillism, Georges Seurat dot technique, vibrant optical color mixing' },
      { id: 'ca7', subCategory: 'impression_east', label: '日本江戶浮世繪', prompt: 'Ukiyo-e woodblock print style, Hokusai wave dynamics, clean outlines' },
      { id: 'ca8', subCategory: 'impression_east', label: '新藝術運動自然曲線', prompt: 'Art Nouveau, Alphonse Mucha sinuous organic lines, floral ornamental borders' },
      { id: 'ca9', subCategory: 'impression_east', label: '裝飾藝術幾何奢華', prompt: 'Art Deco style, lavish geometric symmetry, gilded gold leaf luxury' },
      { id: 'ca10', subCategory: 'masters_avant', label: '表現主義強烈情感', prompt: 'German Expressionism, Edvard Munch emotional intensity, distorted bold brushstrokes' },
      { id: 'ca11', subCategory: 'masters_avant', label: '象徵主義神秘夢境', prompt: 'Symbolism art style, Gustav Klimt patterned gold leaf, esoteric mystical mood' },
      { id: 'ca12', subCategory: 'impression_east', label: '前拉斐爾派細膩自然', prompt: 'Pre-Raphaelite Brotherhood style, vivid botanical realism, ethereal medievalism' },
      { id: 'ca13', subCategory: 'renaissance_classic', label: '荷蘭黃金時代靜物', prompt: 'Dutch Golden Age painting, Vermeer soft window light, rich tactile textures' },
      { id: 'ca14', subCategory: 'renaissance_classic', label: '哥德式大教堂彩繪玻璃', prompt: 'Gothic stained glass art, luminous medieval sacred aesthetic, leaded lines' },
      { id: 'ca15', subCategory: 'renaissance_classic', label: '拜占庭金箔馬賽克', prompt: 'Byzantine gold mosaic style, flat sacred iconography, gilded tesserae' }
    ]
  },
  modernDesign: {
    id: 'modernDesign',
    name: '現代與當代藝術/設計流派',
    englishName: 'Modern & Design Movements',
    icon: 'Shapes',
    description: '包浩斯、極簡、迷幻藝術、賽博龐克、孟菲斯與現代視覺',
    subCategories: [
      { id: 'psychedelic_avant', name: '迷幻概念與先鋒流派', englishName: 'Psychedelic & Avant-Garde', color: 'fuchsia', desc: '60s 迷幻藝術、超現實主義、酸性設計、抽象表現' },
      { id: 'modernism_grid', name: '理性主義與網格極簡', englishName: 'Rationalism & Minimalism', color: 'slate', desc: '包浩斯、瑞士網格、純粹極簡、粗獷主義混凝土' },
      { id: 'pop_future', name: '潮流普普與未來美學', englishName: 'Pop, Retro & Futuristic', color: 'violet', desc: '普普藝術、孟菲斯狂想、賽博龐克、蒸氣波、太陽龐克' }
    ],
    items: [
      { id: 'md_psychedelic', subCategory: 'psychedelic_avant', label: '60s 迷幻藝術 (Psychedelic Art)', prompt: 'Psychedelic Art style, 1960s counterculture poster aesthetic, swirling optical patterns, vibrant neon kaleidoscopic colors, fluid organic distortion, trippy dreamscape' },
      { id: 'md3', subCategory: 'psychedelic_avant', label: '超現實主義迷幻夢境 (Surrealism)', prompt: 'Surrealism, Salvador Dali dreamlike juxtaposition, melting metaphysics, impossible architecture' },
      { id: 'md1', subCategory: 'modernism_grid', label: '包浩斯功能理性主義', prompt: 'Bauhaus design aesthetic, clean functionalism, primary geometric shapes' },
      { id: 'md2', subCategory: 'modernism_grid', label: '瑞士國際主義網格', prompt: 'Swiss International Typographic Style, structured asymmetric grid, modern minimalism' },
      { id: 'md4', subCategory: 'modernism_grid', label: '純粹極簡主義', prompt: 'Contemporary Minimalism, serene simplicity, pristine reduction' },
      { id: 'md5', subCategory: 'pop_future', label: '普普藝術大眾色彩', prompt: 'Pop Art style, Andy Warhol screenprint dots, bold saturated primary colors' },
      { id: 'md6', subCategory: 'pop_future', label: '孟菲斯狂想幾何', prompt: 'Memphis Design movement, 80s quirky geometric patterns, vibrant contrast pastels' },
      { id: 'md7', subCategory: 'modernism_grid', label: '俄羅斯構成主義', prompt: 'Russian Constructivism, bold red-black palette, diagonal typographic dynamism' },
      { id: 'md8', subCategory: 'psychedelic_avant', label: '義大利未來主義', prompt: 'Futurism art, kinetic velocity, speed lines, mechanistic dynamism' },
      { id: 'md9', subCategory: 'psychedelic_avant', label: '抽象表現主義潑墨', prompt: 'Abstract Expressionism, Jackson Pollock dynamic drip action painting, emotional raw strokes' },
      { id: 'md10', subCategory: 'pop_future', label: '賽博龐克高科技低生活', prompt: 'Cyberpunk aesthetic, neon-drenched metropolis, holographic rain reflections' },
      { id: 'md11', subCategory: 'pop_future', label: '蒸氣波復古夢幻', prompt: 'Vaporwave aesthetic, 90s aesthetic glitched nostalgia, pastel marble statues, retro sunset' },
      { id: 'md12', subCategory: 'pop_future', label: '太陽龐克生態未來', prompt: 'Solarpunk aesthetic, utopian green architecture, sunlight and blooming lush foliage' },
      { id: 'md13', subCategory: 'modernism_grid', label: '侘寂不完美日式哲學', prompt: 'Wabi-sabi aesthetic, earthy raw clay textures, weathered organic serenity' },
      { id: 'md14', subCategory: 'modernism_grid', label: '粗獷主義混凝土美學', prompt: 'Brutalism architectural aesthetic, raw exposed concrete, massive monolithic forms' },
      { id: 'md15', subCategory: 'pop_future', label: '低多邊形立體幾何', prompt: 'Low-poly art style, geometric faceted surfaces, isometric polygon styling' },
      { id: 'md16', subCategory: 'psychedelic_avant', label: '歐普藝術視覺錯覺', prompt: 'Op Art, optical illusion patterns, black and white pulsating rhythmic waves' },
      { id: 'md17', subCategory: 'psychedelic_avant', label: '酸性設計實驗先鋒', prompt: 'Acid Graphics, chromatic metallic chrome, trippy warped typography, liquid mercury' }
    ]
  },
  materials: {
    id: 'materials',
    name: '插畫媒材與材質工藝',
    englishName: 'Mediums & Textures',
    icon: 'Brush',
    description: '水彩、油畫、陶藝、玻璃、3D渲染等材質觸感',
    subCategories: [
      { id: 'drawing', name: '手繪筆觸與插畫筆刷', englishName: 'Drawings & Brushstrokes', color: 'orange', desc: '小畫家滑鼠塗鴉、童趣蠟筆、水彩暈染、油畫刮刀、水墨' },
      { id: 'craft', name: '實體工藝與手工印刷', englishName: 'Crafts & Printmaking', color: 'emerald', desc: '陶瓷釉面、黏土定格、剪紙、刺繡金線、孔版印刷' },
      { id: 'optical_3d', name: '光學質感與3D渲染', englishName: '3D & Optical Finishes', color: 'blue', desc: '磨砂玻璃、金屬拉絲、彩色玻璃、環氧樹脂、Octane 3D' }
    ],
    items: [
      { id: 'm_mspaint', subCategory: 'drawing', label: 'Windows 小畫家滑鼠拙劣塗鴉 (MS Paint Clumsy Doodles)', prompt: 'clumsy MS Paint drawing, naive amateur digital art, drawn with computer mouse, imperfect shaky pixelated lines, raw bright basic color fills, Microsoft Paint spray can airbrush texture, crude awkward charming doodle' },
      { id: 'm_childish', subCategory: 'drawing', label: '天真童趣拙劣蠟筆畫 (Naive Child Drawing)', prompt: 'naive childish crayon drawing, primitive stick figures, messy uncoordinated scribbles, charmingly crude lines, paper texture' },
      { id: 'm1', subCategory: 'drawing', label: '珠光透明水彩暈染', prompt: 'delicate transparent watercolor wash, wet-on-wet pigments, cold-press paper texture' },
      { id: 'm2', subCategory: 'drawing', label: '厚塗油畫刮刀筆觸', prompt: 'heavy impasto oil painting, thick textural palette knife strokes, tactile paint peaks' },
      { id: 'm3', subCategory: 'craft', label: '溫潤陶瓷釉面光澤', prompt: 'ceramic glazed pottery finish, celadon craquelure gloss, tactile clay' },
      { id: 'm4', subCategory: 'optical_3d', label: '磨砂半透明玻璃', prompt: 'frosted translucent sea glass, soft internal light refraction, matte blur' },
      { id: 'm5', subCategory: 'drawing', label: '東方水墨流動意境', prompt: 'traditional Chinese ink wash painting, Sumi-e brush dynamics, poetic atmospheric mist' },
      { id: 'm6', subCategory: 'craft', label: '定格黏土捏塑定格', prompt: 'claymation stop-motion aesthetic, sculpted polymer clay with subtle fingerprint textures' },
      { id: 'm7', subCategory: 'craft', label: '層次剪紙陰影浮雕', prompt: 'layered paper cut art, 3D papercraft depth, cast paper shadows, clean craft edges' },
      { id: 'm8', subCategory: 'craft', label: '溫暖針織毛線紋理', prompt: 'cozy chunky knit wool yarn texture, intricate woven textile weave' },
      { id: 'm9', subCategory: 'craft', label: '刺繡絲綢金線工藝', prompt: 'intricate silk embroidery, raised satin stitch threads, shimmering metallic threads' },
      { id: 'm10', subCategory: 'craft', label: '孔版印刷復古錯位', prompt: 'Risograph print effect, halftone screen dot patterns, vibrant misregistered overlay inks' },
      { id: 'm11', subCategory: 'craft', label: '絲網版畫印刷質感', prompt: 'silkscreen printmaking texture, flat gouache inks, distinct layered color blocks' },
      { id: 'm12', subCategory: 'craft', label: '銅版微雕蝕刻細線', prompt: 'copperplate engraving etching, fine cross-hatching linework, vintage botanical print style' },
      { id: 'm13', subCategory: 'craft', label: '燙金箔浮雕細節', prompt: 'embossed gold foil stamping, reflective gilded leaf accents, tactile luxury cardstock' },
      { id: 'm14', subCategory: 'drawing', label: '粉彩柔和蠟筆筆觸', prompt: 'soft pastel chalk drawing, blended velvety dust textures, creamy crayon accents' },
      { id: 'm15', subCategory: 'drawing', label: '炭筆粗獷素描', prompt: 'raw charcoal sketch, expressive tonal smudges, textured kraft paper' },
      { id: 'm16', subCategory: 'optical_3d', label: '金屬拉絲與陽極氧化', prompt: 'brushed anodized metal surface, specular highlights, premium matte alloy' },
      { id: 'm17', subCategory: 'optical_3d', label: '彩色玻璃幾何嵌合', prompt: 'tessellated stained glass panels, luminous jewel-toned transmission, black iron solder' },
      { id: 'm18', subCategory: 'optical_3d', label: '水晶環氧樹脂封存', prompt: 'crystal clear epoxy resin casting, preserved suspended inclusions, hyper-glossy sheen' },
      { id: 'm19', subCategory: 'optical_3d', label: 'Octane 頂級3D渲染', prompt: '3D Octane render, raytraced subsurface scattering, physically based rendering (PBR), Unreal Engine 5' },
      { id: 'm20', subCategory: 'drawing', label: '向量極簡扁平插畫', prompt: 'clean flat vector illustration, smooth bezier curves, bold graphic silhouette' },
      { id: 'm21', subCategory: 'optical_3d', label: '全息彩虹折射光膜', prompt: 'iridescent holographic foil texture, prismatic rainbow color shift' },
      { id: 'm22', subCategory: 'craft', label: '古老羊皮紙斑駁質感', prompt: 'aged weathered parchment texture, sepia deckled edges, historical manuscript feel' }
    ]
  },
  negative: {
    id: 'negative',
    name: '負面提示詞與純淨度',
    englishName: 'Negative & Purity Controls',
    icon: 'ShieldAlert',
    description: '去除干擾雜質、背景純化與防崩壞參數',
    subCategories: [
      { id: 'purity', name: '畫面純淨與背景除雜', englishName: 'Background & Purity', color: 'red', desc: '去人物、純白背景、去浮水印文字、去噪點' },
      { id: 'quality', name: '防結構崩壞與畫質控制', englishName: 'Anti-Defect & Quality', color: 'rose', desc: '防肢體崩壞、防模糊低清、防過曝死白、防塑料感' }
    ],
    items: [
      { id: 'n1', subCategory: 'purity', label: '去除人物/無人景觀', prompt: 'human, people, person, crowd, silhouette of person' },
      { id: 'n2', subCategory: 'purity', label: '純白極簡無雜物背景', prompt: 'cluttered background, complex patterns, dark shadows, noise' },
      { id: 'n3', subCategory: 'purity', label: '去除浮水印與文字亂碼 (Mockup必選)', prompt: 'watermark, text, letters, typography, signature, logo, copyright notice, banner, sticker, label' },
      { id: 'n4', subCategory: 'quality', label: '防止肢體崩壞畸形', prompt: 'extra limbs, bad anatomy, deformed fingers, mutated hands, poorly drawn hands, missing limbs' },
      { id: 'n5', subCategory: 'quality', label: '防止畫面模糊與低解析度', prompt: 'blurry, low resolution, jpeg artifacts, pixelated, out of focus, low quality' },
      { id: 'n6', subCategory: 'purity', label: '乾淨邊緣/防止邊框裁切', prompt: 'cropped, frame, border, split screen, out of frame' },
      { id: 'n7', subCategory: 'quality', label: '防止過度曝光死白', prompt: 'overexposed, blown out highlights, extreme glare' },
      { id: 'n8', subCategory: 'purity', label: '純淨無噪點雜訊 (合成必選)', prompt: 'grain, noise, dirty background, dust specks, chromatic aberration, scratches' },
      { id: 'n9', subCategory: 'quality', label: '去除了無生氣的灰色調', prompt: 'muddy colors, desaturated, washed out, dull lighting' },
      { id: 'n10', subCategory: 'quality', label: '去除非寫實塑料假人感', prompt: 'uncanny valley, plastic skin, doll face, cheap 3d render look, airbrushed' },
      { id: 'n11', subCategory: 'purity', label: '孤立物體/無環境雜景', prompt: 'complex background, busy room, realistic environment, outdoors, ground texture' }
    ]
  }
};

// 支援的 AI 引擎與模型版本
export const midjourneyVersions = [
  { 
    id: 'v8.2', 
    name: 'Midjourney v8.2', 
    shortName: 'V8.2',
    param: '--v 8.2', 
    strength: '極速、高解析、完美文字呈現', 
    suitableFor: '電商海報、UI設計、平面廣告',
    desc: '最新旗艦版，文字渲染極佳、極致商業質感' 
  },
  { 
    id: 'v7', 
    name: 'Midjourney v7', 
    shortName: 'V7',
    param: '--v 7', 
    strength: '語義精準、手部結構好、具備草稿模式', 
    suitableFor: '快速概念探索、複雜人物場景',
    desc: '精準語意理解，支援更快的 Draft 模式' 
  },
  { 
    id: 'v6.1', 
    name: 'Midjourney v6.1', 
    shortName: 'V6.1',
    param: '--v 6.1', 
    strength: '電影級光影、高寫實感', 
    suitableFor: '商業攝影、擬真人物、電影美術',
    desc: '成熟的光影表現力與真實皮膚紋理' 
  },
  { 
    id: 'v6.0', 
    name: 'Midjourney v6.0', 
    shortName: 'V6.0',
    param: '--v 6.0', 
    strength: '文字嵌入能力、長句語義理解', 
    suitableFor: '海報招牌、排版設計',
    desc: '高解析度排版與寫實構圖' 
  },
  { 
    id: 'niji7', 
    name: 'Niji Journey v7', 
    shortName: 'Niji 7',
    param: '--niji 7', 
    strength: '頂級動漫插畫、二次元細節', 
    suitableFor: '輕小說封面、動漫周邊、插畫設計',
    desc: '最新二次元與動畫大師風格特化引擎' 
  },
  { 
    id: 'niji6', 
    name: 'Niji Journey v6', 
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

export const subCategoryColorMap: Record<string, { bg: string; text: string; border: string; activeBg: string; activeText: string; dot: string }> = {
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', activeBg: 'bg-indigo-900/80', activeText: 'text-indigo-200', dot: 'bg-indigo-500' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', activeBg: 'bg-amber-900/80', activeText: 'text-amber-200', dot: 'bg-amber-500' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', activeBg: 'bg-emerald-900/80', activeText: 'text-emerald-200', dot: 'bg-emerald-500' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', activeBg: 'bg-blue-900/80', activeText: 'text-blue-200', dot: 'bg-blue-500' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', activeBg: 'bg-purple-900/80', activeText: 'text-purple-200', dot: 'bg-purple-500' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200', activeBg: 'bg-cyan-900/80', activeText: 'text-cyan-200', dot: 'bg-cyan-500' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', activeBg: 'bg-rose-900/80', activeText: 'text-rose-200', dot: 'bg-rose-500' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200', activeBg: 'bg-teal-900/80', activeText: 'text-teal-200', dot: 'bg-teal-500' },
  fuchsia: { bg: 'bg-fuchsia-50', text: 'text-fuchsia-700', border: 'border-fuchsia-200', activeBg: 'bg-fuchsia-900/80', activeText: 'text-fuchsia-200', dot: 'bg-fuchsia-500' },
  slate: { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-300', activeBg: 'bg-slate-800', activeText: 'text-slate-200', dot: 'bg-slate-500' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', activeBg: 'bg-violet-900/80', activeText: 'text-violet-200', dot: 'bg-violet-500' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', activeBg: 'bg-orange-900/80', activeText: 'text-orange-200', dot: 'bg-orange-500' },
  red: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', activeBg: 'bg-red-900/80', activeText: 'text-red-200', dot: 'bg-red-500' }
};
