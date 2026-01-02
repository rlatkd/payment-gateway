package com.pg.channel.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;
import java.net.URI;
import java.time.LocalDateTime;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ProblemDetails> handleGeneralException(Exception e, HttpServletRequest request) {
        log.error("Server Error: ", e);

        ProblemDetails problem = ProblemDetails.forStatusAndDetail(
                HttpStatus.INTERNAL_SERVER_ERROR,
                "서버 내부 오류가 발생했습니다."
        );

        problem.setInstance(URI.create(request.getRequestURI()));
        problem.setProperty("timestamp", LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(problem);
    }
}
