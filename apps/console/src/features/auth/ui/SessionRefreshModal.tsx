'use client';

import { Clock } from 'lucide-react';

interface SessionRefreshModalProps {
  isOpen: boolean;
  onRefresh: () => void;
  onLogout: () => void;
}

export const SessionRefreshModal = ({ isOpen, onRefresh, onLogout }: SessionRefreshModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="bg-white p-8 rounded-2xl max-w-sm w-full text-center shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-blue-50 text-[#4318FF] rounded-full flex items-center justify-center mx-auto mb-4">
          <Clock size={32} />
        </div>
        <h2 className="text-xl font-bold text-[#2B3674] mb-3">알림</h2>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          장시간 이용 중이시네요! <br/>
          계속 이용하시겠습니까?
        </p>
        <div className="flex gap-3">
          <button 
            onClick={onRefresh}
            className="cursor-pointer flex-1 py-3 rounded-xl bg-[#4318FF] font-bold text-white hover:bg-[#3311CC] transition-colors shadow-lg shadow-indigo-200"
          >
            계속 이용
          </button>
          <button 
            onClick={onLogout}
            className="cursor-pointer flex-1 py-3 rounded-xl bg-gray-100 font-bold text-gray-600 hover:bg-gray-200 transition-colors"
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};
