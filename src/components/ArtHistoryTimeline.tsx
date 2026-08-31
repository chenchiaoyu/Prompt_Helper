import React from 'react';
import { History, Sparkles, Clock, Calendar, ChevronRight } from 'lucide-react';
import { artTimelinePeriods, TimelinePeriod } from '../data/promptDatabase';

interface ArtHistoryTimelineProps {
  selectedPeriodId: string;
  onSelectPeriod: (periodId: string) => void;
  totalItemsCount: number;
  periodItemCounts: Record<string, number>;
}

export const ArtHistoryTimeline: React.FC<ArtHistoryTimelineProps> = ({
  selectedPeriodId,
  onSelectPeriod,
  totalItemsCount,
  periodItemCounts
}) => {
  const activePeriod = artTimelinePeriods.find(p => p.id === selectedPeriodId) || artTimelinePeriods[0];

  return (
    <div className="bg-gradient-to-br from-stone-900 via-zinc-900 to-stone-950 text-white rounded-2xl p-4 sm:p-5 border border-stone-800 shadow-xl space-y-4">
      {/* Header with Title & Context */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-800/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
            <History className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-stone-100 tracking-tight">
                美術史流派時間軸導覽 (Art History Timeline)
              </h3>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                年代脈絡篩選
              </span>
            </div>
            <p className="text-xs text-stone-400 mt-0.5">
              依年代時序探索自拜占庭、文藝復興至現代立體派的藝術語彙演進
            </p>
          </div>
        </div>

        {/* Current Active Era Pill */}
        <div className="flex items-center gap-2 self-start sm:self-auto bg-stone-800/90 px-3 py-1.5 rounded-xl border border-stone-700/80 text-xs">
          <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="text-stone-300 font-medium">當前時期：</span>
          <span className="text-amber-300 font-bold font-mono">{activePeriod.era}</span>
          <span className="text-stone-400 font-mono text-[11px]">({activePeriod.yearRange})</span>
        </div>
      </div>

      {/* Horizontal Scrollable Timeline Track */}
      <div className="relative overflow-x-auto scrollbar-thin scrollbar-thumb-stone-700 scrollbar-track-stone-900 pb-2 pt-1">
        {/* Timeline Connecting Line */}
        <div className="absolute top-5 left-6 right-6 h-0.5 bg-stone-800 -z-0 hidden md:block" />

        <div className="flex items-center gap-2 min-w-max relative z-10 px-1">
          {artTimelinePeriods.map((period, idx) => {
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
                    ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-lg shadow-amber-500/20 scale-[1.02]'
                    : 'bg-stone-800/80 hover:bg-stone-800 border-stone-700/70 text-stone-300 hover:text-white hover:border-stone-600'
                }`}
              >
                <div className="flex items-center justify-between w-full gap-2 mb-1">
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isSelected
                      ? 'bg-stone-950 text-amber-300'
                      : 'bg-stone-900 text-stone-400 group-hover:text-stone-300'
                  }`}>
                    {period.era}
                  </span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full font-bold ${
                    isSelected
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-900/80 text-stone-400'
                  }`}>
                    {count}
                  </span>
                </div>

                <div className="font-bold text-xs leading-snug whitespace-nowrap">
                  {period.name}
                </div>
                <div className={`text-[10px] font-mono truncate max-w-[130px] mt-0.5 ${
                  isSelected ? 'text-stone-900 font-medium' : 'text-stone-400'
                }`}>
                  {period.yearRange}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Historical Era Detail Card */}
      <div className="p-3.5 bg-stone-950/80 rounded-xl border border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles className="w-3 h-3" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-amber-300">{activePeriod.name}</span>
              <span className="text-stone-400 font-mono text-[11px]">[{activePeriod.yearRange}]</span>
            </div>
            <p className="text-stone-300 mt-1 leading-relaxed">
              {activePeriod.description}
            </p>
          </div>
        </div>

        {selectedPeriodId !== 'all' && (
          <button
            type="button"
            onClick={() => onSelectPeriod('all')}
            className="self-end sm:self-center shrink-0 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white border border-stone-700 transition flex items-center gap-1 font-medium cursor-pointer"
          >
            <span>檢視全部畫派</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
