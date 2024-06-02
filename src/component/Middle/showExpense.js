import React, { useState } from 'react';
import './showExpense.css';
import { useSelector, useDispatch } from 'react-redux';
// import { deleteExpense, updateExpense } from '../../store/expenseStore';

const ShowExpense = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense.expense);

  const [editingExpense, setEditingExpense] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedAmount, setEditedAmount] = useState('');
  const [editedType, setEditedType] = useState('');

  const handleDelete = (id) => {
    // Dispatch delete action
    // dispatch(deleteExpense(id));
    console.log(`Deleting expense with id: ${id}`);
  };

  const handleEdit = (expense) => {
    setEditingExpense(expense.id);
    setEditedName(expense.name);
    setEditedAmount(expense.amount);
    setEditedType(expense.type);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedExpense = {
      id: editingExpense,
      name: editedName,
      amount: editedAmount,
      type: editedType,
    };
    // Dispatch update action
    // dispatch(updateExpense(updatedExpense));
    console.log('Updating expense', updatedExpense);
    setEditingExpense(null);
  };

  return (
    <div className="expense-list-container">
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
