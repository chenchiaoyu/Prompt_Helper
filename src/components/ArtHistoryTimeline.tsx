import React from 'react';
import { History, Sparkles, Clock, Calendar, ChevronRight, Shapes, Brush, Palette } from 'lucide-react';
import { artTimelinePeriods, TimelinePeriod } from '../data/promptDatabase';

interface ArtHistoryTimelineProps {
  periods?: TimelinePeriod[];
  selectedPeriodId: string;
  onSelectPeriod: (periodId: string) => void;
  totalItemsCount: number;
  periodItemCounts: Record<string, number>;
  title?: string;
  englishTitle?: string;
  subtitle?: string;
  badgeText?: string;
  themeColor?: 'amber' | 'violet' | 'emerald' | 'blue' | 'rose';
  iconType?: 'history' | 'shapes' | 'brush';
}

export const ArtHistoryTimeline: React.FC<ArtHistoryTimelineProps> = ({
  periods = artTimelinePeriods,
  selectedPeriodId,
  onSelectPeriod,
  totalItemsCount,
  periodItemCounts,
  title = '美術史流派時間軸導覽',
  englishTitle = 'Art History Timeline',
  subtitle = '依年代時序探索自拜占庭、文藝復興至現代立體派的藝術語彙演進',
  badgeText = '年代脈絡篩選',
  themeColor = 'amber',
  iconType = 'history'
}) => {
  const activePeriod = periods.find(p => p.id === selectedPeriodId) || periods[0];

  const colorStyles = {
    amber: {
      container: 'bg-gradient-to-br from-amber-50/80 via-orange-50/40 to-stone-50/70 border-amber-200/90 shadow-sm shadow-amber-500/5',
      headerBorder: 'border-amber-200/70',
      iconBg: 'bg-amber-100/90 text-amber-800 border-amber-300/80',
      badge: 'bg-amber-100/80 text-amber-900 border-amber-300/80',
      clock: 'text-amber-700',
      eraBox: 'bg-amber-100/60 border-amber-200/80',
      eraText: 'text-amber-800',
      connectingLine: 'bg-amber-200/90',
      buttonDefault: 'bg-white/90 hover:bg-amber-100/50 border-amber-200/80 text-stone-800 hover:text-amber-950 hover:border-amber-300',
      activeButton: 'bg-amber-500 text-white border-amber-600 shadow-md shadow-amber-500/25',
      activePill: 'bg-amber-600 text-white',
      defaultPill: 'bg-amber-100/70 text-amber-800 group-hover:bg-amber-200/70',
      activeCount: 'bg-white/25 text-white',
      defaultCount: 'bg-amber-100/50 text-amber-800',
      activeYear: 'text-amber-100',
      highlightText: 'text-amber-900',
      sparkleIcon: 'bg-amber-100 text-amber-800 border-amber-300/80',
      infoCard: 'bg-amber-100/40 border-amber-200/80 text-stone-800',
      infoDesc: 'text-amber-950/80',
      resetBtn: 'bg-white hover:bg-amber-50 text-amber-900 border-amber-200 hover:border-amber-300'
    },
    violet: {
      container: 'bg-gradient-to-br from-violet-50/80 via-purple-50/40 to-stone-50/70 border-violet-200/90 shadow-sm shadow-violet-500/5',
      headerBorder: 'border-violet-200/70',
      iconBg: 'bg-violet-100/90 text-violet-800 border-violet-300/80',
      badge: 'bg-violet-100/80 text-violet-900 border-violet-300/80',
      clock: 'text-violet-700',
      eraBox: 'bg-violet-100/60 border-violet-200/80',
      eraText: 'text-violet-800',
      connectingLine: 'bg-violet-200/90',
      buttonDefault: 'bg-white/90 hover:bg-violet-100/50 border-violet-200/80 text-stone-800 hover:text-violet-950 hover:border-violet-300',
      activeButton: 'bg-violet-600 text-white border-violet-700 shadow-md shadow-violet-500/25',
      activePill: 'bg-violet-700 text-white',
      defaultPill: 'bg-violet-100/70 text-violet-800 group-hover:bg-violet-200/70',
      activeCount: 'bg-white/25 text-white',
      defaultCount: 'bg-violet-100/50 text-violet-800',
      activeYear: 'text-violet-100',
      highlightText: 'text-violet-900',
      sparkleIcon: 'bg-violet-100 text-violet-800 border-violet-300/80',
      infoCard: 'bg-violet-100/40 border-violet-200/80 text-stone-800',
      infoDesc: 'text-violet-950/80',
      resetBtn: 'bg-white hover:bg-violet-50 text-violet-900 border-violet-200 hover:border-violet-300'
    },
    emerald: {
      container: 'bg-gradient-to-br from-emerald-50/80 via-teal-50/40 to-stone-50/70 border-emerald-200/90 shadow-sm shadow-emerald-500/5',
      headerBorder: 'border-emerald-200/70',
      iconBg: 'bg-emerald-100/90 text-emerald-800 border-emerald-300/80',
      badge: 'bg-emerald-100/80 text-emerald-900 border-emerald-300/80',
      clock: 'text-emerald-700',
      eraBox: 'bg-emerald-100/60 border-emerald-200/80',
      eraText: 'text-emerald-800',
      connectingLine: 'bg-emerald-200/90',
      buttonDefault: 'bg-white/90 hover:bg-emerald-100/50 border-emerald-200/80 text-stone-800 hover:text-emerald-950 hover:border-emerald-300',
      activeButton: 'bg-emerald-600 text-white border-emerald-700 shadow-md shadow-emerald-500/25',
      activePill: 'bg-emerald-700 text-white',
      defaultPill: 'bg-emerald-100/70 text-emerald-800 group-hover:bg-emerald-200/70',
      activeCount: 'bg-white/25 text-white',
      defaultCount: 'bg-emerald-100/50 text-emerald-800',
      activeYear: 'text-emerald-100',
      highlightText: 'text-emerald-900',
      sparkleIcon: 'bg-emerald-100 text-emerald-800 border-emerald-300/80',
      infoCard: 'bg-emerald-100/40 border-emerald-200/80 text-stone-800',
      infoDesc: 'text-emerald-950/80',
      resetBtn: 'bg-white hover:bg-emerald-50 text-emerald-900 border-emerald-200 hover:border-emerald-300'
    },
    blue: {
      container: 'bg-gradient-to-br from-blue-50/80 via-sky-50/40 to-stone-50/70 border-blue-200/90 shadow-sm shadow-blue-500/5',
      headerBorder: 'border-blue-200/70',
      iconBg: 'bg-blue-100/90 text-blue-800 border-blue-300/80',
      badge: 'bg-blue-100/80 text-blue-900 border-blue-300/80',
      clock: 'text-blue-700',
      eraBox: 'bg-blue-100/60 border-blue-200/80',
      eraText: 'text-blue-800',
      connectingLine: 'bg-blue-200/90',
      buttonDefault: 'bg-white/90 hover:bg-blue-100/50 border-blue-200/80 text-stone-800 hover:text-blue-950 hover:border-blue-300',
      activeButton: 'bg-blue-600 text-white border-blue-700 shadow-md shadow-blue-500/25',
      activePill: 'bg-blue-700 text-white',
      defaultPill: 'bg-blue-100/70 text-blue-800 group-hover:bg-blue-200/70',
      activeCount: 'bg-white/25 text-white',
      defaultCount: 'bg-blue-100/50 text-blue-800',
      activeYear: 'text-blue-100',
      highlightText: 'text-blue-900',
      sparkleIcon: 'bg-blue-100 text-blue-800 border-blue-300/80',
      infoCard: 'bg-blue-100/40 border-blue-200/80 text-stone-800',
      infoDesc: 'text-blue-950/80',
      resetBtn: 'bg-white hover:bg-blue-50 text-blue-900 border-blue-200 hover:border-blue-300'
    },
    rose: {
      container: 'bg-gradient-to-br from-rose-50/80 via-pink-50/40 to-stone-50/70 border-rose-200/90 shadow-sm shadow-rose-500/5',
      headerBorder: 'border-rose-200/70',
      iconBg: 'bg-rose-100/90 text-rose-800 border-rose-300/80',
      badge: 'bg-rose-100/80 text-rose-900 border-rose-300/80',
      clock: 'text-rose-700',
      eraBox: 'bg-rose-100/60 border-rose-200/80',
      eraText: 'text-rose-800',
      connectingLine: 'bg-rose-200/90',
      buttonDefault: 'bg-white/90 hover:bg-rose-100/50 border-rose-200/80 text-stone-800 hover:text-rose-950 hover:border-rose-300',
      activeButton: 'bg-rose-600 text-white border-rose-700 shadow-md shadow-rose-500/25',
      activePill: 'bg-rose-700 text-white',
      defaultPill: 'bg-rose-100/70 text-rose-800 group-hover:bg-rose-200/70',
      activeCount: 'bg-white/25 text-white',
      defaultCount: 'bg-rose-100/50 text-rose-800',
      activeYear: 'text-rose-100',
      highlightText: 'text-rose-900',
      sparkleIcon: 'bg-rose-100 text-rose-800 border-rose-300/80',
      infoCard: 'bg-rose-100/40 border-rose-200/80 text-stone-800',
      infoDesc: 'text-rose-950/80',
      resetBtn: 'bg-white hover:bg-rose-50 text-rose-900 border-rose-200 hover:border-rose-300'
    }
  }[themeColor];

  const renderIcon = () => {
    if (iconType === 'brush') return <Brush className="w-4 h-4" />;
    if (iconType === 'shapes') return <Shapes className="w-4 h-4" />;
    return <History className="w-4 h-4" />;
  };

  return (
    <div className={`${colorStyles.container} text-stone-900 rounded-2xl p-4 sm:p-5 border space-y-4`}>
      {/* Header with Title & Context */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b ${colorStyles.headerBorder}`}>
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 shadow-2xs ${colorStyles.iconBg}`}>
            {renderIcon()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-stone-900 tracking-tight">
                {title} <span className="text-xs font-normal text-stone-500">({englishTitle})</span>
              </h3>
              <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${colorStyles.badge}`}>
                {badgeText}
              </span>
            </div>
            <p className="text-xs text-stone-600 mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Current Active Era Pill */}
        <div className={`flex items-center gap-2 self-start sm:self-auto px-3 py-1.5 rounded-xl border text-xs shadow-2xs ${colorStyles.eraBox}`}>
          <Clock className={`w-3.5 h-3.5 shrink-0 ${colorStyles.clock}`} />
          <span className="text-stone-700 font-medium">當前時期：</span>
          <span className={`font-bold font-mono ${colorStyles.eraText}`}>{activePeriod.era}</span>
          <span className="text-stone-500 font-mono text-[11px]">({activePeriod.yearRange})</span>
        </div>
      </div>

      {/* Horizontal Scrollable Timeline Track */}
      <div className="relative overflow-x-auto scrollbar-thin scrollbar-thumb-stone-300 scrollbar-track-transparent pb-2 pt-1">
        {/* Timeline Connecting Line */}
        <div className={`absolute top-5 left-6 right-6 h-0.5 -z-0 hidden md:block ${colorStyles.connectingLine}`} />

        <div className="flex items-center gap-2 min-w-max relative z-10 px-1">
          {periods.map((period) => {
            const isSelected = selectedPeriodId === period.id;
            const count = period.id === 'all' 
              ? totalItemsCount 
              : (periodItemCounts[period.id] || 0);

            return (
              <button
                key={period.id}
                type="button"
                onClick={() => onSelectPeriod(period.id)}
                className={`group flex flex-col items-start p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer text-left ${
                  isSelected
                    ? `${colorStyles.activeButton} scale-[1.02]`
                    : `${colorStyles.buttonDefault}`
                }`}
              >
                <div className="flex items-center justify-between w-full gap-2 mb-1">
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isSelected
                      ? colorStyles.activePill
                      : colorStyles.defaultPill
                  }`}>
                    {period.era}
                  </span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full font-bold ${
                    isSelected
                      ? colorStyles.activeCount
                      : colorStyles.defaultCount
                  }`}>
                    {count}
                  </span>
                </div>

                <div className="font-bold text-xs leading-snug whitespace-nowrap">
                  {period.name}
                </div>
                <div className={`text-[10px] font-mono truncate max-w-[130px] mt-0.5 ${
                  isSelected ? colorStyles.activeYear : 'text-stone-500'
                }`}>
                  {period.yearRange}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Historical Era Detail Card */}
      <div className={`p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-2xs ${colorStyles.infoCard}`}>
        <div className="flex items-start gap-2.5">
          <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 shadow-2xs ${colorStyles.sparkleIcon}`}>
            <Sparkles className="w-3 h-3" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`font-bold ${colorStyles.highlightText}`}>{activePeriod.name}</span>
              <span className="text-stone-500 font-mono text-[11px]">[{activePeriod.yearRange}]</span>
            </div>
            <p className={`mt-1 leading-relaxed ${colorStyles.infoDesc}`}>
              {activePeriod.description}
            </p>
          </div>
        </div>

        {selectedPeriodId !== 'all' && (
          <button
            type="button"
            onClick={() => onSelectPeriod('all')}
            className={`self-end sm:self-center shrink-0 px-3 py-1.5 rounded-lg border shadow-xs transition flex items-center gap-1 font-medium cursor-pointer ${colorStyles.resetBtn}`}
          >
            <span>檢視全部流派</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};

