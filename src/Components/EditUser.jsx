import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import '../Assets/EditUser.css'

function EditUser() {
    let navigate = useNavigate();

    const { id } = useParams();
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    });

    const { username, email, password } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();

        await axios.put(`http://localhost:8080/user/${id}`, user);
        navigate('/user');
    };

    const loadUser = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/user/${id}`);
            const userData = result.data;
            setUser((prevUser) => ({ ...prevUser, ...userData }));
        } catch (error) {
            console.error('Error loading user data:', error);
        }
    };

    return (
        <>
        <Navbar />
        <div className="edit-user-container">
            <div className="container mt-4">
                        <h2 className='ed'>Edit User</h2>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form onSubmit={(e) => onSubmit(e)} className="edit-user-form" >
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    placeholder="Enter Username"
                                    value={username}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={password}
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
        </>
    );
}

export default EditUser;
