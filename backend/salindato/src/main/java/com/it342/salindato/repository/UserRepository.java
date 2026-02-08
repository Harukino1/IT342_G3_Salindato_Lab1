package com.it342.salindato.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.it342.salindato.model.User;

// Repository interface for performing CRUD operations and custom queries on User documents (Document-based because of MongoDB).
public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByEmail(String email);
    Optional<User> findByToken(String token);
}