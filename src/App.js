import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Navbar from './component/Navbar/navbar';
import Home from './component/Navbar/home';
import About from './component/Navbar/about';
import Profile from './component/Navbar/profile';
import Login from './component/Navbar/login';
import Ragister from './component/Navbar/ragister';
import Footer from './component/Footer/footer';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from './store/loginSlice';
import AddExpense from './component/Middle/addExpense';
import ShowExpense from './component/Middle/showExpense';

const App = () => {
  const dispatch = useDispatch();
  const isRagister = useSelector((state) => state.login.showLogin);
  const expenseOpen = useSelector((state) => state.login.showExpense);

  const AddExpenseHandler = () => {
    dispatch(loginAction.showExpenseHandler());
  };

  return (
    <Router>
      <Navbar />
      {isRagister ? (
        <>
          <Link to='/ExpensePage' className='btn'>
            <button onClick={AddExpenseHandler}>
              {expenseOpen ? 'Add Expense' : 'Show Expense'}
            </button>
          </Link>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/ExpensePage" element={expenseOpen ? <ShowExpense /> : <AddExpense />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/ragister" element={<Ragister />} />
        </Routes>
      )}
      <Footer />
    </Router>
  );
};

export default App;
