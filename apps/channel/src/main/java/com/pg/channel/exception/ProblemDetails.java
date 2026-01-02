package com.pg.channel.exception;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

import java.net.URI;
import java.util.LinkedHashMap;
import java.util.Map;

@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProblemDetails {
    private URI type; // 에러 분류 URI (about:blank)
    private String title; // 에러 제목 (Bad Request)
    private int status; // HTTP 상태 코드 (400)
    private String detail; // 상세 에러 메시지
    private URI instance; // 에러 발생 위치 (URI)

    private Map<String, Object> properties = new LinkedHashMap<>();

    public static ProblemDetails forStatus(HttpStatus status) {
        ProblemDetails problem = new ProblemDetails();
        problem.setStatus(status.value());
        problem.setTitle(status.getReasonPhrase());
        return problem;
    }

    public static ProblemDetails forStatusAndDetail(HttpStatus status, String detail) {
        ProblemDetails problem = forStatus(status);
        problem.setDetail(detail);
        return problem;
    }

    @JsonAnySetter
    public void setProperty(String name, Object value) {
        this.properties.put(name, value);
    }

    @JsonAnyGetter
    public Map<String, Object> getProperties() {
        return this.properties;
    }
}
