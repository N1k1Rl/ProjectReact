import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/Navbar';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Books from './pages/Books';
import Loans from './pages/Loans';
import './App.css';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loans, setLoans] = useState([]);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    const handleLoan = (book) => {
        const newLoan = {
            id: loans.length + 1,
            bookName: book.title,
            returnDate: new Date().toISOString().split('T')[0],
        };
        setLoans([...loans, newLoan]);
    };

    const handleReturn = (loanId) => {
        setLoans(loans.filter(loan => loan.id !== loanId));
    };

    const handleExtend = (loanId) => {
        const updatedLoans = loans.map(loan => {
            if (loan.id === loanId) {
                const newDate = new Date(loan.returnDate);
                newDate.setDate(newDate.getDate() + 7);
                return { ...loan, returnDate: newDate.toISOString().split('T')[0] };
            }
            return loan;
        });
        setLoans(updatedLoans);
    };

    return (
        <Router>
            {isAuthenticated && <NavBar />}
            <Routes>
                <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <LoginForm onLogin={handleLogin} />} />
                <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/home" element={isAuthenticated ? <div>Home Page</div> : <Navigate to="/login" />} />
                <Route path="/books" element={isAuthenticated ? <Books onLoan={handleLoan} /> : <Navigate to="/login" />} />
                <Route path="/loans" element={isAuthenticated ? <Loans loans={loans} onReturn={handleReturn} onExtend={handleExtend} /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;
