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
  Trash2
} from 'lucide-react';
import { 
  AIPlatform, 
  midjourneyVersions, 
  presetPalettes 
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
  enableCompositionRef: boolean;
  setEnableCompositionRef: (val: boolean) => void;
  compositionImageUrl: string;
  setCompositionImageUrl: (url: string) => void;
  compositionStrength: 'strict' | 'medium' | 'loose';
  setCompositionStrength: (val: 'strict' | 'medium' | 'loose') => void;
  compositionGuidanceType: 'structural_layout' | 'grid_perspective' | 'silhouettes_framing';
  setCompositionGuidanceType: (val: 'structural_layout' | 'grid_perspective' | 'silhouettes_framing') => void;
  enableColorPalette: boolean;
  setEnableColorPalette: (val: boolean) => void;
  customHexColors: string[];
  setCustomHexColors: React.Dispatch<React.SetStateAction<string[]>>;
  colorGradingIntensity: 'dominant' | 'accent' | 'atmospheric';
  setColorGradingIntensity: (val: 'dominant' | 'accent' | 'atmospheric') => void;
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
}) => {
  const [showVersionTable, setShowVersionTable] = useState(false);
  const [newColorInput, setNewColorInput] = useState('#D4AF37');
  const [isCollapsedOnMobile, setIsCollapsedOnMobile] = useState(true);

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

        {/* Composition Reference & Color Palette Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* 1. Composition Blueprint Reference Card */}
          <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-indigo-50 text-indigo-700 flex items-center justify-center">
                  <ImageIcon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#18181B]">指定參考構圖 (Composition Blueprint)</h3>
                  <p className="text-[10px] text-gray-400">僅鎖定空間佈局與透視角度，自動防護風格轉移</p>
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
                開啟後可填入參考圖 URL，將自動鎖定透視與結構，並在負向提示詞加入風格隔離指令。
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
                  <h3 className="text-xs font-bold text-[#18181B]">指定色票色感 (Hex Color Palette)</h3>
                  <p className="text-[10px] text-gray-400">精準置入 16 進位 HEX 色碼，掌控生成畫面色調</p>
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
                  <label className="text-[11px] text-gray-500 block mb-1.5">目前套用色票組合 ({customHexColors.length}/8)</label>
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
                  <label className="text-[11px] text-gray-500 block mb-1">經典精選色票快速選用</label>
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
        </div>
      </div>
    </div>
  );
};
