package com.pg.channel.domain.payment.repository;

import com.pg.channel.domain.payment.entity.ChannelPayment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChannelPaymentRepository extends JpaRepository<ChannelPayment, String> {
}
