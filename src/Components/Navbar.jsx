
// import '../Assets/NavHome.css';
import w1 from '../Assets/icons8-book-64.png';
import { NavLink,Link } from 'react-router-dom';

import { useState } from 'react';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { setSearchTerm } from './BookSlice';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';



export default function Navbar() {

  const [menuOpen,setMenuOpen] = useState(false);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));


  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = cartItems.length;
 
  

  return (
    
    <nav>
      
      <div className="leftside">
          <div className="logo">
            <img src={w1} alt="logo" />
          </div>
          <h5 className="title-class">StoryHaven</h5>
        </div>

        
    

      <div className='menu' onClick={()=>{
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open":""}>
      <li>
      </li>
      <li>
        <NavLink to="/">
        <HomeIcon fontSize="large"></HomeIcon>
        </NavLink>
      </li>
      <li>
        <NavLink to="/userdash">
        <DashboardIcon fontSize="large"></DashboardIcon>
        </NavLink>
      </li>
      <li>
        <NavLink to="/cart">
        <StyledBadge badgeContent={cartItemCount} color="primary">
                <ShoppingCartIcon fontSize="large"></ShoppingCartIcon>
        </StyledBadge>
        </NavLink>
      </li>
      <li>
        <NavLink to="/admin">
        <SupervisorAccountIcon fontSize="large"></SupervisorAccountIcon>
        </NavLink>
      </li>

      <li>
        <NavLink to="/login">
        <LogoutIcon fontSize="large"></LogoutIcon>
        </NavLink>
      </li>

      </ul>
    </nav>

    
  );
}

{/* <div className="navbar-custom">
<div className='leftside'>
  <div className="logo">
    <img src={w1} alt='logo' />
  </div>
  <h5 className='title-class'>StoryHaven</h5>
</div>
<div className='rightside'>
  <ul className="nav-links-custom" id="home1">
  <Link className='homelink' id="homeb" to="/">
      <HomeIcon fontSize='large'></HomeIcon>
    </Link>
    <Link className='homelink' id="homeb" to="/login">
      <LoginIcon  fontSize='large'></LoginIcon>
    </Link>
    
    <Link className='homelink' to="/register" >
      <AppRegistrationIcon  fontSize='large'></AppRegistrationIcon>
    </Link>
  </ul>
</div>
</div> */}