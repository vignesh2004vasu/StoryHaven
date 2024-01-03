// NavHome.jsx
import { useState } from 'react';
import '../Assets/NavHome.css';
import w1 from '../Assets/icons8-book-64.png';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useSelector,useDispatch } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { setSearchTerm } from './BookSlice';
import SearchIcon from '@mui/icons-material/Search';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function NavHome() {
  const dispatch = useDispatch();
  const logout = (e) => {
    localStorage.setItem('isLoggedIn', false);
  };

  
  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  


  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = cartItems.length;

  return (
    <>
      <div className="navbar-custom">
      <div className='leftside'>
        <div className="logo">
          <img src={w1} alt='logo' />
        </div>
        <h5 className='title-class'>StoryHaven</h5>
      </div>

      <div className='rightside'>
      {/* <input
            type='text'
            placeholder='Search books'
            onChange={handleSearchChange}
          /> */}
        <div class="InputContainer">
  <input placeholder='Search books' id="input" class="input" name="text" type="text" onChange={handleSearchChange}/>
  
</div>
      
        <ul className="nav-links-custom" id="home1">
          <Link className='homelink' id="homeb" to="/home">
            <HomeIcon fontSize='large'></HomeIcon>
          </Link>
          <Link className='homelink' id="homeb" to="/userdash">
            <DashboardIcon fontSize='large'></DashboardIcon>
          </Link>
          <Link className='homelink' id="homeb" to="/admin">
            <SupervisorAccountIcon fontSize='large'></SupervisorAccountIcon>
          </Link>

          <Link className='homelink' to="/cart">
         
          <StyledBadge badgeContent={cartItemCount} color="primary">
            <ShoppingCartIcon fontSize='large'></ShoppingCartIcon>
            </StyledBadge>
       
          </Link>
          <Link className='homelink' to="/login" onClick={logout}>
            <LogoutIcon fontSize='large'></LogoutIcon>
          </Link>
        </ul>
      </div>
      </div>
    </>
  );
}
