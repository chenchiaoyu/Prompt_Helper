import React from 'react';

export interface DiagramData {
  title: string;
  type: 'grid' | 'symmetry' | 'diagonal' | 'spiral' | 'frame' | 'negative' | 'topview' | 'sideview' | 'frontview' | 'threequarter' | 'birdeye' | 'wormeye' | 'dutch' | 'isometric' | 'closeup' | 'leading';
  summary: string;
  principle: string;
  cameraHint: string;
}

export const compositionExplanations: Record<string, { desc: string; diagram?: DiagramData }> = {
  // --- 視角與構圖 (Angles & Composition) ---
  'c_topview': {
    desc: '相機垂直向下90度拍攝，消除透視畸變，呈現如平面設計般的幾何排列與乾淨版面，極適合產品展示。',
    diagram: {
      title: '90° 垂直正俯視 (Flat Lay Top View)',
      type: 'topview',
      summary: '相機鏡頭正對地面向下垂直拍攝，消除縱深梯形透視',
      principle: '將立體物體壓平為純粹平面幾何，強調排版秩序、負空間與物件之間的對稱美感。',
      cameraHint: '機位：地面正上方 90° 直下 | 焦段：50mm 標準鏡（避免廣角桶狀變形）'
    }
  },
  'cm_topview': {
    desc: '相機垂直向下90度拍攝，消除透視畸變，呈現如平面設計般的幾何排列與乾淨版面，極適合產品展示。',
    diagram: {
      title: '90° 垂直正俯視 (Flat Lay Top View)',
      type: 'topview',
      summary: '相機鏡頭正對地面向下垂直拍攝，消除縱深梯形透視',
      principle: '將立體物體壓平為純粹平面幾何，強調排版秩序、負空間與物件之間的對稱美感。',
      cameraHint: '機位：地面正上方 90° 直下 | 焦段：50mm 標準鏡（避免廣角桶狀變形）'
    }
  },
  'c_sideview': {
    desc: '相機置於物體正側面水平高度拍攝，強調主體輪廓剪影與結構線條，具備嚴謹工程立面圖感。',
    diagram: {
      title: '側面平視 (Side Profile View)',
      type: 'sideview',
      summary: '正側面 90 度水準視線拍攝，突出外觀線條與側面結構',
      principle: '隱藏正面的寬度資訊，聚焦於物件的流線型外觀、厚度變化與乾淨的背景輪廓剪影。',
      cameraHint: '機位：與主體同高水平側位 | 焦段：85mm-100mm 望遠（壓縮透視，保持直線垂直）'
    }
  },
  'cm_sideview': {
    desc: '相機置於物體正側面水平高度拍攝，強調主體輪廓剪影與結構線條，具備嚴謹工程立面圖感。',
    diagram: {
      title: '側面平視 (Side Profile View)',
      type: 'sideview',
      summary: '正側面 90 度水準視線拍攝，突出外觀線條與側面結構',
      principle: '隱藏正面的寬度資訊，聚焦於物件的流線型外觀、厚度變化與乾淨的背景輪廓剪影。',
      cameraHint: '機位：與主體同高水平側位 | 焦段：85mm-100mm 望遠（壓縮透視，保持直線垂直）'
    }
  },
  'c_frontview': {
    desc: '相機正對主體中央水平拍攝，營造絕對正面、端莊嚴謹的對稱視覺，具備強烈的儀式與秩序感。',
    diagram: {
      title: '正面平視 (Straight-On Front View)',
      type: 'frontview',
      summary: '正對主體中心平視拍攝，水平與垂直線條嚴格平直',
      principle: '創造莊嚴、權威與客觀的紀錄感，徹底排除左右傾斜造成的視差，常用於經典產品與建築立面。',
      cameraHint: '機位：正前方與主體中心等高 | 焦段：50mm-85mm（無畸變直面視角）'
    }
  },
  'cm_frontview': {
    desc: '相機正對主體中央水平拍攝，營造絕對正面、端莊嚴謹的對稱視覺，具備強烈的儀式與秩序感。',
    diagram: {
      title: '正面平視 (Straight-On Front View)',
      type: 'frontview',
      summary: '正對主體中心平視拍攝，水平與垂直線條嚴格平直',
      principle: '創造莊嚴、權威與客觀的紀錄感，徹底排除左右傾斜造成的視差，常用於經典產品與建築立面。',
      cameraHint: '機位：正前方與主體中心等高 | 焦段：50mm-85mm（無畸變直面視角）'
    }
  },
  'c_45deg': {
    desc: '從物體45度斜前方俯角拍攝，能同時展示頂面、正面與側面，是商業產品最有立體感的黃金機位。',
    diagram: {
      title: '45° 斜角三維透視 (Three-Quarter Angle)',
      type: 'threequarter',
      summary: '相機位於前方偏側 45°、仰角或俯角 30°-45°',
      principle: '單一視角同時完整呈現物體正面、側面與頂部三個維度，光影層次分明，空間立體感最強烈。',
      cameraHint: '機位：斜側 45° 俯視或平視 | 焦段：70mm-100mm（維持立體感同時避免廣角畸變）'
    }
  },
  'cm_45deg': {
    desc: '從物體45度斜前方俯角拍攝，能同時展示頂面、正面與側面，是商業產品最有立體感的黃金機位。',
    diagram: {
      title: '45° 斜角三維透視 (Three-Quarter Angle)',
      type: 'threequarter',
      summary: '相機位於前方偏側 45°、仰角或俯角 30°-45°',
      principle: '單一視角同時完整呈現物體正面、側面與頂部三個維度，光影層次分明，空間立體感最強烈。',
      cameraHint: '機位：斜側 45° 俯視或平視 | 焦段：70mm-100mm（維持立體感同時避免廣角畸變）'
    }
  },
  'c1': {
    desc: '畫面經九宮格劃分，將核心主體置於四個黃金交叉點或分割線上，營造最自然舒適的動態平衡。',
    diagram: {
      title: '經典三分法 (Rule of Thirds)',
      type: 'grid',
      summary: '橫縱各兩條等分線，將畫面切割為 9 宮格與 4 個視覺交叉點',
      principle: '人類視覺自然會停留在黃金交會點上，避免將主體死板置中，為背景留出引導空間與敘事呼吸感。',
      cameraHint: '取景策略：主體焦點置於右側或左側 1/3 線；地平線置於上 1/3 或下 1/3 線'
    }
  },
  'c2': {
    desc: '畫面左右或上下呈現完全鏡像對稱，營造韋斯·安德森電影般的嚴謹幾何秩序與神聖莊嚴美感。',
    diagram: {
      title: '絕對對稱構圖 (Symmetrical Balance)',
      type: 'symmetry',
      summary: '主體居中，兩側元素在重量、色彩或幾何線條上嚴格對稱平衡',
      principle: '打破日常視角的隨機感，利用幾何秩序產生強烈的視覺震撼、神聖感與電影感（如韋斯·安德森風格）。',
      cameraHint: '機位：嚴格居中對齊中軸線 | 水平儀校正：0.0° 傾斜，確保兩側透視平衡'
    }
  },
  'c3': {
    desc: '從高空無人機視角俯瞰大地，地景化為宏觀幾何紋理與遼闊地圖感，賦予觀眾全知全能的上帝視角。',
    diagram: {
      title: '鳥瞰空拍視角 (Aerial Bird-Eye View)',
      type: 'birdeye',
      summary: '相機置於幾十至幾百公尺高空俯瞰地面或建築群',
      principle: '壓縮空間尺度，將複雜的地景、車流、自然山海抽象化為線條、色塊與大地紋理。',
      cameraHint: '機位：高空空拍機 | 視角：向下俯拍 45°-80° | 焦段：24mm 廣角或長焦巡航'
    }
  },
  'cm_angle_birdeye': {
    desc: '從高處俯角拍攝主體與展台，視野開闊且能展現物體與周遭環境的高低層次關係。',
    diagram: {
      title: '高角度俯視 (High-Angle Perspective)',
      type: 'birdeye',
      summary: '相機置於高處以 45-60 度向下俯拍展台',
      principle: '展示主體頂部細節與周圍陳列的層次關係，營造宏觀且受控的精緻氛圍。',
      cameraHint: '機位：上方俯拍機位 | 焦段：50mm'
    }
  },
  'c4': {
    desc: '相機極度貼近地面向上仰拍，拉長垂直透視線，使主體顯得無比巨大、宏偉崇高且具強烈英雄氣勢。',
    diagram: {
      title: '極致低角度仰視 (Low Angle Worm-Eye View)',
      type: 'wormeye',
      summary: '相機緊貼地面或從極低水平向上仰角拍攝',
      principle: '透視線向上強烈匯聚，讓主體在畫面中佔據主導地位，賦予人物英雄感或建築摩天壓迫感。',
      cameraHint: '機位：貼近地面向上仰角 30°-60° | 鏡頭：16mm-24mm 超廣角（強化向上拉伸張力）'
    }
  },
  'c5': {
    desc: '刻意將相機水平線傾斜 15-30 度拍攝，打破穩定感，注入強烈的動態不安、懸疑或速度張力。',
    diagram: {
      title: '荷蘭角傾斜構圖 (Dutch Tilt Angle)',
      type: 'dutch',
      summary: '相機繞光軸旋轉傾斜 15°–45°，破壞水平與垂直基準線',
      principle: '心理學上傾斜代表不穩定與動態失衡，用於表達主角內心迷惘、危機、速度動作感或懸疑氣氛。',
      cameraHint: '手法：向左或向右旋轉 20° 傾斜拍攝，搭配對角線引導視線'
    }
  },
  'c6': {
    desc: '利用道路、走廊、河流等透視線條引導觀眾視線直達消失點或核心主體，建立極深遠的空間縱深。',
    diagram: {
      title: '透視引導線 (Leading Lines & Vanishing Point)',
      type: 'leading',
      summary: '畫面中的幾何線條（道路、牆面、欄杆）匯聚引導至核心主體',
      principle: '人類眼球會本能跟隨線條移動，引導線能有效將觀眾視線一路吸入深處焦點，空間感極強。',
      cameraHint: '構圖：將主體置於線條匯聚處（滅點） | 鏡頭：廣角鏡頭（拉大近大遠小透視）'
    }
  },
  'c7': {
    desc: '在主體周圍保留大量乾淨極簡的留白空間，營造呼吸感、孤獨寧靜氛圍或高級奢華的留白美學。',
    diagram: {
      title: '負空間/留白美學 (Negative Space / Breathing Room)',
      type: 'negative',
      summary: '主體僅佔畫面 10%–20%，其餘大面積留給天空、牆面或純色背景',
      principle: '少即是多（Less is more），減少視覺干擾使唯一的主體更加純粹聚焦，產生禪意與高級感。',
      cameraHint: '構圖：主體極小化並靠邊放置，給視線方向留下大片開闊空間'
    }
  },
  'c8': {
    desc: '透過門框、窗戶、樹枝或建築拱門等前景框住主體，增加畫面層次深度與窺探敘事感。',
    diagram: {
      title: '畫中畫自然框景 (Frame Within A Frame)',
      type: 'frame',
      summary: '利用前景的門窗、拱橋、光影孔隙形成第二層框架，將主體圈在其中',
      principle: '創造「前景－中景－背景」的三維立體層次，賦予畫面窺視感、故事性與景深包圍感。',
      cameraHint: '技巧：前景虛化或壓暗作為框架，主體精準合焦於框內亮處'
    }
  },
  'c9': {
    desc: '30度等角軸測投影，平行線永不相交，呈現如立體微縮模型或精緻建築沙盤般的無畸變純粹幾何感。',
    diagram: {
      title: '等距軸測視角 (Isometric Projection)',
      type: 'isometric',
      summary: '無透視滅點的正交投影，X/Y/Z 三軸以固定角度（如 30°）均勻展開',
      principle: '物體遠近大小完全一致，不會因為距離產生近大遠小變形，呈現像建築藍圖或精美微縮沙盤。',
      cameraHint: '運鏡：30度俯仰角正交取景，保持各軸平行線無滅點匯聚'
    }
  },
  'c10': {
    desc: '遵循黃金比例 (1:1.618) 的螺旋曲線引導視線，符合自然界有機生長節奏，畫面極具優雅動態感。',
    diagram: {
      title: '黃金螺旋構圖 (Fibonacci Golden Spiral)',
      type: 'spiral',
      summary: '基於黃金比例（1:1.618）繪製的費氏螺旋曲線，螺旋中心落在視覺核心',
      principle: '模擬鸚鵡螺、向日葵等自然界的優美曲線，引導觀眾視線順著平滑弧度流暢巡視全圖至核心。',
      cameraHint: '構圖：讓次要元素沿著大螺旋弧線分佈，焦點精準落在螺旋收斂眼部'
    }
  },
  'c11': {
    desc: '極度貼近主體細部（如眼神、指紋、微細材質毛細孔），放大微觀情感與紋理張力，極具沉浸感。',
    diagram: {
      title: '極致特寫 (Extreme Close-Up / ECU)',
      type: 'closeup',
      summary: '畫面僅容納主體的局部核心細節（如眼睛、水滴或材質紋理）',
      principle: '剝離所有環境背景干擾，將觀眾強行拉入微觀世界，情感張力與感官細節被無限放大。',
      cameraHint: '設備：微距鏡頭（1:1 放大率）或長焦大光圈淺景深切片'
    }
  },
  'cm_angle_macro': {
    desc: '極度貼近產品微觀細節，呈現材質紋理、精密接縫與高光反光，突顯做工品質。',
    diagram: {
      title: '極致微距特寫 (Macro Close-Up)',
      type: 'closeup',
      summary: '對焦於產品的微小結構或材質紋理',
      principle: '展現高精度工藝與材質細節，突顯高階產品的物理觸感與微觀品質。',
      cameraHint: '設備：100mm 微距鏡頭，極淺景深精準切面'
    }
  },
  'c12': {
    desc: '將主體或主要線條橫貫於對角線上，打破靜態平穩，賦予畫面強烈的方向感、速度與流動能量。',
    diagram: {
      title: '動態對角線構圖 (Dynamic Diagonal)',
      type: 'diagonal',
      summary: '主體動態、地平線或光影線條沿著畫面的一角貫穿至對角',
      principle: '對角線是畫面中最長的直線，具備最強的視覺導向與速度感，打破水平垂直的呆板平靜。',
      cameraHint: '運鏡：讓主體運動方向或引導光束切過左下到右上對角'
    }
  }
};

