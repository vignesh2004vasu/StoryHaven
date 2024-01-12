package com.VIGNESH.logindatabase.repository;

import com.VIGNESH.logindatabase.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
