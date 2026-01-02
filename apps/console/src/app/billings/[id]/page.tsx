'use client';

import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Wallet, Receipt, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { requestPayment } from '@/features/payments/api/payment';

export default function BillingDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = async () => {
    if (isPaid) return;
    if (!confirm('정말로 결제를 진행하시겠습니까?')) return;
    
    setLoading(true);
    try {
      const result = await requestPayment({
        paymentId: `PAY-${Date.now()}`,
        billingId: id as string,
        // invoiceId: `INV-${id}`,
        invoiceId: 'INV-002',
        amount: 49000,
      });

      if (result.success) {
        alert(result.message || '결제가 성공적으로 완료되었습니다!');
        setIsPaid(true);
      } else {
        alert(result.message || '결제 처리에 실패했습니다.');
      }
    } catch (error: any) {
      console.error('Error:', error);
      alert(error.message || '통신 에러가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full animate-in fade-in duration-500">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-[34px] font-bold text-[#2B3674] tracking-tight">청구 상세</h1>
            <p className="text-[#A3AED0] font-medium mt-1">청구 번호: {id}</p>
          </div>
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[#A3AED0] hover:text-[#4318FF] font-bold transition-colors cursor-pointer"
          >
            <ArrowLeft size={20} /> 뒤로가기
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-[30px] p-8 shadow-sm border border-gray-50">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-[#2B3674] flex items-center gap-2">
                  <Receipt size={20} className="text-[#4318FF]" /> 상품 정보
                </h3>
                {isPaid && (
                  <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <CheckCircle size={14} /> 결제 완료
                  </span>
                )}
              </div>
              <div className="flex justify-between py-4 border-b border-gray-50">
                <span className="text-[#A3AED0]">상품명</span>
                <span className="text-[#2B3674] font-bold">프리미엄 구독 플랜</span>
              </div>
              <div className="flex justify-between py-4 border-b border-gray-50">
                <span className="text-[#A3AED0]">서비스 기간</span>
                <span className="text-[#2B3674] font-medium">2024.12.01 ~ 2024.12.31</span>
              </div>
              <div className="flex justify-between py-4 text-xl mt-4">
                <span className="text-[#2B3674] font-bold">최종 결제 금액</span>
                <span className={`${isPaid ? 'text-[#A3AED0] line-through' : 'text-[#4318FF]'} font-black`}>₩49,000</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className={`${isPaid ? 'bg-gray-400' : 'bg-[#4318FF]'} rounded-[30px] p-8 shadow-xl text-white transition-colors duration-500`}>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Wallet size={20} /> 결제 수단
              </h3>
              <div className="bg-white/10 rounded-2xl p-4 mb-8">
                <p className="text-sm opacity-80">등록된 카드</p>
                <p className="text-lg font-bold mt-1">신한카드 (****-1234)</p>
              </div>
              <button 
                onClick={handlePayment}
                disabled={loading || isPaid}
                className={`w-full py-4 rounded-2xl font-black text-lg transition-all active:scale-95 shadow-lg 
                  ${isPaid 
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                    : loading 
                      ? 'bg-white/80 text-[#4318FF] cursor-wait' 
                      : 'bg-white text-[#4318FF] hover:bg-gray-50 cursor-pointer'
                  }`}
              >
                {loading ? '처리 중...' : isPaid ? '결제 완료' : '결제하기'}
              </button>
              <p className="text-center text-xs mt-4 opacity-60">
                {isPaid ? '이 청구건은 결제가 완료되었습니다.' : '클릭 시 즉시 결제가 진행됩니다.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
