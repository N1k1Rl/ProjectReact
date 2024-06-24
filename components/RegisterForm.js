import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';
import './RegisterForm.css';
import logo from '../assets/logo.png';

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
});

const RegisterForm = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Implement registration logic here
            // After successful registration, you can navigate to the login page
            navigate('/login');
        },
    });

    return (
        <Container component="main" maxWidth="xs" className="register-container">
            <img src={logo} alt="Library Logo" className="library-logo" style={{ width: '200px' }} />
            <Typography component="h1" variant="h4" className="register-title">
                Register for The Tortured Poets Library
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
                <TextField
                    fullWidth
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                />
                <Button color="primary" variant="contained" fullWidth type="submit" className="register-submit-button">
                    Create Account
                </Button>
            </form>
            <Typography className="login-link">
                Already have an account? <span onClick={() => navigate('/login')} className="clickable-text">Log in</span>
            </Typography>
        </Container>
    );
};

export default RegisterForm;
