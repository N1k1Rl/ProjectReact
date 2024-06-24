import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import '../Book.css';

const Book = ({ id, title, author, yearPublished, availableCopies }) => {
    return (
        <Card className="book">
            <CardContent className="book-details">
                <Typography className="book-title">{title}</Typography>
                <Typography className="book-details-text">
                    by {author}, Year Published: {yearPublished},
                </Typography>
            </CardContent>
        </Card>
    );
};


export default Book;