/**
 * 簡易 SVG 視覺說明圖渲染元件
 */
export const CompositionDiagramViewer: React.FC<{ diagram: DiagramData }> = ({ diagram }) => {
  return (
    <div className="bg-[#18181B] text-white p-4 rounded-xl border border-slate-700/80 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          攝影與運鏡原理圖解
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
          {diagram.title}
        </span>
      </div>

      {/* SVG Diagram Canvas */}
      <div className="bg-slate-950/80 rounded-lg p-3 border border-slate-800 flex items-center justify-center min-h-[140px]">
        {renderDiagramSvg(diagram.type)}
      </div>

      {/* Details Box */}
      <div className="space-y-1.5 text-[11px] leading-relaxed">
        <p className="text-slate-200">
          <strong className="text-emerald-300">💡 構圖原理：</strong>
          {diagram.principle}
        </p>
        <p className="text-slate-400 font-mono bg-slate-900/60 p-2 rounded border border-slate-800">
          <strong className="text-indigo-300">📷 鏡頭機位建議：</strong>
          {diagram.cameraHint}
        </p>
      </div>
    </div>
  );
};

function renderDiagramSvg(type: DiagramData['type']) {
  switch (type) {
    case 'grid':
      return (
        <svg viewBox="0 0 240 135" className="w-full max-w-[220px] h-auto stroke-slate-500 fill-none">
          {/* Frame */}
          <rect x="10" y="10" width="220" height="115" rx="6" stroke="#475569" strokeWidth="2" fill="#0f172a" />
          {/* Grid lines */}
          <line x1="83" y1="10" x2="83" y2="125" stroke="#334155" strokeDasharray="3 3" strokeWidth="1.5" />
          <line x1="156" y1="10" x2="156" y2="125" stroke="#334155" strokeDasharray="3 3" strokeWidth="1.5" />
          <line x1="10" y1="48" x2="230" y2="48" stroke="#334155" strokeDasharray="3 3" strokeWidth="1.5" />
          <line x1="10" y1="87" x2="230" y2="87" stroke="#334155" strokeDasharray="3 3" strokeWidth="1.5" />
          {/* Golden Intersection Points */}
          <circle cx="83" cy="48" r="5" fill="#10B981" stroke="#fff" strokeWidth="1.5" />
          <circle cx="156" cy="48" r="5" fill="#3B82F6" stroke="#fff" strokeWidth="1.5" />
          <circle cx="83" cy="87" r="5" fill="#3B82F6" stroke="#fff" strokeWidth="1.5" />
          <circle cx="156" cy="87" r="5" fill="#10B981" stroke="#fff" strokeWidth="1.5" />
          {/* Main Subject Mock */}
          <rect x="73" y="38" width="20" height="20" rx="3" fill="#10B981" fillOpacity="0.3" stroke="#10B981" strokeWidth="1.5" />
          <text x="120" y="120" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">主體置於 4 個交點可引導視覺聚焦</text>
        </svg>
      );

    case 'symmetry':
      return (
        <svg viewBox="0 0 240 135" className="w-full max-w-[220px] h-auto stroke-slate-500 fill-none">
          <rect x="10" y="10" width="220" height="115" rx="6" stroke="#475569" strokeWidth="2" fill="#0f172a" />
          {/* Center axis */}
          <line x1="120" y1="10" x2="120" y2="125" stroke="#10B981" strokeWidth="2" strokeDasharray="4 2" />
          {/* Symmetrical shapes */}
          <rect x="35" y="45" width="40" height="50" rx="4" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="1.5" />
          <rect x="165" y="45" width="40" height="50" rx="4" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="1.5" />
          {/* Center Focal Target */}
          <polygon points="120,35 135,70 105,70" fill="#10B981" fillOpacity="0.4" stroke="#10B981" strokeWidth="1.5" />
          <text x="120" y="120" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">中軸絕對對稱，莊嚴幾何秩序</text>
        </svg>
      );

    case 'topview':
      return (
        <svg viewBox="0 0 240 135" className="w-full max-w-[220px] h-auto stroke-slate-500 fill-none">
          <rect x="10" y="10" width="220" height="115" rx="6" stroke="#475569" strokeWidth="2" fill="#0f172a" />
          {/* Overhead camera symbol */}
          <circle cx="120" cy="30" r="12" fill="#10B981" fillOpacity="0.3" stroke="#10B981" strokeWidth="2" />
          <path d="M120 42 L120 70" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrow)" />
          {/* Downward 90 deg field of view */}
          <polygon points="120,42 60,95 180,95" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="1" strokeDasharray="2 2" />
          {/* Flat arranged items */}
          <rect x="75" y="90" width="30" height="20" rx="2" fill="#64748B" stroke="#94A3B8" strokeWidth="1" />
          <rect x="115" y="85" width="25" height="28" rx="2" fill="#38BDF8" fillOpacity="0.4" stroke="#38BDF8" strokeWidth="1.5" />
          <circle cx="155" cy="98" r="10" fill="#F59E0B" fillOpacity="0.3" stroke="#F59E0B" strokeWidth="1" />
          <text x="120" y="122" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">相機垂直90°向下俯拍，消除梯形透視</text>
        </svg>
      );

    case 'sideview':
      return (
        <svg viewBox="0 0 240 135" className="w-full max-w-[220px] h-auto stroke-slate-500 fill-none">
          <rect x="10" y="10" width="220" height="115" rx="6" stroke="#475569" strokeWidth="2" fill="#0f172a" />
          {/* Camera horizontal left */}
          <rect x="25" y="55" width="22" height="16" rx="2" fill="#10B981" fillOpacity="0.3" stroke="#10B981" strokeWidth="1.5" />
          <polygon points="47,60 55,56 55,70 47,66" fill="#10B981" stroke="#10B981" />
          <line x1="55" y1="63" x2="135" y2="63" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 2" />
          {/* Side Silhouette */}
          <path d="M140,85 C140,55 155,45 180,45 L180,85 Z" fill="#38BDF8" fillOpacity="0.3" stroke="#38BDF8" strokeWidth="2" />
          <line x1="10" y1="85" x2="230" y2="85" stroke="#475569" strokeWidth="1.5" />
          <text x="120" y="120" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">水平視線拍攝側面輪廓，突出流線與厚度</text>
        </svg>
      );

    case 'frontview':
      return (
        <svg viewBox="0 0 240 135" className="w-full max-w-[220px] h-auto stroke-slate-500 fill-none">
          <rect x="10" y="10" width="220" height="115" rx="6" stroke="#475569" strokeWidth="2" fill="#0f172a" />
          {/* Frontal Subject Box */}
          <rect x="80" y="35" width="80" height="60" rx="4" fill="#38BDF8" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="2" />
          {/* Cross lines showing direct eye level center */}
          <line x1="80" y1="65" x2="160" y2="65" stroke="#10B981" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="120" y1="35" x2="120" y2="95" stroke="#10B981" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="120" cy="65" r="4" fill="#10B981" stroke="#fff" strokeWidth="1" />
          <text x="120" y="120" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">正視平拍，無左右視差，嚴謹客觀立面</text>
        </svg>
      );

    case 'threequarter':
      return (
        <svg viewBox="0 0 240 135" className="w-full max-w-[220px] h-auto stroke-slate-500 fill-none">
          <rect x="10" y="10" width="220" height="115" rx="6" stroke="#475569" strokeWidth="2" fill="#0f172a" />
          {/* 3D Cube showing Top, Front, Side */}
          {/* Top Face */}
          <polygon points="120,30 165,48 120,66 75,48" fill="#38BDF8" fillOpacity="0.4" stroke="#38BDF8" strokeWidth="1.5" />
          {/* Left Front Face */}
          <polygon points="75,48 120,66 120,102 75,84" fill="#38BDF8" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="1.5" />
          {/* Right Side Face */}
          <polygon points="120,66 165,48 165,84 120,102" fill="#38BDF8" fillOpacity="0.1" stroke="#38BDF8" strokeWidth="1.5" />
          {/* Camera arrow */}
          <path d="M40,30 L65,42" stroke="#10B981" strokeWidth="2" />
          <circle cx="40" cy="30" r="4" fill="#10B981" />
          <text x="120" y="122" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">45°斜角同時展現頂面、正面與側面立體感</text>
        </svg>
      );

    case 'wormeye':
      return (
        <svg viewBox="0 0 240 135" className="w-full max-w-[220px] h-auto stroke-slate-500 fill-none">
          <rect x="10" y="10" width="220" height="115" rx="6" stroke="#475569" strokeWidth="2" fill="#0f172a" />
          {/* Ground camera pointing steeply up */}
          <circle cx="120" cy="110" r="6" fill="#10B981" />
          <path d="M120,104 L120,40" stroke="#10B981" strokeWidth="2" strokeDasharray="3 2" />
          {/* Towering converging perspective lines */}
          <polygon points="90,110 150,110 132,25 108,25" fill="#38BDF8" fillOpacity="0.25" stroke="#38BDF8" strokeWidth="2" />
          <text x="120" y="122" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">貼地極限仰拍，線條向上匯聚，崇高雄偉</text>
        </svg>
      );

    case 'birdeye':
      return (
        <svg viewBox="0 0 240 135" className="w-full max-w-[220px] h-auto stroke-slate-500 fill-none">
          <rect x="10" y="10" width="220" height="115" rx="6" stroke="#475569" strokeWidth="2" fill="#0f172a" />
          {/* Landscape grid texture */}
          <line x1="30" y1="40" x2="210" y2="40" stroke="#334155" strokeWidth="1" />
          <line x1="20" y1="70" x2="220" y2="70" stroke="#334155" strokeWidth="1" />
          <line x1="10" y1="100" x2="230" y2="100" stroke="#334155" strokeWidth="1" />
          <line x1="60" y1="20" x2="40" y2="120" stroke="#334155" strokeWidth="1" />
          <line x1="120" y1="20" x2="120" y2="120" stroke="#334155" strokeWidth="1" />
          <line x1="180" y1="20" x2="200" y2="120" stroke="#334155" strokeWidth="1" />
          {/* High altitude drone icon */}
          <circle cx="120" cy="30" r="8" fill="#10B981" fillOpacity="0.4" stroke="#10B981" strokeWidth="1.5" />
          <text x="120" y="122" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">高空鳥瞰，地景化為宏觀幾何與大地紋理</text>
        </svg>
      );

    case 'dutch':
      return (
        <svg viewBox="0 0 240 135" className="w-full max-w-[220px] h-auto stroke-slate-500 fill-none">
          <rect x="10" y="10" width="220" height="115" rx="6" stroke="#475569" strokeWidth="2" fill="#0f172a" />
          {/* Tilted Horizon Line */}
          <line x1="15" y1="95" x2="225" y2="35" stroke="#EF4444" strokeWidth="2" />
          <rect x="90" y="45" width="40" height="50" rx="3" transform="rotate(-15 110 70)" fill="#38BDF8" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="120" y="122" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">水平線傾斜 20°，營造動態速度與不安張力</text>
        </svg>
      );

    case 'leading':
      return (
        <svg viewBox="0 0 240 135" className="w-full max-w-[220px] h-auto stroke-slate-500 fill-none">
          <rect x="10" y="10" width="220" height="115" rx="6" stroke="#475569" strokeWidth="2" fill="#0f172a" />
          {/* Vanishing Point */}
          <circle cx="120" cy="50" r="5" fill="#10B981" stroke="#fff" strokeWidth="1" />
          {/* Converging road lines */}
          <line x1="20" y1="120" x2="120" y2="50" stroke="#10B981" strokeWidth="2" />
          <line x1="220" y1="120" x2="120" y2="50" stroke="#10B981" strokeWidth="2" />
          <line x1="120" y1="120" x2="120" y2="50" stroke="#64748B" strokeDasharray="4 3" strokeWidth="1.5" />
          <text x="120" y="122" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">線條匯聚消失點，將視線強力吸入深處焦點</text>
        </svg>
      );

    case 'spiral':
      return (
        <svg viewBox="0 0 240 135" className="w-full max-w-[220px] h-auto stroke-slate-500 fill-none">
          <rect x="10" y="10" width="220" height="115" rx="6" stroke="#475569" strokeWidth="2" fill="#0f172a" />
          {/* Golden Spiral Path */}
          <path d="M 220 120 A 100 100 0 0 0 120 20 A 60 60 0 0 0 60 80 A 35 35 0 0 0 95 115 A 20 20 0 0 0 115 95 A 10 10 0 0 0 105 85" stroke="#F59E0B" strokeWidth="2.5" />
          <circle cx="105" cy="85" r="4" fill="#10B981" stroke="#fff" strokeWidth="1" />
          <text x="120" y="122" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">黃金螺旋引導線，自然優雅地流轉至核心焦點</text>
        </svg>
      );

    case 'frame':
      return (
        <svg viewBox="0 0 240 135" className="w-full max-w-[220px] h-auto stroke-slate-500 fill-none">
          <rect x="10" y="10" width="220" height="115" rx="6" stroke="#475569" strokeWidth="2" fill="#0f172a" />
          {/* Dark natural frame (Archway) */}
          <path d="M 10 10 L 230 10 L 230 125 L 10 125 Z M 55 35 C 55 25 185 25 185 35 L 185 115 L 55 115 Z" fill="#1E293B" fillRule="evenodd" stroke="#475569" />
          {/* Framed Subject */}
          <polygon points="120,55 135,90 105,90" fill="#10B981" stroke="#10B981" />
          <text x="120" y="122" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">利用前景門窗/拱門框住主體，增加窺探深度</text>
        </svg>
      );

    case 'isometric':
      return (
        <svg viewBox="0 0 240 135" className="w-full max-w-[220px] h-auto stroke-slate-500 fill-none">
          <rect x="10" y="10" width="220" height="115" rx="6" stroke="#475569" strokeWidth="2" fill="#0f172a" />
          {/* Parallel 30 deg isometric grid */}
          <path d="M 120 25 L 180 60 L 180 100 L 120 65 Z" fill="#38BDF8" fillOpacity="0.3" stroke="#38BDF8" strokeWidth="1.5" />
          <path d="M 120 25 L 60 60 L 60 100 L 120 65 Z" fill="#38BDF8" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="1.5" />
          <path d="M 120 65 L 180 100 L 120 120 L 60 100 Z" fill="#38BDF8" fillOpacity="0.1" stroke="#38BDF8" strokeWidth="1.5" />
          <line x1="120" y1="25" x2="120" y2="65" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="120" y="122" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">30°等距軸測正交投影，無滅點變形，精美沙盤感</text>
        </svg>
      );

    case 'closeup':
      return (
        <svg viewBox="0 0 240 135" className="w-full max-w-[220px] h-auto stroke-slate-500 fill-none">
          <rect x="10" y="10" width="220" height="115" rx="6" stroke="#475569" strokeWidth="2" fill="#0f172a" />
          {/* Micro Lens Focus Target */}
          <circle cx="120" cy="65" r="40" fill="#0284C7" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 2" />
          {/* Iris details */}
          <circle cx="120" cy="65" r="18" fill="#10B981" fillOpacity="0.5" stroke="#10B981" strokeWidth="2" />
          <circle cx="120" cy="65" r="6" fill="#fff" />
          {/* Focus Brackets */}
          <path d="M 70 30 L 60 30 L 60 40" stroke="#F59E0B" strokeWidth="2" fill="none" />
          <path d="M 170 30 L 180 30 L 180 40" stroke="#F59E0B" strokeWidth="2" fill="none" />
          <path d="M 70 100 L 60 100 L 60 90" stroke="#F59E0B" strokeWidth="2" fill="none" />
          <path d="M 170 100 L 180 100 L 180 90" stroke="#F59E0B" strokeWidth="2" fill="none" />
          <text x="120" y="122" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">微距特寫聚焦細部紋理與情感眼神，剝離背景干擾</text>
        </svg>
      );

    case 'diagonal':
      return (
        <svg viewBox="0 0 240 135" className="w-full max-w-[220px] h-auto stroke-slate-500 fill-none">
          <rect x="10" y="10" width="220" height="115" rx="6" stroke="#475569" strokeWidth="2" fill="#0f172a" />
          {/* Diagonal Energy Vector */}
          <line x1="15" y1="120" x2="225" y2="15" stroke="#10B981" strokeWidth="2.5" />
          <polygon points="110,65 140,45 130,75" fill="#F59E0B" stroke="#F59E0B" />
          <text x="120" y="122" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">對角線貫穿畫面，注入最強烈的運動速度感與張力</text>
        </svg>
      );

    default:
      return (
        <div className="text-xs text-slate-400 font-mono text-center">
          視角與構圖幾何引導圖
        </div>
      );
  }
}
