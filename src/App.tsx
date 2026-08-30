import React, { useState, useMemo } from 'react';
import { 
  Copy, 
  Check, 
  RotateCcw, 
  Trash2, 
  Search, 
  Sparkles, 
  LayoutTemplate,
  Info,
  ChevronsUpDown,
  Cpu,
  Globe,
  Package,
  Camera,
  Compass,
  Palette,
  Shapes,
  Brush,
  ShieldAlert,
  Maximize2,
  HelpCircle
} from 'lucide-react';

import { 
  CategoryKey, 
  AIPlatform, 
  promptDatabase, 
  midjourneyVersions,
  NoiseLevel,
  noiseOptions,
  PromptItem
} from './data/promptDatabase';
import { SubCategoryAccordion } from './components/SubCategoryAccordion';
import { MobileCategoryNav } from './components/MobileCategoryNav';
import { MobilePromptModal } from './components/MobilePromptModal';
import { ParameterPanel } from './components/ParameterPanel';
import { PromptDetailModal } from './components/PromptDetailModal';
import { UserGuideModal } from './components/UserGuideModal';

const sidebarIconMap: Record<string, React.ElementType> = {
  Package,
  Camera,
  Compass,
  Palette,
  Shapes,
  Brush,
  ShieldAlert,
};

export default function AestheticPromptMaster() {
  // State: Platform Engine & Model Version
  const [activeEngine, setActiveEngine] = useState<AIPlatform>('midjourney');
  const [selectedMJVersion, setSelectedMJVersion] = useState('v8.2');

  // State: Categories, Search, Selection
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('commercialDesign');
  const [selectedPromptIds, setSelectedPromptIds] = useState<Set<string>>(new Set());
  const [subCategoryFilter, setSubCategoryFilter] = useState<string>('all');
  const [collapsedSubCategories, setCollapsedSubCategories] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [isUserGuideOpen, setIsUserGuideOpen] = useState(false);
  const [inspectingItem, setInspectingItem] = useState<(PromptItem & { categoryId?: string; subCategory?: string }) | null>(null);

  // State: Parameters
  const [subjectText, setSubjectText] = useState('');
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [imageWeight, setImageWeight] = useState('1.0');
  const [stylizeValue, setStylizeValue] = useState('150');
  const [chaosValue, setChaosValue] = useState('0');
  const [customNegative, setCustomNegative] = useState('');
  const [mockupPureMode, setMockupPureMode] = useState(false);

  // State: Noise & Grain Controller
  const [noiseLevel, setNoiseLevel] = useState<NoiseLevel>('none');

  // State: Composition Reference
  const [enableCompositionRef, setEnableCompositionRef] = useState(false);
  const [compositionImageUrl, setCompositionImageUrl] = useState('');
  const [compositionStrength, setCompositionStrength] = useState<'strict' | 'medium' | 'loose'>('strict');
  const [compositionGuidanceType, setCompositionGuidanceType] = useState<'structural_layout' | 'grid_perspective' | 'silhouettes_framing'>('structural_layout');

  // State: Color Palette
  const [enableColorPalette, setEnableColorPalette] = useState(false);
  const [customHexColors, setCustomHexColors] = useState<string[]>(['#18181B', '#F4F4F5', '#A1A1AA']);
  const [colorGradingIntensity, setColorGradingIntensity] = useState<'dominant' | 'accent' | 'atmospheric'>('dominant');

  // Toggle single prompt
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

  // Toggle collapse state for a subcategory
  const toggleSubCategoryCollapse = (subCatId: string) => {
    setCollapsedSubCategories(prev => ({
      ...prev,
      [subCatId]: !prev[subCatId]
    }));
  };

  // Expand or collapse all subcategories in the current category
  const toggleAllSubCategories = () => {
    const currentSubCats = promptDatabase[selectedCategory]?.subCategories || [];
    const allCurrentlyCollapsed = currentSubCats.every(sc => collapsedSubCategories[sc.id]);
    
    const nextState: Record<string, boolean> = { ...collapsedSubCategories };
    currentSubCats.forEach(sc => {
      nextState[sc.id] = !allCurrentlyCollapsed;
    });
    setCollapsedSubCategories(nextState);
  };

  // Clear all selections
  const handleClearAll = () => {
    setSelectedPromptIds(new Set());
    setSubjectText('');
    setCustomNegative('');
    setMockupPureMode(false);
    setNoiseLevel('none');
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

  // Switch Category and reset sub-filters
  const handleSelectCategory = (catKey: CategoryKey) => {
    setSelectedCategory(catKey);
    setSubCategoryFilter('all');
    setSearchQuery('');
  };

  // All flat database items for search & prompt generation
  const allDatabaseItems = useMemo(() => {
    const items: Array<{ id: string; label: string; prompt: string; categoryId: CategoryKey; isNegative: boolean; subCategory?: string }> = [];
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

  const currentCategoryData = promptDatabase[selectedCategory];

  // Filtered subcategories for rendering
  const activeSubCategories = useMemo(() => {
    const list = currentCategoryData.subCategories || [];
    if (subCategoryFilter === 'all') return list;
    return list.filter(sc => sc.id === subCategoryFilter);
  }, [currentCategoryData, subCategoryFilter]);

  // Real-time Prompt Combination Engine
  const { finalPrompt, positiveCount, negativeCount } = useMemo(() => {
    const positiveTokens: string[] = [];
    const negativeTokens: string[] = [];
    let pCount = 0;
    let nCount = 0;

    // 1. Composition Reference
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

    // 2. Base Subject
    if (subjectText.trim()) {
      positiveTokens.push(subjectText.trim());
    }

    // 3. Selected Prompts
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

    // 4. Mockup Pure Mode Safeguard
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

    // 6. Noise & Grain Controller
    const selectedNoise = noiseOptions.find(n => n.id === noiseLevel);
    if (selectedNoise && selectedNoise.id !== 'none') {
      if (selectedNoise.prompt) {
        positiveTokens.push(selectedNoise.prompt);
        pCount++;
      }
      if (selectedNoise.negativePrompt) {
        negativeTokens.push(selectedNoise.negativePrompt);
        nCount++;
      }
    }

    // 7. Custom Negative
    if (customNegative.trim()) {
      negativeTokens.push(customNegative.trim());
      nCount++;
    }

    // 8. Composition negative guard
    if (enableCompositionRef && compositionImageUrl.trim()) {
      negativeTokens.push('copying style of reference image, original colors of reference image, style transfer');
    }

    // Output Generation
    if (activeEngine === 'midjourney') {
      let result = compPrefix + positiveTokens.join(', ');

      if (aspectRatio && aspectRatio !== 'default') {
        result += ` --ar ${aspectRatio}`;
      }

      const currentVerObj = midjourneyVersions.find(v => v.id === selectedMJVersion);
      if (currentVerObj) {
        result += ` ${currentVerObj.param}`;
      }

      if (imageWeight && imageWeight !== '1.0') {
        result += ` --iw ${imageWeight}`;
      }

      if (enableCompositionRef && compositionImageUrl.trim()) {
        result += ` --cw 0`;
      }

      if (stylizeValue && stylizeValue !== '100') {
        result += ` --s ${stylizeValue}`;
      }

      if (chaosValue && chaosValue !== '0') {
        result += ` --c ${chaosValue}`;
      }

      if (negativeTokens.length > 0) {
        result += ` --no ${negativeTokens.join(', ')}`;
      }

      return {
        finalPrompt: result.trim(),
        positiveCount: pCount,
        negativeCount: nCount
      };
    } else {
      const sentences: string[] = [];
      if (positiveTokens.length > 0) {
        sentences.push(`A high quality visual of ${positiveTokens.join(', ')}.`);
      }
      if (aspectRatio) {
        sentences.push(`Framed in a ${aspectRatio} aspect ratio format.`);
      }
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
    noiseLevel,
    enableCompositionRef,
    compositionImageUrl,
    compositionStrength,
    compositionGuidanceType,
    enableColorPalette,
    customHexColors,
    colorGradingIntensity
  ]);

  // Copy helper
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
  const isAllSubCatsCollapsed = (currentCategoryData.subCategories || []).every(sc => collapsedSubCategories[sc.id]);

  // Search filter
  const searchMatchingItems = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return allDatabaseItems.filter(item => 
      item.label.toLowerCase().includes(q) || 
      item.prompt.toLowerCase().includes(q)
    );
  }, [searchQuery, allDatabaseItems]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F5] font-sans text-[#18181B] antialiased selection:bg-[#18181B] selection:text-white">
      {/* Top Header */}
      <header className="h-14 sm:h-16 flex items-center justify-between px-4 sm:px-8 bg-white border-b border-[#E4E4E7] sticky top-0 z-30 shadow-2xs">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 sm:w-8 h-8 bg-[#18181B] rounded-lg flex items-center justify-center shadow-xs">
            <div className="w-3 h-3 sm:w-3.5 h-3.5 border-2 border-white rotate-45"></div>
          </div>
          <div>
            <h1 className="text-xs sm:text-base font-bold tracking-tight text-[#18181B] flex items-center gap-1.5 sm:gap-2">
              <span>提示詞窮救星-Universal</span>
              <span className="font-semibold text-[10px] sm:text-xs text-gray-500 font-mono">Prompt Helper</span>
            </h1>
          </div>
        </div>

        {/* Engine Switcher, Search & User Guide */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* User Guide Button */}
          <button
            type="button"
            onClick={() => setIsUserGuideOpen(true)}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-bold rounded-lg border border-[#E4E4E7] bg-white hover:bg-gray-100 text-[#18181B] shadow-2xs transition cursor-pointer"
            title="查看新手使用說明與秘笈"
          >
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
            <span className="hidden xs:inline sm:inline">使用指南</span>
          </button>

          {/* Engine Mode Toggle */}
          <div className="flex bg-[#F4F4F5] p-0.5 rounded-lg border border-[#E4E4E7]">
            <button
              onClick={() => setActiveEngine('midjourney')}
              className={`flex items-center gap-1 px-2 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-md transition cursor-pointer ${
                activeEngine === 'midjourney'
                  ? 'bg-[#18181B] text-white shadow-xs'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              <Cpu className="w-3 h-3 sm:w-3.5 h-3.5" />
              <span>Midjourney</span>
            </button>
            <button
              onClick={() => setActiveEngine('universal')}
              className={`flex items-center gap-1 px-2 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-md transition cursor-pointer ${
                activeEngine === 'universal'
                  ? 'bg-[#18181B] text-white shadow-xs'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              <Globe className="w-3 h-3 sm:w-3.5 h-3.5" />
              <span>Universal</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-28 sm:w-44 md:w-48">
            <Search className="w-3 h-3 sm:w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="搜尋標籤..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F4F4F5] border-none rounded-md pl-7 sm:pl-8 pr-3 py-1 text-xs text-[#18181B] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#18181B]"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-black"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Horizontal Navigation Tabs (Visible on < md) */}
      <MobileCategoryNav
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        selectedPromptIds={selectedPromptIds}
      />

      {/* Main Container Layout */}
      <div className="flex flex-1 overflow-hidden pb-24 sm:pb-28">
        {/* Sidebar: Categories Navigation (Desktop) */}
        <aside className="hidden md:flex w-64 bg-white border-r border-[#E4E4E7] flex-col shrink-0 justify-between">
          <nav className="p-4 space-y-1 overflow-y-auto">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-2">
              Aesthetic Categories
            </div>

            {(Object.keys(promptDatabase) as CategoryKey[]).map((key, idx) => {
              const cat = promptDatabase[key];
              const isActive = selectedCategory === key && !searchQuery;
              const activeInCat = cat.items.filter(item => selectedPromptIds.has(item.id)).length;
              const IconComp = sidebarIconMap[cat.icon] || Package;

              return (
                <button
                  key={key}
                  onClick={() => handleSelectCategory(key)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all text-left cursor-pointer ${
                    isActive
                      ? 'bg-[#18181B] text-white shadow-xs'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-[#18181B]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <IconComp className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{cat.name.split('與')[0]}</span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {activeInCat > 0 && (
                      <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-white text-black' : 'bg-[#18181B] text-white'
                      }`}>
                        {activeInCat}
                      </span>
                    )}
                    <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                      isActive ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {cat.items.length}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Sidebar Bottom Pure Mode & Helper */}
          <div className="p-4 border-t border-[#E4E4E7] space-y-2.5">
            <div className="bg-[#F4F4F5] p-3 rounded-lg border border-[#E4E4E7]">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <LayoutTemplate className="w-3.5 h-3.5 text-[#18181B]" />
                  <span className="text-xs font-bold text-[#18181B]">Mockup 乾淨防護</span>
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
                {mockupPureMode ? '已啟用：自動排除雜訊文字/水印，保留留白空間' : '已關閉：允許自然場景雜質'}
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto space-y-5">
          {/* Main Title & Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E4E4E7] pb-3.5 gap-2">
            <div>
              <h2 className="text-lg sm:text-2xl font-bold text-[#18181B] tracking-tight flex items-center gap-2">
                {searchQuery ? `搜尋結果: "${searchQuery}"` : currentCategoryData.name}
                {!searchQuery && (
                  <span className="text-xs sm:text-sm font-normal text-gray-400 hidden sm:inline">
                    {currentCategoryData.englishName}
                  </span>
                )}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                {searchQuery 
                  ? `在所有分類中找到 ${searchMatchingItems.length} 個符合項目` 
                  : currentCategoryData.description}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={handleClearAll}
                className="text-xs text-gray-500 hover:text-black px-2.5 py-1.5 rounded-lg hover:bg-white border border-[#E4E4E7] transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>重設選擇 ({selectedCount})</span>
              </button>
            </div>
          </div>

          {/* Parameter Panel Component */}
          <ParameterPanel
            activeEngine={activeEngine}
            setActiveEngine={setActiveEngine}
            selectedMJVersion={selectedMJVersion}
            setSelectedMJVersion={setSelectedMJVersion}
            subjectText={subjectText}
            setSubjectText={setSubjectText}
            aspectRatio={aspectRatio}
            setAspectRatio={setAspectRatio}
            stylizeValue={stylizeValue}
            setStylizeValue={setStylizeValue}
            chaosValue={chaosValue}
            setChaosValue={setChaosValue}
            imageWeight={imageWeight}
            setImageWeight={setImageWeight}
            customNegative={customNegative}
            setCustomNegative={setCustomNegative}
            mockupPureMode={mockupPureMode}
            setMockupPureMode={setMockupPureMode}
            enableCompositionRef={enableCompositionRef}
            setEnableCompositionRef={setEnableCompositionRef}
            compositionImageUrl={compositionImageUrl}
            setCompositionImageUrl={setCompositionImageUrl}
            compositionStrength={compositionStrength}
            setCompositionStrength={setCompositionStrength}
            compositionGuidanceType={compositionGuidanceType}
            setCompositionGuidanceType={setCompositionGuidanceType}
            enableColorPalette={enableColorPalette}
            setEnableColorPalette={setEnableColorPalette}
            customHexColors={customHexColors}
            setCustomHexColors={setCustomHexColors}
            colorGradingIntensity={colorGradingIntensity}
            setColorGradingIntensity={setColorGradingIntensity}
            noiseLevel={noiseLevel}
            setNoiseLevel={setNoiseLevel}
          />

          {/* ======================================================== */}
          {/* Aesthetic Tags Section with Collapsible SubCategories   */}
          {/* ======================================================== */}
          <div className="space-y-3.5">
            {/* SubCategory Toolbar / Filter */}
            {!searchQuery && currentCategoryData.subCategories && currentCategoryData.subCategories.length > 0 && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 bg-white p-2.5 rounded-xl border border-[#E4E4E7] shadow-2xs">
                {/* SubCategory Pill Filters */}
                <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
                  <button
                    type="button"
                    onClick={() => setSubCategoryFilter('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                      subCategoryFilter === 'all'
                        ? 'bg-[#18181B] text-white shadow-2xs'
                        : 'bg-[#F4F4F5] text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    全部 ({currentCategoryData.items.length})
                  </button>

                  {currentCategoryData.subCategories.map((subCat) => {
                    const isSubActive = subCategoryFilter === subCat.id;
                    const itemsInSub = currentCategoryData.items.filter(i => i.subCategory === subCat.id);
                    const selectedInSub = itemsInSub.filter(i => selectedPromptIds.has(i.id)).length;

                    return (
                      <button
                        key={subCat.id}
                        type="button"
                        onClick={() => setSubCategoryFilter(subCat.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition cursor-pointer ${
                          isSubActive
                            ? 'bg-[#18181B] text-white shadow-2xs'
                            : 'bg-[#F4F4F5] text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <span>{subCat.name.split('與')[0]}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isSubActive ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {itemsInSub.length}
                        </span>
                        {selectedInSub > 0 && (
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Quick Collapse / Expand All Button */}
                <button
                  type="button"
                  onClick={toggleAllSubCategories}
                  className="text-xs font-semibold text-gray-600 hover:text-black px-3 py-1.5 rounded-lg bg-[#F4F4F5] hover:bg-gray-200 border border-[#E4E4E7] transition flex items-center gap-1.5 shrink-0 self-start sm:self-auto cursor-pointer"
                >
                  <ChevronsUpDown className="w-3.5 h-3.5" />
                  <span>{isAllSubCatsCollapsed ? '全部展開' : '全部收合'}</span>
                </button>
              </div>
            )}

            {/* If searching: Flat list of search results */}
            {searchQuery ? (
              <div className="bg-white border border-[#E4E4E7] rounded-xl p-4 shadow-xs">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  搜尋結果 ({searchMatchingItems.length})
                </div>
                {searchMatchingItems.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2.5">
                    {searchMatchingItems.map((item) => {
                      const isSelected = selectedPromptIds.has(item.id);
                      return (
                        <div
                          key={item.id}
                          onClick={() => togglePrompt(item.id)}
                          role="button"
                          tabIndex={0}
                          className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all relative cursor-pointer select-none group min-h-[86px] justify-between ${
                            isSelected
                              ? 'bg-[#18181B] text-white border-[#18181B] shadow-sm'
                              : 'bg-[#FAFAFA] hover:bg-white hover:border-gray-400 border-[#E4E4E7] text-[#18181B]'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full mb-1">
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-gray-200 text-gray-700">
                              {promptDatabase[item.categoryId]?.name.split('與')[0].slice(0, 4)}
                            </span>
                            <div className="flex items-center gap-1">
                              {/* Google 實物參考搜尋 (地球圖示) */}
                              <button
                                type="button"
                                onClick={(e) => handleGoogleSearchStyle(e, item)}
                                title={`在 Google 搜尋「${item.label}」實物參考與風格解析`}
                                className="w-5 h-5 rounded-full bg-gray-200/60 hover:bg-blue-600 hover:text-white flex items-center justify-center text-gray-500 transition cursor-pointer"
                              >
                                <Globe className="w-3 h-3 stroke-[2.2]" />
                              </button>

                              {/* 完整提示詞檢視 (ℹ️ 圖示) */}
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setInspectingItem(item);
                                }}
                                title={`查看「${item.label}」完整英文提示詞`}
                                className="w-5 h-5 rounded-full bg-gray-200/60 hover:bg-[#18181B] hover:text-white flex items-center justify-center text-gray-500 transition cursor-pointer"
                              >
                                <Info className="w-3 h-3 stroke-[2.5]" />
                              </button>

                              {isSelected && (
                                <span className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center shrink-0 ml-0.5">
                                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                                </span>
                              )}
                            </div>
                          </div>
                          <span className="font-semibold text-xs sm:text-sm leading-snug line-clamp-2">
                            {item.label}
                          </span>
                          <p className="text-[10px] mt-1 line-clamp-1 font-mono text-gray-400">
                            {item.prompt}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-400">
                    <Search className="w-8 h-8 mx-auto mb-2 opacity-30" />
                    <p className="text-xs">未找到符合「{searchQuery}」的標籤</p>
                  </div>
                )}
              </div>
            ) : (
              /* Grouped SubCategories with Collapsible UI */
              <div className="space-y-3">
                {activeSubCategories.map((subCat) => {
                  const subItems = currentCategoryData.items.filter(i => i.subCategory === subCat.id);
                  const isCollapsed = !!collapsedSubCategories[subCat.id];

                  return (
                    <SubCategoryAccordion
                      key={subCat.id}
                      subCategory={subCat}
                      items={subItems}
                      selectedPromptIds={selectedPromptIds}
                      onTogglePrompt={togglePrompt}
                      isCollapsed={isCollapsed}
                      onToggleCollapse={() => toggleSubCategoryCollapse(subCat.id)}
                      onGoogleSearch={handleGoogleSearchStyle}
                      onInspectPrompt={(e, item) => {
                        e.stopPropagation();
                        setInspectingItem({
                          ...item,
                          categoryId: selectedCategory,
                          subCategory: subCat.id
                        });
                      }}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Bottom Output Bar: High-contrast Dark Footer */}
      <footer className="fixed bottom-0 left-0 right-0 h-20 sm:h-24 bg-[#014600] text-white flex items-center px-4 sm:px-8 z-40 border-t border-black/20 shadow-2xl">
        <div className="flex-1 pr-3 sm:pr-8 min-w-0">
          <div className="flex items-center gap-2 sm:gap-3 mb-0.5 sm:mb-1">
            <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest font-mono flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${activeEngine === 'midjourney' ? 'bg-indigo-400' : 'bg-emerald-400'} animate-pulse`}></span>
              <span className="truncate">{activeEngine === 'midjourney' ? `MIDJOURNEY (${selectedMJVersion.toUpperCase()})` : 'UNIVERSAL AI'}</span>
            </span>
            <span className="text-[9px] sm:text-[10px] text-gray-400 font-mono shrink-0">
              ({positiveCount} + / {negativeCount} -)
            </span>
          </div>

          <div 
            onClick={() => setIsMobileModalOpen(true)}
            className="text-xs sm:text-sm leading-snug line-clamp-1 sm:line-clamp-2 cursor-pointer hover:text-gray-200 transition"
          >
            {finalPrompt ? (
              <span className="font-mono text-white text-[13px] sm:text-[14px]">
                {finalPrompt}
              </span>
            ) : (
              <span className="text-gray-300 italic font-mono text-[12px] sm:text-[13px]">
                尚未選取提示詞，請點選上方標籤或輸入主體描述以即時合成 Prompt...
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* Mobile Full Preview Trigger Button */}
          <button
            type="button"
            onClick={() => setIsMobileModalOpen(true)}
            className="md:hidden p-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-white transition cursor-pointer"
            title="展開完整 Prompt 檢視"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* Copy Prompt Button */}
          <button 
            type="button"
            onClick={handleCopy}
            disabled={!finalPrompt}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 bg-white hover:bg-gray-100 disabled:opacity-40 text-black rounded-xl font-bold text-xs tracking-wider transition cursor-pointer shadow-sm"
          >
            <span className="hidden sm:inline">{copied ? 'COPIED TO CLIPBOARD' : 'COPY PROMPT'}</span>
            <span className="sm:hidden">{copied ? '已複製' : '複製'}</span>
            {copied ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>

          {/* Clear All Button */}
          <button 
            type="button"
            onClick={handleClearAll}
            title="清空全部"
            className="p-2.5 border border-white/20 hover:border-white/40 rounded-xl text-gray-300 hover:text-white transition cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </footer>

      {/* Mobile Prompt Preview Drawer Modal */}
      <MobilePromptModal
        isOpen={isMobileModalOpen}
        onClose={() => setIsMobileModalOpen(false)}
        finalPrompt={finalPrompt}
        activeEngine={activeEngine}
        selectedMJVersion={selectedMJVersion}
        positiveCount={positiveCount}
        negativeCount={negativeCount}
        onCopy={handleCopy}
        copied={copied}
        onClearAll={handleClearAll}
      />

      {/* 完整提示詞細節檢視彈窗 (Prompt Detail Inspector Modal) */}
      <PromptDetailModal
        item={inspectingItem}
        isOpen={!!inspectingItem}
        onClose={() => setInspectingItem(null)}
        isSelected={inspectingItem ? selectedPromptIds.has(inspectingItem.id) : false}
        onToggleSelect={(id) => togglePrompt(id)}
        onGoogleSearch={(item) => handleGoogleSearchStyle({ stopPropagation: () => {} } as React.MouseEvent, item)}
      />

      {/* 新手使用說明指南彈窗 (User Guide Modal) */}
      <UserGuideModal
        isOpen={isUserGuideOpen}
        onClose={() => setIsUserGuideOpen(false)}
      />
    </div>
  );
}
