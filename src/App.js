import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Navbar from './component/Navbar/navbar';
import Home from './component/Navbar/home';
import About from './component/Navbar/about';
import Profile from "./component/Navbar/profile";
import Login from "./component/Navbar/login";
import Ragister from './component/Navbar/ragister';
import Footer from './component/Footer/footer';
import { useSelector } from 'react-redux';
import { loginAction } from './store/loginSlice';
import AddExpense from './component/Middle/addExpense';

const App = () => {
  const isRagister=useSelector((state)=>state.login.showLogin)
  return (
    <BrowserRouter>
      <Navbar/>
    <div className='btn'>
      <button>AddExpense</button>
    </div>
 
     
    <Routes>
      <Route exact path="/" element={isRagister? <Home/>: <Login/>} />
      <Route exact path="/profile" element={isRagister ? <Profile/>:<Login/>}/>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/about" element={isRagister ? <About/>: <Login/>}/>
      <Route exact path='/ragister' element={<Ragister/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
};

export default App;