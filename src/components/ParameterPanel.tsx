import React, { useState } from 'react';
import { 
  Sliders, 
  Cpu, 
  Lightbulb, 
  ChevronDown, 
  ChevronUp, 
  Image as ImageIcon, 
  Palette as PaletteIcon, 
  SlidersHorizontal,
  Plus,
  Trash2,
  Sparkles,
  Layers,
  CircleDot,
  Wand2,
  Camera,
  Paintbrush,
  Box,
  Palette,
  Eye,
  Lock,
  ArrowRight
} from 'lucide-react';
import { 
  AIPlatform, 
  midjourneyVersions, 
  presetPalettes,
  NoiseLevel,
  noiseOptions,
  ImageRefEditMode,
  ImageRefPreserveLevel,
  imageRefPresets
} from '../data/promptDatabase';

interface ParameterPanelProps {
  activeEngine: AIPlatform;
  setActiveEngine: (engine: AIPlatform) => void;
  selectedMJVersion: string;
  setSelectedMJVersion: (version: string) => void;
  subjectText: string;
  setSubjectText: (text: string) => void;
  aspectRatio: string;
  setAspectRatio: (ar: string) => void;
  stylizeValue: string;
  setStylizeValue: (val: string) => void;
  chaosValue: string;
  setChaosValue: (val: string) => void;
  imageWeight: string;
  setImageWeight: (val: string) => void;
  customNegative: string;
  setCustomNegative: (text: string) => void;
  mockupPureMode: boolean;
  setMockupPureMode: (val: boolean) => void;
  // Targeted Image Edit Props
  enableImageRefEdit: boolean;
  setEnableImageRefEdit: (val: boolean) => void;
  imageRefSource: string;
  setImageRefSource: (val: string) => void;
  imageRefEditMode: ImageRefEditMode;
  setImageRefEditMode: (mode: ImageRefEditMode) => void;
  imageRefDetail: string;
  setImageRefDetail: (val: string) => void;
  imageRefPreserveLevel: ImageRefPreserveLevel;
  setImageRefPreserveLevel: (val: ImageRefPreserveLevel) => void;
  // Composition Reference
  enableCompositionRef: boolean;
  setEnableCompositionRef: (val: boolean) => void;
  compositionImageUrl: string;
  setCompositionImageUrl: (url: string) => void;
  compositionStrength: 'strict' | 'medium' | 'loose';
  setCompositionStrength: (val: 'strict' | 'medium' | 'loose') => void;
  compositionGuidanceType: 'structural_layout' | 'grid_perspective' | 'silhouettes_framing';
  setCompositionGuidanceType: (val: 'structural_layout' | 'grid_perspective' | 'silhouettes_framing') => void;
  // Color Palette
  enableColorPalette: boolean;
  setEnableColorPalette: (val: boolean) => void;
  customHexColors: string[];
  setCustomHexColors: React.Dispatch<React.SetStateAction<string[]>>;
  colorGradingIntensity: 'dominant' | 'accent' | 'atmospheric';
  setColorGradingIntensity: (val: 'dominant' | 'accent' | 'atmospheric') => void;
  // Noise Controller
  noiseLevel: NoiseLevel;
  setNoiseLevel: (level: NoiseLevel) => void;
}

