package com.it342.salindato.dto;

public class AuthRequestDTO {
    private String email;
    private String password;

    public AuthRequestDTO() {}

    // DTO for transferring login credentials (email and password) during authentication.
    public AuthRequestDTO(String email, String password) {
        this.email = email;
        this.password = password;
    }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    
}
