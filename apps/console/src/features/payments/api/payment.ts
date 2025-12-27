export interface PaymentParams {
  paymentId: string;
  billingId: string;
  invoiceId: string;
  amount: number;
}

export const requestPayment = async (params: PaymentParams) => {
  const response = await fetch(`http://localhost:8081/api/v1/payments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error('결제 요청 중 네트워크 오류가 발생했습니다.');
  }

  return await response.json();
};
