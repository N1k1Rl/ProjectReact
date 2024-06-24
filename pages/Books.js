import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import BookDialog from './BookDialog';

const initialBooks = [
    { id: 1, title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', genre: 'Historical Fiction', description: 'A tale of glamour and scandal.', availableCopies: 2 },
    { id: 2, title: 'Hunger Games', author: 'Suzanne Collins', genre: 'Dystopian', description: 'A fight for survival in a dystopian world.', availableCopies: 10 },
    { id: 3, title: 'The Seven Deaths of Evelyn Hardcastle', author: 'Stuart Turton', genre: 'Mystery', description: 'A mystery that spans multiple lives.', availableCopies: 1 },
    { id: 4, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction', description: 'A science fiction epic on a desert planet.', availableCopies: 0 },
];

const Books = ({ onLoan }) => {
    const [books, setBooks] = useState(initialBooks);
    const [selectedBook, setSelectedBook] = useState(null);

    const handleBookClick = (book) => {
        setSelectedBook(book);
    };

    const handleLoan = (bookId) => {
        const updatedBooks = books.map(book => {
            if (book.id === bookId && book.availableCopies > 0) {
                return { ...book, availableCopies: book.availableCopies - 1 };
            }
            return book;
        });
        setBooks(updatedBooks);
        onLoan(books.find(book => book.id === bookId));
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                All Books
            </Typography>
            <Grid container spacing={3}>
                {books.map(book => (
                    <Grid item key={book.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {book.title}
                                </Typography>
                                <Typography variant="subtitle1">
                                    Author: {book.author}
                                </Typography>
                                <Typography variant="body2">
                                    Genre: {book.genre}
                                </Typography>
                                <Typography variant="body2">
                                    Description: {book.description}
                                </Typography>
                                <Typography variant="body2">
                                    Available Copies: {book.availableCopies}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleBookClick(book)}
                                    disabled={book.availableCopies === 0}
                                >
                                    Loan
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {selectedBook && (
                <BookDialog
                    book={selectedBook}
                    onClose={() => setSelectedBook(null)}
                    onLoan={handleLoan}
                />
            )}
        </Container>
    );
};

export default Books;
