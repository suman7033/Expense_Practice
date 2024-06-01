import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ragister.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import {loginAction} from '../../store/loginSlice';

const Ragister = () => {
  const nameVal = useRef("");
  const emailVal = useRef("");
  const passwordVal = useRef("");
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const RagisterHandler = async (e) => {
    e.preventDefault();
    const nameValue = nameVal.current.value;
    const emailValue = emailVal.current.value;
    const passwordValue = passwordVal.current.value;

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBCJ7q8tYHYkhAi05SW5W62vYrUYWG1Zss", {
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
        return res.json();
      } else {
        return res.json().then((data) => {
          let errorMessage = 'Authentication failed';
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        });
      }
    })
    .then((data) => {
      console.log("data",data);
      toast.success("Registered successfully", {
        position: "top-center"
      });
      localStorage.setItem("tokenId",data.idToken);
      localStorage.setItem("Name", nameValue);
      dispatch(loginAction.ragister(data));

      setTimeout(() => {
        navigate("/");
      }, 1000);
    })
    .catch((err) => {
      toast.error(err.message, {
        position: "top-center"
      });
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="ragisterDiv">
        <div className="formDiv">
          <h2>Register 😎</h2>
          <form onSubmit={RagisterHandler}>
            <div>
              <label>Name</label><br />
              <input type="text" placeholder="name.." ref={nameVal} />
            </div>
            <div>
              <label>Email</label><br />
              <input type="email" placeholder="email.." ref={emailVal} />
            </div>
            <div>
              <label>Password</label><br />
              <input type="password" placeholder="password.." ref={passwordVal} />
            </div>
            <button type="submit">Register</button><br /><hr /><hr />
          </form>
          <div className="link">
            Already a customer? &nbsp;<Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ragister;
