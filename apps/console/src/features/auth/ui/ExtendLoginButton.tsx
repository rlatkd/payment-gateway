'use client';

import { Clock } from 'lucide-react';
import { useSessionStore } from '@/shared/store/useSessionStore';

export const ExtendLoginButton = () => {
  const { timeLeft, resetVisualTimer } = useSessionStore();

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <button 
      onClick={resetVisualTimer}
      className="flex cursor-pointer items-center gap-1.5 bg-[#4318FF] hover:bg-[#3311CC] text-white text-[12px] font-bold py-2 px-4 rounded-full transition-all active:scale-95 shadow-md shadow-indigo-200"
    >
      <Clock size={14} />
      <span className="min-w-[40px] font-mono">{formatTime(timeLeft)}</span>
      <span className="ml-1 border-l pl-1.5 border-white/30 text-[11px]">연장</span>
    </button>
  );
};
