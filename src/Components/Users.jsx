import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import '../Assets/Users.css';
import Sidebar from './Sidebar';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get('http://localhost:8080/users');
      setUsers(result.data.map(user => ({ ...user, showPassword: false })));
    } catch (error) {
      alert('Error loading users');
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/user/${id}`);
      loadUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error deleting user. Please try again.');
    }
  };

  const addClick = () => {
    navigate('/adduser');
  };

  const togglePasswordVisibility = (index) => {
    setUsers(prevUsers =>
      prevUsers.map((user, i) =>
        i === index ? { ...user, showPassword: !user.showPassword } : user
      )
    );
  };

  return (
    <div>
      <Navbar />
      <div className='user-container'>
        <Sidebar addClick={addClick} />
        <div className='py-4'>
          <table className='table border shadow'>
            <thead>
              <tr>
                <th scope='col'>Id</th>
                <th scope='col'>Username</th>
                <th scope='col'>Email</th>
                <th scope='col'>Password</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.showPassword ? (
                      <>
                        <span>{user.password}</span>
                        <VisibilityOffIcon onClick={() => togglePasswordVisibility(index)} />
                      </>
                    ) : (
                      <>
                        <span>*********</span>
                        <VisibilityIcon onClick={() => togglePasswordVisibility(index)} />
                      </>
                    )}
                  </td>
                  <td>
                    <Link
                      className='btn-primary mx-2'
                      to={`/edituser/${user.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className='btn-danger mx-2'
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
