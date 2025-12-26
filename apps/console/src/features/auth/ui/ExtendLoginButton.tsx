'use client';

import { Clock } from 'lucide-react';
import { refreshSession } from '../api/refresh';

export const ExtendLoginButton = () => {
  const handleExtend = async () => {
    const result = await refreshSession();
    
    if (result.success) {
      alert('로그인 시간이 1시간 연장되었습니다.');
    } else {
      alert('세션이 만료되었거나 연장에 실패했습니다. 다시 로그인해주세요.');
      window.location.href = 'http://localhost:8080/login';
    }
  };

  return (
    <button 
      onClick={handleExtend}
      className="flex items-center gap-1.5 bg-[#4318FF] hover:bg-[#3311CC] text-white text-[12px] font-bold py-2 px-4 rounded-full transition-all active:scale-95 shadow-md shadow-indigo-200"
    >
      <Clock size={14} />
      로그인 연장
    </button>
  );
};
