package com.pg.channel.payment.entity;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "channel_payment")
public class ChannelPayment {
    @Id
    private String paymentId;

    @Column(nullable = false)
    private String billingId;

    @Column(unique = true, nullable = false)
    private String invoiceId;

    @Column(nullable = false)
    private String transactionId;

    @Column(nullable = false)
    private Long amount;

    @Column(nullable = false)
    private String status;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime executedAt;

    @Builder
    public ChannelPayment(String paymentId, String billingId, String invoiceId,
                          String transactionId, Long amount, String status) {
        this.paymentId = paymentId;
        this.billingId = billingId;
        this.invoiceId = invoiceId;
        this.transactionId = transactionId;
        this.amount = amount;
        this.status = status;
    }
}
