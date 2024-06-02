import React,{useRef, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './addExpense.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { expenseAction } from '../../store/expenseStore';


const AddExpense = () => {
  const Navigate=useNavigate();
  const ExpenseNameVal=useRef();
  const AmountVal=useRef();
  const typeVal=useRef();
  const dispatch=useDispatch();

   const BackHandler=()=>{
     Navigate("/")
   }

  const handleSubmit =async (e) => {
    e.preventDefault();
    const ExpenseData={
       name: ExpenseNameVal.current.value,
       amount: AmountVal.current.value,
       type: typeVal.current.value
    }
    console.log("ExpenseData",ExpenseData)
       try{
          const response=await fetch("https://expensepractice-8069b-default-rtdb.firebaseio.com/user.json",{
             method: 'POST',
             body: JSON.stringify(ExpenseData),
             headers:{
              'Content-Type': 'application/json',
             },
          });
          if(!response.ok){
            throw new Error('Something went wrong');
          }
          const data=await response.json()
          const NewData={...ExpenseData, id: data.name}
          
          toast.success("Adding successfully", {
            position: "top-center"
          });
          console.log("afterData",NewData);
          dispatch(expenseAction.addExpense(NewData));
       }catch(error){
         console.log(error);
         toast.error('Something Error');
       }
  };

  return (
    <div className="expense-form-container">
      <ToastContainer />
      <button className='btn1' onClick={BackHandler}>Back</button>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit} className="expense-form">
        <div className="form-group">
          <label>Expense Name</label>
          <input 
            type="text" 
            name="name" 
            ref={ExpenseNameVal}
            placeholder="Enter expense name" 
          />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input 
            type="number" 
            name="amount" 
            ref={AmountVal}
            placeholder="Enter amount" 
          />
        </div>
        <div className="form-group">
          <label>Type</label>
          <select name="type" ref={typeVal}>
            <option value="">Select type</option>
            <option value="domestic">Domestic</option>
            <option value="entertainment">Entertainment</option>
            <option value="grocery">Grocery</option>
            <option value="utilities">Utilities</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Add Expense</button><br /><hr /><hr />
      </form>
    </div>
  );
};

export default AddExpense
