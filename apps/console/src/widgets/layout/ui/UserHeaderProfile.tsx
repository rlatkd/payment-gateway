'use client';

import { ExtendLoginButton } from '@/features/auth/ui/ExtendLoginButton';

interface UserHeaderProfileProps {
  userName: string;
  avatarUrl?: string;
}

export const UserHeaderProfile = ({ 
  userName, 
  avatarUrl = 'https://i.pravatar.cc/100' 
}: UserHeaderProfileProps) => {
  return (
    <div className="flex items-center gap-4 bg-white p-2.5 pl-5 rounded-full shadow-sm shadow-gray-100">
      <input 
        type="text" 
        placeholder="검색..." 
        className="bg-[#F4F7FE] rounded-full px-4 py-2 text-sm focus:outline-none w-40 hidden md:block" 
      />
      <ExtendLoginButton />
      <span className="text-sm font-bold text-[#2B3674] px-3 border-l">
        {userName}님
      </span>
      <div 
        className="w-10 h-10 bg-blue-100 rounded-full bg-cover border-2 border-white"
        style={{ backgroundImage: `url('${avatarUrl}')` }}
      />
    </div>
  );
};
