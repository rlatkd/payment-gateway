package com.pg.channel.config;

import com.pg.channel.exception.ExternalException;
import feign.Response;
import feign.Util;
import feign.codec.ErrorDecoder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

@Configuration
@Slf4j
public class FeignConfig {
    @Bean
    public ErrorDecoder errorDecoder() {
        return (method, response) -> {
            String errorDetails = "";

            try {
                if (response.body() != null) {
                    errorDetails = Util.toString(response.body().asReader(StandardCharsets.UTF_8));
                }
            } catch (IOException e) {
                log.error("Feign Response Body Read Error", e);
            }

            String requestUrl = response.request().url();
            int status = response.status();

            log.error("Feign Error | Status: {} | Url: {} | Msg: {}", status, requestUrl, errorDetails);

            return new ExternalException(status, "External Server Error: " + errorDetails, requestUrl);
        };
    }
}
