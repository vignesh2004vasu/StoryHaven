// Sidebar.js
import '../Assets/Sidbar.css'
import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      
      <button onClick={() => navigate("/addbook")} className="btn">
        Add Book
      </button>
      <button onClick={() => navigate("/user")} className="btn">
        Users
      </button>
      <button onClick={() => navigate("/book")} className="btn">
        Books
      </button>
     
    </div>
  );
};

export default Sidebar;
