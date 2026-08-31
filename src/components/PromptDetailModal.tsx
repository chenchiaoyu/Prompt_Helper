import React, { useState } from 'react';
import { X, Copy, Check, Globe, Info, Sparkles, Plus, Minus, BookOpen, Compass, History, Clock } from 'lucide-react';
import { PromptItem } from '../data/promptDatabase';
import { promptExplanations } from '../data/promptExplanations';
import { CompositionDiagramViewer } from '../data/compositionExplanations';

interface PromptDetailModalProps {
  item: (PromptItem & { categoryId?: string; subCategory?: string }) | null;
  isOpen: boolean;
  onClose: () => void;
  isSelected: boolean;
  onToggleSelect: (id: string) => void;
  onGoogleSearch: (item: { label: string; prompt: string }) => void;
}

export const PromptDetailModal: React.FC<PromptDetailModalProps> = ({
  item,
  isOpen,
  onClose,
  isSelected,
  onToggleSelect,
  onGoogleSearch,
}) => {
  const [singleCopied, setSingleCopied] = useState(false);

  if (!isOpen || !item) return null;

  const explanationInfo = promptExplanations[item.id];
  const shortDesc = explanationInfo?.desc || '精選專業美學提示詞標籤，精確導引 AI 算圖光影、構圖與材質渲染。';
  const diagram = explanationInfo?.diagram;
  const timeline = item.timeline;

  const handleCopySingle = async () => {
    try {
      await navigator.clipboard.writeText(item.prompt);
      setSingleCopied(true);
      setTimeout(() => setSingleCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = item.prompt;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setSingleCopied(true);
      setTimeout(() => setSingleCopied(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs animate-in fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white text-[#18181B] rounded-2xl border border-[#E4E4E7] w-full max-w-lg max-h-[90vh] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-150 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 bg-[#FAFAFA] border-b border-[#E4E4E7] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-[#18181B] text-white flex items-center justify-center shrink-0">
              <Info className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-[#18181B] truncate">
                {item.label}
              </h3>
              <p className="text-[11px] text-gray-500 font-mono">
                提示詞細節檢視與攝影/美術史解析 (Prompt Inspector)
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-lg bg-white border border-[#E4E4E7] text-gray-400 hover:text-black hover:bg-gray-100 flex items-center justify-center transition cursor-pointer shadow-2xs"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 space-y-4 overflow-y-auto max-h-[calc(90vh-140px)]">
          {/* 1. 美術史時間軸脈絡 (如果該標籤有 timeline) */}
          {timeline && (
            <div className="p-3.5 bg-stone-900 text-stone-100 rounded-xl border border-stone-800 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                  <History className="w-3.5 h-3.5" />
                  <span>美術史時間軸定位：{timeline.period}</span>
                </div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {timeline.era} ({timeline.yearRange})
                </span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {timeline.historicalContext}
              </p>
            </div>
          )}

          {/* 2. 中文簡短說明 (20-30字解說) */}
          <div className="p-3.5 bg-indigo-50/70 border border-indigo-100/90 rounded-xl space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-900">
              <BookOpen className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span>美學原理與視覺解說</span>
            </div>
            <p className="text-xs text-indigo-950/85 leading-relaxed">
              {shortDesc}
            </p>
          </div>

          {/* 3. 視角與構圖專屬說明圖解 (SVG Diagram) */}
          {diagram && (
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <Compass className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-xs font-bold text-gray-700">鏡頭運鏡與透視構圖原理圖解</span>
              </div>
              <CompositionDiagramViewer diagram={diagram} />
            </div>
          )}

          {/* 4. 完整 Prompt 英文語法 */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                完整英文 Prompt 語法
              </label>
              <span className="text-[10px] text-gray-400 font-mono">
                {item.prompt.length} 字元
              </span>
            </div>
            <div className="p-3.5 bg-[#F4F4F5] border border-[#E4E4E7] rounded-xl font-mono text-xs text-[#18181B] leading-relaxed select-all break-words">
              {item.prompt}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#FAFAFA] border-t border-[#E4E4E7] flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
          {/* Copy Single Button */}
          <button
            type="button"
            onClick={handleCopySingle}
            className="flex-1 py-2.5 px-4 bg-[#18181B] hover:bg-black text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition cursor-pointer shadow-xs"
          >
            {singleCopied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>已複製單項 PROMPT</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>複製單項 PROMPT</span>
              </>
            )}
          </button>

          {/* Toggle Select Button */}
          <button
            type="button"
            onClick={() => onToggleSelect(item.id)}
            className={`py-2.5 px-4 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition cursor-pointer border ${
              isSelected
                ? 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100'
                : 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
            }`}
          >
            {isSelected ? (
              <>
                <Minus className="w-3.5 h-3.5 stroke-[3]" />
                <span>移出組合</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
                <span>加入組合</span>
              </>
            )}
          </button>

          {/* Google Reference Search */}
          <button
            type="button"
            onClick={() => onGoogleSearch(item)}
            title="在 Google 搜尋實物範例與設計解析"
            className="py-2.5 px-3.5 bg-white hover:bg-gray-100 border border-[#E4E4E7] text-gray-700 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition cursor-pointer shadow-2xs"
          >
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            <span>Google 參考搜尋</span>
          </button>
        </div>
      </div>
    </div>
  );
};
