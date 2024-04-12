package com.VIGNESH.logindatabase.repository;

import com.VIGNESH.logindatabase.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {

    @Query("SELECT b FROM Book b WHERE b.author = :author")
    List<Book> findByAuthor(@Param("author") String author);


    @Query("SELECT b FROM Book b WHERE b.genre = :genre")
    List<Book> findByGenre(@Param("genre") String genre);


    @Query("SELECT b FROM Book b WHERE b.price < :price")
    List<Book> findByPriceLessThan(@Param("price") String price);
}
