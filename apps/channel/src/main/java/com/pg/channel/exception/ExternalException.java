package com.pg.channel.exception;

import lombok.Getter;

@Getter
public class ExternalException extends RuntimeException {
    private final int status;
    private final String url;

    public ExternalException(int status, String message, String url) {
        super(message);
        this.status = status;
        this.url = url;
    }
}
