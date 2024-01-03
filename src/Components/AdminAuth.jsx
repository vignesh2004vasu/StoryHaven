import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../Assets/AdminAuth.css'

export default function AdminAuth() {

    const [adminId, setAdminId] = useState('');
    const [adminPassword, setAdminPassword] = useState('');



    const navigate =useNavigate()

    const authenticateAdmin = () => {
        
        if (adminId === 'admin' && adminPassword === 'admin') {
           
            navigate("/user")
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

  return (
    <>
    <Navbar/>
    <div className='AdminAuthContainer'>

    
    <h2>Admin Login</h2>
            <div className='adminform'>

            
                    <input
                        className='admininput'
                        type="text"
                        placeholder="Admin ID"
                        value={adminId}
                        onChange={(e) => setAdminId(e.target.value)}
                    />
                    <input
                        className='admininput'
                        type="password"
                        placeholder="Password"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                    />
                    <button onClick={authenticateAdmin}>Login</button>
                </div>
        </div>
        </>
  )
}
