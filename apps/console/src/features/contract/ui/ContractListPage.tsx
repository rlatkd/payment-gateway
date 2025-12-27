'use client';

import { Pagination } from '@/shared/ui/Pagination';

export const ContractListPage = () => {
  return (
    <div className="p-8 pt-24 ml-[290px] min-h-screen bg-[#F4F7FE]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#2B3674]">계약 정보</h1>
          <div className="relative">
            <input placeholder="계약 ID 또는 상품명 검색" className="pl-12 pr-6 py-3 bg-white rounded-2xl w-[350px] shadow-sm outline-none" />
          </div>
        </div>

        <div className="bg-white rounded-[30px] p-6 shadow-sm">
          <table className="w-full text-left">
            <thead className="text-[#A3AED0] text-sm border-b border-gray-50">
              <tr>
                <th className="px-6 py-4">Contract ID</th>
                <th className="px-6 py-4">상품 코드</th>
                <th className="px-6 py-4">월 결제액</th>
                <th className="px-6 py-4">계약 상태</th>
                <th className="px-6 py-4">생성일</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-50">
                <td className="px-6 py-5 font-bold text-[#2B3674]">CON-9921</td>
                <td className="px-6 py-5 font-medium text-[#4318FF]">PROD_BASIC</td>
                <td className="px-6 py-5 font-bold text-[#2B3674]">₩49,900</td>
                <td className="px-6 py-5">
                  <span className="px-3 py-1 bg-blue-100 text-[#4318FF] rounded-full text-xs font-bold">정상이용</span>
                </td>
                <td className="px-6 py-5 text-[#A3AED0]">2024.03.27</td>
              </tr>
            </tbody>
          </table>
          <Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />
        </div>
      </div>
    </div>
  );
};
