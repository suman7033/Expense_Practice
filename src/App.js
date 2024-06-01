import React from 'react';
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
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/about" element={<About/>}/>
      <Route exact path='/ragister' element={<Ragister/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
};

export default App;