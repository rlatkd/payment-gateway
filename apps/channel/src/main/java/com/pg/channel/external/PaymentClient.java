package com.pg.channel.external;

import com.pg.channel.config.FeignConfig;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@FeignClient(
        name = "payment-client",
        url = "${external.core.url",
        configuration = FeignConfig.class
)
@RequestMapping("/api/v1/payments")
public interface PaymentClient {
//    @PostMapping
//    S
}
