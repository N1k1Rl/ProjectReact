import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <AppBar position="static" style={{ backgroundColor: '#EF498F' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    The Tortured Poets Library
                </Typography>
                <Button color="inherit" component={Link} to="/home">Home</Button>
                <Button color="inherit" component={Link} to="/loans">Loans</Button>
                <Button color="inherit" component={Link} to="/books">Books</Button>
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
