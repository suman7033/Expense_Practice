import React, { useState } from 'react';
import './showExpense.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { expenseAction } from '../../store/expenseStore';

const ShowExpense = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense.expense);

  const [editingExpense, setEditingExpense] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedAmount, setEditedAmount] = useState('');
  const [editedType, setEditedType] = useState('');

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://expensepractice-8069b-default-rtdb.firebaseio.com/user/${id}.json`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error("Failed to delete expense.");
      }
      dispatch(expenseAction.deleteExpense(id));
      toast.success('Expense deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete expense.');
      console.log(error);
    }
  };

  const handleEdit = (expense) => {
    setEditingExpense(expense.id);
    setEditedName(expense.name);
    setEditedAmount(expense.amount);
    setEditedType(expense.type);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedExpense = {
      name: editedName,
      amount: editedAmount,
      type: editedType,
    };
    try {
      const response = await fetch(`https://expensepractice-8069b-default-rtdb.firebaseio.com/user/${editingExpense}.json`, {
        method: 'PATCH',
        body: JSON.stringify(updatedExpense),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error("Failed to update expense.");
      }
      const updatedExpenseData = { id: editingExpense, ...updatedExpense };
      dispatch(expenseAction.updateExpense(updatedExpenseData));
      toast.success('Expense updated successfully!');
      setEditingExpense(null);
    } catch (error) {
      toast.error('Failed to update expense.');
      console.log(error);
    }
  };

  return (
    <div className="expense-list-container">
      <ToastContainer />
      <h1>Show Expenses</h1>
      {expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        <ul className="expense-list">
          {expenses.map((expense) => (
            <li key={expense.id} className="expense-item">
              {editingExpense === expense.id ? (
                <form onSubmit={handleUpdate} className="edit-form">
                  <div className="form-group">
                    <label>Expense Name</label>
                    <input
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Amount</label>
                    <input
                      type="number"
                      value={editedAmount}
                      onChange={(e) => setEditedAmount(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Type</label>
                    <select
                      value={editedType}
                      onChange={(e) => setEditedType(e.target.value)}
                    >
                      <option value="">Select type</option>
                      <option value="domestic">Domestic</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="grocery">Grocery</option>
                      <option value="utilities">Utilities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button type="submit" className="save-btn">Save</button>
                  <button type="button" className="cancel-btn" onClick={() => setEditingExpense(null)}>Cancel</button>
                </form>
              ) : (
                <>
                  <div className="expense-details">
                    <span className="expense-name">{expense.name}</span>
                    <span className="expense-amount">${expense.amount}</span>
                    <span className="expense-type">{expense.type}</span>
                  </div>
                  <div className="expense-actions">
                    <button onClick={() => handleEdit(expense)} className="edit-btn">Edit</button>
                    <button onClick={() => handleDelete(expense.id)} className="delete-btn">Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShowExpense;
