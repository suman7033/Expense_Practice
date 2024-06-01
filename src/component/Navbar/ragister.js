import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ragister.css';
import { auth,db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setDoc,doc } from 'firebase/firestore';

const Ragister = () => {
  const nameVal = useRef("");
  const emailVal = useRef("");
  const passwordVal = useRef("");
  const Navigate=useNavigate();

  const RagisterHandler = async (e) => {
    e.preventDefault();
    const name = nameVal.current.value;
    const email = emailVal.current.value;
    const password = passwordVal.current.value;


    try {
      await createUserWithEmailAndPassword(auth ,email, password);
      const user = auth.currentUser;
      console.log(user);
      if(user){
        await setDoc(doc(db, "Users", user.uid),{
          email: user.email,
          name: name
        })
      }
      console.log(name);
      console.log("User registered successfully");
      toast.success("Registered successfully",{
         position: "top-center"
      });
      setTimeout(()=>{
        Navigate('/login');
      },1000)

    } catch (error) {
      console.log(error);
      toast.error(error.message,{
        position: "top-center" 
      });
    }
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
