import React, { useRef } from 'react';
import './login.css'; 
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../store/loginSlice';

const Login = () => {
  const emailVal = useRef("");
  const passwordVal = useRef("");
  const Navigate = useNavigate();
  const dispatch=useDispatch();

  const LoginHandler = async (e) => {
    e.preventDefault();
    let emailValue = emailVal.current.value;
    let passwordValue = passwordVal.current.value;

    // Commented-out Firebase SDK direct usage
    // try {
    //   await signInWithEmailAndPassword(auth, emailValue, passwordValue);
    //   console.log("User logged in successfully");
    //   toast.success("Logged in successfully", {
    //     position: "top-center"
    //   });
    //   setTimeout(() => {
    //     Navigate('/');
    //   }, 1000);
    // } catch (error) {
    //   console.log(error.message);
    //   toast.error(error.message, {
    //     position: "top-center"
    //   });
    // }

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBCJ7q8tYHYkhAi05SW5W62vYrUYWG1Zss", {
      method: 'POST',
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": 'application/json'
      }
    })
      .then((res) => {
        if (res.ok) {
          console.log("Successful");
          return res.json();
        } else {
          return res.json()
            .then((data) => {
              let errorMessage = 'Authentication failed';
              throw new Error(errorMessage);
            });
        }
      })
      .then((data) => {
        toast.success("Logged in successfully", {
          position: "top-center"
        });
        console.log(data);
        setTimeout(() => {
          Navigate("/");
          dispatch(loginAction.login(data));
        }, 2000);
      })
      .catch(err => {
        toast.error(err.message, {
          position: "top-center"
        });
      });
  }

  return (
    <>
      <ToastContainer />
      <div className='loginDiv'>
        <div className='formDiv'>
          <h2>Login 🤑</h2>
          <div>
            <label>Email</label><br />
            <input type="email" placeholder='email..' ref={emailVal} />
          </div>
          <div>
            <label>Password</label><br />
            <input type="password" placeholder='password..' ref={passwordVal} />
          </div>
          <button onClick={LoginHandler}>Login</button><br /><hr /><hr />
          <div className='link'>
            New User? &nbsp;<Link to="/ragister">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
