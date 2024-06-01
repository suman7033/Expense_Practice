import React, { useRef } from 'react';
import './login.css'; 
import {Link, useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
//import { Navigate } from 'react-router-dom';

const Login = () => {
  const emailVal = useRef("");
  const passwordVal = useRef("");
  const Navigate=useNavigate();

  const LoginHandler=async(e)=>{
    e.preventDefault();
      let email=emailVal.current.value;
      let password=passwordVal.current.value;

      try{
         await signInWithEmailAndPassword(auth, email,password);
         console.log("User logged in successfully");
         toast.success("login sucessfully",{
           position: "top-center"
         })
         setTimeout(()=>{
           Navigate('/');
         },1000)
          
      }catch(error){
         console.log(error.message)
         toast.error(error.message,{
           position: "top-center"
         })
      }
      

  }

  return (
     <>
     <ToastContainer/>
      <div className='loginDiv'>
        <div className='formDiv'>
          <h2>Login🤑</h2>
          <div>
            <lable>Email</lable><br/>
            <input type="email" placeholder='email..' ref={emailVal}/>
          </div>
          <div>
            <lable>Password</lable><br/>
            <input type="password" placeholder='password..' ref={passwordVal}/>
          </div>
             <button onClick={LoginHandler}>Login</button><br/><hr/><hr/>
             <div className='link'>
               New User &nbsp;<Link to="/ragister">Ragister</Link>
             </div>
              
        </div>
      </div>
     </>
  );
};

export default Login;
