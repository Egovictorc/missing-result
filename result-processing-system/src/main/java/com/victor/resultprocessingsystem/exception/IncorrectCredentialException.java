package com.victor.resultprocessingsystem.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import lombok.AllArgsConstructor;

//@AllArgsConstructor
@ResponseStatus(value=HttpStatus.BAD_REQUEST)
public class IncorrectCredentialException extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public IncorrectCredentialException(String message) {
		super(message);
	}

}
