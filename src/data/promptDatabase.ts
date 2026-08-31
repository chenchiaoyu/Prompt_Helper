export interface SubCategory {
  id: string;
  name: string;
  englishName: string;
  color: string;
  desc?: string;
}

export interface ArtTimelineInfo {
  era: string; // e.g. "15-16 世紀"
  period: string; // e.g. "文藝復興"
  yearRange: string; // e.g. "c. 1400 - 1600"
  order: number; // 排序用 1 ~ 8
  historicalContext: string; // 簡短歷史背景
}

export interface PromptItem {
  id: string;
  subCategory?: string;
  label: string;
  prompt: string;
  categoryId?: CategoryKey;
  isNegative?: boolean;
  timeline?: ArtTimelineInfo;
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
  | "materials"
  | "classicalArt"
  | "modernDesign"
  | "commercialDesign"
  | "photography"
  | "negative";

export type AIPlatform = "midjourney" | "universal";

export type NoiseLevel = "none" | "clean" | "subtle" | "medium" | "heavy" | "dither";

export interface NoiseOption {
  id: NoiseLevel;
  label: string;
  shortLabel: string;
  description: string;
  prompt: string;
  negativePrompt?: string;
  intensity: number; // 0 to 100
}

export const noiseOptions: NoiseOption[] = [
  {
    "id": "none",
    "label": "預設 (無特定標註)",
    "shortLabel": "預設",
    "description": "不強制干預噪點，由模型與風格詞自然決定",
    "prompt": "",
    "intensity": 0
  },
  {
    "id": "clean",
    "label": "純淨無噪點 (Zero Noise / Clean)",
    "shortLabel": "0% 純淨",
    "description": "去除任何雜訊顆粒，呈現極致平滑的現代數位渲染與純淨表面",
    "prompt": "clean noise-free rendering, smooth surface finish, pristine digital clarity",
    "negativePrompt": "grain, noise, ISO noise, chromatic aberration, dusty background, artifacts, scratches",
    "intensity": 0
  },
  {
    "id": "subtle",
    "label": "微幅有機顆粒 (Subtle Organic Grain)",
    "shortLabel": "25% 微細",
    "description": "極微弱的細緻有機噪點，增加物理質感與防塑膠感",
    "prompt": "subtle organic film grain, fine microscopic noise texture, authentic tactile feel",
    "intensity": 25
  },
  {
    "id": "medium",
    "label": "底片膠卷顆粒 (35mm Film Grain / ISO 400)",
    "shortLabel": "50% 膠卷",
    "description": "經典柯達 Portra 膠片顆粒，帶來溫潤復古的類比電影質感",
    "prompt": "authentic 35mm film grain, analog film photography texture, Kodak Portra aesthetic",
    "intensity": 50
  },
  {
    "id": "heavy",
    "label": "粗顆粒街頭風 (High ISO / Rough Grain)",
    "shortLabel": "75% 粗顆粒",
    "description": "高感光度黑白銀鹽粗糙顆粒，森山大道風格的生猛街頭張力",
    "prompt": "heavy rough film grain, gritty tactile texture, high ISO noise aesthetic, raw unpolished",
    "intensity": 75
  },
  {
    "id": "dither",
    "label": "復古印刷網點/抖動 (Halftone & Dither)",
    "shortLabel": "網點抖動",
    "description": "孔版印刷與報紙半色調網點，呈現復古印刷錯位與點陣藝術感",
    "prompt": "halftone screen dot pattern, retro risograph texture, dithered print aesthetic",
    "intensity": 90
  }
];

// 美術史歷史時期時間軸定義 (Art History Timeline Periods)
export interface TimelinePeriod {
  id: string;
  name: string;
  englishName: string;
  era: string;
  yearRange: string;
  description: string;
  color: string;
  order?: number;
}

export const artTimelinePeriods: TimelinePeriod[] = [
  {
    "id": "all",
    "name": "全部時期",
    "englishName": "All Eras",
    "era": "全時期",
    "yearRange": "500 - 至今",
    "description": "瀏覽自中世紀、文藝復興跨越至當代藝術大師作品",
    "color": "slate",
    "order": 0
  },
  {
    "id": "medieval",
    "name": "中世紀與早期信仰",
    "englishName": "Medieval & Sacred",
    "era": "5 - 15 世紀",
    "yearRange": "c. 500 - 1400",
    "description": "拜占庭金箔馬賽克、哥德式教堂彩繪玻璃，強調神聖莊嚴與平面金屬鑲嵌",
    "color": "amber",
    "order": 1
  },
  {
    "id": "renaissance",
    "name": "文藝復興全盛期",
    "englishName": "High Renaissance",
    "era": "15 - 16 世紀",
    "yearRange": "c. 1400 - 1600",
    "description": "達文西漸隱暈塗、波提切利柔美線條、米開朗基羅解剖學力量，人文主義與黃金比例覺醒",
    "color": "rose",
    "order": 2
  },
  {
    "id": "baroque_dutch",
    "name": "巴洛克與荷蘭黃金時代",
    "englishName": "Baroque & Dutch Age",
    "era": "17 世紀",
    "yearRange": "c. 1600 - 1700",
    "description": "卡拉瓦喬強烈明暗對照、林布蘭深邃情感、維梅爾窗邊柔光，戲劇性與市井光影的高峰",
    "color": "indigo",
    "order": 3
  },
  {
    "id": "rococo_romantic",
    "name": "洛可可、浪漫主義與浮世繪",
    "englishName": "Rococo & Romanticism",
    "era": "18 - 19 世紀初",
    "yearRange": "c. 1730 - 1860",
    "description": "宮廷優雅粉彩、大自然崇高孤寂感（佛烈德利赫）與日本江戶葛飾北齋浮世繪版畫",
    "color": "teal",
    "order": 4
  },
  {
    "id": "impressionism",
    "name": "印象派與後印象派",
    "englishName": "Impressionism Era",
    "era": "19 世紀中晚期",
    "yearRange": "c. 1860 - 1900",
    "description": "莫內戶外光斑碎筆、秀拉光學點彩、梵谷狂放情感筆觸、塞尚幾何結構，現代藝術序幕",
    "color": "cyan",
    "order": 5
  },
  {
    "id": "art_nouveau",
    "name": "新藝術、象徵與表現主義",
    "englishName": "Art Nouveau & Expressionism",
    "era": "19 世紀末 - 20 世紀初",
    "yearRange": "c. 1890 - 1920",
    "description": "慕夏流暢藤蔓曲線、克林姆璀璨金箔圖騰、孟克內心焦慮吶喊，裝飾與心靈表現並進",
    "color": "violet",
    "order": 6
  },
  {
    "id": "avant_garde",
    "name": "現代先鋒與立體超寫實",
    "englishName": "Modern Avant-Garde",
    "era": "20 世紀上半葉",
    "yearRange": "c. 1905 - 1950",
    "description": "畢卡索立體派碎片、達利融化超現實夢境、馬諦斯野獸派、康丁斯基抽象音樂旋律",
    "color": "fuchsia",
    "order": 7
  },
  {
    "id": "contemporary",
    "name": "戰後當代與普普大眾",
    "englishName": "Post-War & Contemporary",
    "era": "20 世紀中葉至今",
    "yearRange": "c. 1950 - 現代",
    "description": "安迪沃荷普普印刷、波洛克行動潑墨、草間彌生波點、街頭塗鴉與當代觀念藝術",
    "color": "orange",
    "order": 8
  }
];

// 現代與當代設計流派歷史時期時間軸定義 (Modern & Contemporary Design Timeline Periods)
export const modernTimelinePeriods: TimelinePeriod[] = [
  {
    "id": "all",
    "name": "全部時期",
    "englishName": "All Eras",
    "era": "現代全時期",
    "yearRange": "1900 - 至今",
    "description": "瀏覽自20世紀初先鋒運動、理性主義、戰後現代主義跨越至當代前衛設計流派",
    "color": "slate",
    "order": 0
  },
  {
    "id": "early_modern",
    "name": "20世紀初先鋒與理性主義",
    "englishName": "Early 20th C. Avant-Garde",
    "era": "1900s - 1930s",
    "yearRange": "c. 1900 - 1939",
    "description": "未來主義、俄羅斯構成主義、包浩斯功能理性、荷蘭風格派與超現實主義，開啟現代設計與工業美學革命",
    "color": "amber",
    "order": 1
  },
  {
    "id": "mid_century",
    "name": "戰後現代主義與國際風格",
    "englishName": "Mid-Century Modernism",
    "era": "1940s - 1950s",
    "yearRange": "c. 1940 - 1959",
    "description": "抽象表現主義行動繪畫、粗獷主義清水混凝土與瑞士國際排版網格系統，奠定現代視覺秩序與理性結構",
    "color": "blue",
    "order": 2
  },
  {
    "id": "counterculture_pop",
    "name": "60-70s 普普與反叛迷幻",
    "englishName": "Counterculture & Pop Art",
    "era": "1960s - 1970s",
    "yearRange": "c. 1960 - 1979",
    "description": "普普藝術大眾消費色彩、60 年代反文化迷幻藝術、歐普視覺錯覺與純粹極簡主義",
    "color": "fuchsia",
    "order": 3
  },
  {
    "id": "postmodern_cyber",
    "name": "80-90s 後現代與數位狂想",
    "englishName": "Postmodern & Cyber Wave",
    "era": "1980s - 1990s",
    "yearRange": "c. 1980 - 1999",
    "description": "孟菲斯狂想幾何、賽博龐克反烏托邦、蒸氣波復古夢幻與早期 3D 低多邊形晶體美學",
    "color": "violet",
    "order": 4
  },
  {
    "id": "contemporary_speculative",
    "name": "21世紀當代前衛與生態未來",
    "englishName": "21st C. & Speculative",
    "era": "2000s - 至今",
    "yearRange": "2000 - Present",
    "description": "酸性設計實驗金屬、千禧 Y2K 未來主義、新粗獷主義與太陽龐克生態永續願景",
    "color": "emerald",
    "order": 5
  }
];

export const promptDatabase: Record<CategoryKey, CategoryData> = {
  "materials": {
    "id": "materials",
    "name": "繪畫媒材",
    "englishName": "Painting & Materials",
    "icon": "Brush",
    "description": "水彩暈染、手繪插畫、油畫厚塗、日漫美漫概念與實體工藝",
    "subCategories": [
      {
        "id": "watercolor_fluid",
        "name": "水彩與流體暈染",
        "englishName": "Watercolor & Fluid Inks",
        "color": "cyan",
        "desc": "透明水彩、濕畫法、乾筆飛白、不透明水粉、酒精墨水流體、東方水墨"
      },
      {
        "id": "illustration_book",
        "name": "手繪插畫與繪本",
        "englishName": "Illustration & Picture Books",
        "color": "orange",
        "desc": "童趣蠟筆、兒童繪本、扁平向量、彩色鉛筆、小畫家塗鴉、拼貼藝術、復古卡通"
      },
      {
        "id": "traditional_paint",
        "name": "傳統油彩與素描",
        "englishName": "Traditional Oil & Sketch",
        "color": "amber",
        "desc": "厚塗油畫刮刀、壓克力畫、炭筆素描、鋼筆排線、銅版微雕蝕刻、粉彩蠟筆"
      },
      {
        "id": "manga_concept",
        "name": "漫畫、動漫與概念藝術",
        "englishName": "Manga, Anime & Concept Art",
        "color": "rose",
        "desc": "日系動漫賽璐璐、美漫黑白網點、新川洋司水墨機甲、概念厚塗、復古像素"
      },
      {
        "id": "print_craft_3d",
        "name": "版畫印刷與立體質感",
        "englishName": "Printmaking, Craft & 3D",
        "color": "emerald",
        "desc": "孔版印刷、絲網版畫、浮世繪木刻、剪紙紙雕、黏土定格、磨砂玻璃、3D Octane"
      }
    ],
    "items": [
      {
        "id": "m1",
        "subCategory": "watercolor_fluid",
        "label": "珠光透明水彩暈染 (Transparent Watercolor)",
        "prompt": "delicate transparent watercolor wash, wet-on-wet pigments, cold-press paper texture, soft translucent bleeding edges, luminous poetic watercolor",
        "timeline": {
          "era": "水彩與流體",
          "period": "水彩水墨",
          "yearRange": "透明渲染",
          "order": 1,
          "historicalContext": "運用透明水彩的多層罩染與紙張紋理，呈現輕盈透光的空氣感與水分邊緣痕跡。"
        }
      },
      {
        "id": "m_wet_watercolor",
        "subCategory": "watercolor_fluid",
        "label": "大膽流動濕畫法水彩 (Fluid Wet-on-Wet)",
        "prompt": "expressive wet-on-wet watercolor painting, spontaneous pigment blooms, dripping liquid water edges, granulation texture on Arches paper",
        "timeline": {
          "era": "水彩與流體",
          "period": "水彩水墨",
          "yearRange": "流動暈染",
          "order": 1,
          "historicalContext": "在吸飽水分的畫紙上落筆，讓顏料隨水分自然擴散出偶然的花紋與濃淡漸層。"
        }
      },
      {
        "id": "m_dry_watercolor",
        "subCategory": "watercolor_fluid",
        "label": "乾筆水彩飛白紋理 (Dry Brush Watercolor)",
        "prompt": "dry brush watercolor technique, rough tooth paper texture, broken brushstrokes, gritty pigment drag, expressive dynamic dry edges",
        "timeline": {
          "era": "水彩與流體",
          "period": "水彩水墨",
          "yearRange": "乾筆飛白",
          "order": 1,
          "historicalContext": "少水濃彩在粗糙紙面快速掠過，產生斑駁飛白與強烈抓紙肌理，極富動勢。"
        }
      },
      {
        "id": "m_gouache",
        "subCategory": "watercolor_fluid",
        "label": "不透明水粉畫 (Matte Gouache Painting)",
        "prompt": "opaque gouache painting, velvety matte finish, flat bold vibrant colors, creamy smooth brush texture, designer gouache illustration",
        "timeline": {
          "era": "水彩與流體",
          "period": "水彩水墨",
          "yearRange": "絲絨霧面",
          "order": 1,
          "historicalContext": "結合水彩的流動性與油畫的遮蓋力，乾燥後呈現柔和天鵝絨般的啞光高飽和色塊。"
        }
      },
      {
        "id": "m_alcohol_ink",
        "subCategory": "watercolor_fluid",
        "label": "酒精墨水流動金邊 (Alcohol Ink Fluid Art)",
        "prompt": "fluid alcohol ink painting on Yupo paper, shimmering metallic gold leaf veins, organic translucent marbling, ethereal swirling layers",
        "timeline": {
          "era": "水彩與流體",
          "period": "水彩水墨",
          "yearRange": "液態金邊",
          "order": 1,
          "historicalContext": "利用酒精快速揮發特性在防水紙上產生流體大理石紋，金粉沉澱勾勒出奢華金邊。"
        }
      },
      {
        "id": "m5",
        "subCategory": "watercolor_fluid",
        "label": "東方宣紙水墨意境 (Chinese Ink Wash / Sumi-e)",
        "prompt": "traditional Chinese ink wash painting, Sumi-e brush dynamics, poetic atmospheric mist on Xuan paper, spontaneous calligraphy strokes",
        "timeline": {
          "era": "水彩與流體",
          "period": "水彩水墨",
          "yearRange": "東方意境",
          "order": 1,
          "historicalContext": "計白當黑的留白美學，以焦濃重淡清五色墨韻在宣紙上渲染出空靈寫意的高遠境界。"
        }
      },
      {
        "id": "m_childish",
        "subCategory": "illustration_book",
        "label": "天真童趣拙劣蠟筆畫 (Naive Child Crayon)",
        "prompt": "naive childish crayon drawing, primitive stick figures, messy uncoordinated scribbles, charmingly crude lines, rough paper grain texture",
        "timeline": {
          "era": "插畫與繪本",
          "period": "手繪童趣",
          "yearRange": "拙趣蠟筆",
          "order": 2,
          "historicalContext": "打破成人條框，以樸拙線條、不規則蠟筆顆粒與純真視角營造未經雕琢的原生生命力。"
        }
      },
      {
        "id": "m_storybook",
        "subCategory": "illustration_book",
        "label": "溫馨兒童繪本插畫 (Children Storybook)",
        "prompt": "whimsical children book illustration, warm cozy storytelling, gentle gouache and colored pencil textures, charming storybook character art",
        "timeline": {
          "era": "插畫與繪本",
          "period": "手繪童趣",
          "yearRange": "溫暖敘事",
          "order": 2,
          "historicalContext": "融合細膩手繪與溫暖大地色調，角色富有溫度與情緒，具備強烈繪本閱讀親和力。"
        }
      },
      {
        "id": "m20",
        "subCategory": "illustration_book",
        "label": "向量極簡扁平插畫 (Flat Vector Illustration)",
        "prompt": "clean flat vector illustration, smooth bezier curves, bold graphic silhouette, minimalist modern geometry, editorial poster art",
        "timeline": {
          "era": "插畫與繪本",
          "period": "手繪童趣",
          "yearRange": "現代向量",
          "order": 2,
          "historicalContext": "流暢貝茲曲線與幾何形狀提煉，捨棄繁複光影，著重於圖形張力與現代平面美感。"
        }
      },
      {
        "id": "m_colored_pencil",
        "subCategory": "illustration_book",
        "label": "彩色鉛筆細膩排線 (Colored Pencil Art)",
        "prompt": "colored pencil drawing, delicate cross-hatching pencil strokes, visible paper tooth texture, soft layered blended hues",
        "timeline": {
          "era": "插畫與繪本",
          "period": "手繪童趣",
          "yearRange": "柔和鉛筆",
          "order": 2,
          "historicalContext": "透過細緻交叉排線與多層疊色，保留紙張細微毛孔，營造溫潤柔和的手作質感。"
        }
      },
      {
        "id": "m_collage",
        "subCategory": "illustration_book",
        "label": "拼貼剪貼簿混合媒材 (Collage & Mixed Media)",
        "prompt": "vintage mixed media paper collage, torn paper edges, botanical illustrations, textured scrapbook layered fragments, quirky modern art assemblage",
        "timeline": {
          "era": "插畫與繪本",
          "period": "手繪童趣",
          "yearRange": "撕紙拼貼",
          "order": 2,
          "historicalContext": "將舊報紙、植物插圖與撕裂紙屑重組疊加，透過材質異質碰撞創造詩意敘事。"
        }
      },
      {
        "id": "m_mspaint",
        "subCategory": "illustration_book",
        "label": "Windows 小畫家拙劣塗鴉 (MS Paint Clumsy Doodles)",
        "prompt": "clumsy MS Paint drawing, naive amateur digital art, drawn with computer mouse, imperfect shaky pixelated lines, raw bright basic color fills, Microsoft Paint spray can airbrush texture, crude awkward charming doodle",
        "timeline": {
          "era": "插畫與繪本",
          "period": "手繪童趣",
          "yearRange": "復古塗鴉",
          "order": 2,
          "historicalContext": "以早期電腦滑鼠繪圖的抖動像素線條與噴槍噪點，重現純真幽默的復古網路原生美學。"
        }
      },
      {
        "id": "m_rubber_hose",
        "subCategory": "illustration_book",
        "label": "1930s 復古橡皮管卡通 (Rubber Hose Cartoon)",
        "prompt": "1930s vintage rubber hose animation style, pie eyes, bouncy bendy limbs, monochrome film grain, classic cartoon nostalgia",
        "timeline": {
          "era": "插畫與繪本",
          "period": "手繪童趣",
          "yearRange": "經典卡通",
          "order": 2,
          "historicalContext": "早期手繪動畫代表，角色肢體如橡膠水管般無關節彈性擺動，帶有標誌性派狀眼睛。"
        }
      },
      {
        "id": "m2",
        "subCategory": "traditional_paint",
        "label": "厚塗油畫刮刀筆觸 (Impasto Palette Knife)",
        "prompt": "heavy impasto oil painting, thick textural palette knife strokes, tactile paint peaks, rich oily sheen, sculptural brushwork",
        "timeline": {
          "era": "油彩與素描",
          "period": "古典技法",
          "yearRange": "立體厚塗",
          "order": 3,
          "historicalContext": "以畫刀直接堆疊濃稠顏料，使顏料峰芒在畫布上形成雕塑般的起伏光影與手感。"
        }
      },
      {
        "id": "m_acrylic",
        "subCategory": "traditional_paint",
        "label": "當代壓克力畫鮮明質感 (Acrylic Canvas)",
        "prompt": "contemporary acrylic painting on stretched canvas, vivid crisp color blocks, dynamic expressive brushwork, satin finish",
        "timeline": {
          "era": "油彩與素描",
          "period": "古典技法",
          "yearRange": "現代畫布",
          "order": 3,
          "historicalContext": "快乾且色彩飽和度高，既能呈現大面積平整色塊，亦可保留灑脫洗鍊的筆觸。"
        }
      },
      {
        "id": "m14",
        "subCategory": "traditional_paint",
        "label": "粉彩柔和蠟筆筆觸 (Soft Pastel Chalk)",
        "prompt": "soft pastel chalk drawing, blended velvety dust textures, creamy crayon accents, atmospheric blurred edges",
        "timeline": {
          "era": "油彩與素描",
          "period": "古典技法",
          "yearRange": "粉質光暈",
          "order": 3,
          "historicalContext": "純色粉末壓製，經手指塗抹呈現絲絨般的霧面暈開效果，色彩過渡極為細膩柔美。"
        }
      },
      {
        "id": "m15",
        "subCategory": "traditional_paint",
        "label": "炭筆粗獷素描 (Raw Charcoal Sketch)",
        "prompt": "raw expressive charcoal sketch, bold black smudges, dramatic chiaroscuro shading, textured heavyweight kraft paper",
        "timeline": {
          "era": "油彩與素描",
          "period": "古典技法",
          "yearRange": "明暗素描",
          "order": 3,
          "historicalContext": "利用炭條的深邃濃黑與大面積塗抹，營造充滿戲劇張力與呼吸感的強烈明暗對比。"
        }
      },
      {
        "id": "m_ink_crosshatch",
        "subCategory": "traditional_paint",
        "label": "鋼筆沾水筆交叉排線 (Pen & Ink Cross-Hatching)",
        "prompt": "fine dip pen and black ink illustration, meticulous cross-hatching shade lines, Edward Gorey gothic aesthetic, crisp intaglio drawing",
        "timeline": {
          "era": "油彩與素描",
          "period": "古典技法",
          "yearRange": "鋼筆排線",
          "order": 3,
          "historicalContext": "使用沾水筆以密集的疏密交叉線條表現物體的明暗與體積感，極具古典插畫韻味。"
        }
      },
      {
        "id": "m12",
        "subCategory": "traditional_paint",
        "label": "銅版微雕蝕刻細線 (Copperplate Engraving)",
        "prompt": "copperplate engraving etching, fine cross-hatching linework, vintage antique botanical encyclopedia illustration, intaglio print",
        "timeline": {
          "era": "油彩與素描",
          "period": "古典技法",
          "yearRange": "微雕蝕刻",
          "order": 3,
          "historicalContext": "金屬版面手工雕刻出的髮絲細線，常現於 18 世紀百科全書與古典植物圖鑑中。"
        }
      },
      {
        "id": "m_anime_cel",
        "subCategory": "manga_concept",
        "label": "日系動漫賽璐璐風 (Anime Cel Shading)",
        "prompt": "Japanese anime visual, crisp cel shading, clean dynamic linework, vibrant animation key visual, Makoto Shinkai sky atmosphere",
        "timeline": {
          "era": "動漫與概念",
          "period": "幻想動漫",
          "yearRange": "賽璐璐光影",
          "order": 4,
          "historicalContext": "經典日本動畫工藝，以俐落線稿搭配二段或三段明暗分階，呈現清澈透明的光影空氣。"
        }
      },
      {
        "id": "m_manga_screentone",
        "subCategory": "manga_concept",
        "label": "經典黑白日漫網點 (Manga Screentone & Ink)",
        "prompt": "black and white Japanese manga panel, G-pen dynamic ink linework, dot halftone screentone patterns, dramatic speed lines",
        "timeline": {
          "era": "動漫與概念",
          "period": "幻想動漫",
          "yearRange": "黑白網點",
          "order": 4,
          "historicalContext": "G 筆壓感強烈線條與不同灰階密度的網點紙貼合，打造黑白世界中極致的情緒張力。"
        }
      },
      {
        "id": "m_comic_book",
        "subCategory": "manga_concept",
        "label": "美式經典漫畫 (American Comic Book)",
        "prompt": "classic American comic book art, bold black ink contour lines, Ben-Day dot color printing, dynamic graphic novel superhero framing",
        "timeline": {
          "era": "動漫與概念",
          "period": "幻想動漫",
          "yearRange": "美漫印刷",
          "order": 4,
          "historicalContext": "強烈墨線外框結合四色套印班戴點（Ben-Day dots），充滿英雄力量感與漫畫衝擊力。"
        }
      },
      {
        "id": "m_shinkawa",
        "subCategory": "manga_concept",
        "label": "新川洋司水墨機甲概念 (Yoji Shinkawa Style)",
        "prompt": "in the style of Yoji Shinkawa, dynamic ink splatter sketch, calligraphic brushstrokes, tactical mecha concept art, raw expressive ink bleed",
        "timeline": {
          "era": "動漫與概念",
          "period": "幻想動漫",
          "yearRange": "水墨機甲",
          "order": 4,
          "historicalContext": "潛龍諜影御用大師風格，將傳統毛筆水墨飛白與現代戰術機甲、人物概念狂放結合。"
        }
      },
      {
        "id": "m_concept_matte",
        "subCategory": "manga_concept",
        "label": "數位概念藝術厚塗 (Digital Matte Painting)",
        "prompt": "epic digital concept art, matte painting environment, cinematic atmospheric depth, photorealistic speedpainting brush textures",
        "timeline": {
          "era": "動漫與概念",
          "period": "幻想動漫",
          "yearRange": "數位厚塗",
          "order": 4,
          "historicalContext": "電影與遊戲概念美術核心手法，以大氣透視、磅礡光束與快速鋪色建立宏大世界觀。"
        }
      },
      {
        "id": "m_pixel_art",
        "subCategory": "manga_concept",
        "label": "16-bit 復古像素藝術 (Retro Pixel Art)",
        "prompt": "16-bit pixel art, isometric retro gaming aesthetic, vibrant limited color palette, clean grid pixel alignment, nostalgic CRT glow",
        "timeline": {
          "era": "動漫與概念",
          "period": "幻想動漫",
          "yearRange": "像素點陣",
          "order": 4,
          "historicalContext": "在有限網格中精雕細琢每一個像素點，帶有 90 年代街機與超任主機的溫暖懷舊光澤。"
        }
      },
      {
        "id": "m10",
        "subCategory": "print_craft_3d",
        "label": "孔版印刷復古錯位 (Risograph Print)",
        "prompt": "Risograph print effect, halftone screen dot patterns, vibrant misregistered overlay spot inks, rough uncoated paper texture",
        "timeline": {
          "era": "工藝與立體",
          "period": "版畫與3D",
          "yearRange": "孔版錯位",
          "order": 5,
          "historicalContext": "日式油印機孔版套印，帶有專色疊印、微小對位偏差與粗糙紙質顆粒的獨特手感。"
        }
      },
      {
        "id": "m11",
        "subCategory": "print_craft_3d",
        "label": "絲網版畫印刷質感 (Silkscreen Print)",
        "prompt": "silkscreen printmaking texture, flat opaque ink overlays, distinct layered color blocks, screenprint edge grain",
        "timeline": {
          "era": "工藝與立體",
          "period": "版畫與3D",
          "yearRange": "絲網疊印",
          "order": 5,
          "historicalContext": "網版刮印出平整濃厚的色塊與銳利邊緣，常應用於海報藝術與普普藝術創作。"
        }
      },
      {
        "id": "m_woodblock",
        "subCategory": "print_craft_3d",
        "label": "浮世繪傳統木刻版畫 (Woodblock Ukiyo-e)",
        "prompt": "traditional Japanese woodblock print, Ukiyo-e wood grain relief, baren ink gradation (bokashi), crisp carved line contours",
        "timeline": {
          "era": "工藝與立體",
          "period": "版畫與3D",
          "yearRange": "木刻暈染",
          "order": 5,
          "historicalContext": "木板雕刻刀痕、水性顏料漸層暈染（暈かし）與和紙植物纖維形成的東方版畫精髓。"
        }
      },
      {
        "id": "m7",
        "subCategory": "print_craft_3d",
        "label": "層次剪紙陰影浮雕 (Layered Papercut)",
        "prompt": "layered paper cut art, 3D papercraft depth, cast paper shadows, clean laser craft edges, dimensional shadowbox",
        "timeline": {
          "era": "工藝與立體",
          "period": "版畫與3D",
          "yearRange": "立體剪紙",
          "order": 5,
          "historicalContext": "多層卡紙經雷射精準裁切後前後堆疊，在光線照射下投射出自然真實的立體陰影。"
        }
      },
      {
        "id": "m6",
        "subCategory": "print_craft_3d",
        "label": "定格黏土捏塑定格 (Claymation Stop-Motion)",
        "prompt": "claymation stop-motion aesthetic, sculpted polymer plasticine clay, visible subtle artisan fingerprints, soft studio spotlight",
        "timeline": {
          "era": "工藝與立體",
          "period": "版畫與3D",
          "yearRange": "黏土捏塑",
          "order": 5,
          "historicalContext": "手工捏製塑膠油黏土，保留微小的手工指紋痕跡與柔和聚光燈，重現停格動畫溫暖。"
        }
      },
      {
        "id": "m8",
        "subCategory": "print_craft_3d",
        "label": "溫暖針織毛線紋理 (Chunky Knit Wool)",
        "prompt": "cozy chunky knit wool yarn texture, intricate woven textile weave, fuzzy tactile wool fibers, warm soft feeling",
        "timeline": {
          "era": "工藝與立體",
          "period": "版畫與3D",
          "yearRange": "毛線針織",
          "order": 5,
          "historicalContext": "粗棒針編織出的立體麻花紋理，帶有毛茸茸的微小纖維觸感，傳遞極致溫暖療癒感。"
        }
      },
      {
        "id": "m9",
        "subCategory": "print_craft_3d",
        "label": "刺繡絲綢金線工藝 (Intricate Silk Embroidery)",
        "prompt": "intricate silk embroidery, raised satin stitch threads, shimmering metallic gold and silver threads, opulent brocade fabric",
        "timeline": {
          "era": "工藝與立體",
          "period": "版畫與3D",
          "yearRange": "絲綢刺繡",
          "order": 5,
          "historicalContext": "緞面針法密密縫製，真絲光澤與金銀金屬線在織物上隨視角變換反射出耀眼微光。"
        }
      },
      {
        "id": "m4",
        "subCategory": "print_craft_3d",
        "label": "磨砂半透明玻璃 (Frosted Sea Glass)",
        "prompt": "frosted translucent sea glass, soft internal light refraction, matte blur, luminous diffusion",
        "timeline": {
          "era": "工藝與立體",
          "period": "版畫與3D",
          "yearRange": "磨砂光學",
          "order": 5,
          "historicalContext": "半透明霧面玻璃內部光線散射與次表面折射，呈現朦朧柔光的現代產品高級感。"
        }
      },
      {
        "id": "m13",
        "subCategory": "print_craft_3d",
        "label": "燙金箔浮雕細節 (Embossed Gold Foil)",
        "prompt": "embossed gold foil stamping, reflective gilded leaf accents, tactile luxury heavyweight cardstock",
        "timeline": {
          "era": "工藝與立體",
          "period": "版畫與3D",
          "yearRange": "金箔燙印",
          "order": 5,
          "historicalContext": "重磅棉卡上的金屬熱燙印與凹凸立體起伏，反射出極具奢華儀式感的高級金光。"
        }
      },
      {
        "id": "m19",
        "subCategory": "print_craft_3d",
        "label": "Octane 頂級3D渲染 (Octane 3D PBR)",
        "prompt": "3D Octane render, raytraced subsurface scattering, physically based rendering (PBR), Unreal Engine 5, cinematic photorealism",
        "timeline": {
          "era": "工藝與立體",
          "period": "版畫與3D",
          "yearRange": "3D 光追",
          "order": 5,
          "historicalContext": "以物理光線追蹤、次表面散射與真實材質貼圖，創造逼近現實的超高清 3D 視覺。"
        }
      },
      {
        "id": "m21",
        "subCategory": "print_craft_3d",
        "label": "全息彩虹折射光膜 (Holographic Foil)",
        "prompt": "iridescent holographic foil texture, prismatic rainbow color shift, specular light reflections",
        "timeline": {
          "era": "工藝與立體",
          "period": "版畫與3D",
          "yearRange": "全息彩虹",
          "order": 5,
          "historicalContext": "光學微結構衍射出的七彩虹光，隨角度流動變換色彩，極具前衛科技感與時尚魅力。"
        }
      }
    ]
  },
  "classicalArt": {
    "id": "classicalArt",
    "name": "古典藝術",
    "englishName": "Classical Art",
    "icon": "Palette",
    "description": "文藝復興、巴洛克、莫內印象派、畢卡索立體派等大師時代傳承（支援美術史時間軸）",
    "subCategories": [
      {
        "id": "medieval_renaissance",
        "name": "中世紀與文藝復興 (5-16世紀)",
        "englishName": "Medieval & Renaissance",
        "color": "amber",
        "desc": "拜占庭金箔馬賽克、哥德彩繪玻璃、達文西、米開朗基羅、波提切利"
      },
      {
        "id": "baroque_romantic",
        "name": "巴洛克、洛可可與浪漫主義 (17-19世紀)",
        "englishName": "Baroque to Romanticism",
        "color": "rose",
        "desc": "卡拉瓦喬明暗對照、維梅爾、林布蘭、洛可可、佛烈德利赫、浮世繪"
      },
      {
        "id": "impression_symbol",
        "name": "印象派、後印象與新藝術 (19-20世紀初)",
        "englishName": "Impressionism & Art Nouveau",
        "color": "teal",
        "desc": "莫內印象派、秀拉點彩、梵谷、塞尚、慕夏新藝術、克林姆金箔、孟克"
      },
      {
        "id": "modern_avant",
        "name": "現代先鋒與立體超現實 (20世紀)",
        "englishName": "Modern Avant-Garde",
        "color": "indigo",
        "desc": "畢卡索立體派、達利超寫實夢境、馬諦斯野獸派、康丁斯基抽象主義"
      }
    ],
    "items": [
      {
        "id": "ca15",
        "subCategory": "medieval_renaissance",
        "label": "拜占庭金箔馬賽克聖像",
        "prompt": "Byzantine gold mosaic style, flat sacred iconography, gilded glass tesserae, glowing spiritual halo, medieval majestic mosaic",
        "timeline": {
          "era": "5 - 15 世紀",
          "period": "拜占庭藝術",
          "yearRange": "c. 500 - 1450",
          "order": 1,
          "historicalContext": "東羅馬帝國宗教藝術核心，採用金色與彩色玻璃小方塊拼貼，強調永恆與神聖超脫感。"
        }
      },
      {
        "id": "ca14",
        "subCategory": "medieval_renaissance",
        "label": "哥德式大教堂彩繪玻璃",
        "prompt": "Gothic stained glass art, luminous medieval sacred aesthetic, leaded lines, jewel-toned sunlight transmission, rose window geometry",
        "timeline": {
          "era": "12 - 15 世紀",
          "period": "哥德式藝術",
          "yearRange": "c. 1150 - 1450",
          "order": 1,
          "historicalContext": "伴隨高聳入雲的大教堂建築興起，透過鉛條與寶石般彩色玻璃引入「神聖光芒」。"
        }
      },
      {
        "id": "ca1",
        "subCategory": "medieval_renaissance",
        "label": "達文西漸隱暈塗法 (Da Vinci)",
        "prompt": "Italian High Renaissance style, in the style of Leonardo da Vinci, sfumato soft smoky transitions, classical proportions, golden ratio harmony, painterly depth",
        "timeline": {
          "era": "15 - 16 世紀",
          "period": "文藝復興全盛期",
          "yearRange": "c. 1490 - 1520",
          "order": 2,
          "historicalContext": "義大利文藝復興巔峰，以無筆觸痕跡的「漸隱暈塗法」融合解剖學與自然透視。"
        }
      },
      {
        "id": "ca_botticelli",
        "subCategory": "medieval_renaissance",
        "label": "波提切利唯美線條與維納斯 (Botticelli)",
        "prompt": "in the style of Sandro Botticelli, early Renaissance elegance, sinuous flowing linear contour, pastel tempera palette, mythological ethereal grace",
        "timeline": {
          "era": "15 世紀末",
          "period": "早期文藝復興",
          "yearRange": "c. 1470 - 1500",
          "order": 2,
          "historicalContext": "佛羅倫斯黃金時代，將希臘神話與詩意線條融為一體，洋溢輕盈唯美的貴族氣質。"
        }
      },
      {
        "id": "ca_michelangelo",
        "subCategory": "medieval_renaissance",
        "label": "米開朗基羅人體雕塑力量 (Michelangelo)",
        "prompt": "in the style of Michelangelo, Sistine Chapel monumental fresco, powerful muscular anatomy, dynamic contrapposto tension, heroic classical grandeur",
        "timeline": {
          "era": "16 世紀初",
          "period": "盛期文藝復興",
          "yearRange": "c. 1508 - 1540",
          "order": 2,
          "historicalContext": "西斯汀禮拜堂天頂畫與雕塑，呈現如大理石雕刻般強健有力的人體解剖張力。"
        }
      },
      {
        "id": "ca2",
        "subCategory": "baroque_romantic",
        "label": "卡拉瓦喬巴洛克戲劇明暗 (Caravaggio)",
        "prompt": "Baroque style, in the style of Caravaggio, dramatic tenebrism chiaroscuro, intense spotlight contrast, pitch black background, emotional theatrical realism",
        "timeline": {
          "era": "17 世紀初",
          "period": "巴洛克藝術",
          "yearRange": "c. 1600 - 1630",
          "order": 3,
          "historicalContext": "徹底打破文藝復興的平穩，以強烈的「暗色調主義 (Tenebrism)」聚光燈開創戲劇性革命。"
        }
      },
      {
        "id": "ca_rembrandt",
        "subCategory": "baroque_romantic",
        "label": "林布蘭深邃金棕光影 (Rembrandt)",
        "prompt": "in the style of Rembrandt van Rijn, Dutch Baroque master, golden luminous chiaroscuro, psychological portrait depth, rich impasto textures, glowing cheek highlight",
        "timeline": {
          "era": "17 世紀中葉",
          "period": "荷蘭巴洛克",
          "yearRange": "c. 1630 - 1669",
          "order": 3,
          "historicalContext": "荷蘭畫聖，精通金棕色溫潤光暈與人物內心深層靈魂刻畫，光影如燭火般深邃。"
        }
      },
      {
        "id": "ca13",
        "subCategory": "baroque_romantic",
        "label": "維梅爾窗邊柔和室內光 (Vermeer)",
        "prompt": "Dutch Golden Age painting, in the style of Johannes Vermeer, soft natural left window lighting, ultramarine blue and yellow ochre, tranquil domestic interior, photorealistic stillness",
        "timeline": {
          "era": "17 世紀中晚期",
          "period": "荷蘭黃金時代",
          "yearRange": "c. 1650 - 1675",
          "order": 3,
          "historicalContext": "台夫特之光，以精準的光學暗箱視角捕捉靜謐日常，青金石藍與日光粒子令人屏息。"
        }
      },
      {
        "id": "ca3",
        "subCategory": "baroque_romantic",
        "label": "洛可可優雅宮廷粉彩 (Fragonard)",
        "prompt": "Rococo aesthetic, in the style of Jean-Honore Fragonard, pastel macaron palette, delicate filigree, playful lighthearted elegance, soft feathery brushwork",
        "timeline": {
          "era": "18 世紀中葉",
          "period": "洛可可宮廷",
          "yearRange": "c. 1730 - 1780",
          "order": 4,
          "historicalContext": "法國凡爾賽宮廷貴族享樂主義，以柔和粉綠、粉紅與精巧貝殼渦卷線條為標誌。"
        }
      },
      {
        "id": "ca4",
        "subCategory": "baroque_romantic",
        "label": "浪漫主義自然崇高孤寂 (Friedrich)",
        "prompt": "Romanticism art style, in the style of Caspar David Friedrich, sublime atmospheric nature, solitary contemplative figure, misty mountain chasm, philosophical mood",
        "timeline": {
          "era": "18 - 19 世紀初",
          "period": "浪漫主義",
          "yearRange": "c. 1780 - 1840",
          "order": 4,
          "historicalContext": "反思啟蒙理性，強調人類在大自然浩瀚宇宙面前的孤獨、敬畏與崇高（The Sublime）情感。"
        }
      },
      {
        "id": "ca7",
        "subCategory": "baroque_romantic",
        "label": "日本江戶浮世繪木刻版畫 (Hokusai)",
        "prompt": "Ukiyo-e woodblock print style, in the style of Katsushika Hokusai, dynamic wave foam, clean inked outlines, flat decorative color planes, Edo period aesthetic",
        "timeline": {
          "era": "19 世紀前半",
          "period": "江戶浮世繪",
          "yearRange": "c. 1820 - 1860",
          "order": 4,
          "historicalContext": "葛飾北齋與歌川廣重木刻版畫，大膽俯仰透視與強烈輪廓線深深震撼了後續歐洲印象派。"
        }
      },
      {
        "id": "ca12",
        "subCategory": "impression_symbol",
        "label": "前拉斐爾派細膩自然花草 (Pre-Raphaelite)",
        "prompt": "Pre-Raphaelite Brotherhood style, in the style of John Everett Millais, botanical precision, glowing translucent colors, ethereal romantic medievalism",
        "timeline": {
          "era": "19 世紀中葉",
          "period": "前拉斐爾派",
          "yearRange": "c. 1848 - 1890",
          "order": 4,
          "historicalContext": "英國青年畫家團體，主張回歸拉斐爾之前的純真自然，植物細節與浪漫敘事極其精緻。"
        }
      },
      {
        "id": "ca5",
        "subCategory": "impression_symbol",
        "label": "莫內印象派戶外日光斑駁 (Monet)",
        "prompt": "Impressionism, in the style of Claude Monet, plein air dappled sunlight, broken color brushstrokes, atmospheric luminous vibrance, water lily reflections",
        "timeline": {
          "era": "19 世紀後期",
          "period": "印象派",
          "yearRange": "c. 1872 - 1900",
          "order": 5,
          "historicalContext": "走出畫室在戶外捕捉瞬息萬變的光線與色彩，碎筆快速點畫奠定現代色彩學。"
        }
      },
      {
        "id": "ca6",
        "subCategory": "impression_symbol",
        "label": "秀拉後印象點彩畫派 (Pointillism / Seurat)",
        "prompt": "Pointillism, in the style of Georges Seurat, meticulous tiny dot technique, optical color blending, scientific chromoluminarism, structured composition",
        "timeline": {
          "era": "19 世紀末",
          "period": "新印象派 / 點彩",
          "yearRange": "c. 1884 - 1895",
          "order": 5,
          "historicalContext": "以光學混色理論為依據，用純色微小色點鋪滿畫布，在觀眾視網膜上自然融合出震顫光感。"
        }
      },
      {
        "id": "ca_vangogh",
        "subCategory": "impression_symbol",
        "label": "梵谷後印象派狂熱旋渦筆觸 (Van Gogh)",
        "prompt": "in the style of Vincent van Gogh, post-impressionism, swirling dynamic brushstrokes, thick impasto oil paint, vibrant cobalt blue and cadmium yellow, raw passionate emotion",
        "timeline": {
          "era": "19 世紀末",
          "period": "後印象派",
          "yearRange": "c. 1885 - 1890",
          "order": 5,
          "historicalContext": "將自然轉化為內心熊熊燃燒的生命力，星夜旋渦筆觸與濃烈黃藍色彩成為藝術史傳奇。"
        }
      },
      {
        "id": "ca_cezanne",
        "subCategory": "impression_symbol",
        "label": "塞尚幾何結構後印象 (Cezanne)",
        "prompt": "in the style of Paul Cezanne, post-impressionist structural planes, constructive brushstrokes, geometric volume of cylinders and spheres, analytical color modulation",
        "timeline": {
          "era": "19 世紀末 - 20 世紀初",
          "period": "後印象派 / 現代之父",
          "yearRange": "c. 1885 - 1906",
          "order": 5,
          "historicalContext": "「現代藝術之父」，將自然物體歸納為圓柱、球體與圓錐，直接啟發了畢卡索立體派。"
        }
      },
      {
        "id": "ca8",
        "subCategory": "impression_symbol",
        "label": "慕夏新藝術運動流暢藤蔓 (Mucha)",
        "prompt": "Art Nouveau, in the style of Alphonse Mucha, sinuous flowing organic lines, ornate botanical filigree border, pastel decorative poster, idealized feminine grace",
        "timeline": {
          "era": "19 世紀末 - 20 世紀初",
          "period": "新藝術運動 (Belle Epoque)",
          "yearRange": "c. 1895 - 1914",
          "order": 6,
          "historicalContext": "世紀末美好年代（Belle Époque），以植物生長曲線、波浪秀髮與裝飾性邊框席捲巴黎。"
        }
      },
      {
        "id": "ca11",
        "subCategory": "impression_symbol",
        "label": "克林姆象徵主義黃金時期 (Klimt)",
        "prompt": "Symbolism, in the style of Gustav Klimt, golden phase patterned gilding, Byzantine gold leaf mosaic, intricate sensual geometry, opulent decorative masterpiece",
        "timeline": {
          "era": "20 世紀初",
          "period": "維也納分離派 / 象徵主義",
          "yearRange": "c. 1898 - 1918",
          "order": 6,
          "historicalContext": "維也納分離派領袖，將金箔裝飾、幾何圖騰與神祕夢幻的人體融合成極致奢華詩篇。"
        }
      },
      {
        "id": "ca10",
        "subCategory": "impression_symbol",
        "label": "孟克表現主義內心吶喊 (Munch)",
        "prompt": "Expressionism, in the style of Edvard Munch, intense emotional psychological anxiety, undulating warped lines, bold contrasting blood-orange skies, raw psychic scream",
        "timeline": {
          "era": "20 世紀初",
          "period": "表現主義",
          "yearRange": "c. 1893 - 1910",
          "order": 6,
          "historicalContext": "直接宣洩現代人的孤獨、焦慮與精神吶喊，波浪狀扭曲背景深深影響了德國表現主義。"
        }
      },
      {
        "id": "ca9",
        "subCategory": "modern_avant",
        "label": "裝飾藝術奢華幾何對稱 (Art Deco)",
        "prompt": "Art Deco style, lavish 1920s geometric symmetry, streamlined architectural luxury, gilded metallic gold and obsidian black, Great Gatsby opulence",
        "timeline": {
          "era": "20 世紀 20-30 年代",
          "period": "裝飾藝術 (Art Deco)",
          "yearRange": "c. 1920 - 1939",
          "order": 6,
          "historicalContext": "大亨小傳爵士時代（Jazz Age），以摩登摩天大樓線條、太陽放射圖騰與鍍金幾何風靡全球。"
        }
      },
      {
        "id": "ca16",
        "subCategory": "modern_avant",
        "label": "畢卡索立體派幾何碎裂 (Picasso)",
        "prompt": "Cubism style, in the style of Pablo Picasso, fractured geometric planes, multiple simultaneous viewpoints, angular abstracted forms, iconic analytical cubism",
        "timeline": {
          "era": "20 世紀前半",
          "period": "立體派 (Cubism)",
          "yearRange": "c. 1907 - 1930",
          "order": 7,
          "historicalContext": "打破文藝復興以來單一焦點透視，將主體拆解為多個幾何維度同時重組於二維平面。"
        }
      },
      {
        "id": "ca17",
        "subCategory": "modern_avant",
        "label": "達利超寫實主義與融化夢境 (Dali)",
        "prompt": "Surrealism, in the style of Salvador Dali, hyper-realistic uncanny dreamscapes, melting clocks, bizarre desert juxtaposition, metaphysical symbolism, razor-sharp illusionism",
        "timeline": {
          "era": "20 世紀中葉",
          "period": "超現實主義 (Surrealism)",
          "yearRange": "c. 1924 - 1960",
          "order": 7,
          "historicalContext": "受佛洛伊德潛意識啟發，以極致精密的寫實手法描繪融化時鐘與荒誕夢境空間。"
        }
      },
      {
        "id": "ca_matisse",
        "subCategory": "modern_avant",
        "label": "馬諦斯野獸派純色狂歡 (Matisse)",
        "prompt": "Fauvism, in the style of Henri Matisse, expressive pure primary colors, bold spontaneous flat shapes, joyful organic paper cutouts, liberated chromatic harmony",
        "timeline": {
          "era": "20 世紀初",
          "period": "野獸派 (Fauvism)",
          "yearRange": "c. 1905 - 1930",
          "order": 7,
          "historicalContext": "將色彩從自然客觀描繪中徹底解放，用最純粹飽和的紅黃藍綠傳遞純粹歡愉。"
        }
      },
      {
        "id": "ca_kandinsky",
        "subCategory": "modern_avant",
        "label": "康丁斯基抽象音樂旋律 (Kandinsky)",
        "prompt": "Abstract Art, in the style of Wassily Kandinsky, synesthetic visual music, dynamic floating geometric circles and vectors, spiritual explosive color rhythm",
        "timeline": {
          "era": "20 世紀初",
          "period": "抽象主義先驅",
          "yearRange": "c. 1910 - 1940",
          "order": 7,
          "historicalContext": "純粹抽象藝術先驅，將繪畫比作無歌詞的交響樂，探討點、線、面與色彩的心靈共振。"
        }
      }
    ]
  },
  "modernDesign": {
    "id": "modernDesign",
    "name": "現代藝術",
    "englishName": "Modern Art & Design",
    "icon": "Shapes",
    "description": "包浩斯、極簡、迷幻藝術、賽博龐克、孟菲斯與當代前衛設計（支援設計史時間軸）",
    "subCategories": [
      {
        "id": "psychedelic_avant",
        "name": "先鋒實驗與迷幻狂想",
        "englishName": "Avant-Garde & Psychedelic",
        "color": "fuchsia",
        "desc": "未來主義、60s 迷幻、超現實、酸性設計、抽象表現"
      },
      {
        "id": "modernism_grid",
        "name": "理性主義與網格極簡",
        "englishName": "Rationalism & Minimalism",
        "color": "slate",
        "desc": "包浩斯、風格派、瑞士網格、純粹極簡、粗獷主義"
      },
      {
        "id": "pop_future",
        "name": "大眾普普與未來美學",
        "englishName": "Pop, Retro & Futuristic",
        "color": "violet",
        "desc": "普普藝術、孟菲斯、賽博龐克、Y2K、蒸氣波、太陽龐克"
      }
    ],
    "items": [
      {
        "id": "md8",
        "subCategory": "psychedelic_avant",
        "label": "義大利未來主義 (Futurism)",
        "prompt": "Futurism art style, kinetic velocity, speed lines, mechanistic dynamism, industrial rhythm, fractured light forms, Umberto Boccioni energy",
        "timeline": {
          "era": "1900s - 1930s",
          "period": "20世紀初先鋒",
          "yearRange": "c. 1909 - 1920",
          "order": 1,
          "historicalContext": "頌揚機械工業力量、速度與現代科技，運用動態分割線條捕捉光與運動的瞬息軌跡。"
        }
      },
      {
        "id": "md7",
        "subCategory": "modernism_grid",
        "label": "俄羅斯構成主義 (Constructivism)",
        "prompt": "Russian Constructivism, bold red-black-cream palette, dynamic diagonal typographic layout, geometric propaganda abstraction, El Lissitzky industrial constructivism",
        "timeline": {
          "era": "1900s - 1930s",
          "period": "20世紀初先鋒",
          "yearRange": "c. 1915 - 1930",
          "order": 1,
          "historicalContext": "強調藝術服務於社會與建築功能，結合幾何抽象、強烈紅黑對比與斜向動態排版。"
        }
      },
      {
        "id": "md_destijl",
        "subCategory": "modernism_grid",
        "label": "荷蘭風格派新造型主義 (De Stijl)",
        "prompt": "De Stijl art movement, Piet Mondrian neoplasticism, pure primary colors (red, blue, yellow), thick black grid lines, asymmetric rectilinear equilibrium",
        "timeline": {
          "era": "1900s - 1930s",
          "period": "20世紀初先鋒",
          "yearRange": "c. 1917 - 1931",
          "order": 1,
          "historicalContext": "倡導純粹抽象與宇宙和諧，僅使用紅黃藍三原色與黑白灰方塊，構成純粹的垂直水平秩序。"
        }
      },
      {
        "id": "md1",
        "subCategory": "modernism_grid",
        "label": "包浩斯功能理性主義 (Bauhaus)",
        "prompt": "Bauhaus design aesthetic, clean functionalism, primary geometric circles squares triangles, form follows function, asymmetric grid balance, industrial typography",
        "timeline": {
          "era": "1900s - 1930s",
          "period": "20世紀初先鋒",
          "yearRange": "c. 1919 - 1933",
          "order": 1,
          "historicalContext": "現代設計搖籃，提出「形隨機能」與藝術與技術的新統一，奠定百年工業產品與現代平面設計基礎。"
        }
      },
      {
        "id": "md3",
        "subCategory": "psychedelic_avant",
        "label": "超現實主義迷幻夢境 (Surrealism)",
        "prompt": "Surrealism, Salvador Dali dreamlike juxtaposition, melting metaphysics, impossible floating architecture, subconscious symbolic landscape",
        "timeline": {
          "era": "1900s - 1930s",
          "period": "20世紀初先鋒",
          "yearRange": "c. 1924 - 1940",
          "order": 1,
          "historicalContext": "受佛洛伊德潛意識理論啟發，以精細寫實手法描繪反邏輯的夢境、異變形體與超現實空間。"
        }
      },
      {
        "id": "md_artdeco",
        "subCategory": "pop_future",
        "label": "裝飾藝術幾何風華 (Art Deco)",
        "prompt": "Art Deco geometric luxury, Chrysler building sunburst motifs, metallic gold chevron inlays, sleek aerodynamic curves, roaring twenties elegance",
        "timeline": {
          "era": "1900s - 1930s",
          "period": "20世紀初先鋒",
          "yearRange": "c. 1920 - 1939",
          "order": 1,
          "historicalContext": "融合機械美學與奢華裝飾，以放射線、鋸齒幾何圖案與金屬質感展現大亨小傳時期的繁榮魅力。"
        }
      },
      {
        "id": "md9",
        "subCategory": "psychedelic_avant",
        "label": "抽象表現主義行動繪畫 (Action Painting)",
        "prompt": "Abstract Expressionism, Jackson Pollock dynamic drip action painting, emotional raw strokes, energetic pigment splatter, monumental canvas texture",
        "timeline": {
          "era": "1940s - 1950s",
          "period": "戰後現代主義",
          "yearRange": "c. 1943 - 1955",
          "order": 2,
          "historicalContext": "紐約畫派興起，將畫布視為行動競技場，以自由滴淌與潑灑釋放純粹肢體與心靈能量。"
        }
      },
      {
        "id": "md14",
        "subCategory": "modernism_grid",
        "label": "粗獷主義混凝土美學 (Brutalism Architecture)",
        "prompt": "Brutalism architectural aesthetic, raw exposed textured concrete (béton brut), massive monolithic forms, geometric angular shadows, tectonic weight",
        "timeline": {
          "era": "1940s - 1950s",
          "period": "戰後現代主義",
          "yearRange": "c. 1950 - 1970",
          "order": 2,
          "historicalContext": "戰後建築運動，展現未經修飾的清水模混凝土厚重質感與宏大雕塑感結構。"
        }
      },
      {
        "id": "md2",
        "subCategory": "modernism_grid",
        "label": "瑞士國際主義排版網格 (Swiss Style)",
        "prompt": "Swiss International Typographic Style, structured asymmetric mathematical grid, modern graphic minimalism, objective clarity, clean Helvetica hierarchy",
        "timeline": {
          "era": "1940s - 1950s",
          "period": "戰後現代主義",
          "yearRange": "c. 1950 - 1970",
          "order": 2,
          "historicalContext": "以嚴謹數學網格、無襯線字體與客觀傳播為核心，成為現代平面設計與 UI/UX 系統的黃金準則。"
        }
      },
      {
        "id": "md_midcentury",
        "subCategory": "modernism_grid",
        "label": "中世紀現代主義 (Mid-Century Modern)",
        "prompt": "Mid-Century Modern aesthetic, organic flowing teak wood curves, Eames era clean furniture lines, warm muted earthen tones, architectural glass walls",
        "timeline": {
          "era": "1940s - 1950s",
          "period": "戰後現代主義",
          "yearRange": "c. 1945 - 1965",
          "order": 2,
          "historicalContext": "將有機曲線與工業製造結合，創造人體工學、溫潤木質與通透採光的經典生活美學。"
        }
      },
      {
        "id": "md5",
        "subCategory": "pop_future",
        "label": "普普藝術大眾色彩 (Pop Art)",
        "prompt": "Pop Art style, Andy Warhol screenprint dots, bold saturated primary colors, mass commercial culture repetition, Roy Lichtenstein comic Ben-Day dots",
        "timeline": {
          "era": "1960s - 1970s",
          "period": "60-70s 普普與反叛迷幻",
          "yearRange": "c. 1960 - 1975",
          "order": 3,
          "historicalContext": "消弭高雅與通俗藝術界線，擁抱可口可樂、名人肖像與漫畫網點等大眾消費符號。"
        }
      },
      {
        "id": "md_psychedelic",
        "subCategory": "psychedelic_avant",
        "label": "60s 迷幻反文化海報 (Psychedelic Art)",
        "prompt": "Psychedelic Art style, 1960s counterculture San Francisco concert poster aesthetic, swirling melting typography, kaleidoscopic neon colors, fluid optical distortion, trippy dreamscape",
        "timeline": {
          "era": "1960s - 1970s",
          "period": "60-70s 普普與反叛迷幻",
          "yearRange": "c. 1965 - 1973",
          "order": 3,
          "historicalContext": "嬉皮反文化運動產物，受音樂與意識擴張啟發，以流動融化字體、強烈對比互補色創造眩目視覺。"
        }
      },
      {
        "id": "md16",
        "subCategory": "psychedelic_avant",
        "label": "歐普藝術視覺錯覺 (Op Art)",
        "prompt": "Op Art style, Bridget Riley optical illusion patterns, black and white pulsating rhythmic waves, kinetic moiré vibration, perceptual geometry",
        "timeline": {
          "era": "1960s - 1970s",
          "period": "60-70s 普普與反叛迷幻",
          "yearRange": "c. 1964 - 1975",
          "order": 3,
          "historicalContext": "利用幾何線條與色彩對比引發眼睛的生理錯覺，使靜態畫面產生流動、閃爍與立體波動感。"
        }
      },
      {
        "id": "md4",
        "subCategory": "modernism_grid",
        "label": "純粹極簡主義 (Minimalism)",
        "prompt": "Contemporary Minimalism, Donald Judd pure geometric reduction, serene simplicity, monochromatic tonal precision, spacious negative breathing space",
        "timeline": {
          "era": "1960s - 1970s",
          "period": "60-70s 普普與反叛迷幻",
          "yearRange": "c. 1960 - 1975",
          "order": 3,
          "historicalContext": "「少即是多（Less is more）」的極致體現，屏除一切裝飾與多餘敘事，回歸形體、光線與材料本質。"
        }
      },
      {
        "id": "md6",
        "subCategory": "pop_future",
        "label": "孟菲斯狂想幾何 (Memphis Design)",
        "prompt": "Memphis Milano Design movement, Ettore Sottsass 1980s quirky postmodern geometric patterns, vibrant contrast pastel palette, squiggles, terrazzo, playful rebellious asymmetry",
        "timeline": {
          "era": "1980s - 1990s",
          "period": "80-90s 後現代與數位狂想",
          "yearRange": "c. 1981 - 1988",
          "order": 4,
          "historicalContext": "打破現代主義嚴肅教條的義大利後現代團體，以波浪捲線、水磨石、鮮豔撞色與幽默幾何顛覆設計界。"
        }
      },
      {
        "id": "md10",
        "subCategory": "pop_future",
        "label": "賽博龐克高科技低生活 (Cyberpunk)",
        "prompt": "Cyberpunk aesthetic, Blade Runner neon-drenched rainy metropolis, holographic HUD interface, high-tech low-life, gritty chrome cables, Japanese kanji signage",
        "timeline": {
          "era": "1980s - 1990s",
          "period": "80-90s 後現代與數位狂想",
          "yearRange": "c. 1982 - 1999",
          "order": 4,
          "historicalContext": "80年代科幻文學與電影奠定的反烏托邦美學，描繪高科技與貧民窟並存的霓虹雨夜未來。"
        }
      },
      {
        "id": "md11",
        "subCategory": "pop_future",
        "label": "蒸氣波復古夢幻 (Vaporwave)",
        "prompt": "Vaporwave aesthetic, 90s Windows OS glitch nostalgia, pastel pink and turquoise gradient sunset, classical Roman marble bust, checkered grid floor, retro lo-fi chill",
        "timeline": {
          "era": "1980s - 1990s",
          "period": "80-90s 後現代與數位狂想",
          "yearRange": "c. 1995 - 2012",
          "order": 4,
          "historicalContext": "對 80/90 年代早期消費文化與撥接網路時代的懷舊解構，融合古希臘雕像、粉紫漸層與低傳真故障。"
        }
      },
      {
        "id": "md15",
        "subCategory": "pop_future",
        "label": "低多邊形復古3D (Low-Poly)",
        "prompt": "Low-poly art style, geometric faceted surfaces, isometric polygon styling, clean pastel faceting, PS1 retro 3D rendering aesthetic",
        "timeline": {
          "era": "1980s - 1990s",
          "period": "80-90s 後現代與數位狂想",
          "yearRange": "c. 1990 - 2005",
          "order": 4,
          "historicalContext": "早期 3D 電腦繪圖與電視遊樂器算力受限下產生的多邊形晶體美感，現已成為獨特的復古數位藝術風格。"
        }
      },
      {
        "id": "md_grunge",
        "subCategory": "psychedelic_avant",
        "label": "90s 垃圾搖滾破壞排版 (90s Grunge Typography)",
        "prompt": "90s Grunge graphic design, David Carson Ray Gun style, distressed shredded typography, xerox photocopy textures, raw rebellious asymmetric collage",
        "timeline": {
          "era": "1980s - 1990s",
          "period": "80-90s 後現代與數位狂想",
          "yearRange": "c. 1992 - 1999",
          "order": 4,
          "historicalContext": "打破傳統排版可讀性原則，運用影印機污漬、撕裂字體與破壞質感展現 Grunge 搖滾時代的原始狂躁。"
        }
      },
      {
        "id": "md_y2k",
        "subCategory": "pop_future",
        "label": "千禧 Y2K 未來美學 (Y2K Aesthetic / Frutiger Aero)",
        "prompt": "Y2K aesthetic, early 2000s futuristic chrome metallic sheen, translucent colorful bubble plastic, cyber rave techno graphics, iridescent gloss",
        "timeline": {
          "era": "2000s - 至今",
          "period": "21世紀當代前衛",
          "yearRange": "c. 2000 - 2008",
          "order": 5,
          "historicalContext": "千禧年前後對新世紀科技的樂觀幻想，大量運用銀色液態金屬、半透明果凍外殼與數位泡泡。"
        }
      },
      {
        "id": "md17",
        "subCategory": "psychedelic_avant",
        "label": "酸性設計實驗先鋒 (Acid Graphics)",
        "prompt": "Acid Graphics, chromatic liquid mercury chrome, trippy warped typography, 3D spiked metallic forms, rave cyber aesthetic, anti-design dissonance",
        "timeline": {
          "era": "2000s - 至今",
          "period": "21世紀當代前衛",
          "yearRange": "c. 2018 - 至今",
          "order": 5,
          "historicalContext": "當代青年次文化先鋒，以失真變形字體、流動水銀金屬、刺狀幾何與高對比色彩挑戰常規美學秩序。"
        }
      },
      {
        "id": "md_neobrutalism",
        "subCategory": "modernism_grid",
        "label": "新粗獷主義現代UI (Neo-Brutalism)",
        "prompt": "Neo-Brutalism modern UI aesthetic, high contrast solid black drop shadows, bold saturated colors, thick stark outlines, clean modernist brutalist typography",
        "timeline": {
          "era": "2000s - 至今",
          "period": "21世紀當代前衛",
          "yearRange": "c. 2020 - 至今",
          "order": 5,
          "historicalContext": "將建築粗獷主義引入數位介面，以高對比硬陰影、純黑厚邊框與大膽飽和色塊取代精緻漸層。"
        }
      },
      {
        "id": "md12",
        "subCategory": "pop_future",
        "label": "太陽龐克生態未來 (Solarpunk)",
        "prompt": "Solarpunk aesthetic, utopian green architecture, blooming lush vertical forests, sunlight and flowing clean energy, stained glass solar panels, harmonious nature tech",
        "timeline": {
          "era": "2000s - 至今",
          "period": "21世紀當代前衛",
          "yearRange": "c. 2010 - 至今",
          "order": 5,
          "historicalContext": "相對於賽博龐克的陰鬱，太陽龐克勾勒人與自然科技共生的高科技生態烏托邦，充滿暖陽與立體綠化。"
        }
      },
      {
        "id": "md13",
        "subCategory": "modernism_grid",
        "label": "侘寂不完美當代哲學 (Wabi-Sabi Contemporary)",
        "prompt": "Wabi-sabi modern aesthetic, earthy raw clay textures, weathered stone patina, organic serene negative space, beauty in transience and imperfection",
        "timeline": {
          "era": "2000s - 至今",
          "period": "21世紀當代前衛",
          "yearRange": "當代美學融合",
          "order": 5,
          "historicalContext": "源自東方禪宗哲學，當代室內與產品設計廣泛採納其粗糙天然質地、風化痕跡與沉靜留白。"
        }
      }
    ]
  },
  "commercialDesign": {
    "id": "commercialDesign",
    "name": "產品設計",
    "englishName": "Product & Commercial Design",
    "icon": "Package",
    "description": "適用於包裝、UI/UX、海報、書籍與品牌識別展示",
    "subCategories": [
      {
        "id": "podium",
        "name": "極簡展台與陳列幾何",
        "englishName": "Podium & Stages",
        "color": "indigo",
        "desc": "純白去背、幾何階梯、奢華黑曜石展台與懸浮場景"
      },
      {
        "id": "print_paper",
        "name": "平面印刷與紙質載體",
        "englishName": "Print & Paper Mockups",
        "color": "amber",
        "desc": "A1海報框、A4文件、精裝書本、棉卡名片與壓印工藝"
      }
    ],
    "items": [
      {
        "id": "cm10",
        "subCategory": "podium",
        "label": "動態懸浮零重力展示 (Levitating)",
        "prompt": "floating in mid-air, zero gravity suspension, dynamic clean balance, isolated aesthetic, soft contact shadow underneath, commercial studio rendering"
      },
      {
        "id": "cm16",
        "subCategory": "podium",
        "label": "百葉窗條紋光影空間 (Shadowplay)",
        "prompt": "venetian blinds shadow patterns, geometric diagonal sunlight stripes, minimalist architectural interior, natural warm ambient lighting, elegant studio backdrop"
      },
      {
        "id": "cm1",
        "subCategory": "podium",
        "label": "純白極簡電商去背攝影棚 (Pure Studio)",
        "prompt": "clean pure white seamless background, soft studio ambient fill light, subtle realistic drop shadow underneath, commercial e-commerce product mockup"
      },
      {
        "id": "cm_step_platform",
        "subCategory": "podium",
        "label": "幾何階梯展台 (Stepped Pedestal)",
        "prompt": "minimalist stepped geometric podium, architectural concrete block elevation, hard directional sunlight, elegant sculptural stage"
      },
      {
        "id": "cm_dark_luxury",
        "subCategory": "podium",
        "label": "低調奢華黑曜石展台 (Obsidian Dark)",
        "prompt": "matte black obsidian stone pedestal, subtle rim lighting, dramatic moody backdrop, dark luxury aesthetic, premium gold accents"
      },
      {
        "id": "cm_a1",
        "subCategory": "print_paper",
        "label": "A1 鋁框海報展示 (A1 Frame Mockup)",
        "prompt": "vertical A1 slim aluminum picture frame mockup, hanging on gallery concrete wall, natural soft window light reflection, clean glass glare"
      },
      {
        "id": "cm_a4",
        "subCategory": "print_paper",
        "label": "A4 辦公紙張排版 (A4 Letterhead)",
        "prompt": "A4 stationery paper sheet mockup, 120gsm premium textured paper, slight natural bend, clean flat lay desktop arrangement, soft diffuse lighting"
      },
      {
        "id": "cm_hardcover",
        "subCategory": "print_paper",
        "label": "精裝書籍布紋封面 (Hardcover Book)",
        "prompt": "thick hardcover book mockup, premium woven cloth texture cover, embossed foil spine lettering, three-dimensional book angle on wooden desk"
      },
      {
        "id": "cm_openbook",
        "subCategory": "print_paper",
        "label": "開展畫冊雙頁展示 (Open Magazine)",
        "prompt": "open editorial art magazine mockup, spread pages with natural paper curve, minimalist typography layout, soft overhead studio lighting"
      },
      {
        "id": "cm_card_emboss",
        "subCategory": "print_paper",
        "label": "重磅棉卡盲壓印名片 (Embossed Card)",
        "prompt": "600gsm heavy cotton business card mockup, deep blind letterpress debossing, crisp tactile edges, luxurious micro texture"
      },
      {
        "id": "cm_card_float",
        "subCategory": "print_paper",
        "label": "雙面名片立體懸浮 (Floating Cards)",
        "prompt": "two floating business cards displaying front and back layout, clean diagonal alignment, soft realistic multi-layer drop shadows"
      }
    ]
  },
  "photography": {
    "id": "photography",
    "name": "攝影構圖",
    "englishName": "Photography & Composition",
    "icon": "Camera",
    "description": "機位視角、幾何構圖比例、當代攝影大師、光學鏡頭語言與光影調校",
    "subCategories": [
      {
        "id": "perspective",
        "name": "機位視角與空間透視",
        "englishName": "Camera Angles & Perspective",
        "color": "cyan",
        "desc": "俯視Topview、側視Sideview、正視、鳥瞰、仰視、等距軸測與特寫"
      },
      {
        "id": "geometry",
        "name": "幾何構圖與比例導引",
        "englishName": "Geometry & Visual Flow",
        "color": "indigo",
        "desc": "三分法、絕對對稱、黃金螺旋、引導線、負空間留白"
      },
      {
        "id": "masters",
        "name": "當代攝影大師風格",
        "englishName": "Contemporary Masters",
        "color": "indigo",
        "desc": "Annie Leibovitz、Peter Lindbergh、森山大道等大師語彙"
      },
      {
        "id": "lenses",
        "name": "鏡頭焦段與特殊光學",
        "englishName": "Lenses & Special Optics",
        "color": "amber",
        "desc": "85mm 淺景深、24mm 廣角、變形寬銀幕、移軸、針孔與顯微鏡"
      },
      {
        "id": "lighting",
        "name": "光影調校與自然/特殊光源",
        "englishName": "Lighting & Atmospheres",
        "color": "emerald",
        "desc": "柔光箱、丁達爾光、黃金時刻暖陽、燭光、賽博霓虹、黑光紫外線"
      }
    ],
    "items": [
      {
        "id": "c_topview",
        "subCategory": "perspective",
        "label": "Topview / 90度垂直俯視平拍 (Flat Lay Top View)",
        "prompt": "flat lay top-down view, 90-degree overhead perspective, straight-down bird-eye mockup angle, neat arrangement"
      },
      {
        "id": "c_sideview",
        "subCategory": "perspective",
        "label": "Sideview / 側面平視視角 (Side Profile View)",
        "prompt": "side profile view, 90-degree lateral perspective, orthogonal elevation view, clean silhouette"
      },
      {
        "id": "c_frontview",
        "subCategory": "perspective",
        "label": "Frontview / 正面平視視角 (Straight-On Front View)",
        "prompt": "straight-on front eye-level view, direct symmetrical frontal perspective, orthogonal elevation"
      },
      {
        "id": "c_45deg",
        "subCategory": "perspective",
        "label": "45° Angle / 45度斜角立體透視 (Three-Quarter Angle)",
        "prompt": "elevated 45-degree angle perspective, three-quarter angle product view, dynamic diagonal depth"
      },
      {
        "id": "c1",
        "subCategory": "geometry",
        "label": "經典三分法 (Rule of Thirds)",
        "prompt": "rule of thirds composition, balanced focal point"
      },
      {
        "id": "c2",
        "subCategory": "geometry",
        "label": "絕對對稱美學 (Symmetry)",
        "prompt": "perfect symmetrical composition, geometric equilibrium"
      },
      {
        "id": "c3",
        "subCategory": "perspective",
        "label": "鳥瞰空拍視角 (Bird-Eye)",
        "prompt": "aerial bird-eye view, drone photography, top-down perspective"
      },
      {
        "id": "c4",
        "subCategory": "perspective",
        "label": "仰視低角度張力 (Worm-Eye)",
        "prompt": "low angle worm-eye view, imposing perspective, heroic framing"
      },
      {
        "id": "c5",
        "subCategory": "perspective",
        "label": "荷蘭角傾斜構圖 (Dutch Tilt)",
        "prompt": "Dutch angle shot, dynamic tilted perspective, tension"
      },
      {
        "id": "c6",
        "subCategory": "geometry",
        "label": "透視引導線 (Leading Lines)",
        "prompt": "strong leading lines, vanishing point perspective"
      },
      {
        "id": "c7",
        "subCategory": "geometry",
        "label": "負空間/留白美學 (Negative Space)",
        "prompt": "minimalist negative space, elegant breathing room"
      },
      {
        "id": "c8",
        "subCategory": "geometry",
        "label": "畫中畫自然框景 (Frame in Frame)",
        "prompt": "frame within a frame composition, layered foreground"
      },
      {
        "id": "c9",
        "subCategory": "perspective",
        "label": "等距軸測視角 (Isometric)",
        "prompt": "isometric projection camera angle, 30-degree axonometric perspective, orthographic framing, realistic cinematic lighting and shadow depth, photorealistic architectural scale"
      },
      {
        "id": "c10",
        "subCategory": "geometry",
        "label": "黃金螺旋構圖 (Golden Spiral)",
        "prompt": "golden ratio spiral composition, harmonious proportions"
      },
      {
        "id": "c11",
        "subCategory": "perspective",
        "label": "極致特寫 (Extreme Close-Up)",
        "prompt": "extreme close-up shot, intense focal point"
      },
      {
        "id": "c12",
        "subCategory": "geometry",
        "label": "動態對角線構圖 (Diagonal)",
        "prompt": "dynamic diagonal composition, kinetic energy flow"
      },
      {
        "id": "p_photog1",
        "subCategory": "masters",
        "label": "Annie Leibovitz 戲劇電影感人像",
        "prompt": "in the style of Annie Leibovitz, dramatic cinematic lighting, rich textured environment, painterly environmental portrait, intimate storytelling"
      },
      {
        "id": "p_photog2",
        "subCategory": "masters",
        "label": "Peter Lindbergh 純粹黑白極簡人像",
        "prompt": "in the style of Peter Lindbergh, raw unvarnished black and white photography, timeless monochrome, emotional natural beauty, high contrast silver gelatin print"
      },
      {
        "id": "p_photog3",
        "subCategory": "masters",
        "label": "Gregory Crewdson 詭譎郊區電影光影",
        "prompt": "in the style of Gregory Crewdson, cinematic suburban twilight, elaborate staging, surreal eerie atmosphere, large format photography, evocative moody narrative"
      },
      {
        "id": "p_photog4",
        "subCategory": "masters",
        "label": "Steve McCurry 濃郁人文纪實色彩",
        "prompt": "in the style of Steve McCurry, vibrant saturated Kodachrome colors, piercing soulful eyes, National Geographic documentary portraiture, dramatic warm lighting"
      },
      {
        "id": "p_photog5",
        "subCategory": "masters",
        "label": "Tim Walker 奇幻時尚童話夢境",
        "prompt": "in the style of Tim Walker, whimsical avant-garde fashion photography, theatrical oversized props, fairy-tale surrealism, pastel color palette"
      },
      {
        "id": "p_photog6",
        "subCategory": "masters",
        "label": "川內倫子 (Rinko Kawauchi) 空靈日常微光",
        "prompt": "in the style of Rinko Kawauchi, ethereal Japanese aesthetic, overexposed soft translucent light, square 6x6 format, tranquil poetic everyday micro-moments"
      },
      {
        "id": "p_photog7",
        "subCategory": "masters",
        "label": "森山大道 (Daido Moriyama) 粗顆粒街頭晃動",
        "prompt": "in the style of Daido Moriyama, rough grainy black and white (Are, Bure, Boke), blurry motion, gritty high contrast snapshot, urban street photography"
      },
      {
        "id": "p_photog8",
        "subCategory": "masters",
        "label": "Nan Goldin 原始私密紀實光影",
        "prompt": "in the style of Nan Goldin, raw snapshot aesthetic, candid direct flash, saturated moody neon interior, emotional cinematic intimacy"
      },
      {
        "id": "p_lens1",
        "subCategory": "lenses",
        "label": "變形寬銀幕電影鏡頭 (Anamorphic)",
        "prompt": "shot on anamorphic lens, 2.39:1 widescreen cinematic ratio, horizontal blue streak flare, oval optical bokeh, shallow depth of field"
      },
      {
        "id": "p_lens2",
        "subCategory": "lenses",
        "label": "85mm f/1.2 頂級人像極淺景深",
        "prompt": "shot on 85mm f/1.2 prime lens, razor sharp eye focus, creamy dreamy background falloff, three-dimensional subject isolation"
      },
      {
        "id": "p_lens3",
        "subCategory": "lenses",
        "label": "24mm 電影級超廣角透視張力",
        "prompt": "shot on 24mm wide angle cinema lens, dramatic expansive perspective, sweeping leading lines, deep environmental depth"
      },
      {
        "id": "p_lens4",
        "subCategory": "lenses",
        "label": "100mm 1:1 微距光學細節",
        "prompt": "shot on 100mm macro lens, 1:1 reproduction ratio, microscopic textural clarity, razor thin focal plane, crystalline precision"
      },
      {
        "id": "p_lens5",
        "subCategory": "lenses",
        "label": "移軸鏡頭微縮模型效果 (Tilt-Shift)",
        "prompt": "tilt-shift lens photography, miniature diorama effect, selective sharp slice of focus, blurred top and bottom margins"
      },
      {
        "id": "p_lens6",
        "subCategory": "lenses",
        "label": "魚眼鏡頭極致球形畸變 (Fisheye)",
        "prompt": "fisheye lens distortion, 180-degree spherical field of view, dramatic curved horizon, dynamic bubble perspective"
      },
      {
        "id": "p_lens7",
        "subCategory": "lenses",
        "label": "復古電影柔焦鏡/黑柔濾鏡 (Black Pro-Mist)",
        "prompt": "shot with 1/4 Black Pro-Mist filter, bloomed organic highlights, lowered digital contrast, dreamy soft vintage glow"
      },
      {
        "id": "p_lens8",
        "subCategory": "lenses",
        "label": "望遠長焦壓縮感 (200mm Telephoto)",
        "prompt": "shot on 200mm telephoto lens, intense background compression, layered graphic depth, flattened spatial perspective"
      },
      {
        "id": "p_lens9",
        "subCategory": "lenses",
        "label": "針孔相機復古暗箱 (Pinhole Camera)",
        "prompt": "pinhole camera photography, infinite depth of field, natural soft vignetting, subtle chromatic blurring, vintage lo-fi aesthetic"
      },
      {
        "id": "p_lens10",
        "subCategory": "lenses",
        "label": "電子顯微鏡超微觀 (Electron Microscopy)",
        "prompt": "scanning electron microscope photography (SEM), extreme scientific magnification, nanoscale micro surface relief, false color grading"
      },
      {
        "id": "p_lens11",
        "subCategory": "lenses",
        "label": "衛星空拍遙感地景 (Satellite Imagery)",
        "prompt": "high-altitude satellite earth observation imagery, orbital top-down macro texture, geological topography, synthetic aperture view"
      },
      {
        "id": "p1",
        "subCategory": "lighting",
        "label": "柔和漫射柔光箱 (Soft Diffused)",
        "prompt": "soft diffused studio lighting, gentle gradient shadows, wrap-around illumination"
      },
      {
        "id": "p2",
        "subCategory": "lighting",
        "label": "電影級輪廓光/邊緣光 (Rim Lighting)",
        "prompt": "cinematic rim lighting, dramatic edge highlights, separating backlight"
      },
      {
        "id": "p3",
        "subCategory": "lighting",
        "label": "倫勃朗經典三角光 (Rembrandt)",
        "prompt": "Rembrandt lighting, classic portrait chiaroscuro, luminous cheek triangle"
      },
      {
        "id": "p4",
        "subCategory": "lighting",
        "label": "黃金時刻落日暖陽 (Golden Hour)",
        "prompt": "golden hour lighting, warm ambient low-angled sunlight, glowing atmospheric haze"
      },
      {
        "id": "p5",
        "subCategory": "lighting",
        "label": "藍調時刻冷冽微光 (Blue Hour)",
        "prompt": "blue hour atmosphere, cool twilight ambient tones, tranquil melancholic mood"
      },
      {
        "id": "p7",
        "subCategory": "lighting",
        "label": "慢門長曝光動態光軌 (Long Exposure)",
        "prompt": "long exposure photography, smooth silky motion blur, luminous kinetic light trails"
      },
      {
        "id": "p8",
        "subCategory": "lighting",
        "label": "底片雙重曝光疊影 (Double Exposure)",
        "prompt": "double exposure photography, surreal silhouette blended overlay"
      },
      {
        "id": "p12",
        "subCategory": "lighting",
        "label": "35mm 復古膠卷顆粒 (Kodak Portra)",
        "prompt": "35mm vintage film photography, authentic organic grain, Kodak Portra 400 warm skin tones"
      },
      {
        "id": "p13",
        "subCategory": "lighting",
        "label": "賽博龐克雙色霓虹對比 (Cyber Neon)",
        "prompt": "cyberpunk dual neon lighting, high-contrast cyan and magenta split illumination"
      },
      {
        "id": "p14",
        "subCategory": "lighting",
        "label": "電影級丁達爾體積光/耶穌光 (God Rays)",
        "prompt": "cinematic volumetric lighting, dusty sunbeams, atmospheric God rays, Tyndall effect"
      },
      {
        "id": "p15",
        "subCategory": "lighting",
        "label": "低調暗部光影 (Low-Key Moody)",
        "prompt": "low-key lighting, deep rich shadows, mysterious chiaroscuro mood"
      },
      {
        "id": "p16",
        "subCategory": "lighting",
        "label": "高調透亮清新光 (High-Key Ethereal)",
        "prompt": "high-key lighting, bright airy ethereal aesthetic, soft glowing highlights"
      },
      {
        "id": "p17",
        "subCategory": "lighting",
        "label": "逆光強烈剪影張力 (Backlit Silhouette)",
        "prompt": "backlit silhouette, strong high contrast graphic outline, golden edge glow"
      },
      {
        "id": "p18",
        "subCategory": "lighting",
        "label": "前衛直閃/環形閃光燈 (Direct Flash)",
        "prompt": "direct on-camera flash, hard shadow edge, 90s party snapshot, high-fashion gloss"
      },
      {
        "id": "p19",
        "subCategory": "lighting",
        "label": "溫暖搖曳燭光氛圍 (Candlelight Glow)",
        "prompt": "flickering warm candlelight illumination, intimate low-light ambiance, soft golden flame reflections"
      },
      {
        "id": "p20",
        "subCategory": "lighting",
        "label": "紫外線黑光螢光 (UV Blacklight)",
        "prompt": "ultraviolet blacklight glow, neon fluorescent emission, radioactive luminescent details"
      }
    ]
  },
  "negative": {
    "id": "negative",
    "name": "負面提示詞",
    "englishName": "Negative Prompts",
    "icon": "ShieldAlert",
    "description": "去除干擾雜質、背景純化與防崩壞參數",
    "subCategories": [
      {
        "id": "purity",
        "name": "畫面純淨與背景除雜",
        "englishName": "Background & Purity",
        "color": "red",
        "desc": "去人物、純白背景、去浮水印文字、去噪點"
      },
      {
        "id": "quality",
        "name": "防結構崩壞與畫質控制",
        "englishName": "Anti-Defect & Quality",
        "color": "rose",
        "desc": "防肢體崩壞、防模糊低清、防過曝死白、防塑料感"
      }
    ],
    "items": [
      {
        "id": "n1",
        "subCategory": "purity",
        "label": "去除人物/無人景觀",
        "prompt": "human, people, person, crowd, silhouette of person",
        "isNegative": true
      },
      {
        "id": "n2",
        "subCategory": "purity",
        "label": "純白極簡無雜物背景",
        "prompt": "cluttered background, complex patterns, dark shadows, noise",
        "isNegative": true
      },
      {
        "id": "n3",
        "subCategory": "purity",
        "label": "去除浮水印與文字亂碼 (Mockup必選)",
        "prompt": "watermark, text, letters, typography, signature, logo, copyright notice, banner, sticker, label",
        "isNegative": true
      },
      {
        "id": "n4",
        "subCategory": "quality",
        "label": "防止肢體崩壞畸形",
        "prompt": "extra limbs, bad anatomy, deformed fingers, mutated hands, poorly drawn hands, missing limbs",
        "isNegative": true
      },
      {
        "id": "n5",
        "subCategory": "quality",
        "label": "防止畫面模糊與低解析度",
        "prompt": "blurry, low resolution, jpeg artifacts, pixelated, out of focus, low quality",
        "isNegative": true
      },
      {
        "id": "n6",
        "subCategory": "purity",
        "label": "乾淨邊緣/防止邊框裁切",
        "prompt": "cropped, frame, border, split screen, out of frame",
        "isNegative": true
      },
      {
        "id": "n7",
        "subCategory": "quality",
        "label": "防止過度曝光死白",
        "prompt": "overexposed, blown out highlights, extreme glare",
        "isNegative": true
      },
      {
        "id": "n8",
        "subCategory": "purity",
        "label": "純淨無噪點雜訊 (合成必選)",
        "prompt": "grain, noise, dirty background, dust specks, chromatic aberration, scratches",
        "isNegative": true
      },
      {
        "id": "n9",
        "subCategory": "quality",
        "label": "去除了無生氣的灰色調",
        "prompt": "muddy colors, desaturated, washed out, dull lighting",
        "isNegative": true
      },
      {
        "id": "n10",
        "subCategory": "quality",
        "label": "去除非寫實塑料假人感",
        "prompt": "uncanny valley, plastic skin, doll face, cheap 3d render look, airbrushed",
        "isNegative": true
      },
      {
        "id": "n11",
        "subCategory": "purity",
        "label": "孤立物體/無環境雜景",
        "prompt": "complex background, busy room, realistic environment, outdoors, ground texture",
        "isNegative": true
      }
    ]
  }
};

// 支援的 AI 引擎與模型版本
export const midjourneyVersions = [
  {
    "id": "v8.2",
    "name": "Midjourney v8.2",
    "shortName": "V8.2",
    "param": "--v 8.2",
    "strength": "極速、高解析、完美文字呈現",
    "suitableFor": "電商海報、UI設計、平面廣告",
    "desc": "最新旗艦版，文字渲染極佳、極致商業質感"
  },
  {
    "id": "v7",
    "name": "Midjourney v7",
    "shortName": "V7",
    "param": "--v 7",
    "strength": "語義精準、手部結構好、具備草稿模式",
    "suitableFor": "快速概念探索、複雜人物場景",
    "desc": "精準語意理解，支援更快的 Draft 模式"
  },
  {
    "id": "v6.1",
    "name": "Midjourney v6.1",
    "shortName": "V6.1",
    "param": "--v 6.1",
    "strength": "電影級光影、高寫實感",
    "suitableFor": "商業攝影、擬真人物、電影美術",
    "desc": "成熟的光影表現力與真實皮膚紋理"
  },
  {
    "id": "v6.0",
    "name": "Midjourney v6.0",
    "shortName": "V6.0",
    "param": "--v 6.0",
    "strength": "文字嵌入能力、長句語義理解",
    "suitableFor": "海報招牌、排版設計",
    "desc": "高解析度排版與寫實構圖"
  },
  {
    "id": "niji7",
    "name": "Niji Journey v7",
    "shortName": "Niji 7",
    "param": "--niji 7",
    "strength": "頂級動漫插畫、二次元細節",
    "suitableFor": "輕小說封面、動漫周邊、插畫設計",
    "desc": "最新二次元與動畫大師風格特化引擎"
  },
  {
    "id": "niji6",
    "name": "Niji Journey v6",
    "shortName": "Niji 6",
    "param": "--niji 6",
    "strength": "日系動漫與水彩插畫風格",
    "suitableFor": "角色設定集、日漫繪本創作",
    "desc": "經典日系二次元與動漫插畫"
  }
];

// 預設精選色票組合 (Preset Aesthetic Hex Palettes)
export const presetPalettes = [
  {
    "name": "極簡莫蘭迪 (Morandi)",
    "colors": [
      "#8E9775",
      "#E28E95",
      "#B8C0C2",
      "#EAD8C0",
      "#505658"
    ]
  },
  {
    "name": "商業奢華黑白金 (Luxury Gold)",
    "colors": [
      "#18181B",
      "#E5E5E5",
      "#D4AF37",
      "#71717A",
      "#FFFFFF"
    ]
  },
  {
    "name": "新東京霓虹 (Cyber Neon)",
    "colors": [
      "#0D0221",
      "#0F084B",
      "#26408B",
      "#A6CFD5",
      "#C2E7D9"
    ]
  },
  {
    "name": "復古暖調大地 (Warm Terra)",
    "colors": [
      "#264653",
      "#2A9D8F",
      "#E9C46A",
      "#F4A261",
      "#E76F51"
    ]
  },
  {
    "name": "包浩斯三原色 (Bauhaus)",
    "colors": [
      "#E63946",
      "#1D3557",
      "#F1FAEE",
      "#FFB703",
      "#111111"
    ]
  },
  {
    "name": "京都枯山水 (Wabi-Sabi)",
    "colors": [
      "#3A302A",
      "#7A6B5D",
      "#C4B29E",
      "#DDD3C4",
      "#201A17"
    ]
  }
];

export const subCategoryColorMap: Record<string, { bg: string; text: string; border: string; activeBg: string; activeText: string; dot: string }> = {
  "indigo": {
    "bg": "bg-indigo-50",
    "text": "text-indigo-700",
    "border": "border-indigo-200",
    "activeBg": "bg-indigo-900/80",
    "activeText": "text-indigo-200",
    "dot": "bg-indigo-500"
  },
  "amber": {
    "bg": "bg-amber-50",
    "text": "text-amber-700",
    "border": "border-amber-200",
    "activeBg": "bg-amber-900/80",
    "activeText": "text-amber-200",
    "dot": "bg-amber-500"
  },
  "emerald": {
    "bg": "bg-emerald-50",
    "text": "text-emerald-700",
    "border": "border-emerald-200",
    "activeBg": "bg-emerald-900/80",
    "activeText": "text-emerald-200",
    "dot": "bg-emerald-500"
  },
  "blue": {
    "bg": "bg-blue-50",
    "text": "text-blue-700",
    "border": "border-blue-200",
    "activeBg": "bg-blue-900/80",
    "activeText": "text-blue-200",
    "dot": "bg-blue-500"
  },
  "purple": {
    "bg": "bg-purple-50",
    "text": "text-purple-700",
    "border": "border-purple-200",
    "activeBg": "bg-purple-900/80",
    "activeText": "text-purple-200",
    "dot": "bg-purple-500"
  },
  "cyan": {
    "bg": "bg-cyan-50",
    "text": "text-cyan-700",
    "border": "border-cyan-200",
    "activeBg": "bg-cyan-900/80",
    "activeText": "text-cyan-200",
    "dot": "bg-cyan-500"
  },
  "rose": {
    "bg": "bg-rose-50",
    "text": "text-rose-700",
    "border": "border-rose-200",
    "activeBg": "bg-rose-900/80",
    "activeText": "text-rose-200",
    "dot": "bg-rose-500"
  },
  "teal": {
    "bg": "bg-teal-50",
    "text": "text-teal-700",
    "border": "border-teal-200",
    "activeBg": "bg-teal-900/80",
    "activeText": "text-teal-200",
    "dot": "bg-teal-500"
  },
  "fuchsia": {
    "bg": "bg-fuchsia-50",
    "text": "text-fuchsia-700",
    "border": "border-fuchsia-200",
    "activeBg": "bg-fuchsia-900/80",
    "activeText": "text-fuchsia-200",
    "dot": "bg-fuchsia-500"
  },
  "slate": {
    "bg": "bg-slate-100",
    "text": "text-slate-700",
    "border": "border-slate-300",
    "activeBg": "bg-slate-800",
    "activeText": "text-slate-200",
    "dot": "bg-slate-500"
  },
  "violet": {
    "bg": "bg-violet-50",
    "text": "text-violet-700",
    "border": "border-violet-200",
    "activeBg": "bg-violet-900/80",
    "activeText": "text-violet-200",
    "dot": "bg-violet-500"
  },
  "orange": {
    "bg": "bg-orange-50",
    "text": "text-orange-700",
    "border": "border-orange-200",
    "activeBg": "bg-orange-900/80",
    "activeText": "text-orange-200",
    "dot": "bg-orange-500"
  },
  "red": {
    "bg": "bg-red-50",
    "text": "text-red-700",
    "border": "border-red-200",
    "activeBg": "bg-red-900/80",
    "activeText": "text-red-200",
    "dot": "bg-red-500"
  }
};
