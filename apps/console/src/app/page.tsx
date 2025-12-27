import { StatCard } from '@/shared/ui/StatCard';
import { BillingWidget } from '@/widgets/dashboard/ui/BillingWidget';
import { Users, FileText, DollarSign, TrendingUp } from 'lucide-react';

export default function Page() {
  return (
    <div className="w-full animate-in fade-in duration-500">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col gap-2 mb-10">
          <h1 className="text-[34px] font-bold text-[#2B3674] tracking-tight leading-tight">
            12월 청구 현황
          </h1>
          <p className="text-[#A3AED0] text-sm font-medium">실시간 결제 및 청구 지표를 확인하세요.</p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          <StatCard 
            label="회원 현황" value="251명" subText="신규 157 | 활성 251"
            icon={Users} iconColor="text-[#4318FF]" iconBg="bg-[#F4F7FE]"
          />
          <StatCard 
            label="계약 현황" value="204건" subText="신규 14 | 완료예정 49"
            icon={FileText} iconColor="text-[#4318FF]" iconBg="bg-[#F4F7FE]"
          />
          <StatCard 
            label="청구 현황" value="₩3.7억" subText="완납 3.2억 | 미납 251만"
            icon={DollarSign} iconColor="text-[#05CD99]" iconBg="bg-[#E6F9F3]"
          />
          <StatCard 
            label="전월 대비 매출" value="-16.7%" subText="회원 +188.9% 증가"
            icon={TrendingUp} iconColor="text-[#EE5D50]" iconBg="bg-[#FEEFEF]"
          />
        </section>
        <section className="grid grid-cols-1 xl:grid-cols-5 gap-8 h-auto xl:h-[600px]">
          <div className="xl:col-span-3 bg-white rounded-[30px] p-8 shadow-sm shadow-indigo-100/30 flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-[#2B3674]">2025년 12월</h3>
              <div className="flex gap-3">
                 <button className="bg-[#F4F7FE] text-[#4318FF] px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-100 transition-all active:scale-95">이전</button>
                 <button className="bg-[#F4F7FE] text-[#4318FF] px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-100 transition-all active:scale-95">다음</button>
              </div>
            </div>
            <div className="flex-1 border-2 border-dashed border-gray-100 rounded-3xl bg-[#F8F9FA] flex items-center justify-center text-[#A3AED0] font-medium text-lg">
                캘린더 컴포넌트 준비 중
            </div>
          </div>
          <div className="xl:col-span-2">
            <BillingWidget />
          </div>
        </section>
      </div>
    </div>
  );
}
