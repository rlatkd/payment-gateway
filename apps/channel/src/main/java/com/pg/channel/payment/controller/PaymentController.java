package com.pg.channel.payment.controller;

import com.pg.channel.payment.dto.PaymentRequest;
import com.pg.channel.payment.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/payments")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PaymentController {
    private final PaymentService paymentService;

    /**
     * 결제 요청 생성 API
     * @param request PaymentRequest (record)
     * @return 성공 여부 및 결과 메시지
     */
    @PostMapping
    public ResponseEntity<?> createPayment(@Valid @RequestBody PaymentRequest request) {

        // 서비스 호출
        boolean isSuccess = paymentService.processPayment(request);

        if (isSuccess) {
            return ResponseEntity.ok(Map.of(
                    "success", true,
                    "message", "결제가 완료되었습니다.",
                    "paymentId", request.paymentId()
            ));
        } else {
            return ResponseEntity.internalServerError().body(Map.of(
                    "success", false,
                    "message", "결제 처리 중 오류가 발생했습니다."
            ));
        }
    }
}
