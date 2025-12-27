package com.pg.channel.payment.repository;

import com.pg.channel.payment.entity.ChannelPayment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChannelPaymentRepository extends JpaRepository<ChannelPayment, String> {
}
