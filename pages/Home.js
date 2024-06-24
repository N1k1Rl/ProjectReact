import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Welcome to The Tortured Poets Library
            </Typography>
            <Typography variant="body1" gutterBottom>
                Welcome to our library! On this website, you can loan books, explore our collection, and manage your profile.
                Use the navigation bar above to browse through the sections. In the Loans section, you can view and manage your loaned books.
                In the Books section, you can explore all the books available in our library.
                Visit your profile to change your password or log out.
            </Typography>
            <Typography variant="body2" gutterBottom>
                Our library is located at Street Słowackiego 97-300, Piotrków Trybunalski.
            </Typography>
        </Container>
    );
};

export default Home;
