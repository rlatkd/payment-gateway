'use client';

import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Pagination } from '@/shared/ui/Pagination';

export const MemberListPage = () => {
  const router = useRouter();

  const members = [
    { id: 'MEM-2024-001', name: '홍길동 1', customerId: 'CUST-8821', date: '2024.03.21', status: '활성' },
    { id: 'MEM-2024-002', name: '홍길동 2', customerId: 'CUST-8822', date: '2024.03.22', status: '활성' },
    { id: 'MEM-2024-003', name: '홍길동 3', customerId: 'CUST-8823', date: '2024.03.23', status: '활성' },
    { id: 'MEM-2024-004', name: '홍길동 4', customerId: 'CUST-8824', date: '2024.03.24', status: '활성' },
    { id: 'MEM-2024-005', name: '홍길동 5', customerId: 'CUST-8825', date: '2024.03.25', status: '활성' },
  ];

  return (
    <div className="w-full animate-in fade-in duration-500">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-[34px] font-bold text-[#2B3674] tracking-tight">
              회원 관리
            </h1>
            <p className="text-[#A3AED0] text-sm font-medium">
              전체 회원 목록을 조회하고 상세 정보를 관리합니다.
            </p>
          </div>
          
          <div className="relative mb-1">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={20} />
            <input 
              type="text" 
              placeholder="회원명 또는 ID 검색" 
              className="pl-14 pr-8 py-4 bg-white rounded-2xl w-[400px] outline-none shadow-sm shadow-indigo-100/50 focus:ring-2 ring-[#4318FF]/20 transition-all text-[#2B3674] font-medium placeholder:text-[#A3AED0]"
            />
          </div>
        </div>
        <div className="bg-white rounded-[30px] p-10 shadow-sm shadow-indigo-100/30 overflow-hidden border border-gray-50/50">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[#A3AED0] text-sm font-bold uppercase tracking-wider border-b border-gray-50">
                  <th className="px-4 py-5 pb-6">Member ID</th>
                  <th className="px-4 py-5 pb-6">이름</th>
                  <th className="px-4 py-5 pb-6">Customer ID</th>
                  <th className="px-4 py-5 pb-6">등록일</th>
                  <th className="px-4 py-5 pb-6 text-center">상태</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {members.map((member) => (
                  <tr 
                    key={member.id} 
                    onClick={() => router.push(`/members/${member.id}`)}
                    className="hover:bg-[#F4F7FE]/50 transition-colors group cursor-pointer"
                  >
                    <td className="px-4 py-6 text-[#2B3674] font-bold">
                      {member.id}
                    </td>
                    <td className="px-4 py-6 text-[#2B3674] font-bold">
                      {member.name}
                    </td>
                    <td className="px-4 py-6 text-[#A3AED0] font-medium text-sm">
                      {member.customerId}
                    </td>
                    <td className="px-4 py-6 text-[#A3AED0] font-medium text-sm">
                      {member.date}
                    </td>
                    <td className="px-4 py-6 text-center">
                      <span className="inline-block px-4 py-1.5 bg-[#E6F9F3] text-[#05CD99] rounded-full text-xs font-bold shadow-sm shadow-green-100">
                        {member.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 border-t border-gray-50 pt-8">
            <Pagination 
              currentPage={1} 
              totalPages={5} 
              onPageChange={(page) => console.log(`${page}페이지로 이동`)} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};
