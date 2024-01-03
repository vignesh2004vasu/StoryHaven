import '../Assets/Login.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import Users from './Users';

export default function Login()
{

const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const { username, password } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
      e.preventDefault();
  
      try {
          
          const response = await axios.get('http://localhost:8080/users');
  
      
          const foundUser = response.data.find(
              (userData) =>
                  userData.username === user.username && userData.password === user.password
                  
          );
  
          if (foundUser) {

            localStorage.setItem('username', user.username);
            localStorage.setItem('password', user.password);
            
              navigate('/home');

          } else {

              alert('Invalid credentials')
          }
      } catch (error) {
          console.error('Error during login:', error);
      }
  };


return(

<>
<Navbar/>
<div className="login-box">
      <p>Login</p>
      <br/>
      <br/>
      <form onSubmit={(e)=>onSubmit(e)}>
        <div className="user-box">
          <input type="text" id="username" 
             name="username"
            
             value={username}
            onChange={onInputChange} />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" id="password" 
             name="password"
              
              value={password}
              onChange={onInputChange} />
          <label>Password</label>
        </div>
        <button  className="button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
      <br/>
      <br/>
      <br/>
      <p><a  className="a2">Don't have an account?</a>
      <Link to='/register'>
      <a>Sign Up</a>
      </Link>
      </p>
      <p><a href="" className="a2">If Admin,</a>
      <Link to='/admin'>
        
      <a className='a2'>Click Here</a>
      </Link> 
      
      </p>
    </div>
</>

        

)



}