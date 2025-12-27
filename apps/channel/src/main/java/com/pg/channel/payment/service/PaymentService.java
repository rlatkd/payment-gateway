package com.pg.channel.payment.service;

import com.pg.channel.payment.dto.PaymentRequest;
import com.pg.channel.payment.entity.ChannelPayment;
import com.pg.channel.payment.repository.ChannelPaymentRepository;
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

        // TODO
        // return coreClient.callPayment(request);

        return true;
    }
}
