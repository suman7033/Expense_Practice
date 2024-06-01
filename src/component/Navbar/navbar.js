import React from 'react';
import "./navbar.css";
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAction } from '../../store/loginSlice';

const Navbar = () => {
  const dispatch=useDispatch()
  const isRagister=useSelector((state)=>state.login.showLogin)

   const LogoutHandler=()=>{
    if(isRagister){
      toast.info("you are logout", {
        position: "top-center"
      });
        dispatch(loginAction.logout())
    }else{
      toast.info("already logout", {
        position: "top-center"
      });
    }
     
   }

    return (
        <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img src="https://t4.ftcdn.net/jpg/04/95/57/95/360_F_495579534_5cKHEXiMXBVjcoOATCPH5gajgPcyZk8o.jpg" alt="Logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-bell"></i>
        </div>
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li className="logout" onClick={LogoutHandler}>
            Logout
          </li>
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;
