'use client';

import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, User, Mail, Calendar, CreditCard } from 'lucide-react';

export default function MemberDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="flex flex-col gap-2 mb-10">
          <h1 className="text-[34px] font-bold text-[#2B3674] tracking-tight">
            회원 상세
          </h1>
        </div>
        <button 
          onClick={() => router.back()}
          className="cursor-pointer flex items-center gap-2 text-[#A3AED0] hover:text-[#4318FF] transition-colors mb-6 font-bold"
        >
          <ArrowLeft size={20} />
          <span>목록으로 돌아가기</span>
        </button>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="bg-white rounded-[30px] p-8 shadow-sm shadow-indigo-100/30 border border-gray-50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#F4F7FE] rounded-2xl flex items-center justify-center text-[#4318FF]">
                <User size={32} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#2B3674]">홍길동 1</h2>
                <span className="text-[#05CD99] text-sm font-bold bg-[#E6F9F3] px-3 py-1 rounded-full">정상 회원</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-[#A3AED0]" size={20} />
                <div>
                  <p className="text-xs text-[#A3AED0] font-bold">이메일 주소</p>
                  <p className="text-[#2B3674] font-medium">gildong@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Calendar className="text-[#A3AED0]" size={20} />
                <div>
                  <p className="text-xs text-[#A3AED0] font-bold">최초 등록일</p>
                  <p className="text-[#2B3674] font-medium">2024.03.21</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <CreditCard className="text-[#A3AED0]" size={20} />
                <div>
                  <p className="text-xs text-[#A3AED0] font-bold">Customer ID (PG)</p>
                  <p className="text-[#2B3674] font-medium">CUST-8821</p>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-10 py-4 bg-[#4318FF] text-white rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:bg-[#3311CC] transition-all active:scale-95">
              회원 정보 수정
            </button>
          </div>
          <div className="xl:col-span-2 space-y-8">
            <div className="bg-white rounded-[30px] p-8 shadow-sm shadow-indigo-100/30 border border-gray-50">
              <h3 className="text-lg font-bold text-[#2B3674] mb-6">계약 목록</h3>
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[#A3AED0] text-xs font-bold uppercase border-b border-gray-50">
                    <th className="py-4">계약 번호</th>
                    <th className="py-4">상품명</th>
                    <th className="py-4">월 결제액</th>
                    <th className="py-4">상태</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-50/50">
                    <td className="py-5 font-bold text-[#2B3674]">001</td>
                    <td className="py-5 text-[#A3AED0]">프리미엄 구독 플랜</td>
                    <td className="py-5 font-bold text-[#2B3674]">₩49,000</td>
                    <td className="py-5"><span className="text-[#4318FF] font-bold">이용 중</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-white rounded-[30px] p-8 shadow-sm shadow-indigo-100/30 border border-gray-50">
              <h3 className="text-lg font-bold text-[#2B3674] mb-6">청구 목록</h3>
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[#A3AED0] text-xs font-bold uppercase border-b border-gray-50">
                    <th className="py-4">청구 번호</th>
                    <th className="py-4">상품명</th>
                    <th className="py-4">월 결제액</th>
                    <th className="py-4">상태</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr 
                    className="border-b border-gray-50/50 hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => router.push(`/billings/001`)}
                  >
                    <td className="py-5 font-bold text-[#2B3674]">001</td>
                    <td className="py-5 text-[#A3AED0]">프리미엄 구독 플랜</td>
                    <td className="py-5 font-bold text-[#2B3674]">₩49,000</td>
                    <td className="py-5"><span className="text-[#4318FF] font-bold">결제 중</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-white rounded-[30px] p-8 shadow-sm shadow-indigo-100/30 border border-gray-50">
              <h3 className="text-lg font-bold text-[#2B3674] mb-6">최근 결제 내역</h3>
              <div className="h-40 flex items-center justify-center text-[#A3AED0] border-2 border-dashed border-gray-50 rounded-2xl">
                최근 3개월 결제 데이터가 존재하지 않습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
