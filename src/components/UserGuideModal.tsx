import React from 'react';
import { 
  X, 
  HelpCircle, 
  Cpu, 
  Globe, 
  Sliders, 
  Sparkles, 
  Copy, 
  Check, 
  Info, 
  LayoutTemplate,
  Camera,
  Compass,
  Palette,
  Package,
  Layers,
  Search
} from 'lucide-react';

interface UserGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserGuideModal: React.FC<UserGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white text-[#18181B] rounded-2xl border border-[#E4E4E7] w-full max-w-2xl max-h-[90vh] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#FAFAFA] border-b border-[#E4E4E7] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#18181B] text-white flex items-center justify-center shrink-0">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#18181B]">
                使用說明指南 (User Guide)
              </h3>
              <p className="text-xs text-gray-500 font-mono">
                提示詞窮救星-Universal • 快速上手秘笈
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

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
          {/* Step 1 */}
          <div className="flex gap-3.5">
            <div className="w-7 h-7 rounded-full bg-[#18181B] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              1
            </div>
            <div className="space-y-1.5 flex-1">
              <h4 className="font-bold text-sm text-[#18181B] flex items-center gap-2">
                <span>選擇 AI 算圖引擎模式</span>
              </h4>
              <p className="text-gray-600">
                右上角可自由切換 <strong className="text-black">Midjourney</strong> 與 <strong className="text-black">Universal</strong> 兩種輸出邏輯：
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
                <div className="p-2.5 bg-[#F4F4F5] rounded-lg border border-[#E4E4E7]">
                  <div className="font-bold text-[#18181B] flex items-center gap-1.5 mb-1">
                    <Cpu className="w-3.5 h-3.5 text-indigo-600" /> Midjourney 模式
                  </div>
                  <p className="text-gray-500">自動在提示詞末端附加 <code className="bg-gray-200 px-1 py-0.5 rounded text-black">--ar 16:9 --s 150 --c 0</code> 等官方專用參數。</p>
                </div>
                <div className="p-2.5 bg-[#F4F4F5] rounded-lg border border-[#E4E4E7]">
                  <div className="font-bold text-[#18181B] flex items-center gap-1.5 mb-1">
                    <Globe className="w-3.5 h-3.5 text-emerald-600" /> Universal 通用模式
                  </div>
                  <p className="text-gray-500">採用自然語言長句描述，專為 DALL-E 3、SDXL、Flux 與中文提示詞相容調校。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-3.5">
            <div className="w-7 h-7 rounded-full bg-[#18181B] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              2
            </div>
            <div className="space-y-1.5 flex-1">
              <h4 className="font-bold text-sm text-[#18181B]">輸入主體描述 (Subject Prompt)</h4>
              <p className="text-gray-600">
                在上方「主體描述」欄位填寫想生成的核心主詞（例如：<code>a sleek sports car on wet asphalt</code> 或 <code>未來科技耳機少女</code>），主體描述會自動排在最終 Prompt 的最前段。
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-3.5">
            <div className="w-7 h-7 rounded-full bg-[#18181B] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              3
            </div>
            <div className="space-y-1.5 flex-1">
              <h4 className="font-bold text-sm text-[#18181B]">點選美學、機位與商業標籤</h4>
              <p className="text-gray-600">
                透過左側分類（商業 Mockup、攝影器材、透視構圖、光影氛圍、藝術大師風格等）點選標籤，系統將即時在底部綠色輸出列無縫拼裝高品質英文 Prompt。
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-3.5">
            <div className="w-7 h-7 rounded-full bg-[#18181B] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              4
            </div>
            <div className="space-y-2 flex-1">
              <h4 className="font-bold text-sm text-[#18181B]">卡片快捷神器與高級功能</h4>
              
              <div className="space-y-2">
                <div className="flex items-start gap-2 p-2.5 bg-[#F4F4F5] rounded-xl border border-[#E4E4E7]">
                  <div className="w-6 h-6 rounded-full bg-white border border-[#E4E4E7] flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-bold text-[#18181B]">Google 實物參考搜尋（地球圖示）</span>
                    <p className="text-xs text-gray-500 mt-0.5">點擊卡片右上角的地球圖示，可一鍵開啟 Google 搜尋該項目的真實藝術風格或設計範例。</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 bg-[#F4F4F5] rounded-xl border border-[#E4E4E7]">
                  <div className="w-6 h-6 rounded-full bg-white border border-[#E4E4E7] flex items-center justify-center shrink-0 mt-0.5">
                    <Info className="w-3.5 h-3.5 text-indigo-600" />
                  </div>
                  <div>
                    <span className="font-bold text-[#18181B]">完整提示詞檢視器（ℹ️ 圖示）</span>
                    <p className="text-xs text-gray-500 mt-0.5">點擊卡片上的 ℹ️ 圖示可開啟彈窗，查看不被截斷的完整英文提示詞，並支援單項複製與加入/移出組合。</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 bg-[#F4F4F5] rounded-xl border border-[#E4E4E7]">
                  <div className="w-6 h-6 rounded-full bg-white border border-[#E4E4E7] flex items-center justify-center shrink-0 mt-0.5">
                    <LayoutTemplate className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="font-bold text-[#18181B]">Mockup 乾淨防護 & 噪點色票控制</span>
                    <p className="text-xs text-gray-500 mt-0.5">專為商業設計後製打造：自動排除 AI 雜訊文字與水印，保留乾淨留白；亦可自訂 HEX 色票與膠卷顆粒感。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex gap-3.5">
            <div className="w-7 h-7 rounded-full bg-[#18181B] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              5
            </div>
            <div className="space-y-1.5 flex-1">
              <h4 className="font-bold text-sm text-[#18181B]">一鍵複製與匯出</h4>
              <p className="text-gray-600">
                點選底部綠色輸出列的 <strong className="text-black">COPY PROMPT</strong> 按鈕，即可將完整提示詞複製至剪貼簿，直接貼入 Discord / Midjourney、Web UI 或各 AI 繪圖工具開始算圖！
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-[#FAFAFA] border-t border-[#E4E4E7] flex justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#18181B] hover:bg-black text-white text-xs font-bold rounded-xl transition cursor-pointer shadow-xs"
          >
            我瞭解了，開始使用
          </button>
        </div>
      </div>
    </div>
  );
};
