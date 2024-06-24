import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';
import './LoginForm.css';
import logo from '../assets/logo.png';

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
});

const LoginForm = ({ onLogin }) => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            onLogin();
            navigate('/home');
        },
    });

    return (
        <Container component="main" maxWidth="xs" className="login-container">
            <img src={logo} alt="Library Logo" className="library-logo" style={{ width: '200px' }} />
            <Typography component="h1" variant="h4" className="login-title">
                Welcome to The Tortured Poets Library
            </Typography>
            <Typography component="p" className="login-subtitle">
                Please log in to your library account
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    margin="normal"
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button color="primary" variant="contained" fullWidth type="submit" className="login-submit-button">
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default LoginForm;
