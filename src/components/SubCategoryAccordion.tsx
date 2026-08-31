import React from 'react';
import { ChevronDown, ChevronUp, Check, Info, Globe, Sparkles, History } from 'lucide-react';
import { PromptItem, SubCategory, subCategoryColorMap } from '../data/promptDatabase';

interface SubCategoryAccordionProps {
  subCategory: SubCategory;
  items: PromptItem[];
  selectedPromptIds: Set<string>;
  onTogglePrompt: (id: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onGoogleSearch: (e: React.MouseEvent, item: { label: string; prompt: string }) => void;
  onInspectPrompt: (e: React.MouseEvent, item: PromptItem) => void;
}

export const SubCategoryAccordion: React.FC<SubCategoryAccordionProps> = ({
  subCategory,
  items,
  selectedPromptIds,
  onTogglePrompt,
  isCollapsed,
  onToggleCollapse,
  onGoogleSearch,
  onInspectPrompt,
}) => {
  const colorTheme = subCategoryColorMap[subCategory.color] || subCategoryColorMap.slate;
  const selectedCount = items.filter(item => selectedPromptIds.has(item.id)).length;

  return (
    <div className="bg-white border border-[#E4E4E7] rounded-xl overflow-hidden shadow-2xs transition-all duration-200">
      {/* Header Bar - Clickable to fold/unfold */}
      <button
        type="button"
        onClick={onToggleCollapse}
        className="w-full px-4 py-3 bg-[#FAFAFA] hover:bg-[#F4F4F5] border-b border-[#E4E4E7]/60 flex items-center justify-between gap-3 text-left transition cursor-pointer select-none"
      >
        <div className="flex items-center gap-2.5 flex-wrap min-w-0">
          <span className={`w-2.5 h-2.5 rounded-full ${colorTheme.dot} shrink-0`} />
          <span className="font-bold text-sm text-[#18181B] tracking-tight">
            {subCategory.name}
          </span>
          <span className="text-xs font-mono text-gray-400 font-normal hidden sm:inline truncate">
            {subCategory.englishName}
          </span>
          
          <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-gray-200/70 text-gray-600 shrink-0">
            {items.length} 標籤
          </span>

          {selectedCount > 0 && (
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#18181B] text-white flex items-center gap-1 shrink-0 animate-in fade-in">
              <Check className="w-3 h-3 stroke-[3]" />
              {selectedCount} 已選取
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[11px] text-gray-400 font-medium hidden md:inline">
            {isCollapsed ? '展開細看' : '收合分類'}
          </span>
          <div className="w-6 h-6 rounded-md bg-white border border-[#E4E4E7] flex items-center justify-center text-gray-500 shadow-2xs">
            {isCollapsed ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </div>
        </div>
      </button>

      {/* Subcategory Description (if provided) */}
      {subCategory.desc && (
        <div className="px-4 py-2 bg-white/70 border-b border-gray-100 text-[11px] text-gray-500 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
          <span className="truncate">{subCategory.desc}</span>
        </div>
      )}

      {/* Body: Items Grid (Collapsible) */}
      {!isCollapsed ? (
        <div className="p-3.5 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2.5">
            {items.map((item) => {
              const isSelected = selectedPromptIds.has(item.id);
              const isNegative = item.isNegative;
              const timeline = item.timeline;

              return (
                <div
                  key={item.id}
                  onClick={() => onTogglePrompt(item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onTogglePrompt(item.id);
                    }
                  }}
                  className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all relative cursor-pointer select-none group min-h-[92px] justify-between ${
                    isSelected
                      ? isNegative
                        ? 'bg-[#27272A] text-white border-[#27272A] ring-2 ring-red-500/50 shadow-sm'
                        : 'bg-[#18181B] text-white border-[#18181B] shadow-sm'
                      : 'bg-[#FAFAFA] hover:bg-white hover:border-gray-400 border-[#E4E4E7] text-[#18181B]'
                  }`}
                >
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between w-full mb-1">
                    <div className="flex items-center gap-1.5 truncate pr-1">
                      {timeline ? (
                        <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded flex items-center gap-1 shrink-0 ${
                          isSelected ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' : 'bg-amber-50 text-amber-800 border border-amber-200'
                        }`}>
                          <History className="w-2.5 h-2.5" />
                          <span>{timeline.era}</span>
                        </span>
                      ) : (
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0 ${
                          isSelected ? colorTheme.activeBg + ' ' + colorTheme.activeText : colorTheme.bg + ' ' + colorTheme.text
                        }`}>
                          {subCategory.name.slice(0, 4)}
                        </span>
                      )}
                      
                      <span className={`text-[10px] uppercase font-mono tracking-wider truncate ${
                        isSelected ? 'text-gray-300 opacity-80' : 'text-gray-400'
                      }`}>
                        {item.prompt.split(',')[0]}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      {/* Google 實物參考搜尋 (地球圖示) */}
                      <button
                        type="button"
                        onClick={(e) => onGoogleSearch(e, item)}
                        title={`在 Google 搜尋「${item.label}」實物參考與風格解析`}
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white/20 hover:bg-white/35 text-white'
                            : 'bg-gray-200/60 hover:bg-blue-600 hover:text-white text-gray-500 opacity-80 group-hover:opacity-100'
                        }`}
                      >
                        <Globe className="w-3 h-3 stroke-[2.2]" />
                      </button>

                      {/* 完整提示詞檢視 (ℹ️ 圖示) */}
                      <button
                        type="button"
                        onClick={(e) => onInspectPrompt(e, item)}
                        title={`查看「${item.label}」完整英文提示詞與美術史解析`}
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white/20 hover:bg-white/35 text-white'
                            : 'bg-gray-200/60 hover:bg-[#18181B] hover:text-white text-gray-500 opacity-80 group-hover:opacity-100'
                        }`}
                      >
                        <Info className="w-3 h-3 stroke-[2.5]" />
                      </button>

                      {isSelected && (
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ml-0.5 ${
                          isNegative ? 'bg-red-500 text-white' : 'bg-white text-black'
                        }`}>
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Card Title & Era Note */}
                  <div className="w-full">
                    <span className="font-semibold text-xs sm:text-sm leading-snug pr-1 line-clamp-2">
                      {item.label}
                    </span>
                    {timeline && (
                      <div className={`text-[10px] font-mono mt-0.5 flex items-center gap-1 ${
                        isSelected ? 'text-amber-300/80' : 'text-amber-700/80'
                      }`}>
                        <span>{timeline.period}</span>
                        <span>•</span>
                        <span>{timeline.yearRange}</span>
                      </div>
                    )}
                  </div>

                  <p className={`text-[10px] mt-1 line-clamp-1 font-mono ${
                    isSelected ? 'text-gray-300' : 'text-gray-400'
                  }`}>
                    {item.prompt}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div 
          onClick={onToggleCollapse}
          className="px-4 py-2.5 bg-gray-50/70 hover:bg-gray-100 text-xs text-gray-500 flex items-center justify-between cursor-pointer border-t border-gray-100 transition"
        >
          <span className="text-[11px] text-gray-500">
            包含 {items.slice(0, 3).map(i => i.label.split(' ')[0]).join('、')} 等 {items.length} 項標籤
          </span>
          <span className="text-[11px] font-semibold text-indigo-600 flex items-center gap-1">
            展開細看 <ChevronDown className="w-3 h-3" />
          </span>
        </div>
      )}
    </div>
  );
};
