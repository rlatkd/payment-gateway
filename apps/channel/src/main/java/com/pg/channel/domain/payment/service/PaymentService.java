package com.pg.channel.domain.payment.service;

import com.pg.channel.domain.payment.dto.PaymentRequest;
import com.pg.channel.domain.payment.entity.ChannelPayment;
import com.pg.channel.domain.payment.repository.ChannelPaymentRepository;
import com.pg.channel.external.PaymentClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PaymentService {

    private final ChannelPaymentRepository paymentRepository;

    @Transactional
    public boolean processPayment(PaymentRequest request) {
        ChannelPayment payment = ChannelPayment.builder()
                .paymentId(request.paymentId())
                .billingId(request.billingId())
                .invoiceId(request.invoiceId())
                .transactionId(UUID.randomUUID().toString())
                .amount(request.amount())
                .status("EXECUTING")
                .build();

        paymentRepository.save(payment);

        return true;
//        return PaymentClient.callPayment(request);
    }
}
