package com.it342.salindato.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class PasswordEncoder {
    
    @Value("${password.encoder.salt:}")
    private String salt;
    
    @Value("${password.encoder.strength:10}")
    private int strength;
    
    private final BCryptPasswordEncoder bcryptEncoder;

    public PasswordEncoder() {
        this.bcryptEncoder = new BCryptPasswordEncoder(strength);
    }

    public String hash(String rawPassword) {
        if (salt != null && !salt.isEmpty()) {
            rawPassword = rawPassword + salt;
        }
        return bcryptEncoder.encode(rawPassword);
    }

    public boolean verify(String rawPassword, String storedHash) {
        if (salt != null && !salt.isEmpty()) {
            rawPassword = rawPassword + salt;
        }
        return bcryptEncoder.matches(rawPassword, storedHash);
    }
}