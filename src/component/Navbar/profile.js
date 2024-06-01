import React, { useEffect, useState } from 'react';
import './profile.css';
import {doc, getDoc} from "firebase/firestore";
import { auth,db } from '../firebase';
import {toast} from "react-toastify";


const Profile = () => {
  const [data,setData]=useState([]);
  
  const fetchUserData=async()=>{
    auth.onAuthStateChanged(async (user)=>{
      console.log(user);
      const docRef=doc(db, "Users",user.uid)
      const docSnap=await getDoc(docRef)

      if(docSnap.exists()){
        setData([docSnap.data()]);
        console.log(docSnap.data);
      }else{
        console.log("user is not logdin");
      }
    })
  }
  useEffect(()=>{
    fetchUserData()
  },[])
  return (
    <>
    <div className="profile-card">
      <div className="profile-header">
        <img src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png" alt="Profile" className="profile-image" />
        <h1 className="profile-name">{data.map((e)=>(
          <div>{e.name}</div>
        ))}</h1>
        <p className="profile-title">CEO & Founder, Example</p>
        <p className="profile-university">Harvard University</p>
      </div>
      <div className="profile-social-icons">
        <a href="#" className="social-icon"><i className="fa fa-dribbble"></i></a>
        <a href="#" className="social-icon"><i className="fa fa-twitter"></i></a>
        <a href="#" className="social-icon"><i className="fa fa-linkedin"></i></a>
        <a href="#" className="social-icon"><i className="fa fa-facebook"></i></a>
      </div>
      <button className="contact-button">Contact</button>
    </div>
    <div>
       
    </div>
    </>
  );
};

export default Profile;
