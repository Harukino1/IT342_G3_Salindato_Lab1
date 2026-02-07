package com.it342.salindato;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class SalindatoApplication {
    public static void main(String[] args) {
        SpringApplication.run(SalindatoApplication.class, args);
        System.out.println("✅ Spring Boot + MongoDB started!");
    }
}