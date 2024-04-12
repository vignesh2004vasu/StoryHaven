package com.VIGNESH.logindatabase.repository;

import com.VIGNESH.logindatabase.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {


}
