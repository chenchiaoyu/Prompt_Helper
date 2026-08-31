import React from 'react';
import { Package, Camera, Compass, Palette, Shapes, Brush, ShieldAlert } from 'lucide-react';
import { CategoryKey, promptDatabase } from '../data/promptDatabase';

const iconMap: Record<string, React.ElementType> = {
  Package,
  Camera,
  Compass,
  Palette,
  Shapes,
  Brush,
  ShieldAlert,
};

interface MobileCategoryNavProps {
  selectedCategory: CategoryKey;
  onSelectCategory: (key: CategoryKey) => void;
  selectedPromptIds: Set<string>;
}

export const MobileCategoryNav: React.FC<MobileCategoryNavProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedPromptIds,
}) => {
  return (
    <div className="md:hidden bg-white border-b border-[#E4E4E7] px-3 py-2 sticky top-14 z-20 overflow-x-auto scrollbar-none flex items-center gap-1.5 shadow-2xs">
      {(Object.keys(promptDatabase) as CategoryKey[]).map((key) => {
        const cat = promptDatabase[key];
        const isActive = selectedCategory === key;
        const IconComponent = iconMap[cat.icon] || Package;
        const activeCount = cat.items.filter(item => selectedPromptIds.has(item.id)).length;

        return (
          <button
            key={key}
            type="button"
            onClick={() => onSelectCategory(key)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all shrink-0 cursor-pointer ${
              isActive
                ? 'bg-[#18181B] text-white shadow-xs'
                : 'bg-[#F4F4F5] text-gray-600 hover:bg-gray-200'
            }`}
          >
            <IconComponent className="w-3.5 h-3.5" />
            <span>{cat.name}</span>
            {activeCount > 0 && (
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                isActive ? 'bg-white text-black' : 'bg-black text-white'
              }`}>
                {activeCount}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
