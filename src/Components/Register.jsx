import '../Assets/Register.css';
import Navbar from './Navbar';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const { username, email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="login-box">
        <p>Register</p>
        <br/>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="user-box">
            <input
              type="text"
              value={username}
              name="username"
              id="username"
              onChange={(e) => onInputChange(e)}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              value={email}
              name="email"
              id="email"
              onChange={(e) => onInputChange(e)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              value={password}
              name="password"
              id="password"
              onChange={(e) => onInputChange(e)}
            />
            <label htmlFor="password">Password</label>
          </div>
          
          <button type="submit" className='button'>Submit</button>
        </form>
      </div>
    </>
  );
}
