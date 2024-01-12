package com.VIGNESH.logindatabase.controller;

//import com.VIGNESH.logindatabase.exception.BookNotFoundException;
import com.VIGNESH.logindatabase.exception.BookNotFoundException;
import com.VIGNESH.logindatabase.model.Book;
import com.VIGNESH.logindatabase.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
//@CrossOrigin("https://storyhaven.netlify.app/")
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @PostMapping("/book")
    Book newBook(@RequestBody Book newBook) {
        return bookRepository.save(newBook);
    }

    @GetMapping("/books")
    List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @GetMapping("/book/{id}")
    Book getBookById(@PathVariable Long id) {
        return bookRepository.findById(id)
                .orElseThrow(() -> new BookNotFoundException(id));
    }

    @PutMapping("/book/{id}")
    Book updateBook(@RequestBody Book newBook, @PathVariable Long id) {
        return bookRepository.findById(id)
                .map(book -> {
                    book.setTitle(newBook.getTitle());
                    book.setAuthor(newBook.getAuthor());
                    book.setGenre(newBook.getGenre());
                    book.setPrice(newBook.getPrice());
                    book.setReviews(newBook.getReviews());
                    book.setImageUrl(newBook.getImageUrl());
                    return bookRepository.save(book);
                }).orElseThrow(() -> new BookNotFoundException(id));
    }

    @DeleteMapping("/book/{id}")
    String deleteBook(@PathVariable Long id) {
        if (!bookRepository.existsById(id)) {
            throw new BookNotFoundException(id);
        }
        bookRepository.deleteById(id);
        return "Book with ID " + id + " has been deleted successfully.";
    }
}
