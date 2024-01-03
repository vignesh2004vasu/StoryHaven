import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import '../Assets/EditBook.css';

function EditBook() {
    let navigate = useNavigate();

    const { id } = useParams();
    const [book, setBook] = useState({
        title: '',
        author: '',
        genre:'',
        price: '',
        reviews: 0,
        imageUrl: '',
    });

    const { title, author,genre, price, reviews, imageUrl } = book;

    const onInputChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadBook();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();

        await axios.put(`http://localhost:8080/book/${id}`, book);
        navigate('/book');
    };

    const loadBook = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/book/${id}`);
            const bookData = result.data;
            setBook((prevBook) => ({ ...prevBook, ...bookData }));
        } catch (error) {
            console.error('Error loading book data:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h2>Edit Book</h2>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    placeholder="Enter Title"
                                    value={title}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="author"
                                    name="author"
                                    placeholder="Enter Author"
                                    value={author}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="genre"
                                    name="genre"
                                    placeholder="genre"
                                    value={genre}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="price"
                                    name="price"
                                    placeholder="Enter Price"
                                    value={price}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="reviews"
                                    name="reviews"
                                    placeholder="Enter Reviews"
                                    value={reviews}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="imageUrl"
                                    name="imageUrl"
                                    placeholder="Enter Image URL"
                                    value={imageUrl}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditBook;
