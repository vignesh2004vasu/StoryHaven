
import '../Assets/NavHome.css';
import w1 from '../Assets/icons8-book-64.png';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';


export default function NavHome() {
 
  

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
        <ul className="nav-links-custom" id="home1">
        <Link className='homelink' id="homeb" to="/home">
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
      </div>
    </>
  );
}
