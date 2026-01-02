package com.pg.channel.domain.payment.dto;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public record PaymentRequest(
        @NotBlank(message = "결제 ID는 필수입니다.")
        String paymentId,

        @NotBlank(message = "청구 ID는 필수입니다.")
        String billingId,

        @NotBlank(message = "청구서 ID는 필수입니다.")
        String invoiceId,

        @NotNull(message = "결제 금액은 필수입니다.")
        @Min(value = 1, message = "금액은 1원 이상이어야 합니다.")
        Long amount
) {}
