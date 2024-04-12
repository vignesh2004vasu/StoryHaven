package com.VIGNESH.logindatabase.repository;


import com.VIGNESH.logindatabase.model.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {

    @Query("SELECT u, ui FROM User u JOIN u.userInfo ui WHERE ui.city = :city")
    Page<Object[]> findUsersAndInfoByCity(@Param("city") String city, Pageable pageable);
}