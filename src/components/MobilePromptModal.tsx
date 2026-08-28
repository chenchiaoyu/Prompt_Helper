import React from 'react';
import { X, Copy, Check, Trash2, Cpu, Globe } from 'lucide-react';
import { AIPlatform } from '../data/promptDatabase';

interface MobilePromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  finalPrompt: string;
  activeEngine: AIPlatform;
  selectedMJVersion: string;
  positiveCount: number;
  negativeCount: number;
  onCopy: () => void;
  copied: boolean;
  onClearAll: () => void;
}

export const MobilePromptModal: React.FC<MobilePromptModalProps> = ({
  isOpen,
  onClose,
  finalPrompt,
  activeEngine,
  selectedMJVersion,
  positiveCount,
  negativeCount,
  onCopy,
  copied,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div 
        className="bg-[#18181B] text-white rounded-t-2xl border-t border-gray-700 max-h-[85vh] flex flex-col p-5 shadow-2xl animate-in slide-in-from-bottom duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider font-mono text-gray-300 flex items-center gap-1.5">
              {activeEngine === 'midjourney' ? <Cpu className="w-3.5 h-3.5 text-indigo-400" /> : <Globe className="w-3.5 h-3.5 text-emerald-400" />}
              {activeEngine === 'midjourney' ? `MJ Prompt (${selectedMJVersion.toUpperCase()})` : 'Universal AI Prompt'}
            </span>
            <span className="text-[10px] text-gray-400 font-mono">
              ({positiveCount} + / {negativeCount} -)
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Prompt Content */}
        <div className="py-4 flex-1 overflow-y-auto">
          {finalPrompt ? (
            <div className="p-3.5 bg-black/50 rounded-xl border border-gray-800 font-mono text-xs sm:text-sm leading-relaxed text-gray-100 select-all break-words whitespace-pre-wrap">
              {finalPrompt}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500 text-xs italic">
              尚未選取提示詞標籤，請在上方點選標籤以生成 Prompt。
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-gray-800 flex items-center gap-2.5">
          <button
            onClick={onCopy}
            disabled={!finalPrompt}
            className="flex-1 py-3 bg-white text-black hover:bg-gray-200 font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm disabled:opacity-40"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? '已複製到剪貼簿' : '一鍵複製 PROMPT'}</span>
          </button>

          <button
            onClick={onClearAll}
            title="清空全部"
            className="p-3 border border-gray-700 rounded-xl text-gray-400 hover:text-white hover:border-gray-500"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
