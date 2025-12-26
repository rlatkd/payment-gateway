'use client';

import { useEffect } from 'react';
import { ExtendLoginButton } from '@/features/auth/ui/ExtendLoginButton';
import { SessionRefreshModal } from '@/features/auth/ui/SessionRefreshModal';
import { useSessionStore } from '@/shared/store/useSessionStore';

interface UserHeaderProfileProps {
  userName: string;
  avatarUrl?: string;
}

export const UserHeaderProfile = ({ 
  userName, 
  avatarUrl = 'https://i.pravatar.cc/100' 
}: UserHeaderProfileProps) => {
  const { 
    showRefreshModal, 
    handleActualRefresh, 
    tick, 
    checkSessionTime 
  } = useSessionStore();

  useEffect(() => {
    const timer = setInterval(() => {
      tick();
      checkSessionTime();
    }, 1000);

    return () => clearInterval(timer); 
  }, [tick, checkSessionTime]);

  const handleLogout = () => {
    window.location.href = 'http://localhost:8080/logout';
  };

  return (
    <div className="flex items-center gap-4 bg-white p-2.5 pl-5 rounded-full shadow-sm">
      <ExtendLoginButton />
      <span className="text-sm font-bold text-[#2B3674] px-3 border-l">
        {userName}님
      </span>
      <div 
        className="w-10 h-10 bg-blue-100 rounded-full bg-cover border-2 border-white"
        style={{ backgroundImage: `url('${avatarUrl}')` }}
      />
      <SessionRefreshModal 
        isOpen={showRefreshModal} 
        onRefresh={handleActualRefresh}
        onLogout={handleLogout}
      />
    </div>
  );
};
