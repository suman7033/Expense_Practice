import React,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './addExpense.css';


const AddExpense = () => {
  const [expense, setExpense] = useState({ name: '', amount: '', date: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.name && expense.amount && expense.date && expense.type) {
      toast.success('Expense added successfully!');
      setExpense({ name: '', amount: '', date: '', type: '' });
    } else {
      toast.error('Please fill in all fields.');
    }
  };

  return (
    <div className="expense-form-container">
      <ToastContainer />
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit} className="expense-form">
        <div className="form-group">
          <label>Expense Name</label>
          <input 
            type="text" 
            name="name" 
            value={expense.name} 
            onChange={handleChange} 
            placeholder="Enter expense name" 
          />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input 
            type="number" 
            name="amount" 
            value={expense.amount} 
            onChange={handleChange} 
            placeholder="Enter amount" 
          />
        </div>
        <div className="form-group">
          <label>Type</label>
          <select name="type" value={expense.type} onChange={handleChange}>
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
