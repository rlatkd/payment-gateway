'use client';

import { Pagination } from '@/shared/ui/Pagination';

export const BillingListPage = () => {
  return (
    <div className="p-8 pt-24 ml-[290px] min-h-screen bg-[#F4F7FE]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#2B3674]">청구 및 수납</h1>
          <div className="relative">
             {/* 검색창 */}
          </div>
        </div>

        <div className="bg-white rounded-[30px] p-6 shadow-sm">
          <table className="w-full text-left">
            <thead className="text-[#A3AED0] text-sm border-b border-gray-50">
              <tr>
                <th className="px-6 py-4">Billing ID</th>
                <th className="px-6 py-4">PG Key</th>
                <th className="px-6 py-4">상태</th>
                <th className="px-6 py-4">생성일시</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              <tr>
                <td className="px-6 py-5 text-[#2B3674]">BILL-KEY-12345</td>
                <td className="px-6 py-5 text-[#A3AED0] font-mono">TOSSPAY_7721...</td>
                <td className="px-6 py-5">
                  <span className="px-3 py-1 bg-[#4318FF] text-white rounded-full text-[11px]">청구완료</span>
                </td>
                <td className="px-6 py-5 text-[#A3AED0]">2025.12.27 16:30</td>
              </tr>
            </tbody>
          </table>
          <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
        </div>
      </div>
    </div>
  );
};
