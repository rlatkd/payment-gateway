package com.pg.channel.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.util.ContentCachingRequestWrapper;
import org.springframework.web.util.ContentCachingResponseWrapper;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.UUID;

@Slf4j
@Component
public class APILoggingFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        ContentCachingRequestWrapper contentCachingRequestWrapper = new ContentCachingRequestWrapper(request);
        ContentCachingResponseWrapper contentCachingResponseWrapper = new ContentCachingResponseWrapper(response);

        String transactionId = UUID.randomUUID().toString().substring(0, 8);

        long startTime = System.currentTimeMillis();

        filterChain.doFilter(contentCachingRequestWrapper, contentCachingResponseWrapper);

        long duration = System.currentTimeMillis() - startTime;

        String requestBody = new String(contentCachingRequestWrapper.getContentAsByteArray(), StandardCharsets.UTF_8);
        String responseBody = new String(contentCachingResponseWrapper.getContentAsByteArray(), StandardCharsets.UTF_8);

        log.info("[REQ] [{}] {} {} | Body: {}", transactionId, request.getMethod(), request.getRequestURI(), requestBody);
        log.info("[RES] [{}] Status: {} ({}ms) | Body: {}", transactionId, response.getStatus(), duration, responseBody);

        contentCachingResponseWrapper.copyBodyToResponse();
    }
}
