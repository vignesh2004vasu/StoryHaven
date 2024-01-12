package com.VIGNESH.logindatabase.repository;

import com.VIGNESH.logindatabase.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {

}
