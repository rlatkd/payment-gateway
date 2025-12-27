'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, FileText, CreditCard, Box, BarChart2, Settings } from 'lucide-react';

export const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: '회원', icon: Users, path: '/members' },
    { name: '계약', icon: FileText, path: '/contracts' },
    { name: '청구', icon: CreditCard, path: '/billings' },
    { name: '상품', icon: Box, path: '/products' },
    { name: '통계', icon: BarChart2, path: '/statistics' },
  ];

  return (
    <aside className="w-[290px] bg-white h-screen fixed left-0 top-0 border-r border-gray-100 hidden lg:flex flex-col p-6 z-50 font-medium">
      <div className="flex items-center gap-2 mb-12 px-4 py-4">
        <Link href="/" className="text-3xl font-black text-[#2B3674] tracking-tight">
          PayHub
        </Link>
      </div>
      <nav className="flex flex-col gap-3 flex-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl cursor-pointer transition-all duration-200 ${
                isActive 
                  ? 'bg-[#4318FF] text-white font-bold shadow-lg shadow-blue-500/30' 
                  : 'text-[#A3AED0] hover:bg-gray-100 hover:text-[#2B3674]'
              }`}
            >
              <item.icon size={22} />
              <span className="text-base">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <Link href="/settings" className={`mt-auto mb-6 px-5 py-4 flex items-center gap-4 cursor-pointer font-medium transition-all ${
        pathname === '/settings' ? 'text-[#4318FF] font-bold' : 'text-[#A3AED0] hover:text-[#2B3674]'
      }`}>
        <Settings size={22} />
        <span>설정</span>
      </Link>
    </aside>
  );
};
