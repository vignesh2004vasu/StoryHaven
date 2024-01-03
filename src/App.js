
import './Assets/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Users from './Components/Users';
import BookDetails from './Components/BookDetails';
import EditUser from './Components/EditUser';
import Books from './Components/Books';
import EditBook from './Components/EditBook';
import AddBook from './Components/AddBook';
import AdminAuth from './Components/AdminAuth';
import Cart from './Components/Cart';
import Userdash from './Components/Userdash';
import Loader from './Components/Loader';


function App() {
 
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<Users />} />
        <Route path="/admin" element={<AdminAuth />} />
        <Route path="/book/:id" element={<BookDetails/>} />
        <Route path="/edituser/:id" element={<EditUser/>}/>
        <Route path="/editbook/:id" element={<EditBook/>}/>
        <Route path="/book" element={<Books/>}/>
        <Route path="/addbook" element={<AddBook/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/userdash" element={<Userdash/>}/>
        <Route path="/load" element={<Loader/>}/>
        
        
      </Routes>
    </Router> 
   
    </div>
  );
}

export default App;