export const ParameterPanel: React.FC<ParameterPanelProps> = ({
  activeEngine,
  setActiveEngine,
  selectedMJVersion,
  setSelectedMJVersion,
  subjectText,
  setSubjectText,
  aspectRatio,
  setAspectRatio,
  stylizeValue,
  setStylizeValue,
  chaosValue,
  setChaosValue,
  imageWeight,
  setImageWeight,
  customNegative,
  setCustomNegative,
  enableImageRefEdit,
  setEnableImageRefEdit,
  imageRefSource,
  setImageRefSource,
  imageRefEditMode,
  setImageRefEditMode,
  imageRefDetail,
  setImageRefDetail,
  imageRefPreserveLevel,
  setImageRefPreserveLevel,
  enableCompositionRef,
  setEnableCompositionRef,
  compositionImageUrl,
  setCompositionImageUrl,
  compositionStrength,
  setCompositionStrength,
  compositionGuidanceType,
  setCompositionGuidanceType,
  enableColorPalette,
  setEnableColorPalette,
  customHexColors,
  setCustomHexColors,
  colorGradingIntensity,
  setColorGradingIntensity,
  noiseLevel,
  setNoiseLevel,
}) => {
  const [showVersionTable, setShowVersionTable] = useState(false);
  const [newColorInput, setNewColorInput] = useState('#D4AF37');
  const [isCollapsedOnMobile, setIsCollapsedOnMobile] = useState(true);

  const currentNoiseObj = noiseOptions.find(n => n.id === noiseLevel) || noiseOptions[0];

  const handleAddHexColor = (colorHex: string) => {
    const formatted = colorHex.trim().startsWith('#') ? colorHex.trim() : `#${colorHex.trim()}`;
    if (/^#[0-9A-Fa-f]{6}$/.test(formatted) || /^#[0-9A-Fa-f]{3}$/.test(formatted)) {
      if (!customHexColors.includes(formatted.toUpperCase()) && customHexColors.length < 8) {
        setCustomHexColors(prev => [...prev, formatted.toUpperCase()]);
      }
    }
  };

  const handleRemoveHexColor = (index: number) => {
    setCustomHexColors(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      {/* Mobile Toggle Bar */}
      <div className="md:hidden flex items-center justify-between bg-white border border-[#E4E4E7] rounded-xl px-4 py-2.5 shadow-2xs">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-gray-700" />
          <span className="text-xs font-bold text-gray-800">主體描述與參數設定</span>
          {subjectText && (
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          )}
        </div>
        <button
          type="button"
          onClick={() => setIsCollapsedOnMobile(!isCollapsedOnMobile)}
          className="text-xs font-semibold text-indigo-600 flex items-center gap-1 cursor-pointer"
        >
          <span>{isCollapsedOnMobile ? '展開設定' : '收合設定'}</span>
          {isCollapsedOnMobile ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </button>
      </div>

      <div className={`${isCollapsedOnMobile ? 'hidden md:block' : 'block'} space-y-4`}>
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
                className="bg-[#F4F4F5] border border-[#E4E4E7] rounded-lg px-3 py-2 text-xs font-semibold text-[#18181B] focus:outline-none focus:ring-1 focus:ring-[#18181B]"
              >
                <optgroup label="Midjourney 旗艦版本">
                  <option value="v8.2">Midjourney v8.2 (最新旗艦)</option>
                  <option value="v7">Midjourney v7 (草稿/精準)</option>
                  <option value="v6.1">Midjourney v6.1 (成熟光影)</option>
                  <option value="v6.0">Midjourney v6.0 (文字排版)</option>
                </optgroup>
                <optgroup label="二次元動漫特化 (Niji)">
                  <option value="niji7">Niji Journey 7 (日漫新世代)</option>
                  <option value="niji6">Niji Journey 6 (經典日漫)</option>
                </optgroup>
                <optgroup label="通用自然語言模式">
                  <option value="universal">Universal (DALL·E 3 / Flux / SD)</option>
                </optgroup>
              </select>
            </div>
          </div>

          {/* Quick Version Comparison Grid Table */}
          {showVersionTable && (
            <div className="pt-3 border-t border-[#E4E4E7] overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#F4F4F5] text-gray-600">
                    <th className="p-2 font-bold rounded-l">核心版本</th>
                    <th className="p-2 font-bold">指令旗標</th>
                    <th className="p-2 font-bold">主要特色與強項</th>
                    <th className="p-2 font-bold">推薦適用情境</th>
                    <th className="p-2 font-bold text-center rounded-r">切換</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4E4E7]">
                  {midjourneyVersions.map((v) => {
                    const isSelected = activeEngine === 'midjourney' && selectedMJVersion === v.id;
                    return (
                      <tr 
                        key={v.id} 
                        className={`transition ${isSelected ? 'bg-indigo-50/70 font-medium' : 'hover:bg-gray-50'}`}
                      >
                        <td className="p-2 font-semibold text-[#18181B]">
                          {v.name}
                          {v.id === 'v8.2' && (
                            <span className="ml-1.5 text-[9px] bg-indigo-600 text-white px-1.5 py-0.2 rounded font-bold">NEW</span>
                          )}
                        </td>
                        <td className="p-2 font-mono text-gray-700">{v.param}</td>
                        <td className="p-2 text-gray-600">{v.strength}</td>
                        <td className="p-2 text-gray-600">{v.suitableFor}</td>
                        <td className="p-2 text-center">
                          <button
                            type="button"
                            onClick={() => {
                              setActiveEngine('midjourney');
                              setSelectedMJVersion(v.id);
                            }}
                            className={`px-2 py-1 text-[11px] rounded font-bold transition cursor-pointer ${
                              isSelected
                                ? 'bg-[#18181B] text-white shadow-2xs'
                                : 'bg-white border border-[#E4E4E7] text-gray-700 hover:border-gray-400'
                            }`}
                          >
                            {isSelected ? '使用中' : '選擇'}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Prompt Subject & Parameters Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main Subject Input */}
          <div className="lg:col-span-2 bg-white border border-[#E4E4E7] rounded-xl p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">
                Primary Subject (主體核心描述)
              </label>
              <span className="text-[11px] text-gray-400 font-mono">支援中英文自然輸入</span>
            </div>
            
            <textarea
              rows={3}
              placeholder="例如：a luxury ceramic perfume bottle on minimal marble cube, morning sunbeams, aesthetic beauty product..."
              value={subjectText}
              onChange={(e) => setSubjectText(e.target.value)}
              className="w-full bg-[#F4F4F5] border border-[#E4E4E7] rounded-lg p-3 text-sm text-[#18181B] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#18181B] resize-none"
            />

            {/* Custom Negative Words Input */}
            <div className="pt-2 border-t border-[#E4E4E7]/60">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-semibold text-red-600 flex items-center gap-1">
                  自訂排除詞 (Negative Words / --no)
                </span>
                <span className="text-[10px] text-gray-400">以逗號分隔</span>
              </div>
              <input
                type="text"
                placeholder="例如：people, trees, blur, logo, text..."
                value={customNegative}
                onChange={(e) => setCustomNegative(e.target.value)}
                className="w-full bg-[#F4F4F5] border border-[#E4E4E7] rounded-md px-3 py-1.5 text-xs text-[#18181B] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Quick MJ Engine Parameters */}
          <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 shadow-xs space-y-3 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                <Sliders className="w-3.5 h-3.5" /> 參數精準調校
              </span>
              <span className="text-[10px] font-mono text-gray-400">Midjourney Flags</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              {/* Aspect Ratio */}
              <div>
                <label className="text-[11px] text-gray-500 block mb-1">長寬比 (--ar)</label>
                <select
                  value={aspectRatio}
                  onChange={(e) => setAspectRatio(e.target.value)}
                  className="w-full bg-[#F4F4F5] border border-[#E4E4E7] rounded-md p-1.5 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-[#18181B]"
                >
                  <option value="16:9">16:9 (橫向寬螢幕)</option>
                  <option value="9:16">9:16 (IG/Reels 直式)</option>
                  <option value="1:1">1:1 (正方形貼文)</option>
                  <option value="4:5">4:5 (社群直式人像)</option>
                  <option value="3:2">3:2 (經典單眼相機)</option>
                  <option value="2:3">2:3 (直式海報)</option>
                  <option value="21:9">21:9 (電影超寬比例)</option>
                  <option value="default">Default 預設</option>
                </select>
              </div>

              {/* Stylize */}
              <div>
                <label className="text-[11px] text-gray-500 block mb-1">風格化強度 (--s)</label>
                <select
                  value={stylizeValue}
                  onChange={(e) => setStylizeValue(e.target.value)}
                  className="w-full bg-[#F4F4F5] border border-[#E4E4E7] rounded-md p-1.5 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-[#18181B]"
                >
                  <option value="50">--s 50 (寫實遵從度高)</option>
                  <option value="100">--s 100 (預設基準)</option>
                  <option value="150">--s 150 (質感增強)</option>
                  <option value="250">--s 250 (藝術化渲染)</option>
                  <option value="500">--s 500 (高度美學創意)</option>
                  <option value="750">--s 750 (極限藝術狂想)</option>
                </select>
              </div>

              {/* Chaos */}
              <div>
                <label className="text-[11px] text-gray-500 block mb-1">混亂發散度 (--c)</label>
                <select
                  value={chaosValue}
                  onChange={(e) => setChaosValue(e.target.value)}
                  className="w-full bg-[#F4F4F5] border border-[#E4E4E7] rounded-md p-1.5 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-[#18181B]"
                >
                  <option value="0">--c 0 (最穩定收斂)</option>
                  <option value="10">--c 10 (微幅變化)</option>
                  <option value="25">--c 25 (發散構圖)</option>
                  <option value="50">--c 50 (強烈隨機性)</option>
                </select>
              </div>

              {/* Image Weight */}
              <div>
                <label className="text-[11px] text-gray-500 block mb-1">圖權重 (--iw)</label>
                <select
                  value={imageWeight}
                  onChange={(e) => setImageWeight(e.target.value)}
                  className="w-full bg-[#F4F4F5] border border-[#E4E4E7] rounded-md p-1.5 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-[#18181B]"
                >
                  <option value="0.5">--iw 0.5 (輕微參考)</option>
                  <option value="1.0">--iw 1.0 (標準權重)</option>
                  <option value="1.5">--iw 1.5 (加強參考圖)</option>
                  <option value="2.0">--iw 2.0 (嚴格遵從)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Targeted Image Modification (定向改圖 / 圖片局部修改) Card */}
        <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 shadow-xs space-y-3.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center shrink-0">
                <Wand2 className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xs font-bold text-[#18181B]">
                    以圖改圖 / 局部定向修改 (Targeted Image Modification)
                  </h3>
                  {enableImageRefEdit && (
                    <span className="text-[10px] bg-purple-100 text-purple-800 font-semibold px-2 py-0.5 rounded border border-purple-200 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse"></span>
                      {imageRefEditMode === 'color' && '🎨 只改顏色與光影'}
                      {imageRefEditMode === 'angle' && '📐 只改拍攝角度'}
                      {imageRefEditMode === 'background' && '🏞️ 只改背景環境'}
                      {imageRefEditMode === 'material' && '🧱 只改材質工藝'}
                      {imageRefEditMode === 'style' && '🎭 只改藝術風格'}
                      {imageRefEditMode === 'custom' && '✏️ 自訂局部修改'}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  指定基準參考圖片（網址或檔名代號），嚴格鎖定主體特徵，僅精準置換顏色、視角角度、背景或材質
                </p>
              </div>
            </div>
            
            <label className="relative inline-flex items-center cursor-pointer shrink-0 self-start sm:self-center">
              <input
                type="checkbox"
                checked={enableImageRefEdit}
                onChange={(e) => setEnableImageRefEdit(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-8 h-4.5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>

          {enableImageRefEdit ? (
            <div className="space-y-4 pt-3 border-t border-[#E4E4E7]">
              {/* 1. Image Source Input */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-bold text-gray-700 flex items-center gap-1">
                    <span>1. 基準參考圖 (圖片 URL 網址 或 檔案名稱/代號)</span>
                  </label>
                  <span className="text-[10px] text-gray-400 font-mono">支援 URL / Discord Attachment / 檔名代號</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="例如：https://myimage.jpg 或 character_ref.png 或 [Image 1]"
                    value={imageRefSource}
                    onChange={(e) => setImageRefSource(e.target.value)}
                    className="w-full bg-[#F4F4F5] border border-[#E4E4E7] rounded-lg px-3 py-2 text-xs text-[#18181B] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600 font-mono"
                  />
                </div>
                {/* Quick Source Examples */}
                <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                  <span className="text-[10px] text-gray-400">快速填入範例：</span>
                  <button
                    type="button"
                    onClick={() => setImageRefSource('https://images.unsplash.com/photo-1534528741775-53994a69daeb')}
                    className="text-[10px] bg-[#F4F4F5] hover:bg-gray-200 border border-[#E4E4E7] px-2 py-0.5 rounded text-gray-600 transition"
                  >
                    人像範例 URL
                  </button>
                  <button
                    type="button"
                    onClick={() => setImageRefSource('product_hero_v1.png')}
                    className="text-[10px] bg-[#F4F4F5] hover:bg-gray-200 border border-[#E4E4E7] px-2 py-0.5 rounded text-gray-600 transition"
                  >
                    產品檔名: product_hero_v1.png
                  </button>
                  <button
                    type="button"
                    onClick={() => setImageRefSource('character_main.png')}
                    className="text-[10px] bg-[#F4F4F5] hover:bg-gray-200 border border-[#E4E4E7] px-2 py-0.5 rounded text-gray-600 transition"
                  >
                    角色檔名: character_main.png
                  </button>
                </div>
              </div>

              {/* 2. Target Modification Mode Selector */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-700 block">
                  2. 選擇定向修改目標（其他未選部位將嚴格鎖定保留）
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setImageRefEditMode('color');
                      if (!imageRefDetail) setImageRefDetail('vibrant cyberpunk neon duotone, glowing cyan and electric magenta color grading');
                    }}
                    className={`p-2 rounded-lg border text-left transition flex flex-col gap-1 cursor-pointer ${
                      imageRefEditMode === 'color'
                        ? 'bg-[#18181B] text-white border-[#18181B] shadow-2xs'
                        : 'bg-[#F4F4F5] hover:bg-gray-200/80 border-transparent text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Palette className="w-3.5 h-3.5 text-amber-400" />
                      {imageRefEditMode === 'color' && <CircleDot className="w-2.5 h-2.5 text-purple-400" />}
                    </div>
                    <span className="text-xs font-bold">只改顏色光影</span>
                    <span className={`text-[10px] leading-tight ${imageRefEditMode === 'color' ? 'text-gray-300' : 'text-gray-400'}`}>
                      鎖定形狀僅重調色彩
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setImageRefEditMode('angle');
                      if (!imageRefDetail) setImageRefDetail('exact 90-degree profile side view, crisp silhouette alignment');
                    }}
                    className={`p-2 rounded-lg border text-left transition flex flex-col gap-1 cursor-pointer ${
                      imageRefEditMode === 'angle'
                        ? 'bg-[#18181B] text-white border-[#18181B] shadow-2xs'
                        : 'bg-[#F4F4F5] hover:bg-gray-200/80 border-transparent text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Camera className="w-3.5 h-3.5 text-sky-400" />
                      {imageRefEditMode === 'angle' && <CircleDot className="w-2.5 h-2.5 text-purple-400" />}
                    </div>
                    <span className="text-xs font-bold">只改相機角度</span>
                    <span className={`text-[10px] leading-tight ${imageRefEditMode === 'angle' ? 'text-gray-300' : 'text-gray-400'}`}>
                      同主體換視角/俯仰
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setImageRefEditMode('background');
                      if (!imageRefDetail) setImageRefDetail('seamless pure white minimalist studio backdrop, soft diffused lightbox');
                    }}
                    className={`p-2 rounded-lg border text-left transition flex flex-col gap-1 cursor-pointer ${
                      imageRefEditMode === 'background'
                        ? 'bg-[#18181B] text-white border-[#18181B] shadow-2xs'
                        : 'bg-[#F4F4F5] hover:bg-gray-200/80 border-transparent text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Layers className="w-3.5 h-3.5 text-emerald-400" />
                      {imageRefEditMode === 'background' && <CircleDot className="w-2.5 h-2.5 text-purple-400" />}
                    </div>
                    <span className="text-xs font-bold">只改背景環境</span>
                    <span className={`text-[10px] leading-tight ${imageRefEditMode === 'background' ? 'text-gray-300' : 'text-gray-400'}`}>
                      主體不動置換場景
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setImageRefEditMode('material');
                      if (!imageRefDetail) setImageRefDetail('matte anodized space-gray aluminum metal, precision CNC chamfered edges');
                    }}
                    className={`p-2 rounded-lg border text-left transition flex flex-col gap-1 cursor-pointer ${
                      imageRefEditMode === 'material'
                        ? 'bg-[#18181B] text-white border-[#18181B] shadow-2xs'
                        : 'bg-[#F4F4F5] hover:bg-gray-200/80 border-transparent text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Box className="w-3.5 h-3.5 text-amber-500" />
                      {imageRefEditMode === 'material' && <CircleDot className="w-2.5 h-2.5 text-purple-400" />}
                    </div>
                    <span className="text-xs font-bold">只改材質質感</span>
                    <span className={`text-[10px] leading-tight ${imageRefEditMode === 'material' ? 'text-gray-300' : 'text-gray-400'}`}>
                      同造型轉金屬/玻璃
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setImageRefEditMode('style');
                      if (!imageRefDetail) setImageRefDetail('classical oil painting with expressive impasto brushstrokes');
                    }}
                    className={`p-2 rounded-lg border text-left transition flex flex-col gap-1 cursor-pointer ${
                      imageRefEditMode === 'style'
                        ? 'bg-[#18181B] text-white border-[#18181B] shadow-2xs'
                        : 'bg-[#F4F4F5] hover:bg-gray-200/80 border-transparent text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Paintbrush className="w-3.5 h-3.5 text-rose-400" />
                      {imageRefEditMode === 'style' && <CircleDot className="w-2.5 h-2.5 text-purple-400" />}
                    </div>
                    <span className="text-xs font-bold">只改藝術風格</span>
                    <span className={`text-[10px] leading-tight ${imageRefEditMode === 'style' ? 'text-gray-300' : 'text-gray-400'}`}>
                      保留構圖轉換畫風
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setImageRefEditMode('custom');
                      if (!imageRefDetail) setImageRefDetail('change subject outfit to dark navy tailored blazer, holding a modern tablet device');
                    }}
                    className={`p-2 rounded-lg border text-left transition flex flex-col gap-1 cursor-pointer ${
                      imageRefEditMode === 'custom'
                        ? 'bg-[#18181B] text-white border-[#18181B] shadow-2xs'
                        : 'bg-[#F4F4F5] hover:bg-gray-200/80 border-transparent text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Wand2 className="w-3.5 h-3.5 text-purple-400" />
                      {imageRefEditMode === 'custom' && <CircleDot className="w-2.5 h-2.5 text-purple-400" />}
                    </div>
                    <span className="text-xs font-bold">自訂局部指令</span>
                    <span className={`text-[10px] leading-tight ${imageRefEditMode === 'custom' ? 'text-gray-300' : 'text-gray-400'}`}>
                      自由指定修改部位
                    </span>
                  </button>
                </div>
              </div>

              {/* 3. Detail Input & Quick Presets */}
              <div className="space-y-2 bg-[#F4F4F5]/60 border border-[#E4E4E7] rounded-xl p-3.5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <label className="text-[11px] font-bold text-gray-700 flex items-center gap-1.5">
                    <span>3. 定向修改詳細指令描述 (Target Modification Detail)</span>
                  </label>
                  {imageRefEditMode === 'color' && customHexColors.length > 0 && (
                    <button
                      type="button"
                      onClick={() => {
                        const hexStr = customHexColors.join(', ');
                        setImageRefDetail(`dominated by hex color palette (${hexStr}), precise color grading, maintaining original shapes and forms`);
                      }}
                      className="text-[10px] font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 px-2 py-0.5 rounded flex items-center gap-1 cursor-pointer transition"
                    >
                      <Palette className="w-3 h-3" />
                      帶入下方自訂色票 ({customHexColors.join(', ')})
                    </button>
                  )}
                </div>

                {/* Preset Chips */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] text-gray-500 font-medium shrink-0">精選預設點選：</span>
                  {imageRefPresets
                    .filter(p => p.mode === imageRefEditMode)
                    .map((preset) => (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => setImageRefDetail(preset.detail)}
                        className={`text-[11px] px-2.5 py-1 rounded-md border font-medium transition cursor-pointer ${
                          imageRefDetail === preset.detail
                            ? 'bg-[#18181B] text-white border-[#18181B] shadow-2xs font-semibold'
                            : 'bg-white hover:bg-gray-100 border-[#E4E4E7] text-gray-700'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                </div>

                {/* Textarea for fine-tuning */}
                <textarea
                  rows={2}
                  value={imageRefDetail}
                  onChange={(e) => setImageRefDetail(e.target.value)}
                  placeholder="輸入或微調具體修改描述（英文最佳，例如：exact 90-degree side profile view, preserve facial features）"
                  className="w-full bg-white border border-[#E4E4E7] rounded-lg px-3 py-2 text-xs text-[#18181B] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600 font-mono resize-y"
                />
              </div>

              {/* 4. Subject Preservation Fidelity Weight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center pt-1">
                <div>
                  <label className="text-[11px] font-bold text-gray-700 flex items-center gap-1 mb-1">
                    <Lock className="w-3 h-3 text-purple-600" />
                    <span>4. 原圖主體保真與特徵鎖定程度 (Preservation Level)</span>
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setImageRefPreserveLevel('strict')}
                      className={`px-2 py-1.5 text-[11px] rounded-lg border transition text-center cursor-pointer ${
                        imageRefPreserveLevel === 'strict'
                          ? 'bg-[#18181B] text-white border-[#18181B] font-bold shadow-2xs'
                          : 'bg-[#F4F4F5] text-gray-700 border-transparent hover:bg-gray-200'
                      }`}
                    >
                      🔒 嚴格鎖定 (--iw 2.0)
                    </button>
                    <button
                      type="button"
                      onClick={() => setImageRefPreserveLevel('balanced')}
                      className={`px-2 py-1.5 text-[11px] rounded-lg border transition text-center cursor-pointer ${
                        imageRefPreserveLevel === 'balanced'
                          ? 'bg-[#18181B] text-white border-[#18181B] font-bold shadow-2xs'
                          : 'bg-[#F4F4F5] text-gray-700 border-transparent hover:bg-gray-200'
                      }`}
                    >
                      ⚖️ 平衡調和 (--iw 1.5)
                    </button>
                    <button
                      type="button"
                      onClick={() => setImageRefPreserveLevel('creative')}
                      className={`px-2 py-1.5 text-[11px] rounded-lg border transition text-center cursor-pointer ${
                        imageRefPreserveLevel === 'creative'
                          ? 'bg-[#18181B] text-white border-[#18181B] font-bold shadow-2xs'
                          : 'bg-[#F4F4F5] text-gray-700 border-transparent hover:bg-gray-200'
                      }`}
                    >
                      💡 寬鬆創意 (--iw 0.8)
                    </button>
                  </div>
                </div>

                {/* Prompt Preview Snippet */}
                <div className="bg-[#18181B] text-white rounded-lg p-2.5 text-[10px] font-mono space-y-1">
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="font-bold text-purple-400">即時注入修改指令標籤</span>
                    <span>自動附加防護 --no 詞</span>
                  </div>
                  <div className="text-gray-200 truncate">
                    {imageRefSource ? `${imageRefSource} ` : '[參考圖] '}
                    [Targeted {imageRefEditMode.toUpperCase()}: {imageRefDetail || '...'}, preserve other features]
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-2.5 text-center text-xs text-gray-400 border-t border-[#E4E4E7]">
              開啟後可指定參考圖（URL 或檔名），只鎖定修改特定的顏色、視角角度、背景或材質，其餘特徵完整保留。
            </div>
          )}
        </div>

        {/* Composition Reference, Color Palette & Noise Controller Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* 1. Composition Blueprint Reference Card */}
          <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-indigo-50 text-indigo-700 flex items-center justify-center">
                  <ImageIcon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#18181B]">指定參考構圖 (Blueprint)</h3>
                  <p className="text-[10px] text-gray-400">鎖定空間佈局與透視角度，自動隔離風格</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={enableCompositionRef}
                  onChange={(e) => setEnableCompositionRef(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-8 h-4.5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>

            {enableCompositionRef ? (
              <div className="space-y-3 pt-2 border-t border-[#E4E4E7]">
                <div>
                  <label className="text-[11px] text-gray-500 block mb-1">參考圖公開 URL 網址</label>
                  <input
                    type="url"
                    placeholder="https://example.com/layout-reference.jpg"
                    value={compositionImageUrl}
                    onChange={(e) => setCompositionImageUrl(e.target.value)}
                    className="w-full bg-[#F4F4F5] border border-[#E4E4E7] rounded-md px-3 py-1.5 text-xs text-[#18181B] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-600 font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] text-gray-500 block mb-1">構圖導引類型</label>
                    <select
                      value={compositionGuidanceType}
                      onChange={(e: any) => setCompositionGuidanceType(e.target.value)}
                      className="w-full bg-[#F4F4F5] border border-[#E4E4E7] rounded-md p-1.5 text-xs"
                    >
                      <option value="structural_layout">嚴格幾何結構佈局</option>
                      <option value="grid_perspective">空間透視與相機視角</option>
                      <option value="silhouettes_framing">負空間留白與剪影框景</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] text-gray-500 block mb-1">構圖吻合強度</label>
                    <select
                      value={compositionStrength}
                      onChange={(e: any) => setCompositionStrength(e.target.value)}
                      className="w-full bg-[#F4F4F5] border border-[#E4E4E7] rounded-md p-1.5 text-xs"
                    >
                      <option value="strict">Strict (嚴格吻合佈局)</option>
                      <option value="medium">Medium (平衡構圖導引)</option>
                      <option value="loose">Loose (寬鬆靈感參考)</option>
                    </select>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-3 text-center text-xs text-gray-400 border-t border-[#E4E4E7]">
                開啟後可填入參考圖 URL，自動鎖定透視與結構並隔離原始風格。
              </div>
            )}
          </div>

          {/* 2. Color Palette & Hex Code Control Card */}
          <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-amber-50 text-amber-700 flex items-center justify-center">
                  <PaletteIcon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#18181B]">指定色票色感 (Color Palette)</h3>
                  <p className="text-[10px] text-gray-400">精準置入 16 進位 HEX 色碼，掌控畫面色調</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={enableColorPalette}
                  onChange={(e) => setEnableColorPalette(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-8 h-4.5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-amber-600"></div>
              </label>
            </div>

            {enableColorPalette ? (
              <div className="space-y-3 pt-2 border-t border-[#E4E4E7]">
                {/* Active Custom Hex Colors */}
                <div>
                  <label className="text-[11px] text-gray-500 block mb-1.5">目前套用色票 ({customHexColors.length}/8)</label>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {customHexColors.map((hex, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 bg-[#F4F4F5] border border-[#E4E4E7] rounded px-2 py-1 text-xs font-mono"
                      >
                        <span
                          className="w-3 h-3 rounded-full border border-black/20"
                          style={{ backgroundColor: hex }}
                        />
                        <span>{hex}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveHexColor(idx)}
                          className="text-gray-400 hover:text-red-500 ml-1"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                    {customHexColors.length < 8 && (
                      <div className="flex items-center gap-1">
                        <input
                          type="text"
                          value={newColorInput}
                          onChange={(e) => setNewColorInput(e.target.value)}
                          placeholder="#HEX"
                          className="w-20 bg-[#F4F4F5] border border-[#E4E4E7] rounded px-2 py-1 text-xs font-mono uppercase"
                        />
                        <button
                          type="button"
                          onClick={() => handleAddHexColor(newColorInput)}
                          className="px-2 py-1 bg-[#18181B] text-white rounded text-xs hover:bg-black font-semibold flex items-center gap-0.5"
                        >
                          <Plus className="w-3 h-3" /> 加
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Preset Palettes Quick Pick */}
                <div>
                  <label className="text-[11px] text-gray-500 block mb-1">精選色票快速套用</label>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {presetPalettes.map((preset, pIdx) => (
                      <button
                        type="button"
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
                      type="button"
                      onClick={() => setColorGradingIntensity('dominant')}
                      className={`px-2 py-1 text-[11px] rounded border transition ${
                        colorGradingIntensity === 'dominant'
                          ? 'bg-[#18181B] text-white border-[#18181B] font-semibold'
                          : 'bg-[#F4F4F5] text-gray-600 border-transparent hover:bg-gray-200'
                      }`}
                    >
                      主導基調
                    </button>
                    <button
                      type="button"
                      onClick={() => setColorGradingIntensity('accent')}
                      className={`px-2 py-1 text-[11px] rounded border transition ${
                        colorGradingIntensity === 'accent'
                          ? 'bg-[#18181B] text-white border-[#18181B] font-semibold'
                          : 'bg-[#F4F4F5] text-gray-600 border-transparent hover:bg-gray-200'
                      }`}
                    >
                      局部點綴
                    </button>
                    <button
                      type="button"
                      onClick={() => setColorGradingIntensity('atmospheric')}
                      className={`px-2 py-1 text-[11px] rounded border transition ${
                        colorGradingIntensity === 'atmospheric'
                          ? 'bg-[#18181B] text-white border-[#18181B] font-semibold'
                          : 'bg-[#F4F4F5] text-gray-600 border-transparent hover:bg-gray-200'
                      }`}
                    >
                      環境氛圍
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

          {/* 3. Noise & Grain Texture Controller Card */}
          <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#18181B]">噪點與顆粒質感 (Noise / Grain)</h3>
                  <p className="text-[10px] text-gray-400">微調純淨度、底片膠卷顆粒與印刷網點雜訊</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  noiseLevel === 'none' 
                    ? 'bg-gray-100 text-gray-500' 
                    : noiseLevel === 'clean'
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-[#18181B] text-white'
                }`}>
                  {currentNoiseObj.shortLabel}
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-2 border-t border-[#E4E4E7]">
              {/* Noise Presets Selector */}
              <div>
                <label className="text-[11px] text-gray-500 block mb-1.5">噪點質感檔位選擇</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {noiseOptions.map((opt) => {
                    const isSelected = noiseLevel === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setNoiseLevel(opt.id)}
                        className={`px-2 py-1.5 rounded-lg text-left transition border cursor-pointer ${
                          isSelected
                            ? 'bg-[#18181B] text-white border-[#18181B] shadow-2xs'
                            : 'bg-[#F4F4F5] hover:bg-gray-200 border-transparent text-gray-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold block truncate">{opt.shortLabel}</span>
                          {isSelected && <CircleDot className="w-2.5 h-2.5 text-emerald-400 shrink-0" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Visual Grain Density Indicator */}
              <div className="bg-[#F4F4F5] rounded-lg p-2.5 border border-[#E4E4E7]/70 space-y-1.5">
                <div className="flex items-center justify-between text-[10px] text-gray-500 font-mono">
                  <span>顆粒強度指示 (Density)</span>
                  <span className="font-bold text-[#18181B]">{currentNoiseObj.intensity}%</span>
                </div>
                {/* Visual Progress Bar */}
                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#18181B] h-full transition-all duration-300"
                    style={{ width: `${Math.max(currentNoiseObj.intensity, noiseLevel === 'clean' ? 0 : 5)}%` }}
                  />
                </div>
                <p className="text-[10px] text-gray-600 leading-tight pt-1">
                  {currentNoiseObj.description}
                </p>
              </div>

              {/* Prompt Token Info Box */}
              {currentNoiseObj.prompt && (
                <div className="text-[10px] font-mono text-gray-500 bg-white p-2 rounded border border-[#E4E4E7] space-y-0.5">
                  <div className="font-bold text-gray-700 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                    <span>正向標籤:</span>
                  </div>
                  <div className="text-gray-600 line-clamp-1">{currentNoiseObj.prompt}</div>
                  {currentNoiseObj.negativePrompt && (
                    <div className="text-red-500 line-clamp-1 pt-0.5 border-t border-gray-100 mt-1">
                      --no {currentNoiseObj.negativePrompt}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
